import { columns } from "@/components/data-table/columns"
import { DataTable } from "@/components/data-table/data-table"
import { sampleData } from "@/lib/sample-data"
import { FiltersSidebar } from "@/components/layout/filters-sidebar"
import { PageLayout } from "@/components/layout/page-layout"
import { HeroSection } from "@/components/layout/hero-section"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/i18n/translations"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

const SIDEBAR_STORAGE_KEY = "diskprices-sidebar-visible"

export function HomePage() {
  const lang = useLanguage()
  const t = translations[lang]
  const tableRef = useRef<any>(null)
  const [showSidebar, setShowSidebar] = useState(() => {
    const stored = localStorage.getItem(SIDEBAR_STORAGE_KEY)
    return stored ? JSON.parse(stored) : false
  })

  const toggleSidebar = () => {
    const newValue = !showSidebar
    setShowSidebar(newValue)
    localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(newValue))
  }

  return (
    <PageLayout>
        <HeroSection t={t.hero} />

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 mt-8">
          {/* Desktop Filters */}
          <div className={cn("hidden transition-all duration-300", showSidebar ? "lg:block" : "lg:hidden")}>
            <FiltersSidebar t={t.filters} table={tableRef.current} />
          </div>

          {/* Main Content */}
          <div className={cn(
            "space-y-4 min-w-0",
            !showSidebar && "lg:col-span-2"
          )}>
            <DataTable 
              columns={columns} 
              data={sampleData} 
              t={t.table}
              ref={tableRef}
            />
          </div>
        </div>
    </PageLayout>
  )
}
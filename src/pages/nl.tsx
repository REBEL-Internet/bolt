import { columns } from "@/components/data-table/columns"
import { DataTable } from "@/components/data-table/data-table"
import { sampleData } from "@/lib/sample-data"
import { FiltersSidebar } from "@/components/layout/filters-sidebar"
import { PageLayout } from "@/components/layout/page-layout"
import { DutchHeroSection } from "@/components/layout/hero-section-nl"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function DutchHomePage() {
  const tableRef = useRef<any>(null)
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <PageLayout>
      <DutchHeroSection />
      <div className="grid lg:grid-cols-[280px_1fr] gap-6 mt-8">
        {/* Desktop Filters */}
        <div className={cn("hidden transition-all duration-300", showSidebar ? "lg:block" : "lg:hidden")}>
          <FiltersSidebar table={tableRef.current} />
        </div>

        {/* Main Content */}
        <div className={cn(
          "space-y-4 min-w-0",
          !showSidebar && "lg:col-span-2"
        )}>
          <DataTable 
            columns={columns} 
            data={sampleData} 
            ref={tableRef}
          />
        </div>
      </div>
    </PageLayout>
  )
}
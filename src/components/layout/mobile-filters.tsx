import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { FiltersSidebar } from "./filters-sidebar"

export function MobileFilters() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full flex items-center justify-center">
          <Menu className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[400px] p-0">
        <div className="px-6 pt-6">
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        <div className="overflow-y-auto h-full py-6">
          <FiltersSidebar />
        </div>
      </SheetContent>
    </Sheet>
  )
}
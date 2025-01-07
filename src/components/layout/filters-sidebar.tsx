import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MarketplaceFilter } from "@/components/filters/marketplace-filter"
import { BrandFilter } from "@/components/filters/brand-filter"
import { RangeFilter } from "@/components/filters/range-filter"
import { StorageTypeFilter } from "@/components/filters/storage-type-filter"
import { InterfaceFilter } from "@/components/filters/interface-filter"
import { SocketFilter } from "@/components/filters/socket-filter"

interface FiltersSidebarProps {
  table: any
}

export function FiltersSidebar({ table }: FiltersSidebarProps) {
  return (
    <Card className="p-6 space-y-6 bg-card max-h-fit">
      <BrandFilter table={table} />
      <StorageTypeFilter table={table} />
      <InterfaceFilter table={table} />
      <SocketFilter table={table} />
      <Separator className="my-6" />
      <RangeFilter
        name="capacity"
        title="Capacity"
        min={0}
        max={20}
        step={0.5}
        unit="TB"
      />
      <Separator className="my-6" />
      <RangeFilter
        name="price"
        title="Price"
        min={0}
        max={2000}
        step={50}
        unit="$"
      />
    </Card>
  )
}
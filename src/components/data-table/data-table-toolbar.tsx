import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { DataTableViewOptions } from "./data-table-view-options"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"

const marketplaceOptions = [
  { label: "Amazon", value: "Amazon" },
  { label: "Newegg", value: "Newegg" },
  { label: "Best Buy", value: "Best Buy" },
]

const brandOptions = [
  { label: "Samsung", value: "Samsung" },
  { label: "Western Digital", value: "Western Digital" },
  { label: "Seagate", value: "Seagate" },
  { label: "Acer Predator", value: "Acer Predator" },
]

const priceRanges = [
  { label: "Under $99", value: [0, 99] },
  { label: "Under $129", value: [0, 129] },
  { label: "Under $149", value: [0, 149] },
]

const capacityRanges = [
  { label: "Under 1TB", value: [0, 1] },
  { label: "1-2TB", value: [1, 2] },
  { label: "2-4TB", value: [2, 4] },
  { label: "4TB+", value: [4, 999] },
]

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter models..."
          value={(table.getColumn("model")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("model")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("vendor") && (
          <DataTableFacetedFilter
            column={table.getColumn("vendor")}
            title="Marketplace"
            options={marketplaceOptions}
          />
        )}
        {table.getColumn("brand") && (
          <DataTableFacetedFilter
            column={table.getColumn("brand")}
            title="Brand"
            options={brandOptions}
          />
        )}
        {table.getColumn("price") && (
          <div className="relative inline-block">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 bg-gray-50 hover:bg-gray-100 text-gray-700">
                  Price Range
                  {table.getColumn("price")?.getFilterValue() && (
                    <Badge variant="secondary" className="ml-2">Active</Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0 bg-white" align="start">
                <div className="p-2">
                  {priceRanges.map((range) => (
                    <Button
                      key={range.label}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => {
                        table.getColumn("price")?.setFilterValue(range.value);
                      }}
                    >
                      {range.label}
                    </Button>
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-muted-foreground"
                    onClick={() => table.getColumn("price")?.setFilterValue(undefined)}
                  >
                    Clear Filter
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        )}
        {table.getColumn("capacity") && (
          <div className="relative inline-block">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 bg-gray-50 hover:bg-gray-100 text-gray-700">
                  Capacity
                  {table.getColumn("capacity")?.getFilterValue() && (
                    <Badge variant="secondary" className="ml-2">Active</Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0 bg-white" align="start">
                <div className="p-2">
                  {capacityRanges.map((range) => (
                    <Button
                      key={range.label}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => {
                        table.getColumn("capacity")?.setFilterValue(range.value);
                      }}
                    >
                      {range.label}
                    </Button>
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-muted-foreground"
                    onClick={() => table.getColumn("capacity")?.setFilterValue(undefined)}
                  >
                    Clear Filter
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        )}
        {table.getColumn("type") && (
          <DataTableFacetedFilter
            column={table.getColumn("type")}
            title="SSD Type"
            options={[
              { label: "NVMe", value: "NVMe" },
              { label: "SATA", value: "SATA" },
            ]}
          />
        )}
        {table.getColumn("interface") && (
          <DataTableFacetedFilter
            column={table.getColumn("interface")}
            title="Interface"
            options={[
              { label: "SATA", value: "SATA" },
              { label: "NVMe", value: "NVMe" },
              { label: "USB", value: "USB" },
            ]}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
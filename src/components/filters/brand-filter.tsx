import { FilterSection } from "./filter-section"
import { ToggleGroup } from "./toggle-group"

const brandOptions = [
  { id: "Samsung", label: "Samsung" },
  { id: "Western Digital", label: "Western Digital" },
  { id: "Seagate", label: "Seagate" },
  { id: "Acer Predator", label: "Acer" },
  { id: "Others", label: "Others" },
]

interface BrandFilterProps {
  table: any
}

export function BrandFilter({ table }: BrandFilterProps) {
  return (
    <FilterSection title="Brand">
      <ToggleGroup 
        options={brandOptions} 
        column="brand"
        table={table}
      />
    </FilterSection>
  )
}
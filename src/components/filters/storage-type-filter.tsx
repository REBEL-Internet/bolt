import { FilterSection } from "./filter-section"
import { ToggleGroup } from "./toggle-group"

const storageOptions = [
  { id: "SSD", label: "SSD" },
  { id: "HDD", label: "HDD" },
]

interface StorageTypeFilterProps {
  table: any
}

export function StorageTypeFilter({ table }: StorageTypeFilterProps) {
  return (
    <FilterSection title="Storage Type">
      <ToggleGroup 
        options={storageOptions}
        column="type"
        table={table}
      />
    </FilterSection>
  )
}
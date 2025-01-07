import { FilterSection } from "./filter-section"
import { ToggleGroup } from "./toggle-group"

const interfaceOptions = [
  { id: "SATA", label: "SATA" },
  { id: "NVMe", label: "NVMe" },
  { id: "USB", label: "USB" },
]

interface InterfaceFilterProps {
  table: any
}

export function InterfaceFilter({ table }: InterfaceFilterProps) {
  return (
    <FilterSection title="Interface">
      <ToggleGroup 
        options={interfaceOptions}
        column="interface"
        table={table}
      />
    </FilterSection>
  )
}
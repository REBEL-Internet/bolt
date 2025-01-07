import { FilterSection } from "./filter-section"
import { ToggleGroup } from "./toggle-group"

const socketOptions = [
  { id: "2.5\"", label: '2.5"' },
  { id: "3.5\"", label: '3.5"' },
  { id: "M.2", label: "M.2" },
  { id: "External", label: "External" },
]

interface SocketFilterProps {
  table: any
}

export function SocketFilter({ table }: SocketFilterProps) {
  return (
    <FilterSection title="Socket">
      <ToggleGroup 
        options={socketOptions}
        column="socket"
        table={table}
      />
    </FilterSection>
  )
}
import { Toggle } from "@/components/ui/toggle"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface ToggleOption {
  id: string
  label: string
}

interface ToggleGroupProps {
  options: ToggleOption[]
  column?: string
  table?: any
}

export function ToggleGroup({ options, column, table }: ToggleGroupProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    const newItems = selectedItems.includes(id)
      ? selectedItems.filter(item => item !== id)
      : [...selectedItems, id]
    
    setSelectedItems(newItems)
    if (table && column) {
      table.getColumn(column)?.setFilterValue(newItems.length ? newItems : undefined)
    }
  }

  // Clear filters when component unmounts
  useEffect(() => {
    if (table && column) {
      return () => {
        table.getColumn(column)?.setFilterValue(undefined)
      }
    }
  }, [table, column])

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <Toggle
          key={option.id}
          pressed={selectedItems.includes(option.id)}
          onPressedChange={() => toggleItem(option.id)}
          className={cn(
            "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
            "data-[state=on]:hover:bg-primary/90"
          )}
        >
          {option.label}
        </Toggle>
      ))}
    </div>
  )
}
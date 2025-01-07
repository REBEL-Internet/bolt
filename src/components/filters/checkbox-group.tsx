import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { commonStyles } from "@/lib/styles"
import { useState } from "react"
import { Check } from "lucide-react"

interface CheckboxOption {
  id: string
  label: string
}

interface CheckboxGroupProps {
  options: CheckboxOption[]
}

export function CheckboxGroup({ options }: CheckboxGroupProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="space-y-2">
      {options.map((option) => (
        <div 
          key={option.id} 
          className={cn(
            "flex items-center space-x-3 rounded-md p-2",
            commonStyles.transition,
            "hover:bg-gray-100",
            selectedItems.includes(option.id) && "bg-gray-50"
          )}
        >
          <div className="relative flex items-center">
            <Checkbox 
              id={option.id}
              checked={selectedItems.includes(option.id)}
              onCheckedChange={() => toggleItem(option.id)}
              className={cn(
                "h-5 w-5 rounded-sm border-2",
                "data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500",
                "focus-visible:ring-green-500"
              )}
            />
            {selectedItems.includes(option.id) && (
              <Check className="h-3 w-3 absolute left-1 top-1 text-white pointer-events-none" />
            )}
          </div>
          <Label 
            htmlFor={option.id} 
            className={cn(
              "text-sm font-medium leading-none cursor-pointer select-none",
              "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              selectedItems.includes(option.id) && "text-green-700"
            )}
          >
            {option.label}
          </Label>
        </div>
      ))}
    </div>
  )
}
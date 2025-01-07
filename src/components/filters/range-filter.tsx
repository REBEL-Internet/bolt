import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { FilterSection } from "./filter-section"
import { cn } from "@/lib/utils"
import { commonStyles } from "@/lib/styles"

interface RangeFilterProps {
  name: string
  title: string
  min: number
  max: number
  step: number
  unit?: string
}

export function RangeFilter({ title, min, max, step, unit }: RangeFilterProps) {
  const [range, setRange] = useState([min, max])

  return (
    <FilterSection title={title}>
      <div className="space-y-4">
        <Slider
          min={min}
          max={max}
          step={step}
          value={range}
          onValueChange={setRange}
          className="my-6"
        />
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Input
              type="number"
              value={range[0]}
              onChange={(e) => setRange([Number(e.target.value), range[1]])}
              min={min}
              max={range[1]}
              step={step}
              className={cn(
                "h-9",
                commonStyles.interactiveBackground,
                commonStyles.interactiveText
              )}
            />
          </div>
          <span className="text-muted-foreground">to</span>
          <div className="flex-1">
            <Input
              type="number"
              value={range[1]}
              onChange={(e) => setRange([range[0], Number(e.target.value)])}
              min={range[0]}
              max={max}
              step={step}
              className={cn(
                "h-9",
                commonStyles.interactiveBackground,
                commonStyles.interactiveText
              )}
            />
          </div>
          {unit && <span className="text-muted-foreground text-sm">{unit}</span>}
        </div>
      </div>
    </FilterSection>
  )
}
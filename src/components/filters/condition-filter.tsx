import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function ConditionFilter() {
  return (
    <RadioGroup defaultValue="new">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="new" id="new" />
        <Label htmlFor="new">New</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="used" id="used" />
        <Label htmlFor="used">Used</Label>
      </div>
    </RadioGroup>
  )
}
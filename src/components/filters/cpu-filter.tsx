import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CpuFilter() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="intel" />
        <Label htmlFor="intel">Intel</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="amd" />
        <Label htmlFor="amd">AMD</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="others" />
        <Label htmlFor="others">Others</Label>
      </div>
    </div>
  )
}
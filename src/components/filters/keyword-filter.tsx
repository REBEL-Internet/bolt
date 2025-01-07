import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function KeywordFilter() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="include">Include</Label>
        <Input id="include" placeholder="Keywords to include..." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="exclude">Exclude</Label>
        <Input id="exclude" placeholder="Keywords to exclude..." />
      </div>
    </div>
  )
}
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function ExtrasFilter() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="os" />
        <Label htmlFor="os">OS Included</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="shipping" />
        <Label htmlFor="shipping">Free Shipping</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="wifi" />
        <Label htmlFor="wifi">Wifi</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="bluetooth" />
        <Label htmlFor="bluetooth">Bluetooth</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="hdmi" />
        <Label htmlFor="hdmi">HDMI</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="displayport" />
        <Label htmlFor="displayport">DisplayPort</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="fanless" />
        <Label htmlFor="fanless">Fanless</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="ethernet" />
        <Label htmlFor="ethernet">Ethernet</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="usbc" />
        <Label htmlFor="usbc">USB-C</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="gpu" />
        <Label htmlFor="gpu">Dedicated GPU</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="optical" />
        <Label htmlFor="optical">Optical Drive</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="vga" />
        <Label htmlFor="vga">VGA</Label>
      </div>
    </div>
  )
}
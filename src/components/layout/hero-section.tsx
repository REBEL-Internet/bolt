import { CheckCircle2, User, Terminal, Monitor } from "lucide-react"
import { USPBadge } from "./usp-badge"
import { Link } from "react-router-dom"

export function HeroSection() {
  const lastUpdate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="py-8 border-b">
      <div className="mb-8 text-center">
        <h2 className="text-lg font-medium text-muted-foreground mb-4">As found on</h2>
        <div className="flex items-center justify-center gap-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded bg-orange-100 flex items-center justify-center">
              <Terminal className="w-6 h-6 text-orange-600" />
            </div>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded bg-blue-100 flex items-center justify-center">
              <Monitor className="w-6 h-6 text-blue-600" />
            </div>
          </a>
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to my SSD price tracking tool! I built this myself to help you find the best deals 
            on solid state drives by comparing prices across major retailers. I track thousands of NVMe and 
            SATA SSDs daily to bring you the most competitive prices, detailed specifications, and reliable 
            performance scores. This tool is free and includes SSDs from all popular stores online.
            In case of issues, send me a message!
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <User className="w-8 h-8 text-gray-500" />
            </div>
            <div>
              <p className="font-semibold">Bram</p>
              <p className="text-sm text-muted-foreground">
                <Link to="/contact" className="hover:underline">Contact me</Link>
              </p>
            </div>
          </div>
        </div>
          
        <div className="flex flex-wrap gap-4">
          <USPBadge icon={CheckCircle2}>Since 2024</USPBadge>
          <USPBadge icon={CheckCircle2}>Last update: {lastUpdate}</USPBadge>
          <USPBadge icon={CheckCircle2}>100% Unbiased Reviews</USPBadge>
          <USPBadge icon={CheckCircle2}>Trusted by 500 businesses & free zones</USPBadge>
        </div>
      </div>
    </div>
  )
}
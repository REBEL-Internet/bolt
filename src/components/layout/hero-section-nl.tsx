import { CheckCircle2, User, Terminal, Monitor } from "lucide-react"
import { USPBadge } from "./usp-badge"
import { Link } from "react-router-dom"

export function DutchHeroSection() {
  const lastUpdate = new Date().toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="py-8 border-b">
      <div className="mb-8 text-center">
        <h2 className="text-lg font-medium text-muted-foreground mb-4">Te vinden op</h2>
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
            Welkom bij mijn vergelijkingstool voor schijfprijzen! Ik heb dit zelf gebouwd om je te helpen 
            de beste deals voor opslagapparaten te vinden door prijzen van grote retailers te vergelijken. 
            Ik volg dagelijks duizenden SSD's en HDD's om je de meest competitieve prijzen, gedetailleerde 
            specificaties en betrouwbare prestatiescores te bieden. Deze tool is gratis en bevat alle HDD's 
            van populaire online winkels. Bij problemen kun je me een bericht sturen!
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <User className="w-8 h-8 text-gray-500" />
            </div>
            <div>
              <p className="font-semibold">Bram</p>
              <p className="text-sm text-muted-foreground">
                <Link to="/contact" className="hover:underline">Neem contact op</Link>
              </p>
            </div>
          </div>
        </div>
          
        <div className="flex flex-wrap gap-4">
          <USPBadge icon={CheckCircle2}>Sinds 2024</USPBadge>
          <USPBadge icon={CheckCircle2}>Laatste update: {lastUpdate}</USPBadge>
          <USPBadge icon={CheckCircle2}>100% Onafhankelijke Reviews</USPBadge>
          <USPBadge icon={CheckCircle2}>Vertrouwd door 500 bedrijven</USPBadge>
        </div>
      </div>
    </div>
  )
}
import { Link, useLocation } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700">
          <Globe className="h-4 w-4" />
          {currentPath.startsWith("/nl") ? "🇳🇱 Nederlands" : "🇬🇧 English"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <DropdownMenuItem asChild>
          <Link to="/" className="flex items-center gap-2">
            🇬🇧 English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/nl" className="flex items-center gap-2">
            🇳🇱 Nederlands
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
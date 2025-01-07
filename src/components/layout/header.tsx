import { HardDrive } from "lucide-react"
import { Link } from "react-router-dom"
import { LanguageSwitcher } from "./language-switcher"

export function Header() {
  return (
    <div className="mb-8 space-y-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity text-black">
          <HardDrive className="h-8 w-8" />
          <h1 className="text-3xl sm:text-4xl font-bold">SSD Price Tracker by Bram</h1>
        </Link>
        <LanguageSwitcher />
      </div>
    </div>
  )
}
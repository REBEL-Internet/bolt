import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" }
]

interface LanguageSelectorProps {
  currentLang: string
}

export function LanguageSelector({ currentLang }: LanguageSelectorProps) {
  const navigate = useNavigate()

  const handleLanguageChange = (langCode: string) => {
    const path = langCode === "en" ? "/" : `/${langCode}`
    navigate(path)
  }

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          onClick={() => handleLanguageChange(lang.code)}
          className={cn(
            "flex items-center gap-2",
            currentLang === lang.code && "bg-muted"
          )}
        >
          <span className="text-lg">{lang.flag}</span>
          <span className="text-sm font-medium">{lang.name}</span>
        </Button>
      ))}
    </div>
  )
}
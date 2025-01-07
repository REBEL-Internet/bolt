import { useLocation } from "react-router-dom"

export function useLanguage() {
  const location = useLocation()
  return location.pathname.startsWith("/de") ? "de" : "en"
}
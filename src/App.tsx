import { Routes, Route } from "react-router-dom"
import { HomePage } from "@/pages/home"
import { DutchHomePage } from "@/pages/nl"
import AboutPage from "@/pages/about"
import ContactPage from "@/pages/contact"
import PrivacyPage from "@/pages/privacy"
import ProductPage from "@/pages/product"
import { ThemeProvider } from "@/components/theme-provider" 

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="diskprices-theme">
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nl" element={<DutchHomePage />} />
          <Route path="/de" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}
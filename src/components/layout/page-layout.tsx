import { ReactNode } from "react"
import { Footer } from "./footer"
import { Header } from "./header"

interface PageLayoutProps {
  children: ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

export function PageLayout({ 
  children, 
  showHeader = true,
  showFooter = true 
}: PageLayoutProps) {
  return (
    <>
      <div className="container mx-auto py-6 px-4 max-w-full">
        {showHeader && <Header />}
        {children}
      </div>
      {showFooter && <Footer />}
    </>
  )
}
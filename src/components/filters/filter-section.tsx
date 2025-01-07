import { ReactNode } from "react"

interface FilterSectionProps {
  title: string
  children: ReactNode
}

export function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div className="space-y-4 py-2">
      <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground/80">
        {title}
      </h3>
      {children}
    </div>
  )
}
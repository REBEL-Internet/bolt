import { LucideIcon } from "lucide-react"

interface USPBadgeProps {
  children: React.ReactNode
  icon: LucideIcon
}

export function USPBadge({ children, icon: Icon }: USPBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
      <Icon className="w-4 h-4" />
      <span>{children}</span>
    </div>
  )
}
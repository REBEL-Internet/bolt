import { Column } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { commonStyles } from "@/lib/styles"

interface TableHeaderButtonProps<TData, TValue> {
  column: Column<TData, TValue>
  title: string
}

export function TableHeaderButton<TData, TValue>({ 
  column, 
  title 
}: TableHeaderButtonProps<TData, TValue>) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className={cn(
        commonStyles.interactiveBackground,
        commonStyles.interactiveText,
        commonStyles.transition,
        "font-medium"
      )}
    >
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  )
}
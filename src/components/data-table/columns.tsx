import { ColumnDef } from "@tanstack/react-table"
import { DiskData } from "@/types"
import { TableHeaderButton } from "./table-header-button"
import { ScoreBadge } from "./score-badge"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { ExternalLink } from "lucide-react"

export const columns: ColumnDef<DiskData>[] = [
  {
    accessorKey: "score",
    header: ({ column }) => (
      <TableHeaderButton column={column} title="Score" />
    ),
    cell: ({ row }) => {
      const score = row.getValue("score") as number
      return <div className="flex justify-center"><ScoreBadge score={score} /></div>
    },
  },
  {
    accessorKey: "brand",
    header: ({ column }) => (
      <TableHeaderButton column={column} title="Brand" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "model",
    header: ({ column }) => (
      <TableHeaderButton column={column} title="Model" />
    ),
    cell: ({ row }) => {
      const model = row.getValue("model") as string;
      return (
        <div className="flex items-center gap-2">
          {model}
          <Link 
            to={`/product/${encodeURIComponent(model)}`}
            className="text-xs text-blue-500 hover:text-blue-700"
          >
            [details]
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "capacity",
    header: ({ column }) => (
      <TableHeaderButton column={column} title="Capacity" />
    ),
    cell: ({ row }) => {
      const capacity = row.getValue("capacity") as number
      return <div>{capacity.toFixed(1)} TB</div>
    },
    filterFn: (row, id, value) => {
      const capacity = row.getValue(id) as number;
      const [min, max] = value as number[];
      return capacity >= min && capacity <= max;
    }
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <TableHeaderButton column={column} title="Price" />
    ),
    cell: ({ row }) => {
      const price = row.getValue("price") as number
      return <div>${price.toFixed(2)}</div>
    },
    filterFn: (row, id, value) => {
      const price = row.getValue(id) as number;
      const [min, max] = value as number[];
      return price >= min && price <= max;
    }
  },
  {
    accessorKey: "pricePerTB",
    header: ({ column }) => (
      <TableHeaderButton column={column} title="$/TB" />
    ),
    cell: ({ row }) => {
      const pricePerTB = row.getValue("pricePerTB") as number
      return <div>${pricePerTB.toFixed(2)}/TB</div>
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <TableHeaderButton column={column} title="Type" />
    ),
    cell: ({ row }) => (
      <Badge variant="outline">
        {row.getValue("type") as string}
      </Badge>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "interface",
    header: ({ column }) => (
      <TableHeaderButton column={column} title="Interface" />
    ),
    cell: ({ row }) => (
      <Badge variant="outline">
        {row.getValue("interface") as string}
      </Badge>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "socket",
    header: ({ column }) => (
      <TableHeaderButton column={column} title="Socket" />
    ),
    cell: ({ row }) => (
      <Badge variant="outline">
        {row.getValue("socket") as string}
      </Badge>
    ),
  },
  {
    accessorKey: "vendor",
    header: "Vendor",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    cell: ({ row }) => {
      const data = row.original
      return (
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
        >
          {data.vendor}
          <ExternalLink className="h-3 w-3" />
        </a>
      )
    },
  },
]
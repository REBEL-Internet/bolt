import { useParams } from "react-router-dom"
import { sampleData } from "@/lib/sample-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Star, Award, Zap } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const priceHistory = [
  { date: "Dec 1", price: 168.99 },
  { date: "Dec 5", price: 179.99 },
  { date: "Dec 10", price: 179.99 },
  { date: "Dec 15", price: 179.99 },
  { date: "Dec 20", price: 179.99 },
  { date: "Dec 25", price: 179.99 },
  { date: "Dec 30", price: 179.99 }
]

export default function ProductPage() {
  const { id } = useParams()
  const product = sampleData.find(p => p.model === id)

  if (!product) {
    return <div className="container mx-auto py-8 px-4">Product not found</div>
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.brand} {product.model}</h1>
          <div className="flex items-center gap-4">
            <Badge variant="outline">{product.type}</Badge>
            <Badge variant="outline">{product.interface}</Badge>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{product.score}/100</span>
            </div>
          </div>
        </div>
        
        {/* Price Card */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-3xl font-bold">${product.price}</p>
              <p className="text-sm text-muted-foreground">${product.pricePerTB}/TB</p>
            </div>
            <Button asChild>
              <a 
                href={product.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                View on {product.vendor}
              </a>
            </Button>
          </div>

          {/* Price History Graph */}
          <div className="h-[200px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={['auto', 'auto']} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Specifications */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground">Capacity</div>
                <div className="font-medium">{product.capacity} TB</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Interface</div>
                <div className="font-medium">{product.interface}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Form Factor</div>
                <div className="font-medium">{product.socket}</div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground">Type</div>
                <div className="font-medium">{product.type}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Performance Score</div>
                <div className="font-medium">{product.score}/100</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Price per TB</div>
                <div className="font-medium">${product.pricePerTB.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Features */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-blue-500 mt-1" />
              <div>
                <h3 className="font-medium">High Performance</h3>
                <p className="text-sm text-muted-foreground">
                  PCIe 4.0 NVMe interface for blazing fast speeds
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-blue-500 mt-1" />
              <div>
                <h3 className="font-medium">Reliability</h3>
                <p className="text-sm text-muted-foreground">
                  Samsung's proven reliability and durability
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Star className="h-5 w-5 text-blue-500 mt-1" />
              <div>
                <h3 className="font-medium">Top Rated</h3>
                <p className="text-sm text-muted-foreground">
                  Consistently high user ratings and reviews
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
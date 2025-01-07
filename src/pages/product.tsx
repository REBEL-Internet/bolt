import { PageLayout } from "@/components/layout/page-layout"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { sampleData } from "@/lib/sample-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, TrendingDown } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function ProductPage() {
  const { id } = useParams()
  const product = sampleData.find(p => p.model === id)

  if (!product) {
    return (
      <PageLayout>
        <div>Product not found</div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <Helmet>
        <title>🔍 {product.brand} {product.model} - Price History & Specs</title>
        <meta name="description" content={`COMPARE ${product.brand} ${product.model} prices and track historical data. ${product.capacity}TB ${product.type} with ${product.interface} interface.`} />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{product.brand} {product.model}</h1>
        <div className="flex items-center gap-4 mb-6">
          <Badge variant="outline">{product.type}</Badge>
          <Badge variant="outline">{product.interface}</Badge>
        </div>
        
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-2xl font-bold">${product.price}</p>
              {product.priceHistory && product.priceHistory[0].price > product.price && (
                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <TrendingDown className="h-4 w-4" />
                  Price drop!
                </div>
              )}
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

          {product.priceHistory && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Price History</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={product.priceHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="date" 
                      fontSize={12}
                      stroke="#6b7280"
                    />
                    <YAxis 
                      fontSize={12}
                      stroke="#6b7280"
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Price']}
                      contentStyle={{ fontSize: 12 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4, fill: '#3b82f6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
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
            <div>
              <div className="text-sm text-muted-foreground">Type</div>
              <div className="font-medium">{product.type}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Performance Score</div>
              <div className="font-medium">{product.score}/100</div>
            </div>
            {product.powerSpecs && (
              <div>
                <div className="text-sm text-muted-foreground">Power Usage</div>
                <div className="font-medium">
                  {product.powerSpecs.active}W active / {product.powerSpecs.idle}W idle
                </div>
              </div>
            )}
            {product.noise && (
              <div>
                <div className="text-sm text-muted-foreground">Noise Level</div>
                <div className="font-medium">
                  {product.noise.idle}dB idle / {product.noise.seek}dB seek
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </PageLayout>
  )
}
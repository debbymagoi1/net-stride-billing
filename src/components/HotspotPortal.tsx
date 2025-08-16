import { useState, useEffect } from "react"
import { Button } from "@/components/ui/mobile-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Wifi, Clock, Download, Upload, CreditCard, Key } from "lucide-react"

// Mock data - in real implementation, this would come from MikroTik RouterOS API
const mockData = {
  isConnected: false,
  connectionTime: "00:00:00",
  dataUsed: { download: 0, upload: 0 },
  dataRemaining: { download: 0, upload: 0 }
}

const dataPlans = [
  {
    id: "daily-2gb",
    name: "Daily Plan",
    data: "2GB",
    duration: "24 hours",
    price: 2.99,
    popular: false
  },
  {
    id: "weekly-15gb", 
    name: "Weekly Plan",
    data: "15GB",
    duration: "7 days",
    price: 14.99,
    popular: true
  },
  {
    id: "monthly-100gb",
    name: "Monthly Plan", 
    data: "100GB",
    duration: "30 days",
    price: 49.99,
    popular: false
  }
]

const HotspotPortal = () => {
  const [connectionStatus, setConnectionStatus] = useState(mockData)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<"voucher" | "card">("voucher")
  const [voucherCode, setVoucherCode] = useState("")

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 B"
    const k = 1024
    const sizes = ["B", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
  }

  const handleConnect = () => {
    // In real implementation, this would authenticate with MikroTik
    setConnectionStatus(prev => ({ ...prev, isConnected: true }))
  }

  const handleDisconnect = () => {
    setConnectionStatus(prev => ({ ...prev, isConnected: false }))
  }

  const handlePurchase = () => {
    // In real implementation, this would process payment and activate plan
    alert(`Purchasing ${dataPlans.find(p => p.id === selectedPlan)?.name} via ${paymentMethod}`)
  }

  return (
    <div className="min-h-screen bg-background p-4 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Wifi className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-bold text-foreground">NetStride Hotspot</h1>
        </div>
        <p className="text-sm text-muted-foreground">Fast, reliable internet access</p>
      </div>

      {/* Connection Status */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${connectionStatus.isConnected ? 'bg-success' : 'bg-destructive'}`} />
            {connectionStatus.isConnected ? 'Connected' : 'Disconnected'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {connectionStatus.isConnected ? (
            <>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    Session Time
                  </div>
                  <div className="font-mono font-medium">{connectionStatus.connectionTime}</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Download className="w-4 h-4" />
                    Data Used
                  </div>
                  <div className="font-mono font-medium">
                    {formatBytes(connectionStatus.dataUsed.download)}
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleDisconnect}
                variant="destructive"
                size="lg"
                className="w-full"
              >
                Disconnect
              </Button>
            </>
          ) : (
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Choose a data plan to get connected
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {!connectionStatus.isConnected && (
        <>
          {/* Data Plans */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Available Plans</h2>
            <div className="space-y-3">
              {dataPlans.map((plan) => (
                <Card 
                  key={plan.id}
                  className={`cursor-pointer transition-all ${
                    selectedPlan === plan.id 
                      ? 'ring-2 ring-primary bg-primary/5' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{plan.name}</h3>
                          {plan.popular && (
                            <Badge variant="secondary" className="text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {plan.data} • {plan.duration}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">
                          ${plan.price}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Payment Method */}
          {selectedPlan && (
            <Card className="mb-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={paymentMethod === "voucher" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPaymentMethod("voucher")}
                    className="flex items-center gap-2"
                  >
                    <Key className="w-4 h-4" />
                    Voucher
                  </Button>
                  <Button
                    variant={paymentMethod === "card" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPaymentMethod("card")}
                    className="flex items-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    Card
                  </Button>
                </div>

                {paymentMethod === "voucher" && (
                  <div className="space-y-2">
                    <Label htmlFor="voucher">Voucher Code</Label>
                    <Input
                      id="voucher"
                      type="text"
                      placeholder="Enter voucher code"
                      value={voucherCode}
                      onChange={(e) => setVoucherCode(e.target.value)}
                      className="font-mono"
                    />
                  </div>
                )}

                {paymentMethod === "card" && (
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="card">Card Number</Label>
                      <Input
                        id="card"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry</Label>
                        <Input
                          id="expiry"
                          type="text"
                          placeholder="MM/YY"
                          className="font-mono"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          type="text"
                          placeholder="123"
                          className="font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handlePurchase}
                  size="lg"
                  className="w-full"
                  disabled={paymentMethod === "voucher" && !voucherCode.trim()}
                >
                  Purchase & Connect
                </Button>
              </CardContent>
            </Card>
          )}
        </>
      )}

      {/* Footer */}
      <div className="text-center text-xs text-muted-foreground pt-6 border-t">
        <p>NetStride WiFi Portal v2.0</p>
        <p>Local network managed by MikroTik RouterOS</p>
      </div>
    </div>
  )
}

export default HotspotPortal
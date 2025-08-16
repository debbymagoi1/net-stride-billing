import { useState } from "react"
import { Button } from "@/components/ui/mobile-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Activity, Settings, DollarSign, Eye, Trash2, RefreshCw } from "lucide-react"

// Mock data for admin dashboard
const mockUsers = [
  { id: 1, username: "user001", status: "connected", plan: "Weekly Plan", timeLeft: "5d 2h", dataUsed: "8.2GB", ip: "192.168.1.102" },
  { id: 2, username: "user002", status: "disconnected", plan: "Daily Plan", timeLeft: "expired", dataUsed: "2.1GB", ip: "192.168.1.103" },
  { id: 3, username: "user003", status: "connected", plan: "Monthly Plan", timeLeft: "28d 15h", dataUsed: "45.7GB", ip: "192.168.1.104" }
]

const mockSessions = [
  { id: 1, username: "user001", startTime: "2024-01-15 14:30", duration: "2h 15m", dataUsed: "1.2GB", status: "active" },
  { id: 2, username: "user002", startTime: "2024-01-15 12:15", duration: "45m", dataUsed: "0.8GB", status: "ended" },
  { id: 3, username: "user003", startTime: "2024-01-15 10:00", duration: "4h 30m", dataUsed: "3.1GB", status: "active" }
]

const mockStats = {
  totalUsers: 156,
  activeUsers: 23,
  totalRevenue: 2450.75,
  dataTransferred: "1.2TB"
}

const AdminDashboard = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null)

  const handleDisconnectUser = (userId: number) => {
    // In real implementation, this would call MikroTik API to disconnect user
    alert(`Disconnecting user ${userId}`)
  }

  const handleDeleteUser = (userId: number) => {
    // In real implementation, this would remove user from system
    alert(`Deleting user ${userId}`)
  }

  const handleRefreshData = () => {
    // In real implementation, this would fetch latest data from MikroTik
    alert("Refreshing data...")
  }

  return (
    <div className="min-h-screen bg-background p-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-sm text-muted-foreground">NetStride Hotspot Management</p>
        </div>
        <Button onClick={handleRefreshData} variant="outline" size="sm">
          <RefreshCw className="w-4 h-4" />
          Refresh
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Total Users</span>
            </div>
            <div className="text-2xl font-bold">{mockStats.totalUsers}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-success" />
              <span className="text-sm text-muted-foreground">Active</span>
            </div>
            <div className="text-2xl font-bold text-success">{mockStats.activeUsers}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-warning" />
              <span className="text-sm text-muted-foreground">Revenue</span>
            </div>
            <div className="text-2xl font-bold">${mockStats.totalRevenue}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Data Used</span>
            </div>
            <div className="text-2xl font-bold">{mockStats.dataTransferred}</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="users" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{user.username}</span>
                        <Badge 
                          variant={user.status === "connected" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {user.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {user.plan} • {user.timeLeft} • {user.dataUsed}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        IP: {user.ip}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" onClick={() => setSelectedUser(user.id)}>
                        <Eye className="w-3 h-3" />
                      </Button>
                      {user.status === "connected" && (
                        <Button 
                          size="sm" 
                          variant="warning" 
                          onClick={() => handleDisconnectUser(user.id)}
                        >
                          Disconnect
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="destructive" 
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Session Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{session.username}</span>
                        <Badge 
                          variant={session.status === "active" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {session.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Started: {session.startTime}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Duration: {session.duration} • Data: {session.dataUsed}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="router-ip">Router IP Address</Label>
                <Input
                  id="router-ip"
                  type="text"
                  defaultValue="192.168.1.1"
                  className="font-mono"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="api-port">API Port</Label>
                <Input
                  id="api-port"
                  type="text"
                  defaultValue="8728"
                  className="font-mono"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="admin-user">Admin Username</Label>
                <Input
                  id="admin-user"
                  type="text"
                  defaultValue="admin"
                />
              </div>
              
              <Button className="w-full">Save Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AdminDashboard
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, CreditCard, Smartphone, Shield, Clock, Users } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Usage Tracking",
    description: "Monitor your data consumption with live updates and detailed analytics."
  },
  {
    icon: CreditCard,
    title: "Secure Online Payments",
    description: "Pay safely with credit cards, PayPal, and other trusted payment methods."
  },
  {
    icon: Smartphone,
    title: "User-Friendly Dashboard",
    description: "Manage your account, view usage, and control settings from any device."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols protect your data and privacy."
  },
  {
    icon: Clock,
    title: "Instant Activation",
    description: "Get connected immediately with our automated provisioning system."
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Expert support team available around the clock to assist you."
  }
]

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade features designed for modern connectivity needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:scale-105 border-border/50"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
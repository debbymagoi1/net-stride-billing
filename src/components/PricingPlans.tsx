import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Calendar, CreditCard } from "lucide-react"

const plans = [
  {
    name: "Daily",
    price: "$2.99",
    period: "per day",
    data: "2GB",
    features: [
      "High-speed 5G network",
      "No contracts",
      "Instant activation",
      "24/7 support"
    ],
    icon: Zap,
    popular: false,
    buttonVariant: "outline" as const
  },
  {
    name: "Weekly",
    price: "$14.99",
    period: "per week",
    data: "15GB",
    features: [
      "High-speed 5G network",
      "Priority network access",
      "Rollover unused data",
      "24/7 premium support",
      "Mobile app dashboard"
    ],
    icon: Calendar,
    popular: true,
    buttonVariant: "accent" as const
  },
  {
    name: "Monthly",
    price: "$49.99",
    period: "per month",
    data: "100GB",
    features: [
      "High-speed 5G network",
      "Highest priority access",
      "Unlimited rollover",
      "24/7 premium support",
      "Advanced analytics",
      "Multiple device support"
    ],
    icon: CreditCard,
    popular: false,
    buttonVariant: "premium" as const
  }
]

const PricingPlans = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect data plan for your needs. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <Card 
                key={plan.name} 
                className={`relative transition-all duration-300 hover:shadow-medium ${
                  plan.popular 
                    ? 'border-accent shadow-glow scale-105' 
                    : 'hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <div className="text-lg font-semibold text-accent">
                    {plan.data} High-Speed Data
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.buttonVariant} 
                    size="lg" 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include free activation and no setup fees. 
            <span className="text-accent font-medium"> Cancel anytime.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
import { Wifi, Facebook, Twitter, Instagram, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">HotSpot Pro</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium mobile hotspot solutions with transparent billing and reliable connectivity.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Plans */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Plans</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#" className="block hover:text-accent transition-colors">Daily Plans</a>
              <a href="#" className="block hover:text-accent transition-colors">Weekly Plans</a>
              <a href="#" className="block hover:text-accent transition-colors">Monthly Plans</a>
              <a href="#" className="block hover:text-accent transition-colors">Enterprise</a>
            </div>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#" className="block hover:text-accent transition-colors">Help Center</a>
              <a href="#" className="block hover:text-accent transition-colors">Contact Us</a>
              <a href="#" className="block hover:text-accent transition-colors">Network Status</a>
              <a href="#" className="block hover:text-accent transition-colors">Coverage Map</a>
            </div>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#" className="block hover:text-accent transition-colors">About Us</a>
              <a href="#" className="block hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="block hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="block hover:text-accent transition-colors">Careers</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 HotSpot Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
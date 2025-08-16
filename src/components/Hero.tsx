import { Button } from "@/components/ui/enhanced-button"
import { Wifi, Zap, Shield } from "lucide-react"
import heroImage from "@/assets/hero-connectivity.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern connectivity technology" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary-glow/30 rounded-full blur-2xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Stay Connected
            <span className="block bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
              Anywhere
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium mobile hotspot data plans with transparent billing, real-time usage tracking, and lightning-fast connectivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="animate-slide-up">
              Get Started Today
            </Button>
            <Button variant="glass" size="xl" className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              View Plans
            </Button>
          </div>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Wifi className="w-5 h-5 text-accent" />
              <span>High-Speed 5G</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Zap className="w-5 h-5 text-accent" />
              <span>Instant Activation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Shield className="w-5 h-5 text-accent" />
              <span>Secure Network</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
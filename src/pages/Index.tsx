import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import PricingPlans from "@/components/PricingPlans"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <PricingPlans />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

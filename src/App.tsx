import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { FeaturesSection } from "./components/features-section";
import { HowItWorksSection } from "./components/how-it-works-section";
import { DemoSection } from "./components/demo-section";
import { PricingSection } from "./components/pricing-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { ComparisonSection } from "./components/comparison-section";
import { IntegrationsSection } from "./components/integrations-section";
import { FaqSection } from "./components/faq-section";
import { NewsletterSection } from "./components/newsletter-section";
import { CtaSection } from "./components/cta-section";
import { Footer } from "./components/footer";
import { useTheme } from "@heroui/use-theme";
import FloatingButton from "./components/floating-button";

function App() {
  useTheme();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DemoSection />
      <PricingSection />
      <TestimonialsSection />
      <ComparisonSection />
      <IntegrationsSection />
      <FaqSection />
      <NewsletterSection />
      <CtaSection />
      <Footer />

      <div className="fixed bottom-5 right-8 z-30">
        <FloatingButton />
      </div>
    </div>
  );
}

export default App;

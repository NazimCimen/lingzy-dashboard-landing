import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ScreenshotsSection } from "@/components/sections/screenshots-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  )
}

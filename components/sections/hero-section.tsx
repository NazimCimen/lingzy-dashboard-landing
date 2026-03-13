import { Sparkles, Zap } from "lucide-react"
import { IPhoneMockup } from "@/components/iphone-mockup"
import { AppStoreButtons } from "@/components/app-store-buttons"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-12 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute -top-28 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="absolute top-20 -left-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" aria-hidden />

      <div className="container mx-auto px-4 relative">
        <div className="flex justify-center mb-12 md:mb-16">
          <img src="/images/logo.png" alt="Lingzy" className="h-10 md:h-12 w-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                New mood, same learning power
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight text-balance mb-6">
                Learn English by Reading
                <span className="block bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">Stories that feel alive</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
                Improve your English naturally through classic books, quick reads, and AI-generated adventures designed to keep you in flow.
              </p>

              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 text-sm text-muted-foreground">
                  <Zap className="w-3.5 h-3.5 text-primary" /> Offline Reading
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 text-sm text-muted-foreground">
                  <Sparkles className="w-3.5 h-3.5 text-primary" /> AI Story Mode
                </span>
              </div>

              <AppStoreButtons className="justify-center lg:justify-start" />
            </div>

            <div className="order-1 lg:order-2 flex justify-center relative">
              <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-primary/20 blur-3xl" aria-hidden />
              <div className="floating-slow">
                <IPhoneMockup src="/images/screenshots/books.png" alt="Lingzy Books Screen" priority className="drop-shadow-[0_30px_80px_rgba(64,91,255,0.3)]" />
              </div>
              <div className="hidden md:block absolute -left-4 top-20 rounded-2xl border border-border/60 bg-card/80 backdrop-blur px-4 py-2 text-xs text-muted-foreground floating-fast">
                +1200 words learned this month
              </div>
              <div className="hidden md:block absolute -right-8 bottom-24 rounded-2xl border border-border/60 bg-card/80 backdrop-blur px-4 py-2 text-xs text-muted-foreground floating-medium">
                15 min daily streak ⚡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

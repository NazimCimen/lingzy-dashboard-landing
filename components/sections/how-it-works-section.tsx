import { BookMarked, MousePointerClick, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: <BookMarked className="w-8 h-8" />,
    number: "01",
    title: "Choose a book or article",
    description: "Browse our collection of classic books and curated articles at your level."
  },
  {
    icon: <MousePointerClick className="w-8 h-8" />,
    number: "02",
    title: "Tap words to learn meanings",
    description: "Instantly see definitions, translations, and examples for any word."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: "03",
    title: "Improve naturally",
    description: "Build vocabulary through context, not memorization."
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            How Lingzy works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to fluent English
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-border" />
              )}
              
              {/* Step card */}
              <div className="relative bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/15 transition-colors">
                  <span className="text-primary">{step.icon}</span>
                </div>
                <div className="text-xs font-bold text-primary mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

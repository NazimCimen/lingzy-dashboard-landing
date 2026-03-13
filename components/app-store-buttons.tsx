import { Apple, Play } from "lucide-react"

interface AppStoreButtonsProps {
  className?: string
}

export function AppStoreButtons({ className = "" }: AppStoreButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <a
        href="#"
        className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-3.5 rounded-xl hover:bg-foreground/90 transition-colors group"
      >
        <Apple className="w-7 h-7" />
        <div className="text-left">
          <div className="text-[10px] opacity-80 leading-none">Download on the</div>
          <div className="text-lg font-semibold leading-tight">App Store</div>
        </div>
      </a>
      <a
        href="#"
        className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-3.5 rounded-xl hover:bg-foreground/90 transition-colors group"
      >
        <Play className="w-6 h-6 fill-current" />
        <div className="text-left">
          <div className="text-[10px] opacity-80 leading-none">GET IT ON</div>
          <div className="text-lg font-semibold leading-tight">Google Play</div>
        </div>
      </a>
    </div>
  )
}

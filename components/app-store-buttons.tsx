"use client"

import { useState } from "react"
import { Apple, Play } from "lucide-react"

interface AppStoreButtonsProps {
  className?: string
}

export function AppStoreButtons({ className = "" }: AppStoreButtonsProps) {
  const [showComingSoon, setShowComingSoon] = useState(false)

  return (
    <>
      <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
        <button
          type="button"
          onClick={() => setShowComingSoon(true)}
          aria-label="Lingzy App Store sürümü çok yakında"
          className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-3.5 rounded-xl hover:bg-foreground/90 transition-colors group"
        >
          <Apple className="w-7 h-7" />
          <div className="text-left">
            <div className="text-[10px] opacity-80 leading-none">Download on the</div>
            <div className="text-lg font-semibold leading-tight">App Store</div>
          </div>
        </button>
        <a
          href="https://play.google.com/store/apps/details?id=com.lingzy.app"
          target="_blank"
          rel="noreferrer"
          aria-label="Get Lingzy on Google Play"
          className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-3.5 rounded-xl hover:bg-foreground/90 transition-colors group"
        >
          <Play className="w-6 h-6 fill-current" />
          <div className="text-left">
            <div className="text-[10px] opacity-80 leading-none">GET IT ON</div>
            <div className="text-lg font-semibold leading-tight">Google Play</div>
          </div>
        </a>
      </div>

      {showComingSoon && (
        <div className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-2">Çok yakında 🚀</h3>
            <p className="text-muted-foreground mb-6">Lingzy'nin iOS sürümü App Store için hazırlanıyor.</p>
            <button
              type="button"
              onClick={() => setShowComingSoon(false)}
              className="inline-flex items-center justify-center rounded-xl bg-foreground text-background px-5 py-2.5 font-medium hover:bg-foreground/90 transition-colors"
            >
              Tamam
            </button>
          </div>
        </div>
      )}
    </>
  )
}

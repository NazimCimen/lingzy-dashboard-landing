"use client"

import { useEffect } from "react"

export default function AppStoreRedirect() {
  useEffect(() => {
    window.location.href = "https://apps.apple.com/us/app/lingzy/id6760796761"
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="animate-pulse text-center">
        <h1 className="text-2xl font-bold mb-4 text-foreground">Redirecting to App Store...</h1>
        <p className="text-muted-foreground">If you are not redirected, <a href="https://apps.apple.com/us/app/lingzy/id6760796761" className="text-primary hover:underline">click here</a>.</p>
      </div>
    </div>
  )
}

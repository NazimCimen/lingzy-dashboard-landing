export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.png" 
              alt="Lingzy" 
              className="h-8 w-auto"
            />
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a 
              href="https://www.nazimcimen.com/privacy_policy_lingzy.html"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://www.nazimcimen.com/terms_conditions_lingzy.html"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="mailto:hello@lingzy.app"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lingzy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

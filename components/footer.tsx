import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded" />
              <span className="text-base sm:text-lg font-semibold">GeoQuantix Technologies</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Professional GIS survey solutions for municipal corporations and government bodies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="#services" className="hover:text-primary-foreground transition-colors">
                  Property Mapping
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-foreground transition-colors">
                  Data Collection
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-foreground transition-colors">
                  Digital Database
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-foreground transition-colors">
                  Urban Planning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Data Protection
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm text-center text-primary-foreground/60">
            © {new Date().getFullYear()} GeoQuantix Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
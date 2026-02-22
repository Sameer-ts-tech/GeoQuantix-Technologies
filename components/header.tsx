"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-400 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/geoquantix-final-logo.png" alt="" className="w-22 h-auto sm:w-30 md:w-30" />
              <span className="text-xl font-semibold text-primary-foreground"></span>
            </Link>

            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              <Link
                href="#services"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="#process"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Process
              </Link>
              <Link
                href="#benefits"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Benefits
              </Link>
              <Link
                href="#contact"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="https://wa.me/919140304931"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-d transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm px-3 sm:px-4">
                <Link href="#contact">Get Started</Link>
              </Button>
              
              {/* Animated Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-primary-foreground/80 hover:text-primary-foreground relative w-6 h-6"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-1 left-0 w-6 h-0.5 bg-current origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-1/2 -translate-y-1/2 left-0 w-6 h-0.5 bg-current"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-1 left-0 w-6 h-0.5 bg-current origin-center"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Side Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[50%] max-w-[280px] bg-primary text-primary-foreground z-50 md:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-primary-foreground/10">
                <span className="text-lg font-semibold">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <div className="flex flex-col gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href="#services"
                      className="text-base text-primary-foreground/80 hover:text-accent transition-colors block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Services
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <Link
                      href="#process"
                      className="text-base text-primary-foreground/80 hover:text-accent transition-colors block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Process
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href="#benefits"
                      className="text-base text-primary-foreground/80 hover:text-accent transition-colors block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Benefits
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <Link
                      href="#impact"
                      className="text-base text-primary-foreground/80 hover:text-accent transition-colors block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Previous Work
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="#portfolio"
                      className="text-base text-primary-foreground/80 hover:text-accent transition-colors block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Our Portal
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <Link
                      href="#contact"
                      className="text-base text-primary-foreground/80 hover:text-accent transition-colors block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </motion.div>
                </div>
              </nav>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 border-t border-primary-foreground/10"
              >
                <Button 
                  asChild 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="#contact">Get Started</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
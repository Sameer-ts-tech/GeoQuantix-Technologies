import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GeoQuantix Technologies - GIS Survey Solutions for Municipal Corporations",
  description:
    "Professional GIS survey services for Nagar Nigam and municipal corporations. Accurate property mapping and geospatial data solutions.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/black-apexFavicon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/white-favicon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/white-favicon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}

        {/* ✅ Shadcn / Sonner Toasts */}
        <Toaster richColors position="top-right" />

        <Analytics />
      </body>
    </html>
  )
}

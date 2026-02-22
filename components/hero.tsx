"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Target, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden text-primary-foreground">

      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center sm:bg-cover"
        style={{
          backgroundImage: "url('/gis-clear.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent/20 rounded-full text-xs sm:text-sm mb-4"
          >
            <Target className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Precision Geospatial Solutions</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-4xl font-bold tracking-tight text-balance px-4 sm:px-0"
          >
            Transform Municipal Data into Actionable Insights
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm 
    sm:text-base 
    md:text-lg 
    lg:text-xl
    text-primary-foreground/80
    max-w-2xl 
    mx-auto 
    leading-relaxed 
    px-4 
    sm:px-0"
          >
            Professional GIS survey services for Nagar Palika Parishad and municipal corporations.
            Delivering accurate property mapping, comprehensive data collection, and
            geospatial intelligence for urban planning.
          </motion.p>

          {/* CTA Buttons */}
         <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="
    flex flex-row
    items-center 
    justify-center 
    gap-2 sm:gap-30 
    px-3 sm:px-0
  "
>
  <Button
    asChild
    size="sm"
    className="
      bg-accent hover:bg-accent/90 text-accent-foreground
      px-3 sm:px-8
      text-xs sm:text-base
      h-9 sm:h-11
      min-w-[140px] sm:min-w-[200px]
      whitespace-nowrap
    "
  >
    <Link href="#contact">Schedule Consultation</Link>
  </Button>

  <Button
    asChild
    size="sm"
    variant="outline"
    className="
      bg-transparent border-white/20 text-white hover:bg-white/10
      px-3 sm:px-8
      text-xs sm:text-base
      h-9 sm:h-11
      min-w-[140px] sm:min-w-[230px]
      whitespace-nowrap
    "
  >
    <Link href="#services">Explore Services</Link>
  </Button>
</motion.div>


          {/* Stats */}
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="grid grid-cols-3 gap-3 sm:gap-8 pt-8 sm:pt-12 px-2 sm:px-0"
>
  {[
    { icon: MapPin, label: "+15K Properties", desc: "Surveyed" },
    { icon: Target, label: "99.9% Accuracy", desc: "Rate" },
    { icon: TrendingUp, label: "50+ Projects", desc: "Completed" },
  ].map((stat, i) => (
    <div
      key={i}
      className="flex flex-col items-center gap-1 sm:gap-2"
    >
      <stat.icon className="w-5 h-5 sm:w-8 sm:h-8 text-accent" />

      <div className="text-lg sm:text-3xl font-bold text-center">
        {stat.label}
      </div>

      <div className="text-[10px] sm:text-sm text-primary-foreground/60 text-center">
        {stat.desc}
      </div>
    </div>
  ))}
</motion.div>

        </div>
      </div>
    </section>
  )
}
// components/GISMapBackground.tsx
"use client"

import { motion } from "framer-motion"
import clsx from "clsx"

export function GISMapBackground({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
      className={clsx("absolute inset-0 w-full h-full", className)}
      aria-hidden
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="white"
            strokeOpacity="0.08"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />

      <motion.path
        d="M 0 300 Q 250 200 500 300 T 1000 320"
        fill="none"
        stroke="white"
        strokeOpacity="0.25"
        strokeWidth="10"
        strokeDasharray="8 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />

      {[150, 350, 550, 750].map((x, i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={280 + (i % 2) * 40}
          r="6"
          fill="#22c55e"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 4, 2] }}
          transition={{ delay: 1 + i * 0.3 }}
        />
      ))}
    </motion.svg>
  )
}

import React from 'react'
import { motion } from 'framer-motion'

export default function GlowOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#9d0d12]/15 blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-[#e63946]/10 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  )
}

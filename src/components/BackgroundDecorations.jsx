import React from 'react'
import { motion } from 'framer-motion'

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Radial glowing lights */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#9d0d12]/20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full bg-[#38bdf8]/15 blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export function AboutBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Ambient Orbs */}
      <motion.div
        className="absolute -top-24 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#9d0d12]/15 to-[#f472b6]/10 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-20 right-10 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#e63946]/10 to-[#fb923c]/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Decorative SVG Geometric Lines */}
      <svg className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] w-[450px] h-[450px]" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" stroke="#9d0d12" strokeWidth="0.5" strokeDasharray="2 2" />
        <circle cx="50" cy="50" r="30" stroke="#9d0d12" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="20" stroke="#9d0d12" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>
    </div>
  )
}

export function ServicesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Glowing Ambient Nodes */}
      <motion.div
        className="absolute top-10 left-1/3 w-[500px] h-[500px] rounded-full bg-[#9d0d12]/10 blur-[130px]"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-[#f472b6]/10 blur-[120px]"
        animate={{
          opacity: [0.15, 0.45, 0.15],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export function ProjectsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Ambient Color Glows */}
      <motion.div
        className="absolute top-20 right-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-[#9d0d12]/12 via-[#f472b6]/10 to-transparent blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#38bdf8]/10 to-[#9d0d12]/10 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export function ChooseUsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Central Light Radial Aura */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-r from-[#9d0d12]/10 via-[#ee5916]/10 to-[#7b050d]/10 blur-[140px]"
        animate={{
          scale: [0.95, 1.1, 0.95],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export function IndustryBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Glowing Ambient Light Orbs */}
      <motion.div
        className="absolute top-0 right-10 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#9d0d12]/12 to-[#c084fc]/10 blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#ee5916]/10 to-[#9d0d12]/10 blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export function ContactBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Warm Ambient Glowing Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#9d0d12]/14 via-[#f472b6]/10 to-transparent blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-[#ee5916]/12 via-[#9d0d12]/10 to-transparent blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -30, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Flowing SVG Accent Wave Line */}
      <svg className="absolute left-0 bottom-0 opacity-[0.06] w-full h-[200px]" preserveAspectRatio="none" viewBox="0 0 1440 200">
        <path fill="#9d0d12" d="M0,64L60,80C120,96,240,128,360,138.7C480,149,600,139,720,117.3C840,96,960,64,1080,58.7C1200,53,1320,75,1380,85.3L1440,96L1440,200L1380,200C1320,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z"></path>
      </svg>
    </div>
  )
}

export function FooterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Neon Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff4d4d] to-transparent opacity-80" />
      
      {/* Deep Aurora Orbs */}
      <motion.div
        className="absolute -top-20 left-1/4 w-[500px] h-[350px] rounded-full bg-[#9d0d12]/25 blur-[120px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[450px] h-[350px] rounded-full bg-[#38bdf8]/15 blur-[120px]"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

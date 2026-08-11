import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function TiltCard({
  children,
  className = '',
  maxTilt = 6,
  glowColor = 'rgba(157, 13, 18, 0.12)',
  style = {}
}) {
  const cardRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotX = -((y - centerY) / centerY) * maxTilt
    const rotY = ((x - centerX) / centerX) * maxTilt

    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100

    setRotateX(rotX)
    setRotateY(rotY)
    setGlarePos({ x: glareX, y: glareY, opacity: 0.5 })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlarePos((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        perspective: 800,
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {/* Spotlight glare layer */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-20"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, ${glowColor}, transparent 65%)`
        }}
      />
      {children}
    </motion.div>
  )
}

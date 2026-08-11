import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Magnet({
  children,
  strength = 0.3,
  className = '',
  style = {}
}) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const middleX = left + width / 2
    const middleY = top + height / 2

    const offsetX = (e.clientX - middleX) * strength
    const offsetY = (e.clientY - middleY) * strength

    setPosition({ x: offsetX, y: offsetY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'

export default function AnimatedCounter({ value, duration = 1.8 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    const isCountable = typeof value === 'string' && /^\d+/.test(value) && !value.includes('/')
    const numericMatch = isCountable ? value.match(/^(\d+)(.*)$/) : null

    if (!isCountable || !numericMatch) {
      setDisplayValue(value)
      return
    }

    const targetNumber = parseInt(numericMatch[1], 10)
    const suffix = numericMatch[2] || ''

    if (!isInView) {
      setDisplayValue(`0${suffix}`)
      return
    }

    let animationFrameId
    const startTimestamp = performance.now()

    const animateCount = (now) => {
      const elapsed = (now - startTimestamp) / 1000
      const progress = Math.min(elapsed / duration, 1)

      // Linear progress for constant counting speed from start to end
      const currentVal = Math.floor(progress * targetNumber)

      setDisplayValue(`${currentVal}${suffix}`)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount)
      } else {
        setDisplayValue(`${targetNumber}${suffix}`)
      }
    }

    animationFrameId = requestAnimationFrame(animateCount)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isInView, value, duration])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {displayValue}
    </motion.span>
  )
}

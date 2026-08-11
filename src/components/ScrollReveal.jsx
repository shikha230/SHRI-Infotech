import React from 'react'
import { motion } from 'framer-motion'

export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.5,
  distance = 25,
  once = true,
  className = '',
  style = {}
}) {
  const getVariants = () => {
    switch (variant) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 }
        }
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 }
        }
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 }
        }
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 }
        }
      case 'scale':
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.94 },
          visible: { opacity: 1, scale: 1 }
        }
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.12 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      variants={getVariants()}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

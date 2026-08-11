import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * PageTransition — Cinematic page-enter wrapper.
 * Wraps content in a layered reveal: colored wipe overlay slides away,
 * then content fades + scales in for an organic feel.
 */
export default function PageTransition({ children, accentColor = '#e63946' }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page-content"
        style={{ position: 'relative', overflow: 'hidden' }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* ── Wipe Overlay ── */}
        <motion.div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: `linear-gradient(135deg, #1a1a2e, ${accentColor})`,
            transformOrigin: 'top',
            pointerEvents: 'none',
          }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        />

        {/* ── Content ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

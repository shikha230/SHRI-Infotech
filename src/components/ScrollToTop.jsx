import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#9d0d12] text-white shadow-lg shadow-[#9d0d12]/30 cursor-pointer border border-white/20 backdrop-blur-md"
          aria-label="Scroll to top"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

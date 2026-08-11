import React, { useState } from 'react'
import { motion } from 'framer-motion'
import TiltCard from './TiltCard'

export default function IndustryCarousel({ industries }) {
  const [isPaused, setIsPaused] = useState(false)

  // Repeat industries list to create seamless infinite loop
  const repeatedIndustries = [...industries, ...industries, ...industries]

  return (
    <div
      className="relative w-full overflow-hidden py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >


      {/* Infinite Auto-Scrolling Track (GPU-Accelerated) */}
      <div
        className="flex gap-6 w-max animate-carousel-track"
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
          willChange: 'transform',
        }}
      >
        {repeatedIndustries.map((ind, index) => (
          <div
            key={`${ind.id}-${index}`}
            className="w-[300px] sm:w-[320px] md:w-[340px] flex-none"
          >
            <TiltCard maxTilt={6} glowColor={`${ind.color}25`} className="h-full">
              <div
                className="industry-card h-full flex flex-col justify-between"
                id={`industry-${ind.id}-${index}`}
              >
                <div>
                  <div className="industry-card-header">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="industry-icon"
                      style={{ backgroundColor: ind.color }}
                    >
                      {ind.icon}
                    </motion.div>
                    <h3>{ind.title}</h3>
                  </div>
                  <p className="industry-desc">{ind.description}</p>
                </div>

                <ul className="industry-list">
                  {ind.bulletPoints.map((bp, i) => (
                    <li key={i}>
                      <span className="bullet-point">-</span> {bp}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </div>
  )
}

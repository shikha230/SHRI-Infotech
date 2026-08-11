import React from 'react'

export default function AuroraBackground({
  colorStops = ['#9d0d12', '#7b050d', '#ee5916', '#38bdf8'],
  opacity = 0.25,
  className = '',
}) {
  const c0 = colorStops[0] || '#9d0d12'
  const c1 = colorStops[1] || '#7b050d'
  const c2 = colorStops[2] || '#ee5916'
  const c3 = colorStops[3] || '#38bdf8'

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden z-0 ${className}`}>
      {/* Aurora Layer 1 - Hardware Accelerated Radial Glow */}
      <div
        className="absolute -top-1/4 left-1/4 w-[600px] h-[450px] rounded-full opacity-60 animate-pulse-slow"
        style={{
          background: `radial-gradient(ellipse at center, ${c0} 0%, ${c1} 50%, transparent 80%)`,
          filter: 'blur(80px)',
          transform: 'translateZ(0)',
          willChange: 'opacity',
          opacity: opacity * 0.9,
        }}
      />

      {/* Aurora Layer 2 - Accent Glow */}
      <div
        className="absolute top-1/3 -right-10 w-[500px] h-[400px] rounded-full opacity-50 animate-pulse-slow"
        style={{
          background: `radial-gradient(ellipse at center, ${c2} 0%, ${c0} 50%, transparent 80%)`,
          filter: 'blur(80px)',
          transform: 'translateZ(0)',
          willChange: 'opacity',
          opacity: opacity * 0.7,
          animationDelay: '2s',
        }}
      />

      {/* Aurora Layer 3 - Subtle Base Light */}
      <div
        className="absolute -bottom-10 left-10 w-[450px] h-[350px] rounded-full opacity-40 animate-pulse-slow"
        style={{
          background: `radial-gradient(ellipse at center, ${c3} 0%, ${c0} 60%, transparent 80%)`,
          filter: 'blur(90px)',
          transform: 'translateZ(0)',
          willChange: 'opacity',
          opacity: opacity * 0.5,
          animationDelay: '4s',
        }}
      />
    </div>
  )
}

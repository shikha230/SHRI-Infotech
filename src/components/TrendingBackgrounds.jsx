import React, { useEffect, useRef } from 'react'

/**
 * 1. Interactive Fluid Plasma Canvas
 * Ultra-modern morphing plasma orbs with mouse interaction.
 * Uses IntersectionObserver to pause when off-screen for 60fps performance.
 */
export function InteractiveFluidCanvas({
  colors = ['#9d0d12', '#e63946', '#a855f7', '#ee5916', '#38bdf8'],
  opacity = 0.3,
  className = '',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let isVisible = true
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.offsetWidth
      height = canvas.height = canvas.parentElement.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    // Pause rendering when off-screen to free GPU/CPU resources
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible && !animationFrameId) {
          render()
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(canvas)

    // Mouse tracking for fluid displacement
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 }
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.targetX = e.clientX - rect.left
      mouse.targetY = e.clientY - rect.top
    }

    const parent = canvas.parentElement
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove)
    }

    const palette = colors && colors.length > 0 ? colors : ['#9d0d12', '#e63946', '#a855f7', '#ee5916', '#38bdf8']

    const orbs = [
      { x: width * 0.2, y: height * 0.3, r: Math.min(width, height) * 0.35, color: palette[0 % palette.length] },
      { x: width * 0.8, y: height * 0.4, r: Math.min(width, height) * 0.4, color: palette[1 % palette.length] },
      { x: width * 0.5, y: height * 0.8, r: Math.min(width, height) * 0.38, color: palette[2 % palette.length] },
    ]

    let time = 0

    const render = () => {
      if (!isVisible) return

      time += 0.006
      ctx.clearRect(0, 0, width, height)

      mouse.x += (mouse.targetX - mouse.x) * 0.04
      mouse.y += (mouse.targetY - mouse.y) * 0.04

      ctx.globalCompositeOperation = 'screen'
      ctx.globalAlpha = opacity

      orbs.forEach((orb, i) => {
        const offsetX = Math.sin(time * 0.8 + i) * 50
        const offsetY = Math.cos(time * 0.6 + i * 1.5) * 40

        const dx = mouse.x - (orb.x + offsetX)
        const dy = mouse.y - (orb.y + offsetY)
        const dist = Math.sqrt(dx * dx + dy * dy)
        const pushFactor = Math.max(0, (250 - dist) / 250) * 30

        const curX = orb.x + offsetX - (dx / (dist || 1)) * pushFactor
        const curY = orb.y + offsetY - (dy / (dist || 1)) * pushFactor

        const colorVal = orb.color || '#9d0d12'
        const stopColor = typeof colorVal === 'string' && colorVal.startsWith('#') && colorVal.length === 7 ? colorVal + 'aa' : colorVal
        const grad = ctx.createRadialGradient(curX, curY, 0, curX, curY, orb.r)
        grad.addColorStop(0, colorVal)
        grad.addColorStop(0.5, stopColor)
        grad.addColorStop(1, 'transparent')

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(curX, curY, orb.r, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 1

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [colors, opacity])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full z-0 ${className}`}
    />
  )
}

/**
 * 2. Liquid Wave Mesh
 * GPU-accelerated wave background using smooth SVG & CSS transform shift.
 */
export function LiquidWaveMesh({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden z-0 ${className}`}>
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.08] animate-pulse-slow"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        style={{ transform: 'translateZ(0)', willChange: 'opacity' }}
      >
        <path
          fill="url(#wave-grad-1)"
          d="M0,192L60,208C120,224,240,256,360,240C480,224,600,160,720,165.3C840,171,960,245,1080,261.3C1200,277,1320,235,1380,213.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
        <defs>
          <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9d0d12" />
            <stop offset="50%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

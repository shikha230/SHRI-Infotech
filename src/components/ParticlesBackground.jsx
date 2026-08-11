import React, { useEffect, useRef } from 'react'

export default function ParticlesBackground({
  particleCount = 40,
  particleColors = ['#9d0d12', '#e63946', '#38bdf8', '#ffffff'],
  maxRadius = 2.5,
  minRadius = 1,
  speed = 0.5,
  connectLines = true,
  lineColor = 'rgba(157, 13, 18, 0.15)',
  className = '',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.offsetWidth
      height = canvas.height = canvas.parentElement.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    // Mouse position tracking for soft proximity interaction
    const mouse = { x: -1000, y: -1000 }
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    const parent = canvas.parentElement
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove)
      parent.addEventListener('mouseleave', handleMouseLeave)
    }

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.radius = Math.random() * (maxRadius - minRadius) + minRadius
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)]
        this.vx = (Math.random() - 0.5) * speed
        this.vy = (Math.random() - 0.5) * speed
        this.alpha = Math.random() * 0.5 + 0.3
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Wrap around boundaries
        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0

        // Gentle mouse interaction
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          const angle = Math.atan2(dy, dx)
          const force = (120 - dist) / 120
          this.x -= Math.cos(angle) * force * 1.5
          this.y -= Math.sin(angle) * force * 1.5
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.alpha
        ctx.fill()
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle())

    let isVisible = true
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

    const render = () => {
      if (!isVisible) return

      ctx.clearRect(0, 0, width, height)
      ctx.globalAlpha = 1

      // Update & Draw particles
      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      // Draw connection lines between close particles
      if (connectLines) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < 110) {
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = lineColor
              ctx.globalAlpha = (1 - dist / 110) * 0.4
              ctx.lineWidth = 0.75
              ctx.stroke()
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove)
        parent.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [particleCount, speed, connectLines, lineColor, maxRadius, minRadius, particleColors])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full z-0 ${className}`}
    />
  )
}

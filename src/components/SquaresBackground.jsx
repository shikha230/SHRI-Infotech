import React, { useEffect, useRef } from 'react'

export default function SquaresBackground({
  squareSize = 40,
  strokeColor = 'rgba(157, 13, 18, 0.08)',
  hoverFillColor = 'rgba(157, 13, 18, 0.12)',
  glowColor = 'rgba(230, 57, 70, 0.25)',
  speed = 0.03,
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

    // Active glowing squares state
    const gridCols = Math.ceil(width / squareSize) + 1
    const gridRows = Math.ceil(height / squareSize) + 1
    
    // Track random glowing tiles
    const activeTiles = new Map()

    const getRandomTileKey = () => {
      const col = Math.floor(Math.random() * gridCols)
      const row = Math.floor(Math.random() * gridRows)
      return `${col},${row}`
    }

    const mouse = { col: -1, row: -1 }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      mouse.col = Math.floor(x / squareSize)
      mouse.row = Math.floor(y / squareSize)
    }

    const handleMouseLeave = () => {
      mouse.col = -1
      mouse.row = -1
    }

    const parent = canvas.parentElement
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove)
      parent.addEventListener('mouseleave', handleMouseLeave)
    }

    let time = 0

    const render = () => {
      time += speed
      ctx.clearRect(0, 0, width, height)

      // Randomly spawn active tiles
      if (Math.random() < 0.15 && activeTiles.size < 12) {
        const key = getRandomTileKey()
        if (!activeTiles.has(key)) {
          activeTiles.set(key, { opacity: 0, state: 'in', maxOpacity: Math.random() * 0.4 + 0.2 })
        }
      }

      // Draw Grid Lines
      ctx.strokeStyle = strokeColor
      ctx.lineWidth = 1

      for (let x = 0; x <= width; x += squareSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      for (let y = 0; y <= height; y += squareSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Draw Mouse Hover Tile
      if (mouse.col >= 0 && mouse.row >= 0) {
        ctx.fillStyle = hoverFillColor
        ctx.fillRect(mouse.col * squareSize, mouse.row * squareSize, squareSize, squareSize)
      }

      // Draw Glowing Tiles
      activeTiles.forEach((tile, key) => {
        const [colStr, rowStr] = key.split(',')
        const col = parseInt(colStr, 10)
        const row = parseInt(rowStr, 10)

        if (tile.state === 'in') {
          tile.opacity += 0.02
          if (tile.opacity >= tile.maxOpacity) tile.state = 'out'
        } else {
          tile.opacity -= 0.015
          if (tile.opacity <= 0) {
            activeTiles.delete(key)
            return
          }
        }

        ctx.fillStyle = glowColor
        ctx.globalAlpha = tile.opacity
        ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize)
        ctx.globalAlpha = 1
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove)
        parent.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [squareSize, strokeColor, hoverFillColor, glowColor, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full z-0 ${className}`}
    />
  )
}

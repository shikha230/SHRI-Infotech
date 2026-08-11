import { useCallback, useEffect, useRef } from 'react'
import './ElectricBorder.css'

const ElectricBorder = ({
  children,
  color = '#5227ff',
  speed = 1,
  chaos = 0.12,
  borderRadius = 24,
  thickness = 1.5,
  className = '',
  style,
}) => {
  const resolvedBorderRadius = style?.borderRadius ?? borderRadius
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  const timeRef = useRef(0)
  const lastFrameTimeRef = useRef(0)

  const random = useCallback((value) => {
    return (Math.sin(value * 12.9898) * 43758.5453) % 1
  }, [])

  const noise2D = useCallback((x, y) => {
    const left = Math.floor(x)
    const top = Math.floor(y)
    const fractionX = x - left
    const fractionY = y - top
    const smoothX = fractionX * fractionX * (3 - 2 * fractionX)
    const smoothY = fractionY * fractionY * (3 - 2 * fractionY)
    const cell = top * 57
    const topLeft = random(left + cell)
    const topRight = random(left + 1 + cell)
    const bottomLeft = random(left + (top + 1) * 57)
    const bottomRight = random(left + 1 + (top + 1) * 57)

    return (
      topLeft * (1 - smoothX) * (1 - smoothY) +
      topRight * smoothX * (1 - smoothY) +
      bottomLeft * (1 - smoothX) * smoothY +
      bottomRight * smoothX * smoothY
    )
  }, [random])

  const getRoundedRectPoint = useCallback((progress, left, top, width, height, radius) => {
    const straightWidth = width - 2 * radius
    const straightHeight = height - 2 * radius
    const cornerArc = (Math.PI * radius) / 2
    const perimeter = 2 * straightWidth + 2 * straightHeight + 4 * cornerArc
    const distance = progress * perimeter
    let offset = 0

    if (distance <= offset + straightWidth) {
      const amount = (distance - offset) / straightWidth
      return { x: left + radius + amount * straightWidth, y: top }
    }
    offset += straightWidth

    if (distance <= offset + cornerArc) {
      const amount = (distance - offset) / cornerArc
      return { x: left + width - radius + radius * Math.cos(-Math.PI / 2 + amount * Math.PI / 2), y: top + radius + radius * Math.sin(-Math.PI / 2 + amount * Math.PI / 2) }
    }
    offset += cornerArc

    if (distance <= offset + straightHeight) {
      const amount = (distance - offset) / straightHeight
      return { x: left + width, y: top + radius + amount * straightHeight }
    }
    offset += straightHeight

    if (distance <= offset + cornerArc) {
      const amount = (distance - offset) / cornerArc
      return { x: left + width - radius + radius * Math.cos(amount * Math.PI / 2), y: top + height - radius + radius * Math.sin(amount * Math.PI / 2) }
    }
    offset += cornerArc

    if (distance <= offset + straightWidth) {
      const amount = (distance - offset) / straightWidth
      return { x: left + width - radius - amount * straightWidth, y: top + height }
    }
    offset += straightWidth

    if (distance <= offset + cornerArc) {
      const amount = (distance - offset) / cornerArc
      return { x: left + radius + radius * Math.cos(Math.PI / 2 + amount * Math.PI / 2), y: top + height - radius + radius * Math.sin(Math.PI / 2 + amount * Math.PI / 2) }
    }
    offset += cornerArc

    if (distance <= offset + straightHeight) {
      const amount = (distance - offset) / straightHeight
      return { x: left, y: top + height - radius - amount * straightHeight }
    }
    offset += straightHeight

    const amount = (distance - offset) / cornerArc
    return { x: left + radius + radius * Math.cos(Math.PI + amount * Math.PI / 2), y: top + radius + radius * Math.sin(Math.PI + amount * Math.PI / 2) }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !container || !context) return undefined

    const padding = 28
    const resize = () => {
      const bounds = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = bounds.width + padding * 2
      const height = bounds.height + padding * 2
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      return { width, height, dpr }
    }

    let dimensions = resize()
    const draw = (currentTime) => {
      const delta = (currentTime - lastFrameTimeRef.current) / 1000
      timeRef.current += delta * speed
      lastFrameTimeRef.current = currentTime
      context.setTransform(dimensions.dpr, 0, 0, dimensions.dpr, 0, 0)
      context.clearRect(0, 0, dimensions.width, dimensions.height)
      context.strokeStyle = color
      context.lineWidth = thickness
      context.lineCap = 'round'
      context.lineJoin = 'round'

      const width = dimensions.width - padding * 2
      const height = dimensions.height - padding * 2
      const radius = Math.min(resolvedBorderRadius, width / 2, height / 2)
      const samples = Math.max(80, Math.floor((width + height) * 1.5))
      context.beginPath()

      for (let index = 0; index <= samples; index += 1) {
        const progress = index / samples
        const point = getRoundedRectPoint(progress, padding, padding, width, height, radius)
        const displacementX = noise2D(progress * 8 + timeRef.current * 0.18, 1) * chaos * 28
        const displacementY = noise2D(progress * 8 + timeRef.current * 0.18, 3) * chaos * 28
        const x = point.x + displacementX
        const y = point.y + displacementY
        if (index === 0) context.moveTo(x, y)
        else context.lineTo(x, y)
      }

      context.closePath()
      context.stroke()
      animationRef.current = requestAnimationFrame(draw)
    }

    const observer = new ResizeObserver(() => {
      dimensions = resize()
    })
    observer.observe(container)
    animationRef.current = requestAnimationFrame(draw)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      observer.disconnect()
    }
  }, [chaos, color, getRoundedRectPoint, noise2D, resolvedBorderRadius, speed, thickness])

  return (
    <div
      ref={containerRef}
      className={`electric-border ${className}`}
      style={{ '--electric-border-color': color, '--electric-border-radius': `${resolvedBorderRadius}px`, ...style }}
    >
      <canvas ref={canvasRef} className="electric-border__canvas" aria-hidden="true" />
      <div className="electric-border__glow electric-border__glow--soft" aria-hidden="true" />
      <div className="electric-border__glow electric-border__glow--bright" aria-hidden="true" />
      <div className="electric-border__content">{children}</div>
    </div>
  )
}

export default ElectricBorder

import React from 'react'

export default function ShinyText({
  text,
  children,
  disabled = false,
  speed = 4,
  className = ''
}) {
  const content = text || children

  if (disabled) {
    return <span className={className}>{content}</span>
  }

  const baseClass = className.includes('shiny-text-dark') ? 'shiny-text-dark' : 'shiny-text'
  const finalClassName = className ? `${baseClass} ${className.replace('shiny-text-dark', '').replace('shiny-text', '')}`.trim() : baseClass

  return (
    <span
      className={finalClassName}
      style={{
        animationDuration: `${speed}s`
      }}
    >
      {content}
    </span>
  )
}

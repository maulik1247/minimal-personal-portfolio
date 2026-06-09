import React from 'react'

interface DescriptionProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

const Description: React.FC<DescriptionProps> = ({ text, className, style }) => {
  return (
    <span
      className={`text-[18px] ${className || ''}`}
      style={{ 
        fontFamily: 'var(--font-gabarito), Gabarito, sans-serif',
        color: 'oklch(55.6% 0 0)', 
        ...style 
      }}
    >
      {text}
    </span>
  )
}

export default Description
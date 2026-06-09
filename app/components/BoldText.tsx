import React from 'react'

interface BoldTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

const BoldText: React.FC<BoldTextProps> = ({ text, className = '', style = {} }) => {
  return (
    <span 
      className={`text-[18px] font-bold ${className}`} 
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

export default BoldText
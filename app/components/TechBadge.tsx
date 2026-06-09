import React from 'react'

interface TechBadgeProps {
  href: string
  icon: React.ComponentType<{ className?: string }>
  text: string
  iconColor: string
}

export default function TechBadge({ href, icon: Icon, text, iconColor }: TechBadgeProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white gap-1.5 hover:bg-gray-100 dark:hover:bg-white/25 transition-colors"
    >
      <Icon className={`w-3 h-3 ${iconColor}`} />
      <span className="font-bold text-black text-base" style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}>
        {text}
      </span>
    </a>
  )
}
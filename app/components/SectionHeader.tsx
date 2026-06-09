import React from 'react'

interface SectionHeaderProps {
  title: string
  eyebrow?: string
}

export default function SectionHeader({ title, eyebrow = 'Featured' }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 text-left">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}

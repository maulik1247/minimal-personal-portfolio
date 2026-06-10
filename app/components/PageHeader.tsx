import React from 'react'

type PageHeaderProps = {
  title: string
  subtitle: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-3 text-center">
      <h1 className="page-title">
        {title}
      </h1>
      <p
        className="text-base text-[#909092] sm:text-lg"
        style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
      >
        {subtitle}
      </p>
      <div className="mt-2 border-t border-gray-200" />
    </div>
  )
}

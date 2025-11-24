import React from 'react'
import TechStackScroll from './TechStackScroll'

export default function TechStackSection() {
  return (
    <section style={{ backgroundColor: 'white' }}>
      <div className="p-16">
        {/* Header */}
        <div className="text-left">
          <div className="text-sm font-medium text-gray-500 mb-2" style={{ fontFamily: 'Product Sans, sans-serif' }}>
            Featured
          </div>
          <h2 className="font-bold text-black mb-4" style={{ fontFamily: 'Product Sans, sans-serif', fontSize: '24px' }}>
            Tech Stack
          </h2>
        </div>

        {/* Tech Stack Scroll */}
        <TechStackScroll />
      </div>
    </section>
  )
}

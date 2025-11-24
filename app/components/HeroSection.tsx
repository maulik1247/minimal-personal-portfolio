"use client"

import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa'
import { IoDocumentTextOutline } from 'react-icons/io5'

export default function HeroSection() {
  return (
    <div className='h-min p-16' style={{ backgroundColor: 'white' }}>
      {/* Avatar */}
      <div className="avatar avatar-online">
        <div className="w-32 h-32 rounded-full">
          <img 
            src="https://i.pinimg.com/1200x/df/1f/f5/df1ff5652a76bd055848ac13371edada.jpg" 
            alt="Profile Avatar" 
            className="w-full h-full rounded-full object-cover" 
          />
        </div>
      </div>

      {/* Content */}
      <div className='flex flex-col gap-6 mt-[32px]'>
        {/* Main Heading */}
        <div className='max-w-6xl'>
          <h1 className='text-4xl font-bold text-black' style={{ fontFamily: 'Product Sans, sans-serif' }}>
            Hi, I'm Maulik - <span className='text-[#909092]'>A Full Stack Developer.</span>
          </h1>
        </div>

        {/* Description */}
        <div className='text-base md:text-lg text-neutral-500'>
          <p>I bring ideas to life — one overly ambitious project at a time.
Whether it’s visuals, interfaces, or random experiments at 2 AM, I like making things that feel right (and maybe look cooler than they need to).</p>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-4'>
          <button 
            className="bg-white text-black px-6 py-3.5 font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2 border border-black" 
            style={{ 
              borderRadius: '14px', 
              height: 'min-content', 
              width: 'min-content', 
              overflow: 'visible', 
              display: 'flex', 
              flexDirection: 'row', 
              whiteSpace: 'nowrap', 
              fontSize: '16px', 
              fontFamily: 'Product Sans, sans-serif' 
            }}
          >
            <IoDocumentTextOutline className="w-4 h-4" />
            Resume/CV
          </button>
          
          <button 
            className="text-white px-6 py-3.5 font-medium hover:bg-gray-700 transition-colors inline-flex items-center gap-2" 
            style={{ 
              backgroundColor: '#1a1a1a', 
              borderRadius: '14px', 
              height: 'min-content', 
              width: 'min-content', 
              overflow: 'visible', 
              display: 'flex', 
              flexDirection: 'row', 
              whiteSpace: 'nowrap', 
              fontSize: '16px', 
              fontFamily: 'Product Sans, sans-serif' 
            }}
          >
            <FaRegPaperPlane className="w-4 h-4" />
            Get in touch
          </button>
         </div>
      </div>
    </div>
  )
}
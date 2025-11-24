"use client"

import React from 'react'
import { SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiVuedotjs, SiNodedotjs, SiAngular, SiPostgresql, SiTailwindcss, SiPython, SiMongodb, SiDocker, SiGit, SiFigma, SiVercel, SiBun } from 'react-icons/si'
import TechStackScroll from './TechStackScroll'

export default function AboutSection() {
  return (
    <section style={{ backgroundColor: 'white' }}>
      <div className="p-16 flex flex-col gap-8">
        {/* Header */}
        <div className="text-left flex flex-col gap-2">
          <div className="text-sm font-medium text-gray-500" style={{ fontFamily: 'Product Sans, sans-serif' }}>
            Featured
          </div>
          <h2 className="font-bold text-black" style={{ fontFamily: 'Product Sans, sans-serif', fontSize: '24px' }}>
            About
          </h2>
        </div>

        {/* Content Container */}
        <div className="max-w-6xl">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Image */}
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.pinimg.com/1200x/df/1f/f5/df1ff5652a76bd055848ac13371edada.jpg" 
                  alt="Maulik" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-4 flex flex-col justify-start">
              {/* Name */}
              <h3 className="text-3xl font-bold text-black" style={{ fontFamily: 'Product Sans, sans-serif' }}>
                Maulik Tanna
              </h3>
              
              {/* Description */}
              <div className="space-y-3">
                <p className="text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Product Sans, sans-serif' }}>
                  I'm a Full Stack web developer and Open Source Contributor, I love building products to solve real-world problems. <br/><br/>

                  I thrive on transforming ideas into reality, whether it's crafting digital interfaces, designing immersive visuals, or building websites that feel effortless to use.
                </p>
              </div>

              {/* Skills Section */}
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-black" style={{ fontFamily: 'Product Sans, sans-serif' }}>
                  Skills
                </h4>
                
                {/* Tech Stack Scroll */}
                <TechStackScroll />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

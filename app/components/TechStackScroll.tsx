"use client"

import React from 'react'
import { 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPostgresql, 
  SiDocker, 
  SiVercel, 
  SiGithub, 
  SiFigma 
} from 'react-icons/si'

const techIcons = [
  { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600' },
  { icon: SiReact, name: 'React', color: 'text-blue-500' },
  { icon: SiNextdotjs, name: 'Next.js', color: 'text-black' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-500' },
  { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-600' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-700' },
  { icon: SiDocker, name: 'Docker', color: 'text-blue-500' },
  { icon: SiVercel, name: 'Vercel', color: 'text-black' },
  { icon: SiGithub, name: 'GitHub', color: 'text-black' },
  { icon: SiFigma, name: 'Figma', color: 'text-purple-500' },
]

export default function TechStackScroll() {
  const [isPaused, setIsPaused] = React.useState(false)

  return (
            <div className="relative overflow-hidden rounded-lg p-6" style={{ backgroundColor: 'white' }}>
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-transparent z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, white, transparent)' }}></div>
      
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-transparent to-transparent z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, white, transparent)' }}></div>
      
      {/* Infinite Scroll Container */}
      <div className="relative">
        <div 
          className="flex gap-6" 
          style={{
            animation: 'scroll 15s linear infinite',
            width: 'max-content',
            animationPlayState: isPaused ? 'paused' : 'running',
            transition: 'animation-play-state 0.1s ease-in-out'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* First set of icons */}
          {techIcons.map((tech, index) => (
            <tech.icon 
              key={`first-${index}`} 
              className={`w-12 h-12 ${tech.color} hover:scale-110 transition-transform cursor-pointer`} 
            />
          ))}
          
          {/* Duplicate set for seamless loop */}
          {techIcons.map((tech, index) => (
            <tech.icon 
              key={`second-${index}`} 
              className={`w-12 h-12 ${tech.color} hover:scale-110 transition-transform cursor-pointer`} 
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
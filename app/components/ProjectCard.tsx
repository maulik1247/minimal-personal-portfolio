"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { CiGlobe } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'
import { IoArrowForwardOutline } from 'react-icons/io5'

interface TechIcon {
  icon: React.ComponentType<{ className?: string }>
  color: string
  name: string
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  imageFit?: 'cover' | 'contain'
  gradientBackground: string
  technologies: TechIcon[]
  status: 'operational' | 'building'
  liveUrl?: string
  githubUrl?: string
  detailsUrl?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  imageFit = 'cover',
  gradientBackground,
  technologies,
  status,
  liveUrl,
  githubUrl,
  detailsUrl = '#',
}: ProjectCardProps) {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null)
  const showTooltip = (text: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setTooltip({
      text,
      x: rect.left + rect.width / 2,
      y: rect.top
    })
  }

  const hideTooltip = () => {
    setTooltip(null)
  }

  return (
    <div
      className="interactive-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white"
    >
      {/* Tooltip */}
      {tooltip && (
        <div
          style={{
            position: 'fixed',
            left: `${tooltip.x}px`,
            top: `${tooltip.y - 40}px`,
            transform: 'translateX(-50%)',
            backgroundColor: '#1a1a1a',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            fontFamily: 'var(--font-gabarito), Gabarito, sans-serif',
            pointerEvents: 'none',
            zIndex: 1000,
            whiteSpace: 'nowrap',
            opacity: tooltip ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out'
          }}
        >
          {tooltip.text}
        </div>
      )}
      {/* Image Area */}
      <div
        className={`relative overflow-hidden rounded-t-2xl ${
          imageFit === 'contain' ? 'bg-neutral-100' : ''
        }`}
      >
        <img
          src={image}
          alt={title}
          className={
            imageFit === 'contain'
              ? 'interactive-image block h-auto w-full object-contain object-center'
              : 'interactive-image block h-[200px] w-full object-cover object-center'
          }
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-col gap-4" style={{ padding: '20px' }}>
        {/* Title with Icons */}
        <div className="flex justify-between items-center">
          <h3
            className="text-xl font-bold text-black"
            style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
          >
            {title}
          </h3>
          <div className="flex gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) => showTooltip('View Live Project', e)}
                onMouseLeave={hideTooltip}
                style={{
                  color: '#666',
                  textDecoration: 'none'
                }}
              >
                <CiGlobe className="w-6 h-6" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) => showTooltip('View on GitHub', e)}
                onMouseLeave={hideTooltip}
                style={{
                  color: '#666',
                  textDecoration: 'none'
                }}
              >
                <FiGithub className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-gabarito), Gabarito, sans-serif',
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#909092'
          }}
        >
          {description}
        </p>

          {/* Technologies Section */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-gabarito), Gabarito, sans-serif',
                fontSize: '14px',
                color: '#909092',
                marginBottom: '14px'
              }}
            >
              Technologies
            </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {technologies.map((tech, techIndex) => (
              <div
                key={techIndex}
                onMouseEnter={(e) => showTooltip(tech.name, e)}
                onMouseLeave={hideTooltip}
                style={{ cursor: 'pointer' }}
              >
                <tech.icon className={`w-6 h-6 ${tech.color}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Status Badge and View Details */}
        <div className="flex justify-between items-center">
          <span
            style={{
              padding: '6px 12px',
              borderRadius: '12px',
              fontSize: '12px',
              fontFamily: 'var(--font-gabarito), Gabarito, sans-serif',
              fontWeight: '500',
              backgroundColor: status === 'operational' ? '#dcfce7' : '#fef2f2',
              color: '#1a1a1a',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: status === 'operational' ? '#16a34a' : '#dc2626'
              }}
            />
            {status === 'operational' ? 'All Systems Operational' : 'Building'}
          </span>
          <Link
            href={detailsUrl}
            className="btn-smooth flex items-center gap-1 hover:gap-2"
            style={{
              color: '#1a1a1a',
              fontSize: '14px',
              fontFamily: 'var(--font-gabarito), Gabarito, sans-serif',
              textDecoration: 'none',
            }}
          >
            View Details
            <IoArrowForwardOutline style={{ fontSize: '16px' }} />
          </Link>
        </div>
      </div>
    </div>
  )
}


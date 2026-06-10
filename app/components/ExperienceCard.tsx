"use client"

import React from 'react'
import { IconType } from 'react-icons'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface ExperienceCardProps {
  companyIcon: IconType
  companyName: string
  position: string
  startDate: string
  endDate: string
  location: string
  isCurrent?: boolean
  technologies?: Array<{
    icon: IconType
    name: string
    href: string
    iconColor: string
  }>
  responsibilities?: string[]
  showDropdown?: boolean
  iconBgColor?: string
  iconColor?: string
  socialLinks?: Array<{
    icon: IconType
    href: string
    label: string
  }>
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyIcon: CompanyIcon,
  companyName,
  position,
  startDate,
  endDate,
  location,
  isCurrent = false,
  technologies = [],
  responsibilities = [],
  showDropdown = false,
  iconBgColor = 'bg-black',
  iconColor = 'text-white',
  socialLinks = []
}) => {
  const [isExpanded, setIsExpanded] = React.useState(!showDropdown || isCurrent); // Start expanded if no dropdown or if currently working
  const [tooltip, setTooltip] = React.useState<{ text: string; x: number; y: number } | null>(null)

  const toggleExpanded = () => {
    if (showDropdown && !isCurrent) {
      setIsExpanded(!isExpanded);
    }
  };

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
    <div>
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
      {/* Company Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-start gap-3 sm:gap-4">
          {/* Company Logo */}
          <div className="relative">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg sm:h-16 sm:w-16 ${iconBgColor}`}>
              <CompanyIcon className={`h-6 w-6 sm:h-8 sm:w-8 ${iconColor}`} />
            </div>
          </div>
          
          {/* Company Info */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className={`${isCurrent ? 'text-lg' : 'text-base'} font-semibold text-black`} style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}>
                {companyName}
              </h3>
              {socialLinks.length > 0 && (
                <div className="flex items-center gap-2">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black transition-colors"
                      onMouseEnter={(e) => showTooltip(link.label, e)}
                      onMouseLeave={hideTooltip}
                    >
                      <link.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              )}
              {showDropdown && !isCurrent && (
                <button 
                  onClick={toggleExpanded}
                  className="cursor-pointer rounded p-1 transition-all duration-300 ease-smooth hover:bg-gray-100"
                >
                  <div className={`transition-transform duration-300 ease-smooth ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                    <FaChevronDown className="w-3 h-3 text-gray-400" />
                  </div>
                </button>
              )}
              {isCurrent && (
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-green-100 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <p className="text-xs text-green-600 font-medium" style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}>
                    Currently working
                  </p>
                </div>
              )}
            </div>
            <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}>
              {position}
            </p>
          </div>
        </div>

        {/* Date & Location */}
        <div className="shrink-0 text-left sm:text-right">
          <p className="text-sm font-medium text-[#909092] sm:text-base" style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}>
            {startDate} - {endDate}
          </p>
          <p className="text-sm text-[#909092] sm:text-base" style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}>
            {location}
          </p>
        </div>
      </div>

      {/* Technologies & Tools */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-smooth ${
          isExpanded && technologies.length > 0 ? 'max-h-[2000px] opacity-100 mb-6 mt-4' : 'max-h-0 opacity-0 mb-0 mt-0'
        }`}
      >
        <div>
          <h4 className="text-[16px] font-semibold text-black mb-3" style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}>
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <a 
                key={index}
                href={tech.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm border border-dashed dark:border-white/30 border-gray-400 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white gap-1.5"
                style={{ backgroundColor: 'color-mix(in oklab,var(--color-black) 5%,transparent)' }}
              >
                <tech.icon className={`w-4 h-4 ${tech.iconColor}`} />
                <span className="font-bold text-black" style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif', fontSize: '14px' }}>
                  {tech.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Responsibilities */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-smooth ${
          isExpanded && responsibilities.length > 0 ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div>
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 shrink-0"></div>
                <p style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif', color: '#909092', fontSize: '16px' }}>
                  {responsibility}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard

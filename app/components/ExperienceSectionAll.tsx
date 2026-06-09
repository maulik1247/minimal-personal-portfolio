"use client"

import React from 'react'
import { experiences } from '@/lib/experienceData'
import ExperienceCard from './ExperienceCard'

export default function ExperienceSectionAll() {
  return (
    <section style={{ backgroundColor: 'white' }}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 text-center">
          <h2
            className="text-[48px] font-bold text-black"
            style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
          >
            Work Experience
          </h2>
          <p
            className="text-lg text-[#909092]"
            style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
          >
            5.6 years building AI-native B2B SaaS products and enterprise workflow platforms.
          </p>
          <div className="mt-2 border-t border-gray-200" />
        </div>

        <div className="flex flex-col gap-12">
          <h3
            className="text-2xl font-bold text-black"
            style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
          >
            All Experiences{' '}
            <span className="font-normal text-gray-400">
              ({experiences.length} experiences)
            </span>
          </h3>
          <div className="flex flex-col gap-16">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.companyName}
                companyIcon={experience.companyIcon}
                companyName={experience.companyName}
                position={experience.position}
                startDate={experience.startDate}
                endDate={experience.endDate}
                location={experience.location}
                isCurrent={experience.isCurrent}
                showDropdown={false}
                iconBgColor={experience.iconBgColor}
                iconColor={experience.iconColor}
                technologies={experience.technologies}
                responsibilities={experience.responsibilities}
                socialLinks={experience.socialLinks}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

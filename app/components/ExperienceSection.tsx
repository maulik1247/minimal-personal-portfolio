"use client"

import React from 'react'
import Link from 'next/link'
import { experiences } from '@/lib/experienceData'
import ExperienceCard from './ExperienceCard'
import SectionHeader from './SectionHeader'
import MotionReveal, { MotionStagger, MotionStaggerItem } from './MotionReveal'

export default function ExperienceSection() {
  return (
    <section id="work" className="scroll-mt-28 bg-white">
      <div className="section-shell">
        <MotionReveal>
          <SectionHeader title="Experience" />
        </MotionReveal>

        <MotionStagger className="flex flex-col gap-8">
          {experiences.map((experience, index) => (
            <MotionStaggerItem key={experience.companyName}>
            <ExperienceCard
              key={experience.companyName}
              companyIcon={experience.companyIcon}
              companyLogo={experience.companyLogo}
              companyName={experience.companyName}
              position={experience.position}
              startDate={experience.startDate}
              endDate={experience.endDate}
              location={experience.location}
              isCurrent={experience.isCurrent}
              showDropdown={index > 0}
              iconBgColor={experience.iconBgColor}
              iconColor={experience.iconColor}
              technologies={experience.technologies}
              responsibilities={experience.responsibilities}
              socialLinks={experience.socialLinks}
            />
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionReveal delay={0.15} className="text-center">
          <Link
            href="/experiences"
            className="btn-smooth inline-block rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-black no-underline hover:bg-gray-50"
          >
            Show all work experiences
          </Link>
        </MotionReveal>
      </div>
    </section>
  )
}

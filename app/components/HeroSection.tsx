"use client"

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FaRegPaperPlane } from 'react-icons/fa'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { resumeUrl } from '@/lib/resumeData'
import { defaultTransition, fadeUp, smoothEase, staggerContainer } from '@/lib/motion'
import { useContactModal } from './AppProviders'

const titleLines = [
  'Fall in love with the problem,',
  'not the solution.',
]

function roundCoord(value: number) {
  return Number(value.toFixed(2))
}

function IndiaFlagIcon({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex overflow-hidden rounded-[2px] shadow-sm ring-1 ring-black/10 ${className ?? ''}`}
      aria-label="India"
      role="img"
    >
      <svg viewBox="0 0 24 16" className="h-full w-full">
        <rect width="24" height="16" fill="#FFFFFF" />
        <rect width="24" height="5.33" fill="#FF9933" />
        <rect y="10.67" width="24" height="5.33" fill="#138808" />
        <circle cx="12" cy="8" r="2.2" fill="none" stroke="#000080" strokeWidth="0.45" />
        <circle cx="12" cy="8" r="0.35" fill="#000080" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 24
          const x1 = roundCoord(12 + Math.cos(angle) * 0.35)
          const y1 = roundCoord(8 + Math.sin(angle) * 0.35)
          const x2 = roundCoord(12 + Math.cos(angle) * 2.2)
          const y2 = roundCoord(8 + Math.sin(angle) * 2.2)
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#000080"
              strokeWidth="0.18"
            />
          )
        })}
      </svg>
    </span>
  )
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <section className="hero-shell gap-4">
        <HeroContent />
      </section>
    )
  }

  return (
    <motion.section
      className="hero-shell gap-4"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <HeroContent motionEnabled />
    </motion.section>
  )
}

function HeroContent({ motionEnabled = false }: { motionEnabled?: boolean }) {
  const { openContactModal } = useContactModal()
  const Wrapper = motionEnabled ? motion.div : 'div'
  const LineWrapper = motionEnabled ? motion.span : 'span'
  const wrapperProps = motionEnabled
    ? { variants: fadeUp, transition: defaultTransition }
    : {}

  return (
    <>
      <Wrapper className="flex items-center gap-2 section-eyebrow" {...wrapperProps}>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
        based in
        <IndiaFlagIcon className="h-3.5 w-5 shrink-0" />
      </Wrapper>

      <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-black md:text-5xl lg:text-[3.25rem]">
        {titleLines.map((line, index) => (
          <LineWrapper
            key={line}
            className="block"
            {...(motionEnabled
              ? {
                  variants: fadeUp,
                  transition: { ...defaultTransition, delay: 0.08 * (index + 1) },
                }
              : {})}
          >
            <span
              className="px-1.5 py-0.5"
              style={{
                backgroundColor: '#D4F7D4',
                boxDecorationBreak: 'clone',
                WebkitBoxDecorationBreak: 'clone',
              }}
            >
              {line}
            </span>
          </LineWrapper>
        ))}
      </h1>

      <Wrapper className="body-text max-w-xl md:text-lg" {...wrapperProps}>
        Hello! I&apos;m Maulik — I build AI-native products and product ops systems
        for enterprise teams. 5+ years turning messy operations into things that
        actually scale.
      </Wrapper>

      <Wrapper className="flex w-full max-w-md flex-col justify-center gap-3 pt-2 sm:max-w-none sm:flex-row sm:flex-wrap" {...wrapperProps}>
        <motion.a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-smooth inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-black bg-white px-6 py-3.5 text-base font-medium text-black hover:bg-gray-50 sm:w-auto"
          {...(motionEnabled
            ? { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, transition: { ease: smoothEase } }
            : {})}
        >
          <IoDocumentTextOutline className="h-4 w-4" />
          Resume/CV
        </motion.a>

        <motion.button
          type="button"
          onClick={openContactModal}
          className="btn-smooth inline-flex w-full items-center justify-center gap-2 rounded-[14px] bg-neutral-900 px-6 py-3.5 text-base font-medium text-white hover:bg-neutral-700 sm:w-auto"
          {...(motionEnabled
            ? { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, transition: { ease: smoothEase } }
            : {})}
        >
          <FaRegPaperPlane className="h-4 w-4" />
          Get in touch
        </motion.button>
      </Wrapper>
    </>
  )
}

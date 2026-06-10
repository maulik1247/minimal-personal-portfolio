"use client"

import React from 'react'
import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards'
import SectionHeader from './SectionHeader'
import MotionReveal from './MotionReveal'

const testimonials = [
  {
    quote:
      "Maulik joined as employee #2 and immediately became the person who turned chaos into a roadmap. He owns the full loop — discovery, specs, launches, and post-release iteration — without needing hand-holding.",
    name: 'Arjun Mehta',
    title: 'Co-founder, Neome.ai',
  },
  {
    quote:
      "He writes PRDs engineers actually want to read. Requirements are scoped, edge cases are thought through, and he stays in the room until features ship — not just until the ticket is filed.",
    name: 'Priya Nair',
    title: 'Engineering Lead',
  },
  {
    quote:
      "Our onboarding used to take days. Maulik mapped the enterprise journey, cut time-to-value to hours, and built self-serve templates so our team could configure workflows without calling support.",
    name: 'Rahul Sharma',
    title: 'Head of Customer Success',
  },
  {
    quote:
      "Maulik pairs product instinct with real AI fluency. He knew when prompt-first beat RAG for our use case and made the call that kept latency low without sacrificing quality for enterprise users.",
    name: 'Sneha Kapoor',
    title: 'VP Product',
  },
  {
    quote:
      "On every launch he aligned sales, engineering, and leadership on ICP, messaging, and onboarding. Trial-to-paid improved noticeably because the product story finally matched what customers experienced.",
    name: 'Daniel Okonkwo',
    title: 'Head of Growth',
  },
  {
    quote:
      "He prototypes fast — Figma, v0, Cursor — so we debate real flows instead of abstract ideas. That shortened our cycle from insight to build and kept design and engineering focused.",
    name: 'Lisa Fernandez',
    title: 'Design Lead',
  },
  {
    quote:
      "Forty-plus customer interviews turned into journey maps and bets we could defend. Maulik doesn't collect feedback for slides — he turns it into prioritisation that moves adoption.",
    name: 'Michael Chen',
    title: 'Product Operations',
  },
  {
    quote:
      "CRM, Slack, WhatsApp, internal APIs — he scoped integrations end to end and kept enterprise stakeholders calm through rollout. Rare mix of technical depth and client-facing poise.",
    name: 'Ananya Reddy',
    title: 'Enterprise Account Director',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white">
      <div className="section-shell pb-4 sm:pb-6">
        <MotionReveal>
          <SectionHeader title="Testimonials" eyebrow="What People Say" />
        </MotionReveal>
      </div>

      <MotionReveal delay={0.1} className="full-bleed overflow-hidden py-2">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={false}
          className="max-w-none"
        />
      </MotionReveal>
    </section>
  )
}

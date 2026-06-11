"use client"

import React from 'react'
import { InfiniteMovingGameCards } from '@/components/ui/infinite-moving-game-cards'
import { favoriteGames } from '@/lib/videoGamesData'
import SectionHeader from './SectionHeader'
import MotionReveal from './MotionReveal'

export default function VideoGamesSection() {
  return (
    <section className="bg-white">
      <div className="section-shell pb-4 sm:pb-6">
        <MotionReveal>
          <SectionHeader title="Favorite Video Games" eyebrow="Off the clock" />
        </MotionReveal>
      </div>

      <MotionReveal delay={0.1} className="full-bleed relative overflow-hidden py-4 sm:py-6">
        <InfiniteMovingGameCards
          items={favoriteGames}
          direction="right"
          speed="slow"
          className="max-w-none"
        />

        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-16 bg-linear-to-r from-white to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-16 bg-linear-to-l from-white to-transparent sm:w-20" />
      </MotionReveal>
    </section>
  )
}

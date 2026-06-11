"use client"

import React from 'react'
import { InfiniteMovingGameCards } from '@/components/ui/infinite-moving-game-cards'
import { favoriteGames } from '@/lib/videoGamesData'

export default function VideoGamesSection() {
  return (
    <section className="bg-white">
      <div className="section-shell">
        <div className="flex flex-col gap-2">
          <p className="section-eyebrow">Off the clock</p>
          <h3 className="section-title text-gray-700">Favorite Games</h3>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-xl">
          <InfiniteMovingGameCards
            items={favoriteGames}
            direction="right"
            speed="slow"
            className="max-w-none"
          />

          <div className="carousel-fade-left pointer-events-none absolute inset-y-0 left-0 z-30 w-12 sm:w-20" />
          <div className="carousel-fade-right pointer-events-none absolute inset-y-0 right-0 z-30 w-12 sm:w-20" />
        </div>
      </div>
    </section>
  )
}

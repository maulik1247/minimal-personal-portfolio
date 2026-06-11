"use client"

import React from 'react'
import { InfiniteMovingDestinationCards } from '@/components/ui/infinite-moving-destination-cards'
import { destinationsTravelled } from '@/lib/destinationsData'

export default function DestinationsSection() {
  return (
    <section className="bg-white">
      <div className="section-shell">
        <div className="flex flex-col gap-2">
          <p className="section-eyebrow">Wanderlust</p>
          <h3 className="section-title text-gray-700">Destinations Travelled</h3>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-xl">
          <InfiniteMovingDestinationCards
            items={destinationsTravelled}
            direction="right"
            speed="slow"
            className="max-w-none"
          />

          <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-16 bg-linear-to-r from-white to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-16 bg-linear-to-l from-white to-transparent sm:w-20" />
        </div>
      </div>
    </section>
  )
}

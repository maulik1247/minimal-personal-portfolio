"use client"

import React from 'react'
import dynamic from 'next/dynamic'
import TechStackScroll from './TechStackScroll'
import MotionReveal, { MotionStagger, MotionStaggerItem } from './MotionReveal'

const PixelatedCanvas = dynamic(
  () => import('@/components/ui/pixelated-canvas').then((mod) => mod.PixelatedCanvas),
  {
    ssr: false,
    loading: () => (
      <img
        src="/profile-picture.png"
        alt="Maulik"
        className="h-full w-full rounded-2xl object-cover"
      />
    ),
  }
)

export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="section-shell">
        <MotionReveal>
          <h2 className="section-title">About</h2>
        </MotionReveal>

        <MotionStagger className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <MotionStaggerItem className="flex justify-center">
            <div className="mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl transition-transform duration-500 ease-smooth sm:max-w-[340px] md:max-w-96 md:hover:scale-[1.02]">
              <PixelatedCanvas
                src="/profile-picture.png"
                width={384}
                height={384}
                cellSize={3}
                dotScale={1}
                shape="square"
                dropoutStrength={0}
                tintStrength={0}
                backgroundColor="#ffffff"
                objectFit="cover"
                sampleAverage
                interactive
                distortionMode="swirl"
                distortionStrength={3}
                distortionRadius={70}
                className="h-full w-full rounded-2xl"
              />
            </div>
          </MotionStaggerItem>

          <MotionStaggerItem className="flex flex-col gap-6">
            <p className="body-text">
              I&apos;m Maulik — a product manager who&apos;s been employee #2 at an AI-native SaaS startup, which means I&apos;ve done everything from writing PRDs to personally onboarding enterprise clients at 11pm.
              <br />
              <br />
              I specialize in workflow automation, LLM-powered products, and enterprise B2B systems. I like finding the ugly process nobody has documented and turning it into something that actually scales.
            </p>

            <div className="space-y-3">
              <h4 className="text-lg font-bold text-black">Skills</h4>
              <TechStackScroll />
            </div>
          </MotionStaggerItem>
        </MotionStagger>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import { tracks, type Track } from '@/lib/musicData'
import { useMusicPlayer } from './MusicPlayerProvider'

function TrackCard({
  track,
  imageUrl,
  onPlay,
  isActive,
}: {
  track: Track
  imageUrl?: string
  onPlay: (track: Track) => void
  isActive: boolean
}) {
  const [isHovered, setIsHovered] = React.useState(false)
  const poster = imageUrl || track.albumArt

  return (
    <div className="w-[180px] shrink-0">
      <button
        type="button"
        onClick={() => onPlay(track)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group w-full text-left transition-transform duration-200 hover:scale-[1.03]"
      >
        <div
          className={`relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-neutral-200 ring-1 ring-black/10 ${
            isActive ? 'ring-2 ring-[#1DB954] ring-offset-2' : ''
          }`}
        >
          <img
            src={poster}
            alt={track.title}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div
            className="pointer-events-none absolute inset-0 bg-black/[0.06]"
            aria-hidden
          />

          {(isHovered || isActive) && (
            <div className="absolute inset-0 bg-black/30" />
          )}

          {(isHovered || isActive) && (
            <span className="absolute bottom-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#1DB954] shadow-lg transition-transform group-hover:scale-110">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          )}
        </div>

        <div className="p-3">
          <p className="mb-1 truncate text-sm font-bold text-black">{track.title}</p>
          <p className="truncate text-xs text-gray-600">{track.artist}</p>
          <p className="mt-1 truncate text-[11px] text-gray-400">Spotify</p>
        </div>
      </button>
    </div>
  )
}

export default function MusicCarousel() {
  const { playTrack, currentTrack, trackImages } = useMusicPlayer()
  const [isPaused, setIsPaused] = React.useState(false)

  const renderCard = (track: Track, index: number, prefix: string) => (
    <TrackCard
      key={`${prefix}-${track.trackId}-${index}`}
      track={track}
      imageUrl={trackImages[track.trackId]}
      onPlay={playTrack}
      isActive={currentTrack?.trackId === track.trackId}
    />
  )

  return (
    <section className="bg-white">
      <div className="section-shell">
        <div className="flex flex-col gap-2">
          <p className="section-eyebrow">Now playing</p>
          <h3 className="section-title text-gray-700">What I&apos;m Listening To</h3>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-xl">
          <div
            className="w-max"
            style={{
              animation: 'music-scroll 25s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-6">
              {tracks.map((track, index) => renderCard(track, index, 'first'))}
              {tracks.map((track, index) => renderCard(track, index, 'second'))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  )
}

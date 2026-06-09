'use client'

import React from 'react'
import { createPortal } from 'react-dom'
import { Pause, Play, SkipBack, SkipForward, X } from 'lucide-react'
import { tracks, trackImagesById, type Track } from '@/lib/musicData'
import {
  playYouTubeVideo,
  seekYouTube,
  setPlayerListeners,
  stopYouTubePlayback,
  toggleYouTubePlayback,
} from '@/lib/youtubePlayer'

type MusicPlayerContextValue = {
  currentTrack: Track | null
  trackImages: Record<string, string>
  tracksReady: boolean
  playTrack: (track: Track) => void
  stop: () => void
}

const MusicPlayerContext = React.createContext<MusicPlayerContextValue | null>(null)

export function useMusicPlayer() {
  const ctx = React.useContext(MusicPlayerContext)
  if (!ctx) throw new Error('useMusicPlayer must be used within MusicPlayerProvider')
  return ctx
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function AnimatedWaveform({ isPlaying }: { isPlaying: boolean }) {
  const bars = [0.6, 1, 0.75, 0.9, 0.55, 0.85, 0.7, 0.95, 0.65, 0.8, 0.5]

  return (
    <div className="flex h-3.5 items-end gap-[2px] opacity-80" aria-hidden>
      {bars.map((delayScale, i) => (
        <span
          key={i}
          className={`h-3.5 w-[2px] rounded-full bg-white/85 ${isPlaying ? 'wave-bar' : 'wave-bar-paused'}`}
          style={
            isPlaying
              ? { animationDelay: `${delayScale * 0.35}s`, animationDuration: `${0.75 + delayScale * 0.25}s` }
              : undefined
          }
        />
      ))}
    </div>
  )
}

function MusicPlayerToast({
  track,
  imageUrl,
  isPlaying,
  progress,
  duration,
  onTogglePlay,
  onSeek,
  onSeekStart,
  onSeekEnd,
  onPrev,
  onNext,
  onStop,
}: {
  track: Track
  imageUrl?: string
  isPlaying: boolean
  progress: number
  duration: number
  onTogglePlay: () => void
  onSeek: (value: number) => void
  onSeekStart: () => void
  onSeekEnd: () => void
  onPrev: () => void
  onNext: () => void
  onStop: () => void
}) {
  const percent = duration > 0 ? Math.min((progress / duration) * 100, 100) : 0
  const placeholder = `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&h=120&fit=crop&t=${track.trackId}`

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[min(92vw,340px)] rounded-2xl border border-white/10 bg-black/55 p-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/5 backdrop-blur-xl backdrop-saturate-150">
      <button
        type="button"
        onClick={onStop}
        className="absolute top-2 right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-white/10 hover:text-white"
        aria-label="Close"
      >
        <X className="h-3 w-3" />
      </button>

      <div className="mb-2 flex items-center gap-2 pr-5">
        <img
          src={imageUrl || placeholder}
          alt=""
          className="h-10 w-10 shrink-0 rounded-lg object-cover ring-1 ring-white/10"
        />

        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold leading-tight text-white">{track.title}</p>
          <p className="truncate text-[11px] leading-tight text-white/50">{track.artist}</p>
        </div>

        <AnimatedWaveform isPlaying={isPlaying} />
      </div>

      <div className="mb-2">
        <div className="relative h-1 w-full rounded-full bg-white/15">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-white/90"
            style={{ width: `${percent}%` }}
          />
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={progress}
            onChange={(e) => onSeek(Number(e.target.value))}
            onPointerDown={onSeekStart}
            onPointerUp={onSeekEnd}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            aria-label="Seek"
          />
        </div>
        <div className="mt-1 flex justify-between text-[10px] tabular-nums text-white/40">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={onPrev}
          className="text-white/75 transition-colors hover:text-white"
          aria-label="Previous track"
        >
          <SkipBack className="h-4 w-4 fill-current" />
        </button>

        <button
          type="button"
          onClick={onTogglePlay}
          className="text-white transition-opacity hover:opacity-80"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 fill-current" />
          ) : (
            <Play className="h-5 w-5 fill-current" />
          )}
        </button>

        <button
          type="button"
          onClick={onNext}
          className="text-white/75 transition-colors hover:text-white"
          aria-label="Next track"
        >
          <SkipForward className="h-4 w-4 fill-current" />
        </button>
      </div>
    </div>
  )
}

export default function MusicPlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = React.useState<Track | null>(null)
  const [mounted, setMounted] = React.useState(false)
  const [trackImages] = React.useState<Record<string, string>>(trackImagesById)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [duration, setDuration] = React.useState(0)

  const isSeekingRef = React.useRef(false)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    setPlayerListeners(
      (playing, dur) => {
        setIsPlaying(playing)
        if (dur > 0) setDuration(dur)
      },
      (time) => {
        if (!isSeekingRef.current) setProgress(time)
      }
    )
    return () => setPlayerListeners(null, null)
  }, [])

  const playTrack = React.useCallback((track: Track) => {
    setCurrentTrack(track)
    setProgress(0)
    setDuration(0)
    setIsPlaying(false)
    playYouTubeVideo(track.youtubeId)
  }, [])

  const playAdjacent = React.useCallback(
    (direction: -1 | 1) => {
      if (!currentTrack) return
      const index = tracks.findIndex((t) => t.trackId === currentTrack.trackId)
      if (index === -1) return
      const next = tracks[(index + direction + tracks.length) % tracks.length]
      playTrack(next)
    },
    [currentTrack, playTrack]
  )

  const togglePlayPause = React.useCallback(() => {
    toggleYouTubePlayback()
  }, [])

  const stop = React.useCallback(() => {
    stopYouTubePlayback()
    setCurrentTrack(null)
    setIsPlaying(false)
    setProgress(0)
  }, [])

  const handleSeek = React.useCallback((value: number) => {
    setProgress(value)
    seekYouTube(value)
  }, [])

  return (
    <MusicPlayerContext.Provider
      value={{ currentTrack, trackImages, tracksReady: true, playTrack, stop }}
    >
      {children}

      {mounted &&
        currentTrack &&
        createPortal(
          <MusicPlayerToast
            track={currentTrack}
            imageUrl={trackImages[currentTrack.trackId] ?? currentTrack.albumArt}
            isPlaying={isPlaying}
            progress={progress}
            duration={duration}
            onTogglePlay={togglePlayPause}
            onSeek={handleSeek}
            onSeekStart={() => {
              isSeekingRef.current = true
            }}
            onSeekEnd={() => {
              isSeekingRef.current = false
            }}
            onPrev={() => playAdjacent(-1)}
            onNext={() => playAdjacent(1)}
            onStop={stop}
          />,
          document.body
        )}
    </MusicPlayerContext.Provider>
  )
}

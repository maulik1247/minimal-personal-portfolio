'use client'

import React from 'react'
import { createPortal } from 'react-dom'
import { Star, X } from 'lucide-react'
import type { FavoriteMovie } from '@/lib/moviesData'
import type { MovieDetails } from '@/lib/movieTypes'

function MetaItem({ label, value }: { label: string; value?: string }) {
  if (!value || value === 'N/A') return null
  return (
    <div className="min-w-0">
      <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">{label}</p>
      <p className="text-sm leading-snug text-white/75">{value}</p>
    </div>
  )
}

export default function MovieDetailModal({
  movie,
  details,
  loading,
  error,
  onClose,
}: {
  movie: FavoriteMovie
  details: MovieDetails | null
  loading: boolean
  error: string | null
  onClose: () => void
}) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!mounted) return null

  const poster = details?.poster || movie.poster

  const plot =
    details?.plot && details.plot !== 'N/A'
      ? details.plot
      : movie.mediaType === 'series'
        ? `${movie.title} — created by ${movie.director}.`
        : `${movie.title} directed by ${movie.director}.`

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative h-[400px] w-full max-w-[640px] overflow-hidden rounded-2xl border border-white/10 bg-black/70 p-6 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-7 w-7 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {loading ? (
          <div className="flex h-full gap-5">
            <div className="h-full w-[140px] shrink-0 animate-pulse rounded-xl bg-white/10" />
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <div className="h-7 w-2/3 animate-pulse rounded bg-white/10" />
              <div className="h-4 w-1/3 animate-pulse rounded bg-white/10" />
              <div className="h-20 animate-pulse rounded bg-white/10" />
              <div className="mt-auto grid grid-cols-2 gap-3">
                <div className="h-10 animate-pulse rounded bg-white/10" />
                <div className="h-10 animate-pulse rounded bg-white/10" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full gap-5">
            <div className="relative h-full w-[140px] shrink-0 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10">
              <img
                src={poster}
                alt={details?.title ?? movie.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>

            <div className="flex min-h-0 min-w-0 flex-1 flex-col">
              <div className="shrink-0 pr-7">
                <h3 className="truncate text-xl font-bold text-white">
                  {details?.title ?? movie.title}
                </h3>
                <p className="mt-1 truncate text-sm text-white/50">
                  {[details?.year ?? String(movie.year), details?.runtime, details?.rated]
                    .filter(Boolean)
                    .join(' · ')}
                </p>

                {details?.imdbRating && details.imdbRating !== 'N/A' && (
                  <div className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {details.imdbRating}/10
                  </div>
                )}

                {error && (
                  <p className="mt-2 text-xs text-amber-300/90">
                    Couldn&apos;t load full details. Showing basics.
                  </p>
                )}
              </div>

              <div className="scrollbar-hide mt-4 min-h-0 flex-1 overflow-y-auto">
                <p className="text-sm leading-relaxed text-white/75">{plot}</p>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <MetaItem label="Genre" value={details?.genre ?? movie.genre} />
                  <MetaItem
                    label={movie.mediaType === 'series' ? 'Creator' : 'Director'}
                    value={details?.director ?? movie.director}
                  />
                  <MetaItem label="Cast" value={details?.actors} />
                  <MetaItem label="Released" value={details?.released} />
                  <MetaItem label="Language" value={details?.language} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}

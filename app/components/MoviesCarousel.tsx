'use client'

import React from 'react'
import { Star } from 'lucide-react'
import { favoriteMovies, type FavoriteMovie } from '@/lib/moviesData'
import { fetchMovieDetails } from '@/lib/fetchMovie'
import type { MovieDetails } from '@/lib/movieTypes'
import MovieDetailModal from './MovieDetailModal'

function MovieCard({
  movie,
  onSelect,
}: {
  movie: FavoriteMovie
  onSelect: (movie: FavoriteMovie) => void
}) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div className="w-[180px] shrink-0">
      <button
        type="button"
        onClick={() => onSelect(movie)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group w-full cursor-pointer text-left transition-transform duration-200 hover:scale-[1.03]"
      >
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl bg-gray-100">
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-full w-full object-cover object-center"
          />

          <span className="absolute top-2 left-2 z-10 inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
            <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
            {movie.imdbRating}
          </span>

          {isHovered && <div className="absolute inset-0 z-10 bg-black/30" />}
        </div>

        <div className="p-3">
          <p className="mb-1 truncate text-sm font-bold text-black">{movie.title}</p>
          <p className="truncate text-xs text-gray-600">
            {movie.director} · {movie.year}
          </p>
          <p className="mt-1 truncate text-[11px] text-gray-400">{movie.genre}</p>
        </div>
      </button>
    </div>
  )
}

export default function MoviesCarousel() {
  const [isPaused, setIsPaused] = React.useState(false)
  const [selectedMovie, setSelectedMovie] = React.useState<FavoriteMovie | null>(null)
  const [modalDetails, setModalDetails] = React.useState<MovieDetails | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const detailsCache = React.useRef<Record<string, MovieDetails>>({})

  const handleSelect = React.useCallback(async (movie: FavoriteMovie) => {
    setSelectedMovie(movie)
    setIsPaused(true)

    const cached = detailsCache.current[movie.imdbId]
    if (cached) {
      setModalDetails(cached)
      setLoading(false)
      setError(null)
      return
    }

    setModalDetails(null)
    setLoading(true)
    setError(null)

    const data = await fetchMovieDetails(movie.imdbId)
    if (!data) {
      setError('Failed to load movie details')
    } else {
      detailsCache.current[movie.imdbId] = data
    }
    setModalDetails(data)
    setLoading(false)
  }, [])

  const handleClose = React.useCallback(() => {
    setSelectedMovie(null)
    setModalDetails(null)
    setError(null)
    setIsPaused(false)
  }, [])

  const renderCard = (movie: FavoriteMovie, index: number, prefix: string) => (
    <MovieCard key={`${prefix}-${movie.imdbId}-${index}`} movie={movie} onSelect={handleSelect} />
  )

  return (
    <section className="bg-white">
      <div className="section-shell">
        <div className="flex flex-col gap-2">
          <p className="section-eyebrow">On repeat</p>
          <h3 className="section-title text-gray-700">Favorite Movies &amp; Shows</h3>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-xl">
          <div
            className="w-max"
            style={{
              animation: 'movies-scroll 30s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              if (!selectedMovie) setIsPaused(false)
            }}
          >
            <div className="flex gap-6">
              {favoriteMovies.map((movie, index) => renderCard(movie, index, 'first'))}
              {favoriteMovies.map((movie, index) => renderCard(movie, index, 'second'))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-white to-transparent" />
        </div>

        {selectedMovie && (
          <MovieDetailModal
            movie={selectedMovie}
            details={modalDetails}
            loading={loading}
            error={error}
            onClose={handleClose}
          />
        )}
      </div>
    </section>
  )
}

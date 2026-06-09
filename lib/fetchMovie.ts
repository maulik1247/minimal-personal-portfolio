import type { MovieDetails } from '@/lib/movieTypes'

export async function fetchMovieDetails(imdbId: string): Promise<MovieDetails | null> {
  try {
    const response = await fetch(`/api/movie?imdbId=${encodeURIComponent(imdbId)}`)
    const data = await response.json()
    if (!response.ok) return null
    return data as MovieDetails
  } catch {
    return null
  }
}

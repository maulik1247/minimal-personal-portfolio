import type { MovieDetails } from '@/lib/movieTypes'
import cache from '@/lib/movieDetailsCache.json'

const movieDetailsByImdbId = cache as Record<string, MovieDetails>

export function getCachedMovieDetails(imdbId: string): MovieDetails | null {
  return movieDetailsByImdbId[imdbId] ?? null
}

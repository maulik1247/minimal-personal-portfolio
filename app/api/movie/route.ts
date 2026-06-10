import { NextRequest, NextResponse } from 'next/server'
import { getCachedMovieDetails } from '@/lib/movieDetailsCache'
import type { MovieDetails } from '@/lib/movieTypes'

type OmdbResponse = {
  Title?: string
  Year?: string
  Rated?: string
  Released?: string
  Runtime?: string
  Genre?: string
  Director?: string
  Writer?: string
  Actors?: string
  Plot?: string
  Language?: string
  Country?: string
  Awards?: string
  Poster?: string
  imdbRating?: string
  imdbVotes?: string
  imdbID?: string
  Ratings?: { Source: string; Value: string }[]
  Response?: string
  Error?: string
}

function mapOmdb(data: OmdbResponse): MovieDetails {
  return {
    title: data.Title ?? '',
    year: data.Year ?? '',
    rated: data.Rated ?? '',
    released: data.Released ?? '',
    runtime: data.Runtime ?? '',
    genre: data.Genre ?? '',
    director: data.Director ?? '',
    writer: data.Writer ?? '',
    actors: data.Actors ?? '',
    plot: data.Plot ?? '',
    language: data.Language ?? '',
    country: data.Country ?? '',
    awards: data.Awards ?? '',
    poster: data.Poster && data.Poster !== 'N/A' ? data.Poster : '',
    imdbRating: data.imdbRating ?? '',
    imdbVotes: data.imdbVotes ?? '',
    imdbId: data.imdbID ?? '',
    ratings: (data.Ratings ?? []).map((r) => ({ source: r.Source, value: r.Value })),
  }
}

async function fetchFromOmdb(imdbId: string, apiKey: string): Promise<MovieDetails | null> {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${encodeURIComponent(imdbId)}&plot=full&apikey=${apiKey}`,
    { next: { revalidate: 86400 } }
  )

  if (!response.ok) return null

  const data = (await response.json()) as OmdbResponse
  if (data.Response === 'False' || data.Error) return null

  return mapOmdb(data)
}

export async function GET(request: NextRequest) {
  const imdbId = request.nextUrl.searchParams.get('imdbId')

  if (!imdbId) {
    return NextResponse.json({ error: 'imdbId is required' }, { status: 400 })
  }

  const cached = getCachedMovieDetails(imdbId)
  const apiKey = process.env.OMDB_API_KEY

  if (!apiKey) {
    if (cached) {
      return NextResponse.json(cached)
    }
    return NextResponse.json(
      { error: 'Movie details not found. Add OMDB_API_KEY or refresh the static cache.' },
      { status: 404 }
    )
  }

  const live = await fetchFromOmdb(imdbId, apiKey)
  if (live) {
    return NextResponse.json(live)
  }

  if (cached) {
    return NextResponse.json(cached)
  }

  return NextResponse.json({ error: 'Movie not found' }, { status: 404 })
}

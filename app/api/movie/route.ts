import { NextRequest, NextResponse } from 'next/server'
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

export async function GET(request: NextRequest) {
  const imdbId = request.nextUrl.searchParams.get('imdbId')

  if (!imdbId) {
    return NextResponse.json({ error: 'imdbId is required' }, { status: 400 })
  }

  const apiKey = process.env.OMDB_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'OMDB_API_KEY is not configured. Add it to .env.local' },
      { status: 500 }
    )
  }

  const response = await fetch(
    `https://www.omdbapi.com/?i=${encodeURIComponent(imdbId)}&plot=full&apikey=${apiKey}`,
    { next: { revalidate: 86400 } }
  )

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch movie data' }, { status: 502 })
  }

  const data = (await response.json()) as OmdbResponse

  if (data.Response === 'False' || data.Error) {
    return NextResponse.json({ error: data.Error ?? 'Movie not found' }, { status: 404 })
  }

  return NextResponse.json(mapOmdb(data))
}

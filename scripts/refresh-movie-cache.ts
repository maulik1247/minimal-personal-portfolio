import { writeFileSync } from 'node:fs'
import { favoriteMovies } from '../lib/moviesData'

const apiKey = process.env.OMDB_API_KEY
if (!apiKey) {
  console.error('OMDB_API_KEY is required. Set it in .env.local or your shell.')
  process.exit(1)
}

const out: Record<string, unknown> = {}

for (const movie of favoriteMovies) {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${encodeURIComponent(movie.imdbId)}&plot=full&apikey=${apiKey}`
  )
  const data = await response.json()

  if (data.Response === 'False') {
    console.error(`Failed for ${movie.imdbId}: ${data.Error}`)
    continue
  }

  out[movie.imdbId] = {
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
    imdbId: data.imdbID ?? movie.imdbId,
    ratings: (data.Ratings ?? []).map((r: { Source: string; Value: string }) => ({
      source: r.Source,
      value: r.Value,
    })),
  }

  console.log(`Cached ${data.Title}`)
}

writeFileSync('lib/movieDetailsCache.json', JSON.stringify(out, null, 2))
console.log('Wrote lib/movieDetailsCache.json')

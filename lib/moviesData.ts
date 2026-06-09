export type FavoriteMovie = {
  title: string
  year: number
  director: string
  poster: string
  imdbId: string
  imdbRating: string
  genre: string
  mediaType: 'movie' | 'series'
}

export const favoriteMovies: FavoriteMovie[] = [
  {
    title: 'Fight Club',
    year: 1999,
    director: 'David Fincher',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg',
    imdbId: 'tt0137523',
    imdbRating: '8.8',
    genre: 'Crime, Drama, Thriller',
    mediaType: 'movie',
  },
  {
    title: 'Ford v Ferrari',
    year: 2019,
    director: 'James Mangold',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTBjNTEyNjYtYjdkNi00YzE5LTljYzUtZjVlYmYwZmJmZWYxXkEyXkFqcGc@._V1_SX300.jpg',
    imdbId: 'tt1950186',
    imdbRating: '8.1',
    genre: 'Action, Biography, Drama',
    mediaType: 'movie',
  },
  {
    title: 'Breaking Bad',
    year: 2008,
    director: 'Vince Gilligan',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg',
    imdbId: 'tt0903747',
    imdbRating: '9.5',
    genre: 'Crime, Drama, Thriller',
    mediaType: 'series',
  },
  {
    title: 'Friends',
    year: 1994,
    director: 'David Crane, Marta Kauffman',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg',
    imdbId: 'tt0108778',
    imdbRating: '8.8',
    genre: 'Comedy, Romance',
    mediaType: 'series',
  },
  {
    title: 'The Pursuit of Happyness',
    year: 2006,
    director: 'Gabriele Muccino',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_SX300.jpg',
    imdbId: 'tt0454921',
    imdbRating: '8.0',
    genre: 'Biography, Drama',
    mediaType: 'movie',
  },
  {
    title: 'Dhurandhar The Revenge',
    year: 2026,
    director: 'Aditya Dhar',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzdkNjAxNWMtNWY3My00NTI1LTg2YWQtOGI3MDA0NzdhMjEyXkEyXkFqcGc@._V1_QL75_UY562_CR24,0,380,562_.jpg',
    imdbId: 'tt39139925',
    imdbRating: '8.5',
    genre: 'Action, Crime, Thriller',
    mediaType: 'movie',
  },
  {
    title: 'Dhurandhar',
    year: 2025,
    director: 'Aditya Dhar',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMzFiNTVkZjYtM2I3Yi00MGNjLWEyYTAtMGViNGExZmMzMGMzXkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg',
    imdbId: 'tt33014583',
    imdbRating: '8.3',
    genre: 'Action, Adventure, Crime',
    mediaType: 'movie',
  },
  {
    title: 'Interstellar',
    year: 2014,
    director: 'Christopher Nolan',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    imdbId: 'tt0816692',
    imdbRating: '8.7',
    genre: 'Adventure, Drama, Sci-Fi',
    mediaType: 'movie',
  },
]

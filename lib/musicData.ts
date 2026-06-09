export type Track = {
  trackId: string
  youtubeId: string
  title: string
  artist: string
  spotifyUrl: string
  albumArt: string
}

export const tracks: Track[] = [
  {
    trackId: '0VjIjW4GlUZAMYd2vXMi3b',
    youtubeId: '4NRXx6U8ABQ',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    spotifyUrl: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
    albumArt: 'https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36',
  },
  {
    trackId: '5GXAXm5YOmYT0kL5jHvYBt',
    youtubeId: 'qFLhGq0060w',
    title: 'I Feel It Coming',
    artist: 'The Weeknd & Daft Punk',
    spotifyUrl: 'https://open.spotify.com/track/5GXAXm5YOmYT0kL5jHvYBt',
    albumArt: 'https://i.scdn.co/image/ab67616d00001e02a048415db06a5b6fa7ec4e1a',
  },
  {
    trackId: '3AWDeHLc88XogCaCnZQLVI',
    youtubeId: 'bn8gP5N8hqM',
    title: 'Cry For Me',
    artist: 'The Weeknd',
    spotifyUrl: 'https://open.spotify.com/track/3AWDeHLc88XogCaCnZQLVI',
    albumArt: 'https://i.scdn.co/image/ab67616d00001e02de79f330bc297af3fae736da',
  },
  {
    trackId: '3QspmlfK7myCWJWWl2bywt',
    youtubeId: '1a5nyrMtRsk',
    title: 'Dhurandhar',
    artist: 'Hanumankind & Jasmine Sandlas',
    spotifyUrl: 'https://open.spotify.com/track/3QspmlfK7myCWJWWl2bywt',
    albumArt: 'https://i.scdn.co/image/ab67616d00001e02a501eb791db6baaa2c4deab8',
  },
  {
    trackId: '0eu4C55hL6x29mmeAjytzC',
    youtubeId: '8F2s8ivKXNY',
    title: 'Life Goes On',
    artist: 'Oliver Tree',
    spotifyUrl: 'https://open.spotify.com/track/0eu4C55hL6x29mmeAjytzC',
    albumArt: 'https://i.scdn.co/image/ab67616d00001e02bf118f32a37c18511647b54a',
  },
  {
    trackId: '5nPbKG04fhLkIAjcPFaZq7',
    youtubeId: 'Mf_pvNkNJjk',
    title: 'I Adore You',
    artist: 'Hugel',
    spotifyUrl: 'https://open.spotify.com/track/5nPbKG04fhLkIAjcPFaZq7',
    albumArt: 'https://i.scdn.co/image/ab67616d00001e0205005dc483e9f8a73ccc6d3d',
  },
  {
    trackId: '62bOmKYxYg7dhrC6gH9vFn',
    youtubeId: 'Eo-KmOd3i7s',
    title: 'Bye Bye Bye',
    artist: '*NSYNC',
    spotifyUrl: 'https://open.spotify.com/track/62bOmKYxYg7dhrC6gH9vFn',
    albumArt: 'https://i.scdn.co/image/ab67616d00001e02a6cb8fab778e1efc406a5909',
  },
]

export const trackImagesById = Object.fromEntries(
  tracks.map((track) => [track.trackId, track.albumArt])
)

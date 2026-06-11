export type FavoriteGame = {
  id: string
  title: string
  hoursPlayed: number
  steamAppId?: string
  coverSourceUrl?: string
  cover: string
}

export const steamCoverUrl = (appId: string) =>
  `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/library_600x900.jpg`

const localCover = (id: string) => `/games/${id}.jpg`

export function getCoverSourceUrl(game: FavoriteGame) {
  if (game.coverSourceUrl) return game.coverSourceUrl
  if (game.steamAppId) return steamCoverUrl(game.steamAppId)
  throw new Error(`No cover source for ${game.id}`)
}

export const favoriteGames: FavoriteGame[] = [
  {
    id: 'fc26',
    title: 'EA Sports FC 26',
    hoursPlayed: 164,
    steamAppId: '3405690',
    cover: localCover('fc26'),
  },
  {
    id: 'tlou',
    title: 'The Last of Us',
    hoursPlayed: 42,
    steamAppId: '1888930',
    cover: localCover('tlou'),
  },
  {
    id: 'rdr2',
    title: 'Red Dead Redemption 2',
    hoursPlayed: 186,
    steamAppId: '1174180',
    cover: localCover('rdr2'),
  },
  {
    id: 'gta5',
    title: 'Grand Theft Auto V',
    hoursPlayed: 210,
    steamAppId: '271590',
    cover: localCover('gta5'),
  },
  {
    id: 'spiderman',
    title: "Marvel's Spider-Man",
    hoursPlayed: 38,
    steamAppId: '1817070',
    cover: localCover('spiderman'),
  },
  {
    id: 'ghost-of-tsushima',
    title: 'Ghost of Tsushima',
    hoursPlayed: 52,
    steamAppId: '2215430',
    cover: localCover('ghost-of-tsushima'),
  },
]

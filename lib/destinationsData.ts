export type Destination = {
  id: string
  name: string
  visited: string
  cover: string
  imageSourceUrl?: string
}

const localCover = (id: string) => `/destinations/${id}.jpg`

export const destinationsTravelled: Destination[] = [
  {
    id: 'malana',
    name: 'Malana',
    visited: 'July 5 · 2021',
    cover: localCover('malana'),
    imageSourceUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=900&fit=crop&q=80',
  },
  {
    id: 'dayara-bugyal',
    name: 'Dayara Bugyal',
    visited: 'January · 2020',
    cover: localCover('dayara-bugyal'),
    imageSourceUrl:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=900&fit=crop&q=80',
  },
  {
    id: 'assam',
    name: 'Assam',
    visited: 'March 13 · 2023',
    cover: localCover('assam'),
    imageSourceUrl:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=900&fit=crop&q=80',
  },
  {
    id: 'pondicherry',
    name: 'Pondicherry',
    visited: 'August 15 · 2022',
    cover: localCover('pondicherry'),
    imageSourceUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=900&fit=crop&q=80',
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    visited: 'December · 2019',
    cover: localCover('udaipur'),
    imageSourceUrl:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=900&fit=crop&q=80',
  },
  {
    id: 'goa',
    name: 'Goa',
    visited: 'February · 2024',
    cover: localCover('goa'),
    imageSourceUrl:
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=900&fit=crop&q=80',
  },
  {
    id: 'thailand',
    name: 'Thailand',
    visited: 'March · 2023',
    cover: localCover('thailand'),
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    visited: 'November · 2022',
    cover: localCover('sri-lanka'),
  },
  {
    id: 'bali',
    name: 'Bali',
    visited: 'June · 2021',
    cover: localCover('bali'),
  },
  {
    id: 'madrid',
    name: 'Madrid',
    visited: 'September · 2023',
    cover: localCover('madrid'),
  },
]

"use client"

import React from 'react'

const topArtists = [
  {
    trackId: "0VjIjW4GlUZAMYd2vXMi3b",
    title: "Blinding Lights",
    artist: "The Weeknd",
    spotifyUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b?si=c4edc016a87b4a7d"
  },
  {
    trackId: "0eu4C55hL6x29mmeAjytzC",
    title: "Life Goes On",
    artist: "Oliver Tree",
    spotifyUrl: "https://open.spotify.com/track/0eu4C55hL6x29mmeAjytzC?si=635f21a1524e4b3a"
  },
  {
    trackId: "4vVTI94F9uJ8lHNDWKv0i2",
    title: "Eenie Meenie",
    artist: "Justin Bieber & Sean Kingston",
    spotifyUrl: "https://open.spotify.com/track/4vVTI94F9uJ8lHNDWKv0i2?si=df6ef3b3a9e04171"
  },
  {
    trackId: "0cYohCh24y1aMjJmcS9RBl",
    title: "For a Reason",
    artist: "Karan Aujhla",
    spotifyUrl: "https://open.spotify.com/track/0cYohCh24y1aMjJmcS9RBl?si=be561c657aa1401f"
  },
  {
    trackId: "1jq28NGw6wdtFKx8MBPy6C",
    title: "Burn It to the Ground",
    artist: "Nickelback",
    spotifyUrl: "https://open.spotify.com/track/1jq28NGw6wdtFKx8MBPy6C?si=85d6c7f6d6c24863"
  },
  {
    trackId: "5nPbKG04fhLkIAjcPFaZq7",
    title: "I Adore You",
    artist: "Hugel",
    spotifyUrl: "https://open.spotify.com/track/5nPbKG04fhLkIAjcPFaZq7?si=b3228f40e18340ee"
  },
  {
    trackId: "62bOmKYxYg7dhrC6gH9vFn",
    title: "Bye Bye Bye",
    artist: "*NSYNC",
    spotifyUrl: "https://open.spotify.com/track/62bOmKYxYg7dhrC6gH9vFn?si=4c10edf7d1794f0a"
  }
]

export default function SpotifyCarousel() {
  const [isPaused, setIsPaused] = React.useState(false)
  const [trackImages, setTrackImages] = React.useState<{ [key: string]: string }>({})
  const [hoveredIndex, setHoveredIndex] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [showContent, setShowContent] = React.useState(false)

  // Fetch images from Spotify API
  React.useEffect(() => {
    let loadedCount = 0
    const totalTracks = topArtists.length
    
    topArtists.forEach((artist) => {
      fetch(`/api/spotify?trackId=${artist.trackId}`)
        .then(res => res.json())
        .then(data => {
          if (data.images && data.images.length > 0) {
            setTrackImages(prev => ({
              ...prev,
              [artist.trackId]: data.images[1].url // Medium size
            }))
          }
          loadedCount++
          if (loadedCount === totalTracks) {
            setIsLoading(false)
            // Small delay for smooth transition
            setTimeout(() => setShowContent(true), 100)
          }
        })
        .catch(err => {
          console.error(`Error fetching image for ${artist.title}:`, err)
          loadedCount++
          if (loadedCount === totalTracks) {
            setIsLoading(false)
            setTimeout(() => setShowContent(true), 100)
          }
        })
    })
  }, [])

  // Render a card component
  const renderCard = (artist: { trackId: string; title: string; artist: string; spotifyUrl: string }, index: number, prefix: string) => {
    const imageUrl = trackImages[artist.trackId]
    // Use a unique placeholder for each track so they don't all show the same image
    const uniquePlaceholder = `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&t=${artist.trackId}`
    const uniqueKey = `${prefix}-${artist.trackId}`
    const isHovered = hoveredIndex === uniqueKey
    
    return (
    <div 
      key={`${prefix}-${index}`}
      className="shrink-0"
      style={{ width: '180px' }}
    >
      <div
        style={{ 
          display: 'block',
          transition: 'transform 0.2s ease',
          cursor: 'pointer',
          position: 'relative'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'
          setHoveredIndex(uniqueKey)
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          setHoveredIndex(null)
        }}
      >
        <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
          <img 
            src={imageUrl || uniquePlaceholder} 
            alt={artist.title}
            className="w-full h-48 object-cover rounded-2xl"
            style={{ backgroundColor: '#f0f0f0' }}
            onError={(e) => {
              e.currentTarget.src = uniquePlaceholder
            }}
          />
          {/* Dark overlay on hover */}
          {isHovered && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '16px'
              }}
            />
          )}
          {/* Green play button overlay */}
          {isHovered && (
            <a
              href={artist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                width: '48px',
                height: '48px',
                backgroundColor: '#1DB954',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.1s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          )}
        </div>
        <div className="p-3 bg-white">
          <div className="font-bold mb-1 text-sm" style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif', color: '#1a1a1a' }}>
            {artist.title}
          </div>
          <div className="text-xs text-gray-600" style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}>
            {artist.artist}
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <section className="bg-white">
      <div className="section-shell">
        <div className="flex flex-col gap-2">
          <p className="section-eyebrow">Now playing</p>
          <h3 className="section-title text-gray-700">What I&apos;m Listening To</h3>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden" style={{ borderRadius: '12px', minHeight: '240px' }}>
          {/* Loading Skeleton */}
          {isLoading && (
            <div className="flex gap-6 animate-pulse" style={{ 
              opacity: showContent ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out'
            }}>
              {topArtists.map((_, index) => (
                <div key={index} className="shrink-0" style={{ width: '180px' }}>
                  <div className="bg-gray-200 rounded-2xl h-48 mb-3"></div>
                  <div className="bg-gray-200 h-4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-3 rounded" style={{ width: '60%' }}></div>
                </div>
              ))}
            </div>
          )}
          
          {/* Content */}
          <div 
            style={{
              animation: 'scroll 25s linear infinite',
              width: 'max-content',
              animationPlayState: isPaused ? 'paused' : 'running',
              transition: 'animation-play-state 0.1s ease-in-out',
              opacity: showContent ? 1 : 0,
              transitionProperty: 'opacity',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-6">
              {/* First set of cards */}
              {topArtists.map((artist, index) => renderCard(artist, index, 'first'))}
              
              {/* Duplicate set for seamless loop */}
              {topArtists.map((artist, index) => renderCard(artist, index, 'second'))}
            </div>
          </div>
          
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
        
        
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  )
}

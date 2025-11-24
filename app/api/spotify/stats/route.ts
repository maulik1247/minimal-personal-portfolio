import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get('spotify_access_token')?.value

  if (!accessToken) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  try {
    // Fetch user's recently played tracks
    const recentlyPlayedResponse = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=50', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })

    if (!recentlyPlayedResponse.ok) {
      console.error('Spotify API error:', await recentlyPlayedResponse.text())
      return NextResponse.json({ error: 'Failed to fetch recently played' }, { status: 500 })
    }

    const recentlyPlayedData = await recentlyPlayedResponse.json()

    // Calculate total listening time (estimate based on track durations)
    let totalMs = 0
    const uniqueTracks = new Set()
    
    recentlyPlayedData.items.forEach((item: any) => {
      if (!uniqueTracks.has(item.track.id)) {
        uniqueTracks.add(item.track.id)
        totalMs += item.track.duration_ms
      }
    })

    const totalHours = Math.round((totalMs / 1000 / 60 / 60) * 100) / 100

    return NextResponse.json({
      totalHours,
      trackCount: uniqueTracks.size,
      recentTracks: recentlyPlayedData.items.map((item: any) => ({
        id: item.track.id,
        name: item.track.name,
        artist: item.track.artists[0].name,
        album: item.track.album.name,
        images: item.track.album.images
      }))
    })
  } catch (error) {
    console.error('Stats fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}




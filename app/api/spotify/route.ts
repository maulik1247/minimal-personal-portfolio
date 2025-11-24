import { NextRequest, NextResponse } from 'next/server'

const CLIENT_ID = '91568e1b5e0f4607bbe310b16065d596'
const CLIENT_SECRET = '392ae0ae09bb42a4abd6fc3abef415f5'

async function getAccessToken() {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
      },
      body: 'grant_type=client_credentials'
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Spotify auth error:', errorData)
      throw new Error(`Failed to get access token: ${response.status}`)
    }

    const data = await response.json()
    return data.access_token
  } catch (error) {
    console.error('Error in getAccessToken:', error)
    throw error
  }
}

async function getTrackImages(trackId: string) {
  try {
    const token = await getAccessToken()
    
    const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}?market=US`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Spotify API error:', errorData)
      throw new Error(`Failed to fetch track: ${response.status}`)
    }

    const data = await response.json()
    console.log('Track data:', data.album?.name, 'Images:', data.album?.images)
    return data.album.images
  } catch (error) {
    console.error('Error in getTrackImages:', error)
    throw error
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const trackId = searchParams.get('trackId')

  if (!trackId) {
    return NextResponse.json({ error: 'trackId is required' }, { status: 400 })
  }

  try {
    const images = await getTrackImages(trackId)
    return NextResponse.json({ images })
  } catch (error: any) {
    console.error('Error in GET handler:', error)
    return NextResponse.json({ 
      error: 'Failed to fetch track data', 
      details: error.message 
    }, { status: 500 })
  }
}


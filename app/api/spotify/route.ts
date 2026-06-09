import { NextRequest, NextResponse } from 'next/server'

const CLIENT_ID = '91568e1b5e0f4607bbe310b16065d596'
const CLIENT_SECRET = '392ae0ae09bb42a4abd6fc3abef415f5'

let cachedToken: { token: string; expiresAt: number } | null = null

async function getAccessToken() {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  })

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${response.status}`)
  }

  const data = await response.json()
  cachedToken = {
    token: data.access_token as string,
    expiresAt: Date.now() + ((data.expires_in as number) - 60) * 1000,
  }
  return cachedToken.token
}

async function fetchTrackFromMarket(trackId: string, token: string, market: string) {
  const response = await fetch(
    `https://api.spotify.com/v1/tracks/${trackId}?market=${market}`,
    { headers: { Authorization: `Bearer ${token}` }, next: { revalidate: 3600 } }
  )

  if (!response.ok) return null
  return response.json()
}

async function getTrackData(trackId: string) {
  const token = await getAccessToken()

  let data = null
  for (const market of ['US', 'IN', 'GB']) {
    data = await fetchTrackFromMarket(trackId, token, market)
    if (data?.preview_url) break
  }

  if (!data) {
    data = await fetchTrackFromMarket(trackId, token, 'US')
  }

  if (!data) {
    throw new Error(`Failed to fetch track: ${trackId}`)
  }

  return {
    images: data.album?.images ?? [],
    previewUrl: (data.preview_url as string | null) ?? null,
    durationMs: data.duration_ms as number,
    title: data.name as string,
    artist: (data.artists as { name: string }[]).map((a) => a.name).join(', '),
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const trackId = searchParams.get('trackId')

  if (!trackId) {
    return NextResponse.json({ error: 'trackId is required' }, { status: 400 })
  }

  try {
    const track = await getTrackData(trackId)
    return NextResponse.json(track)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: 'Failed to fetch track data', details: message }, { status: 500 })
  }
}

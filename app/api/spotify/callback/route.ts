import { NextRequest, NextResponse } from 'next/server'

const CLIENT_ID = '91568e1b5e0f4607bbe310b16065d596'
const CLIENT_SECRET = '392ae0ae09bb42a4abd6fc3abef415f5'
const REDIRECT_URI = 'http://localhost:3000/api/spotify/callback'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error) {
    return NextResponse.redirect(`http://localhost:3000/?error=${error}`)
  }

  if (!code) {
    return NextResponse.redirect('http://localhost:3000/?error=no_code')
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI
      })
    })

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text()
      console.error('Token exchange error:', errorData)
      return NextResponse.redirect(`http://localhost:3000/?error=token_error`)
    }

    const data = await tokenResponse.json()
    const accessToken = data.access_token
    const refreshToken = data.refresh_token

    // Store tokens in cookies (or session storage)
    const response = NextResponse.redirect('http://localhost:3000/')
    response.cookies.set('spotify_access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600 // 1 hour
    })
    response.cookies.set('spotify_refresh_token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 3600 // 7 days
    })

    return response
  } catch (error) {
    console.error('Callback error:', error)
    return NextResponse.redirect(`http://localhost:3000/?error=callback_error`)
  }
}




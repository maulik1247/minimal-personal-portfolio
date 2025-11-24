import { NextResponse } from 'next/server'

const CLIENT_ID = '91568e1b5e0f4607bbe310b16065d596'
const REDIRECT_URI = 'http://localhost:3000/api/spotify/callback'
const SCOPES = 'user-read-recently-played user-top-read'

export async function GET() {
  const authUrl = `https://accounts.spotify.com/authorize?` +
    `client_id=${CLIENT_ID}&` +
    `response_type=code&` +
    `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
    `scope=${encodeURIComponent(SCOPES)}&` +
    `show_dialog=false`

  return NextResponse.redirect(authUrl)
}





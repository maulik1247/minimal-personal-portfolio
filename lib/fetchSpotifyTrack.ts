export type SpotifyTrackResponse = {
  images: { url: string; width: number; height: number }[]
  previewUrl: string | null
  durationMs: number
  title: string
  artist: string
}

export async function fetchSpotifyTrack(trackId: string): Promise<SpotifyTrackResponse | null> {
  try {
    const res = await fetch(`/api/spotify?trackId=${trackId}`)
    if (!res.ok) return null
    const data = await res.json()
    if (data.error) return null
    return data as SpotifyTrackResponse
  } catch {
    return null
  }
}

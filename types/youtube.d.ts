declare namespace YT {
  class Player {
    constructor(elementId: string | HTMLElement, options: PlayerOptions)
    loadVideoById(videoId: string): void
    playVideo(): void
    pauseVideo(): void
    stopVideo(): void
    seekTo(seconds: number, allowSeekAhead: boolean): void
    getCurrentTime(): number
    getDuration(): number
    getPlayerState(): number
    getVideoData(): { video_id?: string } | undefined
  }

  interface PlayerOptions {
    height?: string | number
    width?: string | number
    playerVars?: Record<string, string | number>
    events?: {
      onReady?: () => void
      onStateChange?: (event: { data: number; target: Player }) => void
    }
  }

  const PlayerState: {
    UNSTARTED: number
    ENDED: number
    PLAYING: number
    PAUSED: number
    BUFFERING: number
    CUED: number
  }
}

interface Window {
  YT?: typeof YT
  onYouTubeIframeAPIReady?: () => void
}

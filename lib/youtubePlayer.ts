type PlayerListener = (playing: boolean, duration: number) => void
type TimeListener = (time: number) => void

let player: YT.Player | null = null
let ready = false
let apiLoading = false
const readyQueue: Array<() => void> = []
let onPlayingChange: PlayerListener | null = null
let onTimeUpdate: TimeListener | null = null
let timeInterval: ReturnType<typeof setInterval> | null = null
let currentVideoId: string | null = null
let wantsPlay = false

function ensureHost() {
  if (typeof document === 'undefined') return null
  let host = document.getElementById('global-youtube-player')
  if (!host) {
    host = document.createElement('div')
    host.id = 'global-youtube-player'
    host.style.cssText =
      'position:fixed;left:-9999px;top:0;width:200px;height:200px;opacity:0;pointer-events:none'
    document.body.appendChild(host)
  }
  return host
}

function flushQueue() {
  while (readyQueue.length) readyQueue.shift()?.()
}

function startTimePolling() {
  stopTimePolling()
  timeInterval = setInterval(() => {
    if (!player || !onTimeUpdate) return
    onTimeUpdate(player.getCurrentTime())
  }, 300)
}

function stopTimePolling() {
  if (timeInterval) clearInterval(timeInterval)
  timeInterval = null
}

function attemptPlay(videoId: string) {
  if (!player?.loadVideoById) return

  wantsPlay = true
  currentVideoId = videoId

  if (player.getVideoData?.()?.video_id === videoId) {
    player.seekTo(0, true)
    player.playVideo()
    return
  }

  player.loadVideoById(videoId)
  player.playVideo()
}

function retryPlay() {
  if (!wantsPlay || !player || !currentVideoId) return
  const state = player.getPlayerState()
  if (
    state === window.YT!.PlayerState.PAUSED ||
    state === window.YT!.PlayerState.CUED ||
    state === window.YT!.PlayerState.UNSTARTED
  ) {
    player.playVideo()
  }
}

function loadApi(): Promise<void> {
  if (ready) return Promise.resolve()
  if (typeof window === 'undefined') return Promise.resolve()

  return new Promise((resolve) => {
    readyQueue.push(resolve)
    if (apiLoading) return
    apiLoading = true

    const init = () => {
      const host = ensureHost()
      if (!host || player) {
        flushQueue()
        return
      }

      player = new window.YT!.Player(host, {
        height: '200',
        width: '200',
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            ready = true
            flushQueue()
          },
          onStateChange: (event) => {
            const { PLAYING, PAUSED, ENDED, BUFFERING, CUED, UNSTARTED } = window.YT!.PlayerState
            const state = event.data

            if (state === BUFFERING || state === CUED || state === UNSTARTED) {
              if (wantsPlay) retryPlay()
            }

            if (state === PLAYING) {
              wantsPlay = false
              const dur = event.target.getDuration() || 0
              onPlayingChange?.(true, dur)
              startTimePolling()
              return
            }

            if (state === PAUSED || state === ENDED) {
              onPlayingChange?.(false, event.target.getDuration() || 0)
              stopTimePolling()
            }
          },
        },
      })
    }

    if (window.YT?.Player) {
      init()
      return
    }

    const prev = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      prev?.()
      init()
    }

    if (!document.getElementById('youtube-iframe-api')) {
      const script = document.createElement('script')
      script.id = 'youtube-iframe-api'
      script.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(script)
    }
  })
}

export function setPlayerListeners(playing: PlayerListener | null, time: TimeListener | null) {
  onPlayingChange = playing
  onTimeUpdate = time
}

export function playYouTubeVideo(videoId: string) {
  const play = () => {
    attemptPlay(videoId)
    setTimeout(retryPlay, 150)
    setTimeout(retryPlay, 400)
  }

  if (ready && player) {
    play()
    return
  }

  void loadApi().then(play)
}

export function toggleYouTubePlayback() {
  if (!player?.getPlayerState) return
  const state = player.getPlayerState()
  if (state === window.YT!.PlayerState.PLAYING) {
    wantsPlay = false
    player.pauseVideo()
  } else {
    wantsPlay = true
    player.playVideo()
  }
}

export function stopYouTubePlayback() {
  wantsPlay = false
  currentVideoId = null
  player?.pauseVideo?.()
  player?.seekTo?.(0, true)
  stopTimePolling()
}

export function seekYouTube(seconds: number) {
  player?.seekTo(seconds, true)
}

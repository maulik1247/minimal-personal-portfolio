import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { favoriteGames, getCoverSourceUrl } from '../lib/videoGamesData'

const outDir = path.join(process.cwd(), 'public', 'games')

async function main() {
  await mkdir(outDir, { recursive: true })

  for (const game of favoriteGames) {
    if (game.id === 'fc26') {
      console.log(`Skipping ${game.id} (local cover only)`)
      continue
    }

    const response = await fetch(getCoverSourceUrl(game))
    if (!response.ok) {
      throw new Error(`Failed to download ${game.id}: ${response.status}`)
    }

    const buffer = Buffer.from(await response.arrayBuffer())
    const filePath = path.join(outDir, `${game.id}.jpg`)
    await writeFile(filePath, buffer)
    console.log(`Saved ${filePath} (${Math.round(buffer.length / 1024)} KB)`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

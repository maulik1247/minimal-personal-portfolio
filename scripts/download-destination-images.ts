import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { destinationsTravelled } from '../lib/destinationsData'

const outDir = path.join(process.cwd(), 'public', 'destinations')

async function main() {
  await mkdir(outDir, { recursive: true })

  for (const destination of destinationsTravelled) {
    if (!destination.imageSourceUrl) {
      console.log(`Skipping ${destination.id} (local cover only)`)
      continue
    }

    const response = await fetch(destination.imageSourceUrl)
    if (!response.ok) {
      throw new Error(`Failed to download ${destination.id}: ${response.status}`)
    }

    const buffer = Buffer.from(await response.arrayBuffer())
    const filePath = path.join(outDir, `${destination.id}.jpg`)
    await writeFile(filePath, buffer)
    console.log(`Saved ${filePath} (${Math.round(buffer.length / 1024)} KB)`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

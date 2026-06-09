import { RiClaudeLine } from 'react-icons/ri'
import {
  SiAirtable,
  SiMiro,
  SiRaycast,
  SiSlack,
  SiTelegram,
  SiWhatsapp,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

export type ToolkitIconTile = {
  id: string
  bg: string
  src?: string
  Icon?: IconType
}

export type ToolkitCategory = {
  title: string
  images: ToolkitIconTile[]
}

function png(id: string, bg: string): ToolkitIconTile {
  return { id, bg, src: `/toolkit/${id}.png` }
}

function icon(id: string, bg: string, Icon: IconType): ToolkitIconTile {
  return { id, bg, Icon }
}

export const toolkitCategories: ToolkitCategory[] = [
  {
    title: 'Product & Planning',
    images: [
      png('notion', '#000000'),
      png('linear', '#5E6AD2'),
      png('trello', '#0079BF'),
    ],
  },
  {
    title: 'Design & Prototyping',
    images: [
      png('figma', '#F24E1E'),
      png('framer', '#000000'),
      png('sketch', '#F7B500'),
    ],
  },
  {
    title: 'Development & AI',
    images: [
      png('openai', '#64B297'),
      icon('claude', '#D97757', RiClaudeLine),
      png('cursor', '#000000'),
    ],
  },
  {
    title: 'Analytics & Insights',
    images: [
      png('posthog', '#1D4AFF'),
      png('googleanalytics', '#E37400'),
      png('mixpanel', '#7856FF'),
    ],
  },
  {
    title: 'Communication',
    images: [
      icon('slack', '#4A154B', SiSlack),
      icon('whatsapp', '#25D366', SiWhatsapp),
      icon('telegram', '#26A5E4', SiTelegram),
    ],
  },
  {
    title: 'Research & Workflow',
    images: [
      icon('raycast', '#FF6363', SiRaycast),
      icon('miro', '#050038', SiMiro),
      icon('airtable', '#18BFFF', SiAirtable),
    ],
  },
]

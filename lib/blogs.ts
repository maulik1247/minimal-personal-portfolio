import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Blog = {
  slug: string
  title: string
  subtitle?: string
  description: string
  date: string
  author?: string
  tags: string[]
  image?: string
  heroImage?: string
  content: string
  relatedBlogs?: string[]
  showOnHomepage?: boolean
  imageFit?: 'cover' | 'contain'
}

const BLOGS_DIR = path.join(process.cwd(), 'content/blogs')

function parseDate(date: string): number {
  const parsed = Date.parse(date)
  return Number.isNaN(parsed) ? 0 : parsed
}

function loadBlogFromFile(filename: string): Blog {
  const slug = filename.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(BLOGS_DIR, filename), 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title,
    subtitle: data.subtitle,
    description: data.description,
    date: data.date,
    author: data.author,
    tags: data.tags ?? [],
    image: data.image,
    heroImage: data.heroImage ?? data.image,
    content: content.trim(),
    relatedBlogs: data.relatedBlogs,
    showOnHomepage: data.showOnHomepage,
    imageFit: data.imageFit,
  }
}

export function getAllBlogs(): Blog[] {
  if (!fs.existsSync(BLOGS_DIR)) {
    return []
  }

  return fs
    .readdirSync(BLOGS_DIR)
    .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
    .map(loadBlogFromFile)
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
}

export function getAllBlogSlugs(): string[] {
  return getAllBlogs().map((blog) => blog.slug)
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return getAllBlogs().find((blog) => blog.slug === slug)
}

export function getRelatedBlogs(currentSlug: string): Blog[] {
  const currentBlog = getBlogBySlug(currentSlug)
  if (!currentBlog?.relatedBlogs) return []

  return currentBlog.relatedBlogs
    .map((slug) => getBlogBySlug(slug))
    .filter((blog): blog is Blog => blog !== undefined)
}

export function getHomepageBlogs(limit = 2): Blog[] {
  return getAllBlogs()
    .filter((blog) => blog.showOnHomepage !== false)
    .slice(0, limit)
}

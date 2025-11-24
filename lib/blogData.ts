export interface Blog {
  slug: string
  title: string
  subtitle?: string
  description: string
  date: string
  author?: string
  tags: string[]
  image?: string
  heroImage?: string
  content: {
    sections: Array<{
      type: 'paragraph' | 'heading' | 'quote' | 'list' | 'image' | 'ui-screenshot'
      content: string | string[]
      author?: string
      image?: string
      imageAlt?: string
    }>
  }
  relatedBlogs?: string[]
}

export const blogs: Blog[] = [
  {
    slug: "go-in-bits",
    title: "Go in bits",
    subtitle: "Archive of all the links from my socials for go tuts",
    description: "Archive of all the links from my socials for go tuts.",
    date: "October 2, 2025",
    author: "Maulik Tanna",
    tags: ["Case Study", "Go", "Development", "Backend"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=400&fit=crop&q=80",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop&q=80",
    content: {
      sections: [
        {
          type: 'paragraph',
          content: "When I started learning Go, I realized the importance of breaking down complex concepts into digestible bits. This archive contains all the learning resources, tutorials, and examples I've shared across my social media platforms."
        },
        {
          type: 'heading',
          content: "Staying ahead with practical examples"
        },
        {
          type: 'paragraph',
          content: "Go, also known as Golang, is a statically typed, compiled programming language designed at Google. It's known for its simplicity, efficiency, and excellent concurrency support. Through this series, I've explored various aspects of Go development."
        },
        {
          type: 'quote',
          content: "The best way to learn a language is by building real projects and sharing your journey with others.",
          author: "Maulik Tanna"
        },
        {
          type: 'heading',
          content: "Key topics covered"
        },
        {
          type: 'list',
          content: [
            "Go fundamentals and syntax",
            "Concurrency patterns with goroutines",
            "Building RESTful APIs",
            "Database integration",
            "Microservices architecture"
          ]
        },
        {
          type: 'paragraph',
          content: "Each tutorial is designed to be practical and immediately applicable. Whether you're building backend services, APIs, or scalable distributed systems, Go provides the tools you need to succeed."
        }
      ]
    },
    relatedBlogs: ["my-winter-arc"]
  },
  {
    slug: "my-winter-arc",
    title: "My Winter Arc",
    subtitle: "This blog contains all the links of my content from twitter & Instagram",
    description: "This blog contains all the links of my content from twitter & Instagram.",
    date: "October 1, 2025",
    author: "Maulik Tanna",
    tags: ["Blog", "Personal", "Winter Arc"],
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=400&fit=crop&q=80",
    heroImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=600&fit=crop&q=80",
    content: {
      sections: [
        {
          type: 'paragraph',
          content: "The winter of 2025 was a transformative period for me. This collection documents my journey through various projects, learnings, and personal growth moments shared across Twitter and Instagram."
        },
        {
          type: 'heading',
          content: "Reflecting on growth"
        },
        {
          type: 'paragraph',
          content: "During this winter arc, I focused on building meaningful projects, connecting with the developer community, and exploring new technologies. Each post represents a milestone in my journey."
        },
        {
          type: 'quote',
          content: "Winter is not the end of growth, but a season of preparation for new beginnings.",
          author: "Maulik Tanna"
        },
        {
          type: 'heading',
          content: "Highlights from the season"
        },
        {
          type: 'list',
          content: [
            "Open source contributions",
            "Community engagement",
            "Technical writing",
            "Project launches",
            "Skill development"
          ]
        },
        {
          type: 'paragraph',
          content: "This archive serves as a reminder of the continuous journey of learning and sharing. Each link tells a story of exploration, challenges overcome, and knowledge shared with the community."
        }
      ]
    },
    relatedBlogs: ["go-in-bits"]
  }
]

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find(blog => blog.slug === slug)
}

export function getRelatedBlogs(currentSlug: string): Blog[] {
  const currentBlog = getBlogBySlug(currentSlug)
  if (!currentBlog?.relatedBlogs) return []
  
  return currentBlog.relatedBlogs
    .map(slug => getBlogBySlug(slug))
    .filter((blog): blog is Blog => blog !== undefined)
}


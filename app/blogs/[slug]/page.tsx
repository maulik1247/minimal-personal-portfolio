import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogBySlug, getRelatedBlogs } from '@/lib/blogData'
import Navbar from '@/app/components/Navbar'
import { IoCalendarOutline, IoArrowBackOutline } from 'react-icons/io5'

export async function generateStaticParams() {
  return [
    { slug: 'go-in-bits' },
    { slug: 'my-winter-arc' }
  ]
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  const relatedBlogs = getRelatedBlogs(slug)

  if (!blog) {
    notFound()
  }

  const categoryTag = blog.tags.find(tag => tag === "Case Study" || tag === "Blog") || blog.tags[0]

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'white', width: '100%' }}>
      <Navbar />
      
      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-black transition-colors"
          style={{ fontFamily: 'Product Sans, sans-serif' }}
        >
          <IoArrowBackOutline className="w-4 h-4" />
          <span>Back to blogs</span>
        </Link>

        {/* Header with Category Tag */}
        <div className="mb-6">
          <span 
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              backgroundColor: '#1a1a1a',
              color: '#ffffff',
              fontFamily: 'Product Sans, sans-serif'
            }}
          >
            {categoryTag}
          </span>
        </div>

        {/* Title */}
        <h1 
          className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight"
          style={{ fontFamily: 'Product Sans, sans-serif' }}
        >
          {blog.title}
        </h1>

        {/* Subtitle */}
        {blog.subtitle && (
          <p 
            className="text-xl text-gray-600 mb-8"
            style={{ fontFamily: 'Product Sans, sans-serif' }}
          >
            {blog.subtitle}
          </p>
        )}

        {/* Author and Date */}
        <div className="flex items-center gap-4 mb-12 text-sm text-gray-500">
          {blog.author && (
            <span style={{ fontFamily: 'Product Sans, sans-serif' }}>
              {blog.author}
            </span>
          )}
          <div className="flex items-center gap-2">
            <IoCalendarOutline className="w-4 h-4" />
            <span style={{ fontFamily: 'Product Sans, sans-serif' }}>
              {blog.date}
            </span>
          </div>
        </div>

        {/* Hero Image */}
        {blog.heroImage && (
          <div className="mb-12 -mx-6 md:-mx-12">
            <img 
              src={blog.heroImage} 
              alt={blog.title}
              className="w-full h-auto rounded-lg"
              style={{ objectFit: 'cover', maxHeight: '600px', width: 'calc(100% + 3rem)' }}
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-16">
          {blog.content.sections.map((section, index) => {
            switch (section.type) {
              case 'heading':
                return (
                  <h2 
                    key={index}
                    className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6"
                    style={{ fontFamily: 'Product Sans, sans-serif' }}
                  >
                    {Array.isArray(section.content) ? section.content[0] : section.content}
                  </h2>
                )
              
              case 'paragraph':
                return (
                  <p 
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed mb-6"
                    style={{ fontFamily: 'Product Sans, sans-serif' }}
                  >
                    {Array.isArray(section.content) ? section.content[0] : section.content}
                  </p>
                )
              
              case 'quote':
                return (
                  <blockquote 
                    key={index}
                    className="border-l-4 border-black pl-6 my-8 italic text-xl text-gray-700"
                    style={{ fontFamily: 'Product Sans, sans-serif' }}
                  >
                    <p className="mb-2">
                      "{Array.isArray(section.content) ? section.content[0] : section.content}"
                    </p>
                    {section.author && (
                      <cite className="text-base text-gray-500 not-italic">
                        — {section.author}
                      </cite>
                    )}
                  </blockquote>
                )
              
              case 'list':
                return (
                  <ul 
                    key={index}
                    className="list-decimal list-inside space-y-3 mb-6 text-lg text-gray-700 ml-4"
                    style={{ fontFamily: 'Product Sans, sans-serif' }}
                  >
                    {Array.isArray(section.content) && section.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )
              
              case 'image':
                return section.image ? (
                  <div key={index} className="my-12">
                    <img 
                      src={section.image} 
                      alt={section.imageAlt || blog.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                ) : null
              
              case 'ui-screenshot':
                return section.image ? (
                  <div key={index} className="my-12 bg-gray-900 p-4 rounded-lg">
                    <img 
                      src={section.image} 
                      alt={section.imageAlt || 'UI Screenshot'}
                      className="w-full h-auto rounded"
                    />
                  </div>
                ) : null
              
              default:
                return null
            }
          })}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {blog.tags.map((tag, tagIndex) => {
            const isCategoryTag = tag === "Case Study" || tag === "Blog"
            return (
              <span 
                key={tagIndex}
                className="px-3 py-1 rounded-lg text-sm font-medium"
                style={{
                  fontFamily: 'Product Sans, sans-serif',
                  fontWeight: isCategoryTag ? '600' : '500',
                  color: isCategoryTag ? '#ffffff' : '#1a1a1a',
                  backgroundColor: isCategoryTag ? '#1a1a1a' : '#f5f5f5',
                }}
              >
                {tag}
              </span>
            )
          })}
        </div>

        {/* Related Blogs Section */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 
              className="text-2xl font-bold text-black mb-6"
              style={{ fontFamily: 'Product Sans, sans-serif' }}
            >
              Related content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.slug}
                  href={`/blogs/${relatedBlog.slug}`}
                  className="group"
                >
                  <div 
                    className="rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 transition-colors"
                    style={{ backgroundColor: '#f9f9f9' }}
                  >
                    {relatedBlog.image && (
                      <img 
                        src={relatedBlog.image} 
                        alt={relatedBlog.title}
                        className="w-full h-32 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h4 
                        className="font-bold text-black mb-2 group-hover:text-gray-600 transition-colors"
                        style={{ fontFamily: 'Product Sans, sans-serif' }}
                      >
                        {relatedBlog.title}
                      </h4>
                      <p 
                        className="text-sm text-gray-600 line-clamp-2"
                        style={{ fontFamily: 'Product Sans, sans-serif' }}
                      >
                        {relatedBlog.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}


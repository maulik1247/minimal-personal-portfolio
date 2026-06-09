import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllBlogSlugs, getBlogBySlug, getRelatedBlogs } from '@/lib/blogs'
import Navbar from '@/app/components/Navbar'
import BlogContent from '@/app/components/BlogContent'
import MotionReveal, { MotionStagger, MotionStaggerItem } from '@/app/components/MotionReveal'
import { IoCalendarOutline, IoArrowBackOutline } from 'react-icons/io5'

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  const relatedBlogs = getRelatedBlogs(slug)

  if (!blog) {
    notFound()
  }

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      
      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        {/* Back Button */}
        <MotionReveal y={12}>
        <Link 
          href="/blogs"
          className="btn-smooth mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-black"
          style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
        >
          <IoArrowBackOutline className="w-4 h-4" />
          <span>Back to blogs</span>
        </Link>
        </MotionReveal>

        <MotionReveal delay={0.05}>
        <h1 
          className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
        >
          {blog.title}
        </h1>

        {/* Subtitle */}
        {blog.subtitle && (
          <p 
            className="text-xl text-gray-600 mb-8"
            style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
          >
            {blog.subtitle}
          </p>
        )}

        {/* Author and Date */}
        <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
          {blog.author && (
            <span style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}>
              {blog.author}
            </span>
          )}
          <div className="flex items-center gap-2">
            <IoCalendarOutline className="w-4 h-4" />
            <span style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}>
              {blog.date}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-12 flex flex-wrap gap-2">
          {blog.tags.map((tag, tagIndex) => {
            const isCategoryTag = tag === 'Case Study' || tag === 'Blog'
            return (
              <span
                key={tagIndex}
                className="rounded-lg px-3 py-1 text-sm font-medium"
                style={{
                  fontFamily: 'var(--font-gabarito), Gabarito, sans-serif',
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
        </MotionReveal>

        {blog.heroImage && (
        <MotionReveal delay={0.1}>
          <div className="mb-12 overflow-hidden rounded-lg border border-gray-200 bg-white">
            <img
              src={blog.heroImage}
              alt={blog.title}
              className={
                blog.imageFit === 'cover'
                  ? 'h-[280px] w-full object-cover md:h-[360px]'
                  : 'h-auto w-full max-h-[420px] object-contain p-8'
              }
            />
          </div>
        </MotionReveal>
        )}

        <MotionReveal delay={0.15}>
        <BlogContent content={blog.content} />
        </MotionReveal>

        {/* Related Blogs Section */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 
              className="text-2xl font-bold text-black mb-6"
              style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
            >
              Related content
            </h3>
            <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <MotionStaggerItem key={relatedBlog.slug}>
                <Link
                  href={`/blogs/${relatedBlog.slug}`}
                  className="group interactive-card block"
                >
                  <div 
                    className="overflow-hidden rounded-lg border border-gray-200"
                    style={{ backgroundColor: '#f9f9f9' }}
                  >
                    {relatedBlog.image && (
                      <div className="border-b border-gray-200 bg-white">
                        <img
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          className={
                            relatedBlog.imageFit === 'cover'
                              ? 'h-32 w-full object-cover'
                              : 'h-32 w-full object-contain p-4'
                          }
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h4 
                        className="font-bold text-black mb-2 group-hover:text-gray-600 transition-colors"
                        style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
                      >
                        {relatedBlog.title}
                      </h4>
                      <p 
                        className="text-sm text-gray-600 line-clamp-2"
                        style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
                      >
                        {relatedBlog.description}
                      </p>
                    </div>
                  </div>
                </Link>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        )}
      </article>
    </div>
  )
}


import React from 'react'
import Link from 'next/link'
import { IoCalendarOutline, IoArrowForwardOutline } from 'react-icons/io5'
import { getAllBlogs, getHomepageBlogs, type Blog } from '@/lib/blogs'
import PageHeader from './PageHeader'
import SectionHeader from './SectionHeader'
import MotionReveal, { MotionStagger, MotionStaggerItem } from './MotionReveal'

type BlogsSectionProps = {
  fullPage?: boolean
}

function BlogCard({ blog }: { blog: Blog }) {
  const imageFit = blog.imageFit ?? 'contain'

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group interactive-card relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-inherit no-underline"
    >
      {blog.image && (
        <div className="overflow-hidden" style={{ position: 'relative', borderRadius: '16px 16px 0 0' }}>
          <img
            src={blog.image}
            alt={blog.title}
            className="interactive-image"
            style={{
              width: '100%',
              borderRadius: '16px 16px 0 0',
              objectFit: imageFit,
              height: '200px',
              display: 'block',
              backgroundColor: imageFit === 'cover' ? '#f0f0f0' : '#ffffff',
              padding: imageFit === 'cover' ? '0' : '24px',
            }}
          />
        </div>
      )}

      <div className="flex flex-col gap-4" style={{ padding: '20px' }}>
        <h3
          className="text-xl font-bold text-black"
          style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
        >
          {blog.title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-gabarito), Gabarito, sans-serif',
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#909092',
          }}
        >
          {blog.description}
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {blog.tags.map((tag, tagIndex) => {
            const isCategoryTag = tag === 'Case Study' || tag === 'Blog'
            return (
              <span
                key={tagIndex}
                style={{
                  fontFamily: 'var(--font-gabarito), Gabarito, sans-serif',
                  fontSize: '12px',
                  fontWeight: isCategoryTag ? '600' : '500',
                  color: isCategoryTag ? '#ffffff' : '#1a1a1a',
                  backgroundColor: isCategoryTag ? '#1a1a1a' : '#f5f5f5',
                  padding: '6px 12px',
                  borderRadius: '8px',
                }}
              >
                {tag}
              </span>
            )
          })}
        </div>

        <div
          className="flex items-center justify-between pt-2"
          style={{ borderTop: '1px solid #f5f5f5' }}
        >
          <div className="flex items-center gap-2 text-xs text-[#909092]">
            <IoCalendarOutline className="h-4 w-4" />
            <span style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}>
              {blog.date}
            </span>
          </div>
          <div
            className="flex items-center gap-1 text-sm text-[#1a1a1a]"
            style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
          >
            Read More
            <IoArrowForwardOutline style={{ fontSize: '16px' }} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function BlogsSection({ fullPage = false }: BlogsSectionProps) {
  const allBlogs = getAllBlogs()
  const visibleBlogs = fullPage ? allBlogs : getHomepageBlogs()

  if (fullPage) {
    return (
      <section className="bg-white">
        <div className="flex flex-col gap-8">
          <MotionReveal>
            <PageHeader
              title="Blogs"
              subtitle="Case studies, notes, and thoughts on product, engineering, and learning."
            />
          </MotionReveal>

          <div className="flex flex-col gap-12">
            <MotionReveal delay={0.05}>
              <h2
                className="text-2xl font-bold text-black"
                style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
              >
                All Posts{' '}
                <span className="font-normal text-gray-400">({allBlogs.length} posts)</span>
              </h2>
            </MotionReveal>

            <MotionStagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {visibleBlogs.map((blog) => (
                <MotionStaggerItem key={blog.slug}>
                  <BlogCard blog={blog} />
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="blogs" className="scroll-mt-28 bg-white">
      <div className="section-shell">
        <MotionReveal>
          <SectionHeader title="Blogs" />
        </MotionReveal>

        <MotionStagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleBlogs.map((blog) => (
            <MotionStaggerItem key={blog.slug}>
              <BlogCard blog={blog} />
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionReveal delay={0.15} className="text-center">
          <Link
            href="/blogs"
            className="btn-smooth inline-block rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-black hover:bg-gray-50"
          >
            Show all blogs
          </Link>
        </MotionReveal>
      </div>
    </section>
  )
}

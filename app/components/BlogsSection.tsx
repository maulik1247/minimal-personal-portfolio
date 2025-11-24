"use client"

import React from 'react'
import Link from 'next/link'
import { IoCalendarOutline, IoArrowForwardOutline } from 'react-icons/io5'
import { blogs } from '@/lib/blogData'

export default function BlogsSection() {
  return (
    <section style={{ backgroundColor: 'white' }}>
      <div className="pb-5 pt-16 px-16 flex flex-col gap-8">
        {/* Header */}
        <div className="text-left flex flex-col gap-2">
          <div className="text-sm font-medium text-gray-500" style={{ fontFamily: 'Product Sans, sans-serif' }}>
            Featured
          </div>
          <h2 className="font-bold text-black" style={{ fontFamily: 'Product Sans, sans-serif', fontSize: '24px' }}>
            Blogs
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="block hover:opacity-90 transition-opacity"
              style={{
                borderRadius: '16px',
                backgroundColor: 'white',
                border: '1px solid #e5e5e5',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              {/* Image */}
              {blog.image && (
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '16px 16px 0 0'
                  }}
                >
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    style={{
                      width: '100%',
                      borderRadius: '16px 16px 0 0',
                      objectFit: 'cover',
                      height: '200px',
                      display: 'block'
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex flex-col gap-4" style={{ padding: '20px' }}>
                {/* Title */}
                <h3
                  className="font-bold"
                  style={{
                    fontFamily: 'Product Sans, sans-serif',
                    fontSize: '20px',
                    color: '#1a1a1a'
                  }}
                >
                  {blog.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'Product Sans, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: '#909092'
                  }}
                >
                  {blog.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {blog.tags.map((tag, tagIndex) => {
                    const isCategoryTag = tag === "Case Study" || tag === "Blog"
                    return (
                      <span 
                        key={tagIndex}
                        style={{
                          fontFamily: 'Product Sans, sans-serif',
                          fontSize: '12px',
                          fontWeight: isCategoryTag ? '600' : '500',
                          color: isCategoryTag ? '#ffffff' : '#1a1a1a',
                          backgroundColor: isCategoryTag ? '#1a1a1a' : '#f5f5f5',
                          padding: '6px 12px',
                          borderRadius: '8px'
                        }}
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #f5f5f5' }}>
                  <div className="flex items-center gap-2" style={{ fontSize: '12px', color: '#909092' }}>
                    <IoCalendarOutline className="w-4 h-4" />
                    <span style={{ fontFamily: 'Product Sans, sans-serif' }}>{blog.date}</span>
                  </div>
                  <div
                    className="flex items-center gap-1"
                    style={{
                      color: '#1a1a1a',
                      fontSize: '14px',
                      fontFamily: 'Product Sans, sans-serif'
                    }}
                  >
                    Read More
                    <IoArrowForwardOutline style={{ fontSize: '16px' }} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show All Blogs Button */}
        <div className="text-center">
          <button className="bg-white border border-black text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors" style={{ fontFamily: 'Product Sans, sans-serif' }}>
            Show all blogs
          </button>
        </div>
      </div>
    </section>
  )
}

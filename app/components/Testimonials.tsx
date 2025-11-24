"use client"

import React from 'react'
import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards'

const testimonials = [
  {
    quote: "Maulik is a developer who truly elevates the development process. His innovative approach and creative solutions helped us rethink the entire technical architecture. His work doesn't just look great—it solves real problems, making it easy for users to engage with our product. I highly recommend Maulik for any development challenges.",
    name: "Sarah Chen",
    title: "Engineering Manager at TechCorp",
    image: "/image 305.png"
  },
  {
    quote: "Working with Maulik has been an absolute game-changer for our team. He doesn't just write code—he crafts solutions that are both technically sound and user-focused. His ability to translate complex requirements into clean, maintainable code is remarkable. Maulik's dedication to quality and his collaborative spirit make him invaluable to any project.",
    name: "David Rodriguez",
    title: "Senior Developer",
    image: "/image 305.png"
  },
  {
    quote: "Maulik's expertise in React and Next.js is truly outstanding. He has an exceptional ability to build scalable applications that perform beautifully. What sets him apart is his commitment to understanding the broader business context, ensuring his technical solutions drive real value. His attention to detail and passion for excellence make him a standout developer.",
    name: "Emily Johnson",
    title: "Product Manager",
    image: "/image 305.png"
  },
  {
    quote: "I've worked with many developers, but Maulik stands out for his technical depth and communication skills. He brings innovative thinking to every problem, combining cutting-edge technology with practical solutions. His work is not just functional—it's elegant and well-architected. Highly recommend working with Maulik.",
    name: "Michael Park",
    title: "Tech Lead",
    image: "/image 305.png"
  },
  {
    quote: "Maulik is a developer who transforms ideas into exceptional digital experiences. His understanding of modern web technologies results in products that truly resonate with users.",
    name: "Alex Martinez",
    title: "CTO at StartupXYZ",
    image: "/image 305.png"
  },
  {
    quote: "What sets Maulik apart is his ability to balance technical excellence with business objectives. Every solution he delivers drives real value.",
    name: "Jessica Wong",
    title: "Lead Developer",
    image: "/image 305.png"
  },
  {
    quote: "Maulik's code is clean, maintainable, and well-architected. He has a rare talent for creating solutions that are both elegant and functional.",
    name: "Ryan Kim",
    title: "Engineering Director",
    image: "/image 305.png"
  },
  {
    quote: "Working with Maulik elevated our entire development workflow. His attention to detail and commitment to quality is unmatched.Working with Maulik elevated our entire development workflow. His attention to detail and commitment to quality is unmatched.",
    name: "Samantha Lee",
    title: "Product Owner",
    image: "/image 305.png"
  },
]

export default function TestimonialsSection() {
  return (
    <section style={{ backgroundColor: 'white' }}>
      <div className="pb-5 pt-16 px-16 flex flex-col gap-8">
        {/* Header */}
        <div className="text-left flex flex-col gap-2">
          <div className="text-sm font-medium text-gray-500" style={{ fontFamily: 'Product Sans, sans-serif' }}>
            What People Say
          </div>
          <h2 className="font-bold text-black" style={{ fontFamily: 'Product Sans, sans-serif', fontSize: '24px' }}>
            Testimonials
          </h2>
        </div>

        {/* Infinite Moving Cards */}
        <div className="rounded-md flex flex-col items-center justify-center relative overflow-visible w-full">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={false}
          />
        </div>
      </div>
    </section>
  )
}

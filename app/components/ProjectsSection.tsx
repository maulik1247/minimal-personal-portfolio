"use client"

import React from 'react'
import { SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiGraphql, SiAppwrite, SiNodedotjs, SiPostgresql, SiMongodb, SiDocker, SiRedis, SiPrisma } from 'react-icons/si'
import ProjectCard from './ProjectCard'

interface TechIcon {
  icon: React.ComponentType<{ className?: string }>
  color: string
  name: string
}

interface Project {
  title: string
  description: string
  image: string
  gradientBackground: string
  technologies: TechIcon[]
  status: 'operational' | 'building'
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: "NotesBuddy",
    description: "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools",
    image: "/image 9.png",
    gradientBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    technologies: [
      { icon: SiNextdotjs, color: "text-black", name: "Next.js" },
      { icon: SiTypescript, color: "text-blue-600", name: "TypeScript" },
      { icon: SiReact, color: "text-blue-500", name: "React" },
      { icon: SiTailwindcss, color: "text-cyan-500", name: "Tailwind CSS" },
      { icon: SiPrisma, color: "text-teal-600", name: "Prisma" },
      { icon: SiPostgresql, color: "text-blue-700", name: "PostgreSQL" },
      { icon: SiDocker, color: "text-blue-500", name: "Docker" },
    ],
    status: 'operational',
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Appwrite MCP Server",
    description: "Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate",
    image: "/image 301.png",
    gradientBackground: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    technologies: [
      { icon: SiTypescript, color: "text-blue-600", name: "TypeScript" },
      { icon: SiAppwrite, color: "text-red-600", name: "Appwrite" },
      { icon: SiNodedotjs, color: "text-green-600", name: "Node.js" },
      { icon: SiDocker, color: "text-blue-500", name: "Docker" },
    ],
    status: 'operational',
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Syncify",
    description: "Real-time music streaming platform with synchronized playback, live chat, and social listening features",
    image: "/image 302.png",
    gradientBackground: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    technologies: [
      { icon: SiReact, color: "text-blue-500", name: "React" },
      { icon: SiGraphql, color: "text-pink-500", name: "GraphQL" },
      { icon: SiTailwindcss, color: "text-cyan-500", name: "Tailwind CSS" },
      { icon: SiNodedotjs, color: "text-green-600", name: "Node.js" },
      { icon: SiMongodb, color: "text-green-700", name: "MongoDB" },
      { icon: SiRedis, color: "text-red-600", name: "Redis" },
    ],
    status: 'operational',
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Pasandida Aurat",
    description: "Innovative dating platform featuring anonymous questions and authentic connections - currently in development",
    image: "/image 303.png",
    gradientBackground: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    technologies: [
      { icon: SiNextdotjs, color: "text-black", name: "Next.js" },
      { icon: SiTypescript, color: "text-blue-600", name: "TypeScript" },
      { icon: SiReact, color: "text-blue-500", name: "React" },
      { icon: SiTailwindcss, color: "text-cyan-500", name: "Tailwind CSS" },
      { icon: SiPrisma, color: "text-teal-600", name: "Prisma" },
      { icon: SiRedis, color: "text-red-600", name: "Redis" },
    ],
    status: 'building',
    liveUrl: "#"
  }
]

export default function ProjectsSection() {
  return (
    <section style={{ backgroundColor: 'white' }}>
      <div className="pb-5 pt-16 px-16 flex flex-col gap-8">
        {/* Header */}
        <div className="text-left flex flex-col gap-2">
          <div className="text-sm font-medium text-gray-500" style={{ fontFamily: 'Product Sans, sans-serif' }}>
            Featured
          </div>
          <h2 className="font-bold text-black" style={{ fontFamily: 'Product Sans, sans-serif', fontSize: '24px' }}>
            Projects
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Show All Projects Button */}
        <div className="text-center">
          <button className="bg-white border border-gray-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors" style={{ fontFamily: 'Product Sans, sans-serif' }}>
            Show all projects
          </button>
        </div>
      </div>
    </section>
  )
}


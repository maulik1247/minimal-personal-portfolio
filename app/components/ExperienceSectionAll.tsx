"use client"

import React from 'react'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiReact, SiFigma, SiVercel, SiPostman, SiBun, SiApple, SiNetflix, SiOpenai, SiSpotify, SiNodedotjs, SiPostgresql, SiDocker, SiPython, SiMongodb, SiRedis, SiKubernetes, SiGraphql, SiApollographql, SiGithub, SiGoogle, SiAmazon, SiMeta, SiShopify, SiRuby, SiAtlassian, SiNvidia, SiGo, SiRust, SiAngular, SiVuedotjs, SiExpress, SiGit, SiLinux, SiJenkins, SiTerraform, SiRubyonrails, SiLinkedin } from 'react-icons/si'
import { CiGlobe } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { PiLinkedinLogoBold } from 'react-icons/pi'
import ExperienceCard from './ExperienceCard'
import { IconType } from 'react-icons'

interface ExperienceData {
  companyIcon: IconType
  companyName: string
  position: string
  startDate: string
  endDate: string
  location: string
  isCurrent?: boolean
  iconBgColor: string
  iconColor: string
  technologies: Array<{
    icon: IconType
    name: string
    href: string
    iconColor: string
  }>
  responsibilities: string[]
  socialLinks?: Array<{
    icon: IconType
    href: string
    label: string
  }>
}

export default function ExperienceSectionAll() {
  const experiences: ExperienceData[] = [
    {
      companyIcon: SiApple,
      companyName: "Apple",
      position: "Founding Frontend Engineer",
      startDate: "August 2025",
      endDate: "Present",
      location: "United States (Remote)",
      isCurrent: true,
      iconBgColor: "bg-gray-900",
      iconColor: "text-white",
      technologies: [
        { icon: SiNextdotjs, name: "Next.js", href: "https://nextjs.org/", iconColor: "text-black" },
        { icon: SiTailwindcss, name: "Tailwind CSS", href: "https://tailwindcss.com/", iconColor: "text-cyan-500" },
        { icon: SiTypescript, name: "TypeScript", href: "https://www.typescriptlang.org/", iconColor: "text-blue-600" },
        { icon: SiReact, name: "React", href: "https://react.dev/", iconColor: "text-blue-500" },
        { icon: SiFigma, name: "Figma", href: "https://www.figma.com/", iconColor: "text-purple-500" },
        { icon: SiVercel, name: "Vercel", href: "https://vercel.com/", iconColor: "text-black" },
        { icon: SiPostman, name: "Postman", href: "https://www.postman.com/", iconColor: "text-orange-500" },
        { icon: SiBun, name: "Bun", href: "https://bun.sh/", iconColor: "text-orange-500" }
      ],
      responsibilities: [
        "Architected and developed the complete frontend infrastructure for the platform, a comprehensive solution for creating and managing promotional campaigns.",
        "Led a comprehensive codebase refactoring initiative that improved maintainability, scalability, and development velocity across the entire platform.",
        "Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms.",
        "Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations."
      ],
      socialLinks: [
        { icon: CiGlobe, href: "https://www.apple.com", label: "Visit website" },
        { icon: FiGithub, href: "https://github.com/apple", label: "View GitHub" },
        { icon: FaXTwitter, href: "https://twitter.com/apple", label: "Follow on X" },
        { icon: PiLinkedinLogoBold, href: "https://www.linkedin.com/company/apple", label: "Connect on LinkedIn" }
      ]
    },
    {
      companyIcon: SiNetflix,
      companyName: "Netflix",
      position: "Backend Developer Intern",
      startDate: "June 2025",
      endDate: "July 2025",
      location: "Bangalore, India (On-Site)",
      isCurrent: false,
      iconBgColor: "bg-red-600",
      iconColor: "text-white",
      technologies: [
        { icon: SiTypescript, name: "TypeScript", href: "https://www.typescriptlang.org/", iconColor: "text-blue-600" },
        { icon: SiReact, name: "React", href: "https://react.dev/", iconColor: "text-blue-500" },
        { icon: SiNodedotjs, name: "Node.js", href: "https://nodejs.org/", iconColor: "text-green-600" },
        { icon: SiPostgresql, name: "PostgreSQL", href: "https://www.postgresql.org/", iconColor: "text-blue-700" },
        { icon: SiDocker, name: "Docker", href: "https://www.docker.com/", iconColor: "text-blue-500" },
        { icon: SiVercel, name: "Vercel", href: "https://vercel.com/", iconColor: "text-black" }
      ],
      responsibilities: [
        "Developed scalable backend services using Node.js and TypeScript for content recommendation systems.",
        "Implemented database optimization strategies that improved query performance by 40%.",
        "Collaborated with cross-functional teams to deliver high-quality streaming features.",
        "Participated in code reviews and contributed to architectural decisions for microservices."
      ],
      socialLinks: [
        { icon: CiGlobe, href: "https://www.netflix.com", label: "Visit website" },
        { icon: FiGithub, href: "https://github.com/netflix", label: "View GitHub" },
        { icon: FaXTwitter, href: "https://twitter.com/netflix", label: "Follow on X" },
        { icon: PiLinkedinLogoBold, href: "https://www.linkedin.com/company/netflix", label: "Connect on LinkedIn" }
      ]
    },
    {
      companyIcon: SiOpenai,
      companyName: "OpenAI",
      position: "Founding Engineer",
      startDate: "April 2025",
      endDate: "June 2025",
      location: "Remote (India)",
      isCurrent: false,
      iconBgColor: "bg-gray-300",
      iconColor: "text-black",
      technologies: [
        { icon: SiPython, name: "Python", href: "https://www.python.org/", iconColor: "text-blue-500" },
        { icon: SiTypescript, name: "TypeScript", href: "https://www.typescriptlang.org/", iconColor: "text-blue-600" },
        { icon: SiReact, name: "React", href: "https://react.dev/", iconColor: "text-blue-500" },
        { icon: SiNodedotjs, name: "Node.js", href: "https://nodejs.org/", iconColor: "text-green-600" },
        { icon: SiMongodb, name: "MongoDB", href: "https://www.mongodb.com/", iconColor: "text-green-500" },
        { icon: SiRedis, name: "Redis", href: "https://redis.io/", iconColor: "text-red-500" },
        { icon: SiDocker, name: "Docker", href: "https://www.docker.com/", iconColor: "text-blue-500" },
        { icon: SiKubernetes, name: "Kubernetes", href: "https://kubernetes.io/", iconColor: "text-blue-600" }
      ],
      responsibilities: [
        "Built core AI infrastructure and API services for large language model deployment.",
        "Designed and implemented scalable microservices architecture using Python and Node.js.",
        "Optimized model inference performance resulting in 60% faster response times.",
        "Led technical architecture decisions for AI model serving and monitoring systems."
      ],
      socialLinks: [
        { icon: CiGlobe, href: "https://openai.com", label: "Visit website" },
        { icon: FiGithub, href: "https://github.com/openai", label: "View GitHub" },
        { icon: FaXTwitter, href: "https://twitter.com/openai", label: "Follow on X" },
        { icon: PiLinkedinLogoBold, href: "https://www.linkedin.com/company/openai", label: "Connect on LinkedIn" }
      ]
    },
    {
      companyIcon: SiSpotify,
      companyName: "Spotify",
      position: "SDE-1 (Full Stack) Intern",
      startDate: "Aug 2023",
      endDate: "April 2025",
      location: "Dubai, UAE (Remote)",
      isCurrent: false,
      iconBgColor: "bg-green-500",
      iconColor: "text-white",
      technologies: [
        { icon: SiReact, name: "React", href: "https://react.dev/", iconColor: "text-blue-500" },
        { icon: SiNextdotjs, name: "Next.js", href: "https://nextjs.org/", iconColor: "text-black" },
        { icon: SiTypescript, name: "TypeScript", href: "https://www.typescriptlang.org/", iconColor: "text-blue-600" },
        { icon: SiNodedotjs, name: "Node.js", href: "https://nodejs.org/", iconColor: "text-green-600" },
        { icon: SiMongodb, name: "MongoDB", href: "https://www.mongodb.com/", iconColor: "text-green-500" },
        { icon: SiGraphql, name: "GraphQL", href: "https://graphql.org/", iconColor: "text-pink-500" },
        { icon: SiApollographql, name: "Apollo", href: "https://www.apollographql.com/", iconColor: "text-purple-500" },
        { icon: SiDocker, name: "Docker", href: "https://www.docker.com/", iconColor: "text-blue-500" }
      ],
      responsibilities: [
        "Developed full-stack music streaming features using React, Next.js, and Node.js.",
        "Implemented real-time audio processing and playlist management systems.",
        "Built GraphQL APIs for efficient data fetching and caching strategies.",
        "Collaborated with design teams to create intuitive user interfaces for music discovery."
      ],
      socialLinks: [
        { icon: CiGlobe, href: "https://www.spotify.com", label: "Visit website" },
        { icon: FiGithub, href: "https://github.com/spotify", label: "View GitHub" },
        { icon: FaXTwitter, href: "https://twitter.com/spotify", label: "Follow on X" },
        { icon: PiLinkedinLogoBold, href: "https://www.linkedin.com/company/spotify", label: "Connect on LinkedIn" }
      ]
    },
    {
      companyIcon: SiNvidia,
      companyName: "NVIDIA",
      position: "Software Engineering Intern",
      startDate: "January 2024",
      endDate: "April 2024",
      location: "Santa Clara, CA (On-Site)",
      isCurrent: false,
      iconBgColor: "bg-black",
      iconColor: "text-green-500",
      technologies: [
        { icon: SiPython, name: "Python", href: "https://www.python.org/", iconColor: "text-blue-500" },
        { icon: SiReact, name: "React", href: "https://react.dev/", iconColor: "text-blue-500" },
        { icon: SiTypescript, name: "TypeScript", href: "https://www.typescriptlang.org/", iconColor: "text-blue-600" },
        { icon: SiNextdotjs, name: "Next.js", href: "https://nextjs.org/", iconColor: "text-black" },
        { icon: SiDocker, name: "Docker", href: "https://www.docker.com/", iconColor: "text-blue-500" },
        { icon: SiKubernetes, name: "Kubernetes", href: "https://kubernetes.io/", iconColor: "text-blue-600" },
        { icon: SiGit, name: "Git", href: "https://git-scm.com/", iconColor: "text-orange-500" },
        { icon: SiLinux, name: "Linux", href: "https://www.linux.org/", iconColor: "text-yellow-500" },
        { icon: SiAmazon, name: "AWS", href: "https://aws.amazon.com/", iconColor: "text-orange-600" },
        { icon: SiJenkins, name: "Jenkins", href: "https://www.jenkins.io/", iconColor: "text-blue-600" }
      ],
      responsibilities: [
        "Developed AI and machine learning infrastructure components using CUDA and TensorFlow.",
        "Collaborated with senior engineers to design and implement critical features for GPU computing platforms.",
        "Optimized deep learning models resulting in 50% improvement in inference times.",
        "Created automated testing pipelines and CI/CD workflows to streamline deployment processes."
      ],
      socialLinks: [
        { icon: CiGlobe, href: "https://www.nvidia.com", label: "Visit website" },
        { icon: FiGithub, href: "https://github.com/nvidia", label: "View GitHub" },
        { icon: FaXTwitter, href: "https://twitter.com/nvidia", label: "Follow on X" },
        { icon: PiLinkedinLogoBold, href: "https://www.linkedin.com/company/nvidia", label: "Connect on LinkedIn" }
      ]
    },
    {
      companyIcon: SiAtlassian,
      companyName: "Atlassian",
      position: "Frontend Developer",
      startDate: "September 2023",
      endDate: "December 2023",
      location: "Sydney, Australia (Hybrid)",
      isCurrent: false,
      iconBgColor: "bg-blue-600",
      iconColor: "text-white",
      technologies: [
        { icon: SiTypescript, name: "TypeScript", href: "https://www.typescriptlang.org/", iconColor: "text-blue-600" },
        { icon: SiReact, name: "React", href: "https://react.dev/", iconColor: "text-blue-500" },
        { icon: SiTailwindcss, name: "Tailwind CSS", href: "https://tailwindcss.com/", iconColor: "text-cyan-500" },
        { icon: SiNodedotjs, name: "Node.js", href: "https://nodejs.org/", iconColor: "text-green-600" },
        { icon: SiPostgresql, name: "PostgreSQL", href: "https://www.postgresql.org/", iconColor: "text-blue-700" },
        { icon: SiDocker, name: "Docker", href: "https://www.docker.com/", iconColor: "text-blue-500" },
        { icon: SiGit, name: "Git", href: "https://git-scm.com/", iconColor: "text-orange-500" },
        { icon: SiExpress, name: "Express", href: "https://expressjs.com/", iconColor: "text-gray-600" }
      ],
      responsibilities: [
        "Built responsive user interfaces for Atlassian products (Jira, Confluence).",
        "Improved accessibility compliance across multiple product features.",
        "Participated in agile development cycles and code review processes.",
        "Implemented advanced state management solutions using React hooks and context API for complex workflows."
      ],
      socialLinks: [
        { icon: CiGlobe, href: "https://www.atlassian.com", label: "Visit website" },
        { icon: FiGithub, href: "https://github.com/atlassian", label: "View GitHub" },
        { icon: FaXTwitter, href: "https://twitter.com/atlassian", label: "Follow on X" },
        { icon: PiLinkedinLogoBold, href: "https://www.linkedin.com/company/atlassian", label: "Connect on LinkedIn" }
      ]
    }
  ]

  return (
    <section style={{ backgroundColor: 'white' }}>
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-bold text-black" style={{ fontFamily: 'Product Sans, sans-serif', fontSize: '48px' }}>
            Work Experience
          </h2>
          <p style={{ fontFamily: 'Product Sans, sans-serif', fontSize: '18px', color: '#909092' }}>
            My work experiences across different companies and roles.
          </p>
          <div className="border-t border-gray-200 mt-2"></div>
        </div>

        {/* All Experiences */}
        <div className="flex flex-col gap-12">
          <h3 className="font-bold text-black" style={{ fontFamily: 'Product Sans, sans-serif', fontSize: '24px' }}>
            All Experiences <span className="font-normal text-gray-400" style={{ fontFamily: 'Product Sans, sans-serif' }}>({experiences.length} experiences)</span>
          </h3>
          <div className="flex flex-col gap-16">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                companyIcon={experience.companyIcon}
                companyName={experience.companyName}
                position={experience.position}
                startDate={experience.startDate}
                endDate={experience.endDate}
                location={experience.location}
                isCurrent={experience.isCurrent}
                showDropdown={false}
                iconBgColor={experience.iconBgColor}
                iconColor={experience.iconColor}
                technologies={experience.technologies}
                responsibilities={experience.responsibilities}
                socialLinks={experience.socialLinks}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

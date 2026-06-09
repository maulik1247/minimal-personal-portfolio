"use client"

import React from 'react'
import Link from 'next/link'
import { projects } from '@/lib/projectsData'
import ProjectCard from './ProjectCard'
import PageHeader from './PageHeader'
import SectionHeader from './SectionHeader'
import MotionReveal, { MotionStagger, MotionStaggerItem } from './MotionReveal'

type ProjectsSectionProps = {
  fullPage?: boolean
}

export default function ProjectsSection({ fullPage = false }: ProjectsSectionProps) {
  const visibleProjects = fullPage ? projects : projects.slice(0, 2)

  if (fullPage) {
    return (
      <section className="bg-white">
        <div className="flex flex-col gap-8">
          <MotionReveal>
            <PageHeader
              title="Projects"
              subtitle="Things I've built — products, tools, and side experiments."
            />
          </MotionReveal>

          <div className="flex flex-col gap-12">
            <MotionReveal delay={0.05}>
              <h2
                className="text-2xl font-bold text-black"
                style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
              >
                All Projects{' '}
                <span className="font-normal text-gray-400">({projects.length} projects)</span>
              </h2>
            </MotionReveal>

            <MotionStagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {visibleProjects.map((project) => (
                <MotionStaggerItem key={project.slug}>
                  <ProjectCard
                    {...project}
                    detailsUrl={`/projects/${project.slug}`}
                  />
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="scroll-mt-28 bg-white">
      <div className="section-shell">
        <MotionReveal>
          <SectionHeader title="Projects" />
        </MotionReveal>

        <MotionStagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <MotionStaggerItem key={project.slug}>
              <ProjectCard
                {...project}
                detailsUrl={`/projects/${project.slug}`}
              />
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionReveal delay={0.15} className="text-center">
          <Link
            href="/projects"
            className="btn-smooth inline-block rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-black hover:bg-gray-50"
          >
            Show all projects
          </Link>
        </MotionReveal>
      </div>
    </section>
  )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CiGlobe } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'
import { IoArrowBackOutline } from 'react-icons/io5'
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getRelatedProjects,
} from '@/lib/projectsData'
import Navbar from '@/app/components/Navbar'
import BlogContent from '@/app/components/BlogContent'
import MotionReveal, { MotionStagger, MotionStaggerItem } from '@/app/components/MotionReveal'

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  const relatedProjects = getRelatedProjects(slug)

  if (!project) {
    notFound()
  }

  const font = { fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 md:px-12">
        <MotionReveal y={12}>
        <Link
          href="/projects"
          className="btn-smooth mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-black"
          style={font}
        >
          <IoArrowBackOutline className="h-4 w-4" />
          <span>Back to projects</span>
        </Link>
        </MotionReveal>

        <MotionReveal delay={0.05}>
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span
            className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium"
            style={{
              ...font,
              backgroundColor: project.status === 'operational' ? '#dcfce7' : '#fef2f2',
              color: '#1a1a1a',
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: project.status === 'operational' ? '#16a34a' : '#dc2626',
              }}
            />
            {project.status === 'operational' ? 'All Systems Operational' : 'Building'}
          </span>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 transition-colors hover:text-black"
                style={font}
              >
                <CiGlobe className="h-5 w-5" />
                Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 transition-colors hover:text-black"
                style={font}
              >
                <FiGithub className="h-5 w-5" />
                GitHub
              </a>
            )}
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl" style={font}>
          {project.title}
        </h1>

        {project.subtitle && (
          <p className="mb-8 text-xl text-gray-600" style={font}>
            {project.subtitle}
          </p>
        )}

        <div
          className={`mb-8 overflow-hidden rounded-lg border border-gray-200 ${
            project.imageFit === 'contain' ? 'bg-neutral-100' : ''
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className={
              project.imageFit === 'contain'
                ? 'interactive-image h-auto w-full object-contain'
                : 'interactive-image h-[280px] w-full object-cover md:h-[360px]'
            }
          />
        </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
        <div className="mb-12">
          <p className="mb-3 text-sm text-gray-500" style={font}>
            Technologies
          </p>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2"
              >
                <tech.icon className={`h-5 w-5 ${tech.color}`} />
                <span className="text-sm text-gray-700" style={font}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        </MotionReveal>

        <MotionReveal delay={0.15}>
        <BlogContent content={project.content} />
        </MotionReveal>

        {relatedProjects.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-12">
            <h3 className="mb-6 text-2xl font-bold text-black" style={font}>
              More projects
            </h3>
            <MotionStagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {relatedProjects.map((related) => (
                <MotionStaggerItem key={related.slug}>
                <Link
                  href={`/projects/${related.slug}`}
                  className="group interactive-card block overflow-hidden rounded-lg border border-gray-200"
                >
                  <img
                    src={related.image}
                    alt={related.title}
                    className={
                      related.imageFit === 'contain'
                        ? 'h-auto w-full bg-neutral-100 object-contain'
                        : 'h-40 w-full object-cover'
                    }
                  />
                  <div className="p-4">
                    <h4
                      className="mb-2 font-bold text-black transition-colors group-hover:text-gray-600"
                      style={font}
                    >
                      {related.title}
                    </h4>
                    <p className="line-clamp-2 text-sm text-gray-600" style={font}>
                      {related.description}
                    </p>
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

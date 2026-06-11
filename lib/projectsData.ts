import type { ComponentType } from 'react'
import {
  SiAppwrite,
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

export interface ProjectTech {
  icon: ComponentType<{ className?: string }>
  color: string
  name: string
}

export interface Project {
  slug: string
  title: string
  subtitle?: string
  description: string
  image: string
  imageFit?: 'cover' | 'contain'
  gradientBackground: string
  technologies: ProjectTech[]
  status: 'operational' | 'building'
  liveUrl?: string
  githubUrl?: string
  content: string
  relatedProjects?: string[]
}

export const projects: Project[] = [
  {
    slug: 'notesbuddy',
    title: 'NotesBuddy',
    subtitle: 'A full-stack study platform for notes, practice, and AI-assisted learning.',
    description:
      'A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools',
    image: '/projects/notesbuddy.png',
    imageFit: 'contain',
    gradientBackground: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    technologies: [
      { icon: SiNextdotjs, color: 'text-black', name: 'Next.js' },
      { icon: SiTypescript, color: 'text-blue-600', name: 'TypeScript' },
      { icon: SiReact, color: 'text-blue-500', name: 'React' },
      { icon: SiTailwindcss, color: 'text-cyan-500', name: 'Tailwind CSS' },
      { icon: SiPrisma, color: 'text-teal-600', name: 'Prisma' },
      { icon: SiPostgresql, color: 'text-blue-700', name: 'PostgreSQL' },
      { icon: SiDocker, color: 'text-blue-500', name: 'Docker' },
    ],
    status: 'operational',
    liveUrl: '#',
    githubUrl: '#',
    relatedProjects: ['syncify', 'appwrite-mcp-server'],
    content: `NotesBuddy started as a simple idea: students shouldn't need five different apps to study one subject. Notes in one place, flashcards somewhere else, quizzes in a third tab, and an AI helper that doesn't know any of your context.

## What it does

The platform brings the full study loop into one product — read notes, drill with flashcards, test yourself with quizzes, and ask an AI chatbot questions grounded in your own material.

## What I built

- A Next.js app with server components for fast page loads and client interactivity where it matters
- Prisma + PostgreSQL for structured content — notes, decks, quiz sets, user progress
- Dockerized deployment so the stack runs consistently across environments
- An AI chat layer that works on top of uploaded study material, not generic prompts

## Why it matters

Most study tools optimize for one format. NotesBuddy optimizes for the workflow — the back-and-forth between reading, recalling, testing, and asking questions. That's the loop students actually run when they're preparing for exams.`,
  },
  {
    slug: 'appwrite-mcp-server',
    title: 'Appwrite MCP Server',
    subtitle: 'A Model Context Protocol server for Appwrite database operations.',
    description:
      'Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate',
    image: '/projects/appwrite-mcp-server.png',
    imageFit: 'contain',
    gradientBackground: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    technologies: [
      { icon: SiTypescript, color: 'text-blue-600', name: 'TypeScript' },
      { icon: SiAppwrite, color: 'text-red-600', name: 'Appwrite' },
      { icon: SiNodedotjs, color: 'text-green-600', name: 'Node.js' },
      { icon: SiDocker, color: 'text-blue-500', name: 'Docker' },
    ],
    status: 'operational',
    liveUrl: '#',
    githubUrl: '#',
    relatedProjects: ['notesbuddy', 'syncify'],
    content: `AI agents are only as useful as the tools they can call. This project bridges Appwrite's database layer to the Model Context Protocol — so LLMs can read, write, and query Appwrite collections through a structured, reliable interface.

## The problem

Developers using AI coding assistants often want their agent to interact with real backend data. Appwrite is a strong BaaS choice, but there was no MCP-native way to give an agent safe, typed access to Appwrite operations.

## What I built

- 7 MCP tools covering core database operations — list, create, read, update, delete, and query
- TypeScript throughout for type safety between the protocol layer and Appwrite SDK
- Docker packaging for one-command deployment alongside other MCP servers
- Error handling and validation so failed operations surface clearly instead of silently breaking agent flows

## Results

The server runs at a 99.9% success rate across tool calls in production usage — meaning agents can depend on it as infrastructure, not a flaky experiment.`,
  },
  {
    slug: 'syncify',
    title: 'Syncify',
    subtitle: 'Real-time synchronized music listening with friends.',
    description:
      'Real-time music streaming platform with synchronized playback, live chat, and social listening features',
    image: '/projects/syncify.png',
    imageFit: 'contain',
    gradientBackground: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    technologies: [
      { icon: SiReact, color: 'text-blue-500', name: 'React' },
      { icon: SiGraphql, color: 'text-pink-500', name: 'GraphQL' },
      { icon: SiTailwindcss, color: 'text-cyan-500', name: 'Tailwind CSS' },
      { icon: SiNodedotjs, color: 'text-green-600', name: 'Node.js' },
      { icon: SiMongodb, color: 'text-green-700', name: 'MongoDB' },
      { icon: SiRedis, color: 'text-red-600', name: 'Redis' },
    ],
    status: 'operational',
    liveUrl: '#',
    githubUrl: '#',
    relatedProjects: ['notesbuddy', 'pasandida-aurat'],
    content: `Listening to music alone is fine. Listening together — actually in sync, in the same moment — is a different product problem entirely. Syncify is built around that.

## What it does

Users join a room, queue tracks, and hear the same audio at the same timestamp. Live chat runs alongside playback so the social layer isn't bolted on after the fact.

## The hard part

Synchronized playback sounds simple until you account for network latency, device differences, reconnects, and someone joining mid-song. The core engineering challenge was keeping every client within an acceptable drift window without the experience feeling brittle.

## Stack choices

- GraphQL for flexible room and queue APIs
- Redis for real-time state — who's in the room, what's playing, where in the track
- MongoDB for persistent user and session data
- React frontend with Tailwind for a clean listening-room UI

## What I learned

Real-time products punish small timing assumptions. Building Syncify meant thinking in milliseconds and designing recovery paths for every disconnect scenario.`,
  },
  {
    slug: 'pasandida-aurat',
    title: 'Pasandida Aurat',
    subtitle: 'A dating platform built around anonymous questions and authentic connection.',
    description:
      'Innovative dating platform featuring anonymous questions and authentic connections - currently in development',
    image: '/projects/pasandida-aurat.png',
    imageFit: 'contain',
    gradientBackground: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    technologies: [
      { icon: SiNextdotjs, color: 'text-black', name: 'Next.js' },
      { icon: SiTypescript, color: 'text-blue-600', name: 'TypeScript' },
      { icon: SiReact, color: 'text-blue-500', name: 'React' },
      { icon: SiTailwindcss, color: 'text-cyan-500', name: 'Tailwind CSS' },
      { icon: SiPrisma, color: 'text-teal-600', name: 'Prisma' },
      { icon: SiRedis, color: 'text-red-600', name: 'Redis' },
    ],
    status: 'building',
    liveUrl: '#',
    relatedProjects: ['syncify', 'notesbuddy'],
    content: `Most dating apps optimize for swipes. Pasandida Aurat optimizes for curiosity — the kind that starts with a question, not a photo.

## The idea

Users send anonymous questions to people they're interested in. Answers reveal personality before appearance dominates the interaction. The goal is slower, more intentional connection — less performance, more honesty.

## Current status

The product is actively in development. Core flows — profiles, anonymous Q&A, matching logic — are being built on a Next.js + Prisma stack with Redis handling real-time notifications.

## What I'm designing for

- A question-first onboarding flow that sets tone before users see each other's full profiles
- Moderation and safety primitives built in from the start, not added after launch
- A UI that feels warm and human, not gamified

## Why I'm building it

Dating products shape how people present themselves. I wanted to build one that rewards being interesting over being polished.`,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}

export function getRelatedProjects(currentSlug: string): Project[] {
  const current = getProjectBySlug(currentSlug)
  if (!current?.relatedProjects) return []

  return current.relatedProjects
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== undefined)
}

import type { ComponentType } from 'react'
import {
  SiAppwrite,
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
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
    slug: 'token-lab',
    title: 'Token Lab',
    subtitle: 'AI Playground',
    description:
      'A prompt testing tool that compares model outputs across three temperature lanes — with token usage, cost, and latency in one view.',
    image: '/projects/token-lab.png',
    imageFit: 'contain',
    gradientBackground: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    technologies: [
      { icon: SiNextdotjs, color: 'text-black', name: 'Next.js' },
      { icon: SiTypescript, color: 'text-blue-600', name: 'TypeScript' },
      { icon: SiReact, color: 'text-blue-500', name: 'React' },
      { icon: SiTailwindcss, color: 'text-cyan-500', name: 'Tailwind CSS' },
    ],
    status: 'operational',
    liveUrl: 'https://token-lab-sandy.vercel.app/',
    githubUrl: 'https://github.com/maulik1247/Token-lab',
    relatedProjects: ['syncify', 'appwrite-mcp-server'],
    content: `Building AI features means making a lot of decisions that are hard to justify. Which model? What temperature? Is the variance in outputs a feature or a problem? Most teams answer these questions by running one prompt, reading the output, and going with their gut. That's not a process — it's a coin flip with extra steps.

Token Lab is a prompt testing tool that makes those decisions defensible.

## The problem it solves

When you're shipping an AI-powered feature, temperature is one of the first things you'll debate. Too deterministic and the outputs feel robotic. Too creative and they become inconsistent — which is a support ticket waiting to happen. The right setting depends on the use case, and the only honest way to find it is to compare outputs at different settings against the same input.

Most people don't do this because there's no easy way to do it. You'd have to run the same prompt three times, manually, in different sessions, then hold the outputs in your head while you compare. Token Lab removes that friction entirely.

## What it does

Three temperature lanes. One prompt. One click. All three run in parallel and results come back simultaneously — outputs, token usage, cost, and latency per lane, all in the same view.

The analytics layer surfaces what matters for product decisions: how much does this prompt actually cost at scale? Is Lane 3's creative variance genuinely better for this use case, or just noisier? Does the cheaper model perform close enough to justify the cost difference? These are the questions a PM needs to answer before signing off on a feature, and Token Lab gives you the data to answer them without involving an engineer every time.

## The thinking behind it

AI product decisions get made at two levels — the technical level (which model, what parameters) and the product level (what tradeoffs are we making for our users). In most teams, the PM is either excluded from the first conversation or has to take the engineer's word for it.

Token Lab is built for the PM who wants to be in the room with data. You don't need to understand the math behind temperature sampling to use it — you need to see the outputs side by side, understand the cost implications, and make a call. That's what it's designed for.

## Why it matters beyond the tool

Most AI playgrounds are built for engineers. They're optimised for raw access — model parameters, API responses, JSON outputs. Token Lab is optimised for decisions — the kind a product team needs to make quickly, repeatedly, and with enough evidence to explain them to a stakeholder.

The gap between "we tested this" and "here's what we found" is where most AI feature decisions fall apart. Token Lab is built to close that gap.`,
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
    relatedProjects: ['token-lab', 'syncify'],
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
    relatedProjects: ['token-lab', 'pasandida-aurat'],
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
    relatedProjects: ['syncify', 'token-lab'],
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

import type { ComponentType } from 'react'
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
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
    relatedProjects: ['field-ops', 'job-fit-analyser'],
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
    slug: 'job-fit-analyser',
    title: 'Job Fit Analyser',
    subtitle: 'AI Career Tool',
    description:
      'Paste a job description and get a fit score, gap analysis, and role-specific advice on how to reposition your experience — before you hit send.',
    image: '/projects/job-fit-analyser.png',
    imageFit: 'contain',
    gradientBackground: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    technologies: [
      { icon: SiNextdotjs, color: 'text-black', name: 'Next.js' },
      { icon: SiTypescript, color: 'text-blue-600', name: 'TypeScript' },
      { icon: SiReact, color: 'text-blue-500', name: 'React' },
      { icon: SiTailwindcss, color: 'text-cyan-500', name: 'Tailwind CSS' },
    ],
    status: 'operational',
    liveUrl: 'https://job-fit-analyser-one.vercel.app/',
    githubUrl: 'https://github.com/maulik1247/Job-fit-analyser',
    relatedProjects: ['token-lab', 'field-ops'],
    content: `Job hunting is a volume game that punishes volume. The more roles you apply to, the harder it gets to tailor each application — and the moment you stop tailoring, your response rate drops. Most candidates end up choosing between quality and scale. They shouldn't have to.

Job Fit Analyser is an AI tool that reads a job description and tells you exactly how well your profile fits — and more importantly, where the gaps are and what to do about them.

## The problem it solves

A job description is a signal, not just a checklist. It tells you what the hiring team actually cares about, what language they use, what they're optimising for. Most candidates skim it, decide they're a fit based on the title, and send a generic application. That's why most applications go nowhere.

The candidates who do well are the ones who read JDs carefully, map their experience to the specific language in the posting, and reframe their story to match what the role is asking for. Job Fit Analyser automates that process.

## What it does

Paste in a job description. The AI breaks it down — required skills, preferred qualifications, seniority signals, team context — and cross-references it against your profile. You get a fit score, a gap analysis, and specific recommendations on how to reposition your experience for that role.

But the fit score is the least interesting part. What sits below it is what matters — a recruiter-style risk assessment that tells you specifically why you might not get shortlisted, not just which keywords you're missing. "Resume does not explicitly highlight experience with vision systems" is more useful than "vision systems: not found."

Then it flips. An "Improve your positioning" section gives you story and framing advice, not keyword stuffing instructions. The difference between "add the word vision systems to your resume" and "highlight any experience applicable to high-stakes, fast decision-making environments" is the difference between an ATS hack and actual positioning work.

Not generic advice. Role-specific, JD-grounded output that tells you what to emphasise, what to address, and what to leave out.

## The thinking behind it

I built this during my own job search. I was applying to 30+ roles across PM, Product Ops, and AI-adjacent positions — each with a different framing, different vocabulary, different priorities. Manually doing a fit analysis for every role was taking longer than writing the application itself.

The tool started as a personal shortcut. It turned into something more useful — a way to be honest with yourself about fit before you invest time in an application, and a way to sharpen your positioning when the fit is close but not obvious.

## What makes it different

Most AI job tools help you write better. This one helps you think better — about which roles are worth your time, how to frame your experience for a specific context, and where you genuinely need to close a gap versus where you just need to tell your story differently.

The output isn't a polished resume. It's a mirror — an honest read of how a recruiter would see your profile against this specific role, before you hit send. That's the gap most job search tools don't fill, because it's harder to build and less comfortable to read.

## Why it matters

For anyone navigating a job search across multiple role types or industries, clarity is the actual bottleneck. Not the writing. The thinking before the writing. Job Fit Analyser is built for that moment — between reading a JD and deciding whether and how to apply — where most candidates either skip the hard thinking or do it badly under pressure.

A tool that does that thinking with you, grounded in the actual JD, changes the quality of every application that follows.`,
  },
  {
    slug: 'field-ops',
    title: 'FieldOps',
    subtitle: 'Distribution Management Platform',
    description:
      'Multi-tier FMCG distribution platform with live pipeline visibility, role-based dashboards, and cascading alerts across Company → CNF → SS → Distributor → Retailer.',
    image: '/projects/field-ops.png',
    imageFit: 'contain',
    gradientBackground: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    technologies: [
      { icon: SiHtml5, color: 'text-orange-600', name: 'HTML' },
      { icon: SiCss, color: 'text-blue-600', name: 'CSS' },
      { icon: SiJavascript, color: 'text-yellow-500', name: 'JavaScript' },
    ],
    status: 'operational',
    liveUrl: 'https://field-ops-coral.vercel.app/',
    githubUrl: 'https://github.com/maulik1247/FieldOps',
    relatedProjects: ['token-lab', 'cigar-website'],
    content: `India's FMCG distribution networks run on WhatsApp messages, Excel sheets, and phone calls. A stockist in Surat doesn't know what the CNF agent in Ahmedabad dispatched yesterday. A distributor places an order and waits two days for confirmation. A field rep checks in on paper. Nobody has a single view of what's actually moving through the chain.

FieldOps is a distribution management platform built for the way Indian FMCG supply chains actually work — multi-tier, relationship-driven, and operationally complex in ways that generic ERP software was never designed to handle.

## The problem it solves

A typical FMCG distribution chain moves through five layers: Company → CNF Agent → Super Stockist → Distributor → Retailer. Each layer has its own people, its own stock, its own orders, and its own visibility gaps. The company at the top can see what left the warehouse. It usually has no reliable picture of what's sitting at DB level, what a retailer actually has on shelf, or where an order got stuck.

FieldOps gives every stakeholder in that chain a role-appropriate view of the same live data — so a Company Admin sees the full pipeline, a CNF Agent sees their dispatch queue, a Distributor sees their incoming orders, and a Field Employee sees their beat plan and attendance. Same system, same data, different lenses.

## What it does

The live distribution pipeline view shows units flowing across all five tiers in real time — warehouse stock, CNF holdings, stockist inventory, distributor levels, and retailer shelf stock — in a single dashboard. No more calling down the chain to find out where a shipment is.

The alerts layer surfaces what needs attention before it becomes a problem. A retailer going out of stock triggers a ripple alert upstream. A CNF dispatch delay flags automatically. A pending purchase order sitting unapproved surfaces in the feed with context — not just a notification, but enough information to act on it immediately.

Role-based access means every user sees exactly what's relevant to their job. A field employee checking in doesn't see revenue data. A company admin sees everything — revenue MTD, units dispatched, low stock SKUs, employee attendance, recent orders, and live alerts — in one view without switching tools.

## What I built

A multi-role prototype with six distinct user personas — Company Admin, CNF Agent, Super Stockist, Distributor, Retailer, and Field Employee — each with a tailored dashboard and permission set. The live distribution pipeline visualises unit flow across all five tiers simultaneously. The order management layer tracks status from placement to delivery. The alerts system flags cascading supply issues with upstream context so the right person can act, not just be informed.

## The thinking behind it

This came directly from my time at Neome.ai, where I worked with FMCG and manufacturing clients trying to plug workflow gaps with automation tools. The same problems kept surfacing — visibility across tiers, order confirmation delays, field attendance tracking, stock alerts that arrived too late to act on.

Most of the solutions in the market are either too heavy (SAP-level ERP that takes 18 months to implement) or too light (a WhatsApp bot that tells you yesterday's stock). FieldOps is designed for the middle — a product that a CNF agent in a tier-2 city can actually use on day one, and that gives a Company Admin the operational picture they've been building in Excel for years.

## Why it matters

Distribution is where FMCG margins are made or lost. A stockout at the retailer level that could have been caught two tiers up is not just lost revenue — it's a gap that a competitor fills. The companies that win in Indian FMCG are the ones with the best ground-level visibility, and right now most of them are running that visibility on gut feel and group chats.

FieldOps is what that visibility looks like when it's actually built.`,
  },
  {
    slug: 'cigar-website',
    title: 'Cigar Website',
    subtitle: 'Crescendo × Marriott — Concept Website',
    description:
      'Concept site for a World Cup 2026 pergola experience — live match screenings, signature cigars, and fine spirits at Marriott properties across 10 host cities.',
    image: '/projects/cigar-website.png',
    imageFit: 'contain',
    gradientBackground: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    technologies: [
      { icon: SiHtml5, color: 'text-orange-600', name: 'HTML' },
      { icon: SiCss, color: 'text-blue-600', name: 'CSS' },
      { icon: SiJavascript, color: 'text-yellow-500', name: 'JavaScript' },
    ],
    status: 'operational',
    liveUrl: 'https://pergola-cigar.vercel.app/',
    githubUrl: 'https://github.com/maulik1247/Pergola-Cigar',
    relatedProjects: ['field-ops', 'token-lab'],
    content: `Not every project starts with a brief. This one started with a question: what would a premium hospitality experience look like if it were designed from the brand up, not the venue up?

Crescendo × Marriott is a concept website for a World Cup 2026 pergola experience — live match screenings, signature cigars, and fine spirits at Marriott properties across all 10 host cities. The project was never about building a booking system. It was about building the feeling of a product that doesn't exist yet, convincingly enough that it could.

## What it is

A fully designed concept site for a premium outdoor hospitality experience — open-air pergola lounges at Marriott properties, curated cigar and spirit pairings, white-glove event management, and reserved seating for World Cup matches. The kind of experience that sits between a sports bar and a private members club, designed for the audience that wants both the game and the occasion.

## What I built

A dark, editorial website with the visual language of luxury hospitality — gold typography, serif headlines, high-contrast layout, and a brand identity that could sit credibly alongside a Marriott co-branded property. The site covers concept, gallery, collection, experience, and packages — the full arc of a premium product from discovery to reservation intent.

The copy, structure, and design were built to answer one question a potential guest or brand partner would ask within five seconds of landing: is this real? The answer the site gives is yes — because the experience it describes is specific enough, credible enough, and desirable enough to feel real even as a concept.

## The thinking behind it

This came from a genuine interest in the intersection of hospitality, premium experiences, and brand storytelling. The FIFA World Cup 2026 is the largest sporting event ever hosted — 104 matches, 10 cities, months of sustained attention from a global audience with money to spend on experiences. The gap between a generic hotel watch party and a genuinely curated evening is enormous, and nobody was designing for that gap with the seriousness it deserved.

Crescendo was the attempt to design for it seriously.

## Why it's on a PM portfolio

Because product thinking is not just about software. A concept site like this is a product — it has a user (the potential guest), a goal (convert curiosity into reservation intent), a brand promise (premium, curated, exclusive), and a conversion funnel. Building it required the same decisions a PM makes on any product: what does the user need to believe before they take the next action, and what's the minimum we need to show them to get there?

The answer here was atmosphere before information — which is why the site leads with the visual and the feeling, not the pricing table.`,
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

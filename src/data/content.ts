import {
  Bot,
  Check,
  CloudUpload,
  CodeXml,
  Compass,
  Database,
  GitPullRequest,
  Layers,
  LayoutTemplate,
  PenTool,
  Rocket,
  Smartphone,
  Terminal,
  type LucideIcon,
} from 'lucide-react'
import type { TechLogoKey, WorkIllustrationKey } from '../assets/asset'
import type { ChipProps } from '../components/ui/Chip'

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
] as const

export const contactEmail = 'hello@cozard.dev'

/* ---------- Stack marquee ---------- */
export const marqueeStack: Array<{ logo: TechLogoKey; label: string }> = [
  { logo: 'typescript', label: 'TypeScript' },
  { logo: 'react', label: 'React.js' },
  { logo: 'nextjs', label: 'Next.js' },
  { logo: 'expo', label: 'Expo' },
  { logo: 'supabase', label: 'Supabase' },
  { logo: 'postgresql', label: 'PostgreSQL' },
  { logo: 'mongodb', label: 'MongoDB' },
  { logo: 'docker', label: 'Docker' },
  { logo: 'aws', label: 'AWS' },
  { logo: 'vercel', label: 'Vercel' },
]

/* ---------- Services ---------- */
export type Service = { icon: LucideIcon; title: string; body: string }

export const services: Service[] = [
  {
    icon: CodeXml,
    title: 'Web development',
    body: 'Fast, accessible marketing sites and web apps in React and Next.js, built to rank well and to stay easy to change.',
  },
  {
    icon: Layers,
    title: 'Full-stack products',
    body: 'SaaS platforms and internal tools: auth, billing, dashboards and the data model underneath, shipped as one typed codebase.',
  },
  {
    icon: Smartphone,
    title: 'Mobile apps',
    body: 'iOS and Android apps from one React Native codebase, built with Expo, offline-ready and released to both stores.',
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    body: 'REST and realtime APIs, databases, queues and integrations, designed to scale and to be read by the next engineer.',
  },
  {
    icon: PenTool,
    title: 'UI/UX design',
    body: 'Research, flows, wireframes and polished interfaces in Figma, delivered with a design system your developers can build from.',
  },
  {
    icon: Bot,
    title: 'AI agents',
    body: 'Custom AI agents that read your docs, call your APIs and finish real work, with guardrails and a human approval step where it matters.',
  },
]

/* ---------- Toolbox ---------- */
export type ToolGroup = {
  note: [string, string]
  icon: LucideIcon
  /** Note on the left, chips on the right. */
  flip?: boolean
  tools: Array<Omit<ChipProps, 'staggered'>>
}

export const toolGroups: ToolGroup[] = [
  {
    note: ['languages', '& core'],
    icon: CodeXml,
    tools: [
      { logo: 'javascript', label: 'JavaScript' },
      { logo: 'typescript', label: 'TypeScript' },
      { logo: 'html', label: 'HTML' },
      { logo: 'css', label: 'CSS' },
      { logo: 'tailwindcss', label: 'Tailwind CSS' },
    ],
  },
  {
    note: ['frameworks', '& state'],
    icon: Layers,
    flip: true,
    tools: [
      { logo: 'react', label: 'React.js' },
      { logo: 'nextjs', label: 'Next.js' },
      { logo: 'expo', label: 'Expo' },
      { logo: 'langchain', label: 'LangChain' },
      { logo: 'redux', label: 'Redux Toolkit' },
      { logo: 'zustand', label: 'Zustand' },
    ],
  },
  {
    note: ['backend, data', '& API testing'],
    icon: Database,
    tools: [
      { logo: 'express', label: 'Express.js' },
      { logo: 'supabase', label: 'Supabase' },
      { logo: 'postgresql', label: 'PostgreSQL' },
      { logo: 'mongodb', label: 'MongoDB' },
      { logo: 'mongoose', label: 'Mongoose' },
      { logo: 'drizzle', label: 'Drizzle ORM', roundedLogo: true },
      { logo: 'postman', label: 'Postman' },
    ],
  },
  {
    note: ['deployment &', 'version control'],
    icon: CloudUpload,
    flip: true,
    tools: [
      { logo: 'vercel', label: 'Vercel' },
      { logo: 'git', label: 'Git' },
      { logo: 'github', label: 'GitHub' },
      { logo: 'turborepo', label: 'Turborepo' },
      { logo: 'docker', label: 'Docker' },
      { logo: 'aws', label: 'AWS', logoOnly: true },
    ],
  },
]

/* ---------- Process ---------- */
export type Step = { title: string; body: string; icon: LucideIcon; duration: string }

export const steps: Step[] = [
  {
    title: 'Discover',
    body: 'We map your users, goals and constraints, then agree on a scope with a fixed price or a monthly plan.',
    icon: Compass,
    duration: 'Week 1',
  },
  {
    title: 'Design',
    body: 'Flows, wireframes and a clickable Figma prototype you can put in front of real customers.',
    icon: PenTool,
    duration: 'Weeks 2–3',
  },
  {
    title: 'Build',
    body: 'Two-week sprints with a preview deploy on every pull request and tests that run before anything merges.',
    icon: Terminal,
    duration: 'Weeks 3–10',
  },
  {
    title: 'Ship & support',
    body: 'Launch to the web and the app stores, then 30 days of included support and an optional retainer after.',
    icon: Rocket,
    duration: 'Launch + 30 days',
  },
]

/* ---------- Work ---------- */
export type Project = {
  illustration: WorkIllustrationKey
  date: string
  name: string
  summary: string
  category: string
  href: string
}

export const projects: Project[] = [
  {
    illustration: 'ledgerly',
    date: '2026 · 11',
    name: 'Ledgerly',
    summary: 'invoicing SaaS for small agencies',
    category: 'Full-stack · Next.js, Supabase',
    href: '#',
  },
  {
    illustration: 'fieldnote',
    date: '2026 · 09',
    name: 'Fieldnote',
    summary: 'offline-first app for site inspectors',
    category: 'Mobile · Expo, Drizzle',
    href: '#',
  },
  {
    illustration: 'parcel',
    date: '2026 · 06',
    name: 'Parcel',
    summary: 'shipping API for a courier network',
    category: 'Backend · Express, PostgreSQL, AWS',
    href: '#',
  },
  {
    illustration: 'tandem',
    date: '2026 · 03',
    name: 'Tandem',
    summary: 'design system for a fintech team',
    category: 'UI/UX · Figma, React',
    href: '#',
  },
]

/* ---------- Standards ---------- */
export const standards: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: GitPullRequest,
    title: 'You own everything',
    body: 'Code, repos, design files and cloud accounts live in your organisation from day one.',
  },
  { icon: Check, title: 'Tested before it merges', body: 'CI runs type checks, unit and end-to-end tests on every pull request.' },
  {
    icon: LayoutTemplate,
    title: 'A preview for every change',
    body: 'Each PR gets its own live link, so you review real software, not screenshots.',
  },
  {
    icon: Terminal,
    title: 'Typed end to end',
    body: 'TypeScript from the database schema to the button, so fewer bugs reach users.',
  },
  {
    icon: Compass,
    title: 'Weekly demos',
    body: 'A 30-minute call each Friday: what shipped, what is next, what needs your call.',
  },
  { icon: Rocket, title: '30 days of aftercare', body: 'Bug fixes and small tweaks after launch are included in every project.' },
]

export const stats = [
  { value: 38, decimals: 0, suffix: '', label: 'products shipped to production' },
  { value: 4.9, decimals: 1, suffix: '/5', label: 'average client rating' },
  { value: 10, decimals: 0, suffix: '', label: 'weeks from kickoff to launch, on average' },
] as const

/* ---------- Footer ---------- */
export const footerColumns = [
  { title: 'Services', links: services.map((s) => ({ label: s.title, href: '#services' })) },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#work' },
      { label: 'Process', href: '#process' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'X', href: '#' },
      { label: 'Dribbble', href: '#' },
      { label: contactEmail, href: `mailto:${contactEmail}` },
    ],
  },
]

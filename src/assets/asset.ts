/**
 * Single source of truth for every static asset in the site.
 * Components import from here, never from a file path, so assets can be
 * moved, renamed or swapped in one place.
 */

/* ---------- Brand ---------- */
import CozardMark from './brand/cozard-mark.svg?react'
import FernhouseMark from './brand/clients/fernhouse-mark.svg?react'

/* ---------- Icons ---------- */
import DoubleArrow from './icons/double-arrow.svg?react'

/* ---------- Showcase photography (Fernhouse demo store) ---------- */
import cottonTowel from './images/showcase/cotton-towel.jpg'
import glassVase from './images/showcase/glass-vase.jpg'
import soupBowls from './images/showcase/soup-bowls.jpg'
import stonewareMug from './images/showcase/stoneware-mug.jpg'

/* ---------- Work illustrations (React components, so they inherit site fonts) ---------- */
import FieldnoteIllustration from './illustrations/work/fieldnote.svg?react'
import LedgerlyIllustration from './illustrations/work/ledgerly.svg?react'
import ParcelIllustration from './illustrations/work/parcel.svg?react'
import TandemIllustration from './illustrations/work/tandem.svg?react'

/* ---------- Technology logos ---------- */
import aws from './logos/tech/aws.svg'
import css from './logos/tech/css.svg'
import docker from './logos/tech/docker.svg'
import drizzle from './logos/tech/drizzle.png'
import expo from './logos/tech/expo.svg'
import express from './logos/tech/express.svg'
import git from './logos/tech/git.svg'
import github from './logos/tech/github.svg'
import html from './logos/tech/html.svg'
import javascript from './logos/tech/javascript.svg'
import langchain from './logos/tech/langchain.svg'
import mongodb from './logos/tech/mongodb.svg'
import mongoose from './logos/tech/mongoose.svg'
import nextjs from './logos/tech/nextjs.svg'
import postgresql from './logos/tech/postgresql.svg'
import postman from './logos/tech/postman.png'
import react from './logos/tech/react.svg'
import redux from './logos/tech/redux.svg'
import supabase from './logos/tech/supabase.svg'
import tailwindcss from './logos/tech/tailwindcss.svg'
import turborepo from './logos/tech/turborepo.svg'
import typescript from './logos/tech/typescript.svg'
import vercel from './logos/tech/vercel.svg'
import zustand from './logos/tech/zustand.svg'

export const brand = {
  CozardMark,
  FernhouseMark,
} as const

export const icons = {
  DoubleArrow,
} as const

export const images = {
  showcase: {
    stonewareMug,
    soupBowls,
    cottonTowel,
    glassVase,
  },
} as const

export const illustrations = {
  work: {
    ledgerly: LedgerlyIllustration,
    fieldnote: FieldnoteIllustration,
    parcel: ParcelIllustration,
    tandem: TandemIllustration,
  },
} as const

export const techLogos = {
  aws,
  css,
  docker,
  drizzle,
  expo,
  express,
  git,
  github,
  html,
  javascript,
  langchain,
  mongodb,
  mongoose,
  nextjs,
  postgresql,
  postman,
  react,
  redux,
  supabase,
  tailwindcss,
  turborepo,
  typescript,
  vercel,
  zustand,
} as const

export type TechLogoKey = keyof typeof techLogos
export type WorkIllustrationKey = keyof typeof illustrations.work

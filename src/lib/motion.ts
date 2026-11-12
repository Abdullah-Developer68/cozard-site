import type { Transition, Variants } from 'motion/react'

/** The studio's signature easing: fast out, long settle. */
export const EASE = [0.2, 0.7, 0.2, 1] as const

export const rise = (delay = 0): Transition => ({ duration: 0.9, ease: EASE, delay })

/** Parent that staggers its children in when scrolled into view. */
export const stagger = (step = 0.05, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: step, delayChildren } },
})

export const fadeUp = (y = 10): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
})

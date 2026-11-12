import { motion } from 'motion/react'
import type { CSSProperties } from 'react'

type DashedArrowProps = {
  /** The curve, as an SVG path. */
  d: string
  /** The arrow head, drawn at the end of the curve. */
  head: string
  width: number
  height: number
  className?: string
  style?: CSSProperties
}

/** A hand-drawn dashed arrow whose dashes march along the curve. */
export function DashedArrow({ d, head, width, height, className, style }: DashedArrowProps) {
  return (
    <svg width={width} height={height} className={className} style={{ overflow: 'visible', ...style }} aria-hidden>
      <motion.path
        d={d}
        fill="none"
        stroke="var(--color-pen)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="6 7"
        animate={{ strokeDashoffset: [0, -26] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
      />
      <path d={head} fill="none" stroke="var(--color-pen)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

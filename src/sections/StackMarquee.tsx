import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { Chip } from '../components/ui/Chip'
import { Eyebrow } from '../components/ui/Eyebrow'
import { marqueeStack } from '../data/content'

const LOOP_SECONDS = 40

/** Endless strip of the core stack; pauses while hovered. */
export function StackMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const paused = useRef(false)
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)

  useAnimationFrame((_, delta) => {
    const track = trackRef.current
    if (!track || paused.current || reduceMotion) return
    const loopWidth = track.scrollWidth / 2
    let next = x.get() - (loopWidth / (LOOP_SECONDS * 1000)) * delta
    if (next <= -loopWidth) next += loopWidth
    x.set(next)
  })

  return (
    <div className="relative overflow-hidden border-b border-hair py-7 before:absolute before:inset-y-0 before:left-0 before:z-[2] before:w-[120px] before:bg-linear-to-r before:from-paper before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-[2] after:w-[120px] after:bg-linear-to-l after:from-paper after:to-transparent">
      <Eyebrow className="mb-[22px] justify-center">The stack we ship with, every day</Eyebrow>
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex w-max pb-1.5 pt-1"
        onHoverStart={() => (paused.current = true)}
        onHoverEnd={() => (paused.current = false)}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex" aria-hidden={copy === 1 || undefined}>
            {marqueeStack.map((tool) => (
              <span key={tool.label} className="pr-[18px]">
                <Chip {...tool} />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

/** Counts up to `value` the first time it scrolls into view. */
export function CountUp({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!inView || reduceMotion) return
    const controls = animate(0, value, { duration: 1.2, ease: [0.33, 1, 0.68, 1], onUpdate: setDisplay })
    return () => controls.stop()
  }, [inView, reduceMotion, value])

  return <span ref={ref}>{display.toFixed(decimals)}</span>
}

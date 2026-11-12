import { motion, type HTMLMotionProps } from 'motion/react'
import { rise } from '../../lib/motion'

type RevealProps = HTMLMotionProps<'div'> & { delay?: number; y?: number }

/** Fades and lifts its content in the first time it scrolls into view. */
export function Reveal({ delay = 0, y = 22, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={rise(delay)}
      {...props}
    />
  )
}

/** Same as Reveal, but plays on mount (for above-the-fold content). */
export function Rise({ delay = 0, y = 18, ...props }: RevealProps) {
  return <motion.div initial={{ opacity: 0, y }} animate={{ opacity: 1, y: 0 }} transition={rise(delay)} {...props} />
}

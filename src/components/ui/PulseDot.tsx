import { motion } from 'motion/react'
import { cn } from '../../lib/cn'

/** A live-status dot that sends out a soft green ring. */
export function PulseDot({ className, color = 'signal' }: { className?: string; color?: 'signal' | 'pen' }) {
  const ring = color === 'signal' ? '30 158 90' : '44 90 140'
  return (
    <motion.i
      aria-hidden
      className={cn('block size-[7px] shrink-0 rounded-full', color === 'signal' ? 'bg-signal' : 'bg-pen', className)}
      animate={{ boxShadow: [`0 0 0 0 rgb(${ring} / 0.45)`, `0 0 0 9px rgb(${ring} / 0)`] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
    />
  )
}

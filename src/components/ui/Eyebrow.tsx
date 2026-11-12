import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.1em] text-graphite', className)}>
      {children}
    </div>
  )
}

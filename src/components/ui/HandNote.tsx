import type { CSSProperties, ReactNode } from 'react'
import { cn } from '../../lib/cn'

/** Handwritten blue-pen annotation, the studio's margin-note voice. */
export function HandNote({
  children,
  className,
  rotate = -4,
  style,
}: {
  children: ReactNode
  className?: string
  rotate?: number
  style?: CSSProperties
}) {
  return (
    <p className={cn('font-hand text-[30px] font-semibold leading-[1.05] text-pen', className)} style={{ rotate: `${rotate}deg`, ...style }}>
      {children}
    </p>
  )
}

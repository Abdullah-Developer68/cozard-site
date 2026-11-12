import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'

type SectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  muted: ReactNode
  aside?: ReactNode
  /** Tighter spacing and type, for sections that must fit one screen. */
  dense?: boolean
}

export function SectionHeader({ eyebrow, title, muted, aside, dense }: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col md:flex-row md:items-end md:justify-between',
        dense ? 'mb-5 gap-3 short:mb-3 sm:mb-8 md:mb-10' : 'mb-12 gap-6',
      )}
    >
      <div>
        <Eyebrow className={dense ? 'mb-3 short:mb-2 md:mb-[18px]' : 'mb-[18px]'}>{eyebrow}</Eyebrow>
        <h2
          className={cn(
            'max-w-[640px] font-medium leading-[1.03] tracking-[-0.035em]',
            dense ? 'text-[32px] short:text-[28px] sm:text-4xl md:text-[44px] lg:text-[52px]' : 'text-4xl md:text-[52px]',
          )}
        >
          {title} <span className="text-graphite">{muted}</span>
        </h2>
      </div>
      {typeof aside === 'string' ? (
        <p className={cn('max-w-[380px] text-[17px] leading-[27px] text-body', dense && 'max-sm:hidden md:text-base lg:text-[17px]')}>{aside}</p>
      ) : (
        aside
      )}
    </Reveal>
  )
}

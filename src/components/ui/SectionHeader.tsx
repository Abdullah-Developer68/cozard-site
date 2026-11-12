import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'

type SectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  muted: ReactNode
  aside?: ReactNode
}

export function SectionHeader({ eyebrow, title, muted, aside }: SectionHeaderProps) {
  return (
    <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <Eyebrow className="mb-[18px]">{eyebrow}</Eyebrow>
        <h2 className="max-w-[640px] text-4xl font-medium leading-[1.03] tracking-[-0.035em] md:text-[52px]">
          {title} <span className="text-graphite">{muted}</span>
        </h2>
      </div>
      {typeof aside === 'string' ? <p className="max-w-[380px] text-[17px] leading-[27px] text-body">{aside}</p> : aside}
    </Reveal>
  )
}

import { motion } from 'motion/react'
import { techLogos, type TechLogoKey } from '../../assets/asset'
import { cn } from '../../lib/cn'
import { fadeUp } from '../../lib/motion'

export type ChipProps = {
  logo: TechLogoKey
  label: string
  /** Show only the logo (for wordmark logos such as AWS). */
  logoOnly?: boolean
  /** Round the logo's corners (for logos supplied as tiles). */
  roundedLogo?: boolean
  /** Animate in with a parent `stagger` variant. */
  staggered?: boolean
  /** `compact` shrinks on small screens so dense groups stay short. */
  size?: 'regular' | 'compact'
}

const sizes = {
  regular: {
    chip: 'h-[46px] gap-2.5 text-sm shadow-hard hover:translate-x-[3px] hover:translate-y-[3px]',
    pad: 'pl-3 pr-[18px]',
    padLogoOnly: 'px-4',
    logo: 'size-[22px]',
    logoOnly: 'h-6 w-10',
  },
  compact: {
    chip: 'h-[30px] gap-1.5 text-xs shadow-hard-sm short:h-[26px] short:text-[11px] hover:translate-x-[2px] hover:translate-y-[2px] md:h-[38px] md:gap-2 md:text-[13px] md:shadow-hard md:hover:translate-x-[3px] md:hover:translate-y-[3px]',
    pad: 'pl-2 pr-3 md:pl-2.5 md:pr-3.5',
    padLogoOnly: 'px-3',
    logo: 'size-4 short:size-3.5 md:size-[18px]',
    logoOnly: 'h-5 w-8 md:h-[22px] md:w-9',
  },
} as const

/** Neo-brutalist technology chip: ink border, hard offset shadow that presses in on hover. */
export function Chip({ logo, label, logoOnly, roundedLogo, staggered, size = 'regular' }: ChipProps) {
  const s = sizes[size]
  return (
    <motion.span
      variants={staggered ? fadeUp() : undefined}
      aria-label={logoOnly ? label : undefined}
      className={cn(
        'inline-flex shrink-0 items-center whitespace-nowrap rounded-md border-[1.5px] border-ink bg-card font-semibold transition-[translate,box-shadow] duration-150 ease-soft hover:shadow-none',
        s.chip,
        logoOnly ? s.padLogoOnly : s.pad,
      )}
    >
      <img
        src={techLogos[logo]}
        alt={logoOnly ? label : ''}
        className={cn('object-contain', logoOnly ? s.logoOnly : s.logo, roundedLogo && 'rounded-[4px]')}
      />
      {!logoOnly && label}
    </motion.span>
  )
}

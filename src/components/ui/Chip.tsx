import { motion } from 'motion/react'
import { techLogos, type TechLogoKey } from '../../assets/asset'
import { fadeUp } from '../../lib/motion'
import { cn } from '../../lib/cn'

export type ChipProps = {
  logo: TechLogoKey
  label: string
  /** Show only the logo (for wordmark logos such as AWS). */
  logoOnly?: boolean
  /** Round the logo's corners (for logos supplied as tiles). */
  roundedLogo?: boolean
  /** Animate in with a parent `stagger` variant. */
  staggered?: boolean
}

/** Neo-brutalist technology chip: ink border, hard offset shadow that presses in on hover. */
export function Chip({ logo, label, logoOnly, roundedLogo, staggered }: ChipProps) {
  return (
    <motion.span
      variants={staggered ? fadeUp() : undefined}
      aria-label={logoOnly ? label : undefined}
      className={cn(
        'inline-flex h-[46px] shrink-0 items-center gap-2.5 whitespace-nowrap rounded-md border-[1.5px] border-ink bg-card text-sm font-semibold shadow-hard transition-[translate,box-shadow] duration-150 ease-soft hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none',
        logoOnly ? 'px-4' : 'pl-3 pr-[18px]',
      )}
    >
      <img
        src={techLogos[logo]}
        alt={logoOnly ? label : ''}
        className={cn(logoOnly ? 'h-6 w-10 object-contain' : 'size-[22px] object-contain', roundedLogo && 'rounded-[5px]')}
      />
      {!logoOnly && label}
    </motion.span>
  )
}

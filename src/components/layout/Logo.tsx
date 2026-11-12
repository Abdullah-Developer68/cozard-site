import { brand } from '../../assets/asset'
import { cn } from '../../lib/cn'

export function Logo({ tone = 'ink', className }: { tone?: 'ink' | 'muted'; className?: string }) {
  return (
    <a href="#top" className={cn('flex items-center gap-[9px] font-semibold tracking-[-0.04em]', tone === 'muted' ? 'text-graphite' : 'text-ink', className)}>
      <brand.CozardMark className="size-[1.25em]" aria-hidden />
      cozard
    </a>
  )
}

import { ArrowRight } from 'lucide-react'
import type { AnchorHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'ink' | 'line'
  size?: 'md' | 'sm'
  arrow?: boolean
}

export function Button({ variant = 'ink', size = 'md', arrow, className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'group inline-flex items-center gap-2 whitespace-nowrap rounded-full font-medium transition duration-250 ease-soft',
        size === 'md' ? 'h-11 px-5 text-[15px]' : 'h-[34px] px-3.5 text-[13px]',
        variant === 'ink'
          ? 'bg-ink text-white hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgb(20_20_20/0.5)]'
          : 'border border-line-strong bg-card hover:border-ink',
        className,
      )}
      {...props}
    >
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-250 ease-soft group-hover:translate-x-[3px]" />}
    </a>
  )
}

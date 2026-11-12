import { footerColumns } from '../../data/content'
import { Logo } from './Logo'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="mx-auto grid max-w-[1200px] gap-10 border-t border-hair px-5 pb-10 pt-14 md:grid-cols-[1fr_170px_170px_170px] md:gap-6 md:px-1">
      <div>
        <Logo tone="muted" className="text-2xl" />
        <p className="mt-[18px] max-w-[280px] text-[13px] leading-[1.6] text-graphite">
          Web, mobile and backend development, with UI/UX design built in.
        </p>
        <p className="mt-10 font-mono text-[11px] font-medium tracking-[0.06em] text-graphite md:mt-16">
          © {YEAR} COZARD · ALL RIGHTS RESERVED
        </p>
      </div>
      {footerColumns.map((column) => (
        <div key={column.title}>
          <h4 className="mb-3.5 text-[13px] font-medium">{column.title}</h4>
          {column.links.map((link) => (
            <a key={link.label} href={link.href} className="mb-[9px] block text-[13px] text-graphite transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>
      ))}
    </footer>
  )
}

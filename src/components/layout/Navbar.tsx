import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../../data/content'
import { cn } from '../../lib/cn'
import { EASE } from '../../lib/motion'
import { Button } from '../ui/Button'
import { Logo } from './Logo'

/** How long to keep the bar hidden after an in-page jump, so the smooth scroll doesn't bring it back. */
const JUMP_LOCK_MS = 1200

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lockUntil = useRef(0)

  // Hide while scrolling down, reveal while scrolling up.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const previous = scrollY.getPrevious() ?? 0
    setScrolled(y > 8)
    if (performance.now() < lockUntil.current) return
    if (y > previous && y > 120) setHidden(true)
    else if (y < previous) setHidden(false)
  })

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  /** After jumping to a section, keep the bar out of the way so the whole section is visible. */
  const onJump = () => {
    lockUntil.current = performance.now() + JUMP_LOCK_MS
    setHidden(true)
    setMenuOpen(false)
  }

  return (
    <motion.header
      className={cn(
        'sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300',
        scrolled && !menuOpen && 'bg-paper/85 shadow-[0_1px_0_var(--color-hair)] backdrop-blur-md',
        menuOpen && 'bg-paper',
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: hidden && !menuOpen ? '-100%' : 0 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:h-[72px] md:px-1">
        <Logo className="text-[21px]" />
        <div className="ml-14 mr-auto hidden gap-[30px] text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onJump}
              className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-soft hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <Button variant="line" size="sm" href="#contact" onClick={onJump} className="max-sm:hidden">
            Book a call
          </Button>
          <Button size="sm" href="#contact" onClick={onJump} className="max-[359px]:hidden">
            Start a project
          </Button>
          <button
            type="button"
            className="grid size-[34px] place-items-center rounded-full border border-line-strong bg-card md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="absolute inset-x-0 top-full border-b border-hair bg-paper px-5 pb-6 pt-2 shadow-[0_24px_40px_-24px_rgb(20_20_20/0.25)] md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onJump}
                className="flex items-center justify-between border-b border-hair py-3.5 text-lg font-medium tracking-[-0.02em]"
              >
                {link.label}
                <span className="font-mono text-xs text-graphite">{String(i + 1).padStart(2, '0')}</span>
              </a>
            ))}
            <div className="mt-5 flex gap-2.5">
              <Button href="#contact" onClick={onJump} className="flex-1 justify-center" arrow>
                Start a project
              </Button>
              <Button href="#contact" onClick={onJump} variant="line" className="flex-1 justify-center">
                Book a call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

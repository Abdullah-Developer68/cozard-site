import { navLinks } from '../../data/content'
import { Button } from '../ui/Button'
import { Rise } from '../ui/Reveal'
import { Logo } from './Logo'

export function Navbar() {
  return (
    <Rise delay={0.05} y={-10} className="mx-auto max-w-[1200px] px-5 md:px-1">
      <nav className="flex h-[72px] items-center justify-between">
        <Logo className="text-[21px]" />
        <div className="ml-14 mr-auto hidden gap-[30px] text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-soft hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-2.5">
          <Button variant="line" size="sm" href="#contact" className="hidden sm:inline-flex">
            Book a call
          </Button>
          <Button size="sm" href="#contact">
            Start a project
          </Button>
        </div>
      </nav>
    </Rise>
  )
}

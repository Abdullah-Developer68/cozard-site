import { motion } from 'motion/react'
import { icons } from '../assets/asset'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { steps } from '../data/content'
import { EASE } from '../lib/motion'

export function Process() {
  return (
    <section id="process" className="border-b border-hair px-5 py-20 md:px-16 md:py-24">
      <SectionHeader
        eyebrow="03 / Process"
        title="Kickoff to production"
        muted="in four honest steps."
        aside="Weekly demos, a shared board and a staging link from week one. You always know what shipped."
      />
      <Reveal className="relative grid gap-px overflow-hidden rounded-[14px] border border-hair bg-hair sm:grid-cols-2 lg:grid-cols-4">
        <span className="absolute inset-x-0 top-0 z-[2] h-[3px] bg-hair">
          <motion.i
            className="block h-full origin-left bg-ink"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.4, ease: EASE, delay: 0.3 }}
          />
        </span>
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.title} className="group relative flex min-h-[290px] flex-col gap-3 bg-card px-[26px] pb-8 pt-[30px]">
              <span className="font-mono text-[44px] font-medium tracking-[-0.04em] text-hair transition-colors duration-400 group-hover:text-ink">
                {String(i + 1).padStart(2, '0')}
              </span>
              <icons.DoubleArrow
                aria-hidden
                className="absolute right-[26px] top-9 h-6 w-9 text-ink transition-transform duration-400 ease-soft group-hover:translate-x-1"
              />
              <h3 className="mt-1.5 text-[21px] font-medium tracking-[-0.02em]">{step.title}</h3>
              <p className="text-[14.5px] leading-[1.6] text-body">{step.body}</p>
              <span className="mt-auto flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-graphite">
                <Icon className="size-3.5" />
                {step.duration}
              </span>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}

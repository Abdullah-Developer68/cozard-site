import { ArrowUpRight } from 'lucide-react'
import { illustrations } from '../assets/asset'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { projects } from '../data/content'

export function Work() {
  return (
    <section id="work" className="border-b border-hair px-5 py-20 md:px-16 md:py-24">
      <SectionHeader
        eyebrow="04 / Selected work"
        title="Recent builds"
        muted="from the studio."
        aside={
          <Button href="#" variant="line" className="self-start md:self-auto">
            All case studies
          </Button>
        }
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => {
          const Illustration = illustrations.work[project.illustration]
          return (
            <Reveal key={project.name} delay={(i % 2) * 0.1}>
              <a
                href={project.href}
                className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-hair bg-card transition-[border-color,translate,box-shadow] duration-300 ease-soft hover:-translate-y-[5px] hover:border-ink hover:shadow-lift"
              >
                <div className="aspect-[1.6] overflow-hidden border-b border-hair">
                  <Illustration
                    role="img"
                    aria-label={`${project.name} — ${project.summary}`}
                    className="block size-full transition-transform duration-600 ease-soft group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex items-start gap-4 px-[22px] pb-6 pt-5">
                  <div>
                    <span className="mb-2 block font-mono text-xs font-medium text-graphite">{project.date}</span>
                    <h3 className="text-[21px] font-medium leading-[1.25] tracking-[-0.02em]">
                      {project.name} <span className="font-normal text-graphite">— {project.summary}</span>
                    </h3>
                    <span className="mt-2 block text-sm text-graphite">{project.category}</span>
                  </div>
                  <ArrowUpRight className="ml-auto mt-[22px] size-5 shrink-0 transition-transform duration-300 ease-soft group-hover:-translate-y-[3px] group-hover:translate-x-[3px]" />
                </div>
              </a>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

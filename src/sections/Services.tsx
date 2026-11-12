import { IconBadge } from '../components/ui/IconBadge'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { services } from '../data/content'

const numberWords = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight']

export function Services() {
  return (
    <section id="services" className="border-b border-hair px-5 py-20 md:px-16 md:py-24">
      <SectionHeader
        eyebrow="01 / Services"
        title={`${numberWords[services.length] ?? services.length} disciplines.`}
        muted="One team that owns the whole build."
        aside="No hand-offs between agencies. The people who design your screens are the people who build the API behind them."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal
            key={service.title}
            delay={(i % 3) * 0.1}
            className="group flex flex-col gap-3.5 rounded-[14px] border border-hair bg-card p-7 transition-[border-color,translate,box-shadow] duration-300 ease-soft hover:-translate-y-[5px] hover:border-ink hover:shadow-lift"
          >
            <div className="flex">
              <IconBadge icon={service.icon} />
              <span className="ml-auto font-mono text-xs font-medium text-graphite">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="mt-2.5 text-[23px] font-medium leading-[1.2] tracking-[-0.025em]">{service.title}</h3>
            <p className="text-[15px] leading-[1.6] text-body">{service.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

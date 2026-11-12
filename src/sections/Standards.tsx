import { CountUp } from '../components/ui/CountUp'
import { DashedArrow } from '../components/ui/DashedArrow'
import { Eyebrow } from '../components/ui/Eyebrow'
import { HandNote } from '../components/ui/HandNote'
import { Reveal } from '../components/ui/Reveal'
import { standards, stats } from '../data/content'

export function Standards() {
  return (
    <section id="about" className="px-5 py-20 md:px-16 md:py-24">
      <div className="grid gap-14 lg:grid-cols-[360px_1fr]">
        <Reveal>
          <Eyebrow className="mb-[18px]">05 / How we work</Eyebrow>
          <h2 className="text-4xl font-medium leading-[1.03] tracking-[-0.035em] md:text-[44px]">
            Engineering standards <span className="text-graphite">you can hold us to.</span>
          </h2>
          <div className="relative mt-10 hidden lg:block">
            <HandNote rotate={-3}>
              written into
              <br />
              every contract
            </HandNote>
            <DashedArrow
              width={120}
              height={60}
              className="absolute left-[150px] top-1.5"
              d="M6 30 C 40 0, 80 10, 112 34"
              head="M112 34 l-13 -2 M112 34 l-4 -12"
            />
          </div>
        </Reveal>

        <div>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {standards.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={(i % 2) * 0.08} className="flex gap-3.5 border-b border-hair py-[18px] text-[15px] leading-normal text-body">
                  <Icon className="mt-0.5 size-[18px] shrink-0 text-ink" />
                  <span>
                    <b className="mb-0.5 block font-medium text-ink">{item.title}</b>
                    {item.body}
                  </span>
                </Reveal>
              )
            })}
          </div>
          <Reveal className="mt-10 grid grid-cols-1 gap-6 border-t border-hair sm:grid-cols-3 sm:gap-0">
            {stats.map((stat) => (
              <div key={stat.label} className="pt-7">
                <strong className="block text-[46px] font-medium tracking-[-0.04em]">
                  <CountUp value={stat.value} decimals={stat.decimals} />
                  {stat.suffix && <span className="text-2xl text-graphite">{stat.suffix}</span>}
                </strong>
                <span className="text-sm text-graphite">{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

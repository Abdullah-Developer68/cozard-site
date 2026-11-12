import { Button } from '../components/ui/Button'
import { DashedArrow } from '../components/ui/DashedArrow'
import { Eyebrow } from '../components/ui/Eyebrow'
import { HandNote } from '../components/ui/HandNote'
import { Rise } from '../components/ui/Reveal'

export function Hero() {
  return (
    <section className="relative px-5 pt-14 md:px-16 md:pt-[72px]">
      <Rise delay={0.1}>
        <Eyebrow className="flex-wrap gap-y-1">
          <span className="text-ink">Software studio</span> · Web · Mobile · Backend · UI/UX
        </Eyebrow>
      </Rise>
      <Rise delay={0.15}>
        <h1 className="mt-[22px] max-w-[860px] text-[44px] font-medium leading-[1.03] tracking-[-0.035em] sm:text-6xl lg:text-[76px]">
          We design, build and ship <span className="text-graphite">the software your business runs on.</span>
        </h1>
      </Rise>
      <Rise delay={0.25}>
        <p className="mt-6 max-w-[520px] text-[17px] leading-[27px] text-body md:text-[19px] md:leading-[29px]">
          Cozard is a senior team for web apps, mobile apps and backends. One crew takes your product from the first wireframe to
          production, and stays to keep it running.
        </p>
      </Rise>
      <Rise delay={0.35} className="mt-8 flex flex-wrap gap-3">
        <Button href="#contact" arrow>
          Start a project
        </Button>
        <Button href="#work" variant="line">
          See our work
        </Button>
      </Rise>

      <Rise delay={0.6} className="absolute right-[70px] top-[250px] z-10 hidden w-[250px] lg:block">
        <HandNote className="text-right">
          Software for
          <br />
          all devices
        </HandNote>
        <DashedArrow
          width={160}
          height={330}
          className="absolute left-[60px] top-[76px]"
          d="M120 6 C 150 90, 40 170, 86 318"
          head="M86 318 l-11 -11 M86 318 l5 -15"
        />
      </Rise>
    </section>
  )
}

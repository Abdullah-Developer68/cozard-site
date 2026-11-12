import { Button } from '../components/ui/Button'
import { DashedArrow } from '../components/ui/DashedArrow'
import { Eyebrow } from '../components/ui/Eyebrow'
import { HandNote } from '../components/ui/HandNote'
import { PulseDot } from '../components/ui/PulseDot'
import { Reveal } from '../components/ui/Reveal'
import { contactEmail } from '../data/content'

export function Contact() {
  return (
    <Reveal>
      <section id="contact" className="relative px-5 pb-28 pt-28 text-center md:pb-[140px] md:pt-[150px]">
        <HandNote rotate={-6} className="absolute left-[calc(50%-600px)] top-[66px] hidden text-left xl:block">
          free 30-min
          <br />
          scoping call
        </HandNote>
        <DashedArrow
          width={120}
          height={80}
          className="absolute left-[calc(50%-480px)] top-24 hidden xl:block"
          d="M6 10 C 50 6, 80 30, 100 66"
          head="M100 66 l-1 -13 M100 66 l-12 -5"
        />
        <h2 className="text-[44px] font-medium leading-[1.03] tracking-[-0.035em] sm:text-6xl lg:text-[72px]">
          <span className="text-graphite">Stop shelving the roadmap.</span>
          <br />
          Ship it with Cozard.
        </h2>
        <p className="mx-auto mt-[26px] max-w-[500px] text-lg leading-7 text-body">
          Tell us what you are building. You will get a scope, a timeline and a fixed quote within 48 hours.
        </p>
        <div className="mt-[34px] flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${contactEmail}`} arrow>
            Start a project
          </Button>
          <Button href={`mailto:${contactEmail}?subject=Book%20a%20call`} variant="line">
            Book a call
          </Button>
        </div>
        <Eyebrow className="mt-7 justify-center">
          <PulseDot />
          Usually replies within 4 hours
        </Eyebrow>
      </section>
    </Reveal>
  )
}

import { motion } from 'motion/react'
import { Chip } from '../components/ui/Chip'
import { DashedArrow } from '../components/ui/DashedArrow'
import { HandNote } from '../components/ui/HandNote'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { toolGroups, type ToolGroup } from '../data/content'
import { stagger } from '../lib/motion'

/** Phone version of the note: an inline label that leads the chip row, saving a line per group. */
function InlineNote({ group }: { group: ToolGroup }) {
  const Icon = group.icon
  return (
    <span className="mr-1 inline-flex h-[30px] items-center gap-1.5 short:h-[26px] md:hidden">
      <span className="grid size-6 shrink-0 place-items-center rounded-full border-[1.5px] border-dashed border-pen">
        <Icon className="size-3 text-pen" />
      </span>
      <span className="font-hand text-[21px] font-semibold leading-none text-pen short:text-lg">
        {group.note[0]} {group.note[1]}
      </span>
    </span>
  )
}

/**
 * Sized to fit one screen, so jumping here from the nav shows the whole toolbox:
 * phones lead each chip row with an inline note, tablets put the note beside its chips, desktops use a 2×2 grid.
 */
function GroupNote({ group }: { group: ToolGroup }) {
  const Icon = group.icon
  return (
    <div className="flex items-center gap-3.5 max-md:hidden">
      <span className="grid size-[38px] shrink-0 place-items-center rounded-full border-[1.5px] border-dashed border-pen">
        <Icon className="size-[17px] text-pen" />
      </span>
      <HandNote rotate={0} className="text-[26px] lg:text-[27px]">
        {group.note[0]} <br className="lg:hidden" />
        {group.note[1]}
      </HandNote>
      <DashedArrow
        width={56}
        height={30}
        className="ml-1 hidden translate-y-2 lg:block"
        d="M4 6 C 26 2, 46 10, 50 26"
        head="M50 26 l-8 -6 M50 26 l2 -10"
      />
    </div>
  )
}

export function Toolbox() {
  return (
    <section id="stack" className="border-b border-hair px-5 py-8 short:py-5 sm:py-14 md:px-16 lg:py-16 xl:py-20">
      <SectionHeader
        dense
        eyebrow="02 / Stack"
        title="The toolbox,"
        muted="annotated."
        aside="Modern, typed and boring in the right places. We pick tools your next hire already knows."
      />
      <div className="grid gap-3.5 short:gap-2.5 sm:gap-6 md:gap-7 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
        {toolGroups.map((group) => (
          <Reveal key={group.note.join(' ')} className="grid gap-2 md:grid-cols-[215px_1fr] md:items-center md:gap-6 lg:grid-cols-1 lg:items-start lg:gap-3.5">
            <GroupNote group={group} />
            <motion.div
              variants={stagger(0.04, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 short:gap-1.5 md:gap-2.5"
            >
              <InlineNote group={group} />
              {group.tools.map((tool) => (
                <Chip key={tool.label} {...tool} size="compact" staggered />
              ))}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

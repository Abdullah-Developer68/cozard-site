import { motion } from 'motion/react'
import { Chip } from '../components/ui/Chip'
import { DashedArrow } from '../components/ui/DashedArrow'
import { HandNote } from '../components/ui/HandNote'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { toolGroups, type ToolGroup } from '../data/content'
import { cn } from '../lib/cn'
import { stagger } from '../lib/motion'

function GroupNote({ group }: { group: ToolGroup }) {
  const Icon = group.icon
  return (
    <div className={cn('flex items-center gap-3.5', group.flip && 'lg:flex-row-reverse lg:justify-end')}>
      {group.flip ? (
        <DashedArrow width={110} height={50} className="hidden lg:block" d="M6 20 C 40 2, 70 44, 100 30" head="M100 30 l-12 -7 M100 30 l-12 6" />
      ) : (
        <DashedArrow width={110} height={50} className="hidden lg:block" d="M104 18 C 70 4, 40 40, 10 30" head="M10 30 l12 -7 M10 30 l12 6" />
      )}
      <span className="grid size-[38px] shrink-0 place-items-center rounded-full border-[1.5px] border-dashed border-pen">
        <Icon className="size-[17px] text-pen" />
      </span>
      <HandNote rotate={0}>
        {group.note[0]}
        <br />
        {group.note[1]}
      </HandNote>
    </div>
  )
}

export function Toolbox() {
  return (
    <section id="stack" className="border-b border-hair px-5 py-20 md:px-16 md:py-24">
      <SectionHeader
        eyebrow="02 / Stack"
        title="The toolbox,"
        muted="annotated."
        aside="Modern, typed and boring in the right places. We pick tools your next hire already knows."
      />
      <div className="flex flex-col gap-12 lg:gap-11">
        {toolGroups.map((group) => (
          <Reveal
            key={group.note.join(' ')}
            className={cn('grid items-center gap-5 lg:gap-6', group.flip ? 'lg:grid-cols-[330px_1fr]' : 'lg:grid-cols-[1fr_330px]')}
          >
            <div className={cn(!group.flip && 'lg:order-2')}>
              <GroupNote group={group} />
            </div>
            <motion.div
              variants={stagger(0.05, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '0px 0px -80px 0px' }}
              className={cn('flex max-w-[640px] flex-wrap gap-x-3.5 gap-y-4', group.flip && 'lg:justify-end lg:justify-self-end', !group.flip && 'lg:order-1')}
            >
              {group.tools.map((tool) => (
                <Chip key={tool.label} {...tool} staggered />
              ))}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

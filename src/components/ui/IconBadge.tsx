import type { LucideIcon } from 'lucide-react'

/** Square icon tile with a hard shadow; presses in when its `group` parent is hovered. */
export function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="grid size-11 place-items-center rounded-[9px] border-[1.5px] border-ink bg-card shadow-hard transition-[translate,box-shadow] duration-200 ease-soft group-hover:translate-x-[3px] group-hover:translate-y-[3px] group-hover:shadow-none">
      <Icon className="size-[21px]" strokeWidth={2} />
    </div>
  )
}

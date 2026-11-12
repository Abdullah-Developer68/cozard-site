import { ChevronLeft, Lock, Share } from 'lucide-react'
import type { ReactNode } from 'react'

/** MacBook with a Safari-style browser window around its screen content. */
export function Macbook({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="absolute bottom-0 left-[-28px] h-[590px] w-[900px]">
      <div className="absolute left-10 top-0 h-[560px] w-[820px] rounded-t-[22px] bg-device px-[13px] pt-3.5 shadow-[inset_0_0_0_1.5px_var(--color-device-edge),0_40px_70px_-40px_rgb(20_20_20/0.45)]">
        <i className="absolute left-1/2 top-[5px] -ml-[3px] size-1.5 rounded-full bg-[#34343A]" />
        <div className="flex h-[546px] w-[794px] flex-col overflow-hidden rounded-t-[7px] bg-card">
          <div className="flex h-9 shrink-0 items-center gap-3.5 border-b border-hair bg-sand px-3">
            <div className="flex gap-1.5">
              <i className="size-2.5 rounded-full bg-[#EC6A5E]" />
              <i className="size-2.5 rounded-full bg-[#F4BF4F]" />
              <i className="size-2.5 rounded-full bg-[#61C554]" />
            </div>
            <ChevronLeft className="size-[15px] text-graphite" />
            <div className="mx-auto flex h-[23px] max-w-[330px] flex-1 items-center justify-center gap-1.5 rounded-[7px] border border-hair bg-card text-[11px] font-medium text-muted">
              <Lock className="size-[11px] text-graphite" />
              {url}
            </div>
            <Share className="size-3.5 text-graphite" />
          </div>
          {children}
        </div>
      </div>
      <div className="absolute left-0 top-[560px] h-[22px] w-[900px] rounded-[3px_3px_18px_18px/3px_3px_14px_14px] bg-[linear-gradient(#E4E1DA,#C9C6BF_70%,#A9A6A0)]">
        <i className="absolute left-1/2 top-0 -ml-[62px] h-[7px] w-[124px] rounded-b-lg bg-[#BDBAB3]" />
      </div>
      <div className="absolute -bottom-1.5 left-[30px] right-[120px] -z-10 h-5 bg-[radial-gradient(closest-side,rgb(20_20_20/0.22),transparent)]" />
    </div>
  )
}

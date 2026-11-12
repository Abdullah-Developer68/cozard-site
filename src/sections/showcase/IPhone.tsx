import { BatteryFull, Check, ChevronLeft, Heart, Minus, Plus, ShoppingBag, Signal, Star, Truck, Wifi } from 'lucide-react'
import { motion } from 'motion/react'
import { brand, images } from '../../assets/asset'
import { cn } from '../../lib/cn'
import { BagBadge, productTag } from './StoreDesktop'

const swatches = [
  { color: '#3E5F7A', active: true },
  { color: '#D9CCB4' },
  { color: '#3A3A38' },
]

/** iPhone showing the Fernhouse product page, with an "Added to bag" toast on a loop. */
export function IPhone() {
  return (
    <motion.div
      className="absolute bottom-[-2px] right-1 z-[3] h-[526px] w-64 rounded-[48px] bg-device p-[9px] shadow-[inset_0_0_0_1.5px_var(--color-device-edge),0_40px_60px_-28px_rgb(20_20_20/0.5)]"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <i className="absolute -left-[3px] top-[110px] h-11 w-[3px] rounded-l-sm bg-[#2C2C2E]" />
      <i className="absolute -right-[3px] top-[140px] h-16 w-[3px] rounded-r-sm bg-[#2C2C2E]" />

      <div className="relative flex h-[508px] w-[238px] flex-col overflow-hidden rounded-[40px] bg-paper text-[11.5px] leading-[1.45] text-ink">
        <div className="absolute left-1/2 top-2.5 z-[6] -ml-9 h-[22px] w-[72px] rounded-xl bg-[#0B0B0C]" />

        <motion.div
          className="absolute inset-x-2.5 top-10 z-[5] flex items-center gap-[9px] rounded-2xl border border-hair bg-white/95 px-[11px] py-[9px] shadow-[0_10px_24px_-12px_rgb(20_20_20/0.35)]"
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: [-120, 0, 0, -120, -120], opacity: [0, 1, 1, 0, 0] }}
          transition={{ duration: 7, times: [0, 0.08, 0.62, 0.72, 1], repeat: Infinity, delay: 2.4, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <img src={images.showcase.stonewareMug} alt="" className="size-[30px] shrink-0 rounded-[7px] object-cover" />
          <div className="flex-1 text-[10.5px] leading-[1.35]">
            <b className="text-[11px] font-semibold">Added to bag</b>
            <br />
            <span className="text-graphite">Speckle mug · $28</span>
          </div>
          <Check className="size-[15px] text-signal" />
        </motion.div>

        <div className="flex h-11 shrink-0 items-center justify-between pl-[30px] pr-5 pt-0.5 text-[12.5px] font-semibold">
          9:41
          <span className="flex items-center gap-[3px]">
            <Signal className="size-3" />
            <Wifi className="size-3" />
            <BatteryFull className="size-4" />
          </span>
        </div>

        <div className="flex h-[38px] shrink-0 items-center justify-between px-3">
          <ChevronLeft className="size-[18px]" />
          <div className="flex items-center gap-1.5 text-[14.5px] font-semibold tracking-[-0.045em]">
            <brand.FernhouseMark className="size-[15px]" />
            fernhouse
          </div>
          <div className="flex gap-0.5">
            <span className="grid size-7 place-items-center"><Heart className="size-4" /></span>
            <span className="relative grid size-7 place-items-center">
              <ShoppingBag className="size-4" />
              <BagBadge className="right-0 top-px h-3.5 min-w-3.5 text-[8.5px] leading-[14px]" />
            </span>
          </div>
        </div>

        <div className="relative mx-2.5 h-[200px] shrink-0 overflow-hidden rounded-2xl bg-sand-deep">
          <img src={images.showcase.stonewareMug} alt="Speckled blue stoneware mug" className="block size-full object-cover" />
          <span className={productTag}>NEW</span>
          <div className="absolute inset-x-0 bottom-[9px] flex justify-center gap-1">
            <i className="h-[5px] w-3.5 rounded-[3px] bg-white" />
            <i className="size-[5px] rounded-[3px] bg-white/60" />
            <i className="size-[5px] rounded-[3px] bg-white/60" />
            <i className="size-[5px] rounded-[3px] bg-white/60" />
          </div>
        </div>

        <div className="flex flex-col gap-[7px] px-3.5 pt-2.5">
          <div className="font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-graphite">Kitchen / Mugs</div>
          <div className="flex items-start justify-between">
            <div className="text-[15px] font-semibold leading-[1.2] tracking-[-0.025em]">Speckle stoneware mug</div>
            <b className="text-[15px] font-semibold">$28</b>
          </div>
          <div className="flex items-center gap-[5px] text-[10.5px] text-graphite">
            <span className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-[11px] fill-ink text-ink" />
              ))}
            </span>
            <b className="font-semibold text-ink">4.9</b> · 212 reviews
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10.5px] font-medium text-muted">
              Colour: <b className="font-semibold text-ink">Harbour blue</b>
            </span>
            <div className="flex items-center gap-[7px]">
              {swatches.map((s) => (
                <i
                  key={s.color}
                  className={cn(
                    'size-[18px] rounded-full',
                    s.active ? 'shadow-[0_0_0_2px_var(--color-paper),0_0_0_3.5px_var(--color-ink)]' : 'shadow-[inset_0_0_0_1px_rgb(20_20_20/0.15)]',
                  )}
                  style={{ background: s.color }}
                />
              ))}
            </div>
          </div>
          <div className="mt-0.5 flex gap-2">
            <div className="flex h-9 shrink-0 items-center gap-[9px] rounded-full border border-line bg-card px-[9px] text-xs font-semibold">
              <Minus className="size-[13px]" />1<Plus className="size-[13px]" />
            </div>
            <div className="flex h-9 flex-1 items-center justify-center gap-[7px] rounded-full bg-ink text-xs font-medium text-white">
              <ShoppingBag className="size-3.5" />
              Add to bag · $28
            </div>
          </div>
          <div className="flex items-center gap-[7px] rounded-[10px] border border-hair bg-card px-[9px] py-[7px] text-[10.5px] leading-[1.35] text-muted">
            <Truck className="size-[15px] shrink-0" />
            <span>
              <b className="font-semibold text-ink">Free delivery</b> · arrives Thu, Nov 14
              <br />
              <span className="text-signal">In stock</span> · ships from Portland
            </span>
          </div>
        </div>

        <div className="absolute bottom-1.5 left-1/2 -ml-[50px] h-1 w-[100px] rounded-sm bg-ink" />
      </div>
    </motion.div>
  )
}

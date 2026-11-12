import { ChevronDown, Heart, Search, ShieldCheck, ShoppingBag, SlidersHorizontal, Star, Truck, Undo2, User } from 'lucide-react'
import { motion } from 'motion/react'
import { brand } from '../../assets/asset'
import { cn } from '../../lib/cn'
import { EASE } from '../../lib/motion'
import { useTypewriter } from '../../hooks/useTypewriter'
import { products, searchPhrases } from './products'

const filterChip = 'inline-flex h-7 items-center gap-1.5 rounded-md border-[1.5px] border-ink bg-card px-[11px] text-[11px] font-semibold shadow-hard-sm'
const filterChipOff = 'inline-flex h-7 items-center gap-1.5 rounded-md border border-line bg-card px-[11px] text-[11px] font-medium text-muted'

export const productTag = 'absolute left-2 top-2 rounded-[5px] border-[1.5px] border-ink bg-card px-1.5 py-0.5 font-mono text-[9px] font-semibold tracking-[0.06em] shadow-hard-sm'

/** Blinking text caret. */
export function Caret({ className }: { className?: string }) {
  return (
    <motion.span
      aria-hidden
      className={cn('ml-px inline-block h-[13px] w-[1.5px] bg-ink align-[-2px]', className)}
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: 'linear' }}
    />
  )
}

/** Bag count badge that pops in after a short delay. */
export function BagBadge({ className }: { className?: string }) {
  return (
    <motion.b
      className={cn('absolute -right-0.5 top-0 h-4 min-w-4 rounded-full bg-pen px-1 text-center text-[9.5px] font-semibold leading-4 text-white', className)}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE, delay: 2.8 }}
    >
      2
    </motion.b>
  )
}

/** The Fernhouse store as it renders in the MacBook browser. */
export function StoreDesktop() {
  const query = useTypewriter(searchPhrases)

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-card text-xs leading-[1.45] text-ink">
      <div className="flex h-6 shrink-0 items-center justify-center gap-2 bg-ink font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-white">
        <Truck className="size-3" />
        Free shipping over $75 · 30-day returns
      </div>

      <div className="flex h-[52px] shrink-0 items-center gap-[26px] border-b border-hair px-[22px]">
        <div className="flex items-center gap-[7px] text-[17px] font-semibold tracking-[-0.045em]">
          <brand.FernhouseMark className="size-[18px]" />
          fernhouse
        </div>
        <div className="flex gap-[18px] text-xs font-medium text-[#5a5853]">
          {['New in', 'Kitchen', 'Living', 'Bath', 'Journal'].map((link) => (
            <span key={link} className={cn('pb-[15px] pt-[17px]', link === 'Kitchen' && 'text-ink shadow-[inset_0_-2px_0_var(--color-ink)]')}>
              {link}
            </span>
          ))}
        </div>
        <div className="ml-auto flex h-[30px] w-[200px] items-center gap-[7px] rounded-full border border-line bg-panel px-3 text-[11.5px]">
          <Search className="size-[13px] text-graphite" />
          <span>{query}</span>
          <Caret className="-ml-1.5" />
        </div>
        <div className="flex gap-1">
          <span className="grid size-[30px] place-items-center"><Heart className="size-4" /></span>
          <span className="grid size-[30px] place-items-center"><User className="size-4" /></span>
          <span className="relative grid size-[30px] place-items-center">
            <ShoppingBag className="size-4" />
            <BagBadge />
          </span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-[22px] pt-3.5">
        <div className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-graphite">Home / Kitchen / Tableware</div>
        <div className="mt-[5px] flex items-end justify-between">
          <h4 className="text-2xl font-medium leading-[1.1] tracking-[-0.035em]">
            Kitchen &amp; dining <span className="text-graphite">· 48 pieces</span>
          </h4>
          <span className="flex items-center gap-[5px] text-[11.5px] font-medium text-muted">
            Sort: Bestselling <ChevronDown className="size-[13px]" />
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className={cn(filterChip, 'bg-ink text-white')}>All</span>
          <span className={filterChip}>Ceramics</span>
          <span className={filterChip}>Glassware</span>
          <span className={filterChip}>Linen</span>
          <span className={filterChipOff}><SlidersHorizontal className="size-3" />Filters</span>
          <span className={filterChipOff}>Under $50</span>
        </div>

        <div className="mt-3.5 grid grid-cols-4 gap-3.5">
          {products.map((product) => (
            <div key={product.name}>
              <div className="relative h-[196px] overflow-hidden rounded-[10px] bg-sand-deep">
                <img src={product.image} alt={product.alt} className="block size-full object-cover" />
                {product.tag && <span className={productTag}>{product.tag}</span>}
                <span className="absolute right-2 top-2 grid size-[26px] place-items-center rounded-full bg-white/95">
                  <Heart className={cn('size-[13px]', product.favourite && 'text-pen')} />
                </span>
                {product.showAddToBag && (
                  <motion.span
                    className="absolute inset-x-2 bottom-2 flex h-[30px] items-center justify-center gap-1.5 rounded-full bg-ink text-[11px] font-medium text-white"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 1.6 }}
                  >
                    <ShoppingBag className="size-3" />
                    Add to bag
                  </motion.span>
                )}
              </div>
              <div className="mt-2 flex justify-between gap-2 text-xs font-medium leading-[1.3]">
                <span>{product.name}</span>
                <b className="font-semibold">${product.price}</b>
              </div>
              <div className="mt-1 flex items-center gap-[5px] text-[10.5px] text-graphite">
                {product.swatches.map((color) => (
                  <i key={color} className="size-2.5 rounded-full shadow-[inset_0_0_0_1px_rgb(20_20_20/0.15)]" style={{ background: color }} />
                ))}
                <Star className="ml-auto size-2.5 text-ink" />
                {product.rating}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-3 border-t border-hair pb-3 pt-[11px] text-[11px] font-medium text-muted">
          <span className="flex items-center justify-center gap-[7px]"><Truck className="size-3.5" />Free shipping over $75</span>
          <span className="flex items-center justify-center gap-[7px]"><Undo2 className="size-3.5" />30-day returns</span>
          <span className="flex items-center justify-center gap-[7px]"><ShieldCheck className="size-3.5" />Secure checkout</span>
        </div>
      </div>
    </div>
  )
}

import { useScaleToFit } from '../hooks/useScaleToFit'
import { Rise } from '../components/ui/Reveal'
import { IPhone } from './showcase/IPhone'
import { Macbook } from './showcase/Macbook'
import { StoreDesktop } from './showcase/StoreDesktop'

const STAGE_WIDTH = 1072
const STAGE_HEIGHT = 620

/** One product on two screens: the Fernhouse store on a MacBook and an iPhone. */
export function DeviceShowcase() {
  const { ref, scale } = useScaleToFit<HTMLDivElement>(STAGE_WIDTH)

  return (
    <section aria-label="Product showcase" className="border-b border-hair px-5 pb-12 md:px-16 md:pb-[72px]">
      <Rise delay={0.5} className="mt-10 md:mt-14">
        <div ref={ref} className="relative w-full" style={{ height: STAGE_HEIGHT * scale }}>
          <div className="absolute left-0 top-0 origin-top-left" style={{ width: STAGE_WIDTH, height: STAGE_HEIGHT, scale }}>
            <div className="bg-hatch absolute -left-10 top-0 h-[70px] w-[180px]" />
            <div className="bg-hatch absolute -right-10 top-10 h-[200px] w-[120px]" />
            <Macbook url="fernhouse.store/kitchen">
              <StoreDesktop />
            </Macbook>
            <IPhone />
          </div>
        </div>
      </Rise>
    </section>
  )
}

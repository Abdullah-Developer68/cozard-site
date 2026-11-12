import { MotionConfig } from 'motion/react'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Contact } from './sections/Contact'
import { DeviceShowcase } from './sections/DeviceShowcase'
import { Hero } from './sections/Hero'
import { Process } from './sections/Process'
import { Services } from './sections/Services'
import { StackMarquee } from './sections/StackMarquee'
import { Standards } from './sections/Standards'
import { Toolbox } from './sections/Toolbox'
import { Work } from './sections/Work'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="overflow-x-clip">
        <Navbar />
        <main>
          <div className="mx-auto max-w-[1200px] border-x border-hair bg-paper/60">
            <Hero />
            <DeviceShowcase />
            <StackMarquee />
            <Services />
            <Toolbox />
            <Process />
            <Work />
            <Standards />
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

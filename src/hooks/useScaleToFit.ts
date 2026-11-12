import { useLayoutEffect, useRef, useState } from 'react'

/** Scales a fixed-size design down (never up) to the width of its container. */
export function useScaleToFit<T extends HTMLElement>(designWidth: number) {
  const ref = useRef<T>(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => setScale(Math.min(1, entry.contentRect.width / designWidth)))
    observer.observe(el)
    return () => observer.disconnect()
  }, [designWidth])

  return { ref, scale }
}

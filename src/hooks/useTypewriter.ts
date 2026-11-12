import { useEffect, useState } from 'react'

/** Types and deletes a list of phrases in a loop, like someone searching. */
export function useTypewriter(phrases: readonly string[], { startDelay = 2600, hold = 2200, typeMs = 75, deleteMs = 40 } = {}) {
  const [text, setText] = useState(phrases[0] ?? '')

  useEffect(() => {
    if (phrases.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let index = 0
    let length = phrases[0].length
    let deleting = true
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const phrase = phrases[index]
      if (deleting) {
        length -= 1
        if (length <= 0) {
          deleting = false
          index = (index + 1) % phrases.length
        }
      } else {
        length += 1
        if (length >= phrases[index].length) {
          deleting = true
          setText(phrases[index])
          timer = setTimeout(tick, hold)
          return
        }
      }
      setText((deleting ? phrase : phrases[index]).slice(0, Math.max(length, 0)))
      timer = setTimeout(tick, deleting ? deleteMs : typeMs)
    }

    timer = setTimeout(tick, startDelay)
    return () => clearTimeout(timer)
  }, [phrases, startDelay, hold, typeMs, deleteMs])

  return text
}

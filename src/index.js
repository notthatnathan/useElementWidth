import { useCallback, useEffect, useState } from 'react'

/**
 * Returns current width of specified element.
 *
 * @param {Ref} ref element to use in width calculation
 */
const useElementWidth = ref => {
  // handle ssr
  if (typeof window === 'undefined') return 0;

  const getWidth = useCallback(() => {
    return ref?.current?.getBoundingClientRect().width * (window.visualViewport?.scale || 1) || 0
  }, [ref?.current])
  const [width, setWidth] = useState(0)

  const elObserver = new ResizeObserver(entries => {
    window.requestAnimationFrame(() => {
      if (!ref?.current) return

      if (entries?.[0]?.contentBoxSize?.[0]) {
        setWidth(entries[0].contentBoxSize[0].inlineSize)
      } else if (entries?.contentBoxSize) {
        setWidth(entries[0].contentBoxSize.inlineSize)
      } else {
        setWidth(entries[0].contentRect.width)
      }
    })
  })

  useEffect(() => {
    setWidth(getWidth())
  }, [ref?.current])

  useEffect(() => {
    if (!ref?.current) return

    elObserver.observe(ref?.current)

    // eslint-disable-next-line consistent-return
    return () => {
      if (!ref?.current) return
      elObserver.unobserve(ref?.current)
    }
  })

  return width
}

export default useElementWidth

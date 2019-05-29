// Updates component when scrolled to the bottom
import { useEffect, useState, useCallback } from 'react'

const Watcher = ({
  elToWatched: _elToWatched,
  offset = 10,
  enabled = null,
}) => {
  const elToWatched =
    _elToWatched || document.scrollingElement || document.documentElement

  // State
  const [reachedEnd, setreachedEnd] = useState(false)
  const reset = useCallback(() => setreachedEnd(false))

  //Effects
  useEffect(() => {
    if (enabled) {
      window.addEventListener('scroll', handleScroll, true)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Reset watcher for continued listening
  useEffect(() => {
    reset()
  }, [reachedEnd])

  // Functions
  const handleScroll = () => {
    const reachEnd =
      elToWatched != null &&
      elToWatched.scrollHeight - offset <=
        elToWatched.scrollTop + window.innerHeight

    if (reachEnd) setreachedEnd(true)
    else setreachedEnd(false)
  }

  return reachedEnd
}

export default Watcher

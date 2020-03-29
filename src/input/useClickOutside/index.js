import { useRef, useEffect } from 'react'

export default (elRef, callback) => {
  const callbackRef = useRef()
  callbackRef.current = callback

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (elRef.current && !elRef.current.contains(e.target) && callbackRef.current) {
        callbackRef.current(e)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [callbackRef, elRef])
}

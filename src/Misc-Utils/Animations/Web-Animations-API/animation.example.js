import React, { useRef, useState, useEffect } from 'react'

import animation from './animation.index'

const config = {
  fill: 'forwards',
  duration: 200,
  direction: 'normal',
  easing: 'ease-out',
}

const Example = ({ type }) => {
  const divRef = useRef(null)
  const [show, setshow] = useState(null)

  useEffect(() => {
    if (show !== null)
      animation({
        name: type,
        el: divRef.current,
        config,
        show,
      })
  }, [show])

  const toggleAnimation = () => setshow(!show)

  return (
    <>
      <button onClick={toggleAnimation}>Toggle</button>

      <div ref={divRef} style={{ background: 'lightblue', marginTop: '20px' }}>
        animate me
      </div>
    </>
  )
}

export default Example

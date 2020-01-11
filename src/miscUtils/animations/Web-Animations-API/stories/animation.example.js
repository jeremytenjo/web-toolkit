import React, { useRef, useState } from 'react'

import Animation from '../'

const Example = ({ type }) => {
  const divRef = useRef(null)
  const [show, setshow] = useState(null)

  const toggleAnimation = () => setshow(!show)

  return (
    <>
      <button onClick={toggleAnimation}>Toggle</button>

      <Animation name={type} show={show} el={divRef} />
      <div
        ref={divRef}
        style={{ background: 'lightblue', marginTop: '20px', display: ' none' }}
      >
        animate me
      </div>
    </>
  )
}

export default Example

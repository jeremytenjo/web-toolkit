import React, { useEffect, useState, useRef } from 'react'

const defaultConfig = {
  fill: 'forwards',
  duration: 200,
  direction: 'normal',
  easing: 'ease-out',
}

const AnimationIndex = ({
  name = 'showHide',
  el = null,
  config = defaultConfig,
  show,
  children,
  ...rest
}) => {
  const wrapperRef = useRef(null)
  const element = el || wrapperRef

  const [animation, setAnimation] = useState(null)

  useEffect(() => {
    getFunction()
  }, [])

  useEffect(() => {
    if (show !== null && animation !== null) execAnimation()
  }, [show, animation])

  const execAnimation = () => {
    animation.default({
      el: element.current,
      name,
      config,
      show,
      ...rest,
    })
  }

  const getFunction = async () => {
    const module = await import(`./Types/animation.${name}`)
    setAnimation(module)
  }

  return children ? (
    <div style={{ display: 'none' }} ref={wrapperRef}>
      {children}
    </div>
  ) : null
}

export default AnimationIndex

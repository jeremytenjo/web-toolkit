import React, { useEffect, useState, useRef } from 'react'

const defaultConfig = {
  fill: 'forwards',
  duration: 200,
  direction: 'normal',
  easing: 'ease-out',
}

export default ({
  name = 'showHide',
  el = null,
  config = defaultConfig,
  show,
  children,
  style = {},
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
    const module = await import(`./presets/${name}`)
    setAnimation(module)
  }

  return children ? (
    <div
      style={{ display: 'none', ...style }}
      ref={wrapperRef}
      data-animation-wrapper='wrapper'
    >
      {children}
    </div>
  ) : null
}

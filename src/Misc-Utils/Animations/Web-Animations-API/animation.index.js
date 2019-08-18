import React, { useEffect, useState } from 'react'

const defaultConfig = {
  fill: 'forwards',
  duration: 200,
  direction: 'normal',
  easing: 'ease-out',
}

const AnimationIndex = ({
  name,
  el = null,
  config = defaultConfig,
  show,
  children,
  rest,
}) => {
  const [animation, setAnimation] = useState(null)

  useEffect(() => {
    getFunction()
  }, [])

  useEffect(() => {
    if (show !== null) {
      animation.default({
        el: el.current,
        name,
        config,
        show,
        ...rest,
      })
    }
  }, [show])

  const getFunction = async () => {
    const module = await import(`./Types/animation.${name}`)

    setAnimation(module)
  }

  return <>{children}</>
}

export default AnimationIndex

import React, { memo, useEffect, useState } from 'react'

import { Wrapper } from './illustration.styles'

const Illustration = ({ name }) => {
  const [IconComp, setIconComp] = useState(null)

  const getModule = async () => {
    console.log(name)

    if (name) {
      const module = await import(`./${name}.js`)
      setIconComp(module.default())
    }
  }
  useEffect(() => {
    getModule()
  }, [])

  return <Wrapper>{IconComp}</Wrapper>
}

export default memo(Illustration)

import React, { memo, useState, useEffect } from 'react'

import { WrapperIcon, Wrapper, Label } from './icon.styles'
import { defaultProps, propTypes } from './icon.propTypes'

const Icon = ({
  background,
  name,
  style,
  color,
  onClick,
  size,
  label,
  noBackground,
  dark,
  noBackgroundChange,
  type,
}) => {
  const [IconComp, setIconComp] = useState(null)

  const getModule = async () => {
    if (name) {
      const module = await import(`./${type}/${name}.js`)
      setIconComp(module.default())
    }
  }

  useEffect(() => {
    getModule()
  }, [])

  return (
    <Wrapper>
      <WrapperIcon
        style={style}
        color={color}
        onClick={onClick}
        background={!!background}
        size={size}
        noBackground={noBackground}
        dark={dark}
        noBackgroundChange={noBackgroundChange}
      >
        {IconComp}
      </WrapperIcon>
      {label && <Label> {label} </Label>}
    </Wrapper>
  )
}

Icon.defaultProps = defaultProps
Icon.propTypes = propTypes

export default memo(Icon)

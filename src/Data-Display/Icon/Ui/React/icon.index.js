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
  outlined,
  font,
}) => {
  const [IconComp, setIconComp] = useState(null)

  const getModule = async () => {
    if (name) {
      const module = await import(`./Library/${name}.js`)
      setIconComp(module.default())
    }
  }

  useEffect(() => {
    getModule()
  }, [])

  return (
    <Wrapper label={label}>
      <WrapperIcon
        style={style}
        color={color}
        onClick={onClick}
        background={!!background}
        size={size}
        noBackground={noBackground}
        dark={dark}
        noBackgroundChange={noBackgroundChange}
        outlined={outlined}
      >
        {IconComp}
      </WrapperIcon>
      {label && (
        <Label color={color} font={font}>
          {label}
        </Label>
      )}
    </Wrapper>
  )
}

Icon.defaultProps = defaultProps
Icon.propTypes = propTypes

export default memo(Icon)

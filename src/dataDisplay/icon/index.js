import React, { memo, useState, useEffect, lazy, Fragment, Suspense } from 'react'

import { WrapperIcon, Wrapper } from './icon.styles'
import { defaultProps, propTypes } from './icon.propTypes'

const FileInput = lazy(() =>
  import(/* webpackChunkName: 'FileInput' */ '../../media/files/fileInput.index'),
)
const Typogrgraphy = lazy(() =>
  import(/* webpackChunkName: 'Typogrgraphy' */ '../typography'),
)

const Icon = ({
  background,
  name,
  style,
  color,
  onClick,
  size,
  noBackground,
  dark,
  noBackgroundChange,
  outlined,
  link,
  inputProps,
  backgroundColor,
  plain,
  backgroundSize,
  center,
  router,
  label,
}) => {
  const [IconComp, setIconComp] = useState(null)
  const strokeTypes = ['feather']
  const iconType = name.split('/')[1]
  const isStroke = strokeTypes.includes(iconType)
  const { push } = router

  const getModule = async () => {
    if (name) {
      const module = await import(`./library/${name}.js`)
      setIconComp(module.default())
    }
  }

  useEffect(() => {
    getModule()
  }, [name, label])

  const handleClick = () => {
    link && push(link)
    onClick()
  }
  const WrappingComp = inputProps ? FileInput : Fragment

  return (
    <Suspense fallback={null}>
      <WrappingComp {...inputProps}>
        <Wrapper label={label}>
          <WrapperIcon
            plain={plain}
            style={style}
            color={color}
            onClick={handleClick}
            background={!!background}
            size={size}
            noBackground={noBackground}
            dark={dark}
            noBackgroundChange={noBackgroundChange}
            outlined={outlined}
            backgroundColor={backgroundColor}
            isStroke={isStroke}
            backgroundSize={backgroundSize}
            center={center}
          >
            {IconComp}
          </WrapperIcon>
          {label.text && <Typogrgraphy {...label} />}
        </Wrapper>
      </WrappingComp>
    </Suspense>
  )
}

Icon.defaultProps = defaultProps
Icon.propTypes = propTypes

export default memo(Icon)

import React, {
  memo,
  useState,
  useEffect,
  lazy,
  Fragment,
  Suspense,
} from 'react'

import { WrapperIcon, Wrapper, Label } from './icon.styles'
import { defaultProps, propTypes } from './icon.propTypes'

const FileInput = lazy(() =>
  import(
    /* webpackChunkName: 'ButtonIcon' */ '../../../../../Media/Files/Ui/React/fileInput.index'
  ),
)

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
  link,
  inputProps,
  router,
  backgroundColor,
  plain,
}) => {
  const [IconComp, setIconComp] = useState(null)

  const getModule = async () => {
    if (name) {
      const module = await import(`../Library/${name}.js`)
      setIconComp(module.default())
    }
  }

  useEffect(() => {
    getModule()
  }, [])

  const handleClick = () => {
    link && router(link)
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
          >
            {IconComp}
          </WrapperIcon>
          {label && (
            <Label color={color} font={font}>
              {label}
            </Label>
          )}
        </Wrapper>
      </WrappingComp>
    </Suspense>
  )
}

Icon.defaultProps = defaultProps
Icon.propTypes = propTypes

export default memo(Icon)

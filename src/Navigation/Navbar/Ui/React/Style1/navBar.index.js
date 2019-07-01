import React, { memo, Fragment, useRef } from 'react'

import Background from './navBar.background'
import { Wrapper, IconCon, MainIconCon } from './navBar.styles'
import { defaultProps, propTypes } from './navBar.propTypes'

const NavBar = ({
  data,
  wrapperStyle,
  defaultColor,
  activeColor,
  backgroundColor,
  labelStyle,
  onMainIconClick,
  onFileSelect,
  fontFamily,
  position,
}) => {
  const inputRef = useRef(null)
  const openLink = ({
    currentTarget: {
      dataset: { link },
    },
  }) => window.historyRouter.push(`/${link}`)
  const handleFIleUpload = async (e, file) => {
    const selectedFile = file || inputRef.current.files[0]
    if (typeof selectedFile === 'object') onFileSelect(selectedFile)
  }

  const hasMainIcon = data.some((item) => item.mainIcon === true)

  return (
    <Wrapper
      style={wrapperStyle}
      hasMainIcon={hasMainIcon}
      fontFamily={fontFamily}
      position={position}
    >
      {hasMainIcon && <Background />}
      {data.map(
        ({
          id,
          link,
          svg,
          label,
          mainIcon = null,
          mainIconShadow = null,
          fileInput = null,
        }) => {
          let isFocused = window.location.pathname
          isFocused = isFocused.split('/')
          isFocused = isFocused[1]
          isFocused = isFocused === link
          let color = isFocused ? activeColor : defaultColor

          return !mainIcon ? (
            <Fragment key={id}>
              <IconCon
                data-link={link}
                color={color}
                onClick={fileInput ? () => null : openLink}
                backgroundColor={backgroundColor}
                label={label}
              >
                {svg}
                {label && <span style={labelStyle}>{label}</span>}
                {fileInput && (
                  <input
                    ref={inputRef}
                    type='file'
                    accept='.jpg, .jpeg, .png'
                    onChange={handleFIleUpload}
                  />
                )}
              </IconCon>
            </Fragment>
          ) : (
            <MainIconCon
              activeColor={activeColor}
              mainIconShadow={mainIconShadow}
              onClick={onMainIconClick}
              key={id}
            >
              {svg}
              {fileInput && (
                <input
                  ref={inputRef}
                  type='file'
                  accept='.jpg, .jpeg, .png'
                  onChange={handleFIleUpload}
                />
              )}
            </MainIconCon>
          )
        },
      )}
    </Wrapper>
  )
}

NavBar.defaultProps = defaultProps
NavBar.propTypes = propTypes

export default memo(NavBar)

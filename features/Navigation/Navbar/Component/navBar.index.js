import React, { memo, Fragment } from 'react'

import { Wrapper, IconCon, MainIconCon, Background } from './navBar.styles'
import { defaultProps, propTypes } from './navBar.propTypes'

const NavBar = ({
  data,
  wrapperStyle,
  router,
  defaultColor,
  activeColor,
  backgroundColor,
  labelStyle,
  opacity,
  onMainIconClick,
}) => {
  const openLink = ({
    currentTarget: {
      dataset: { link },
    },
  }) => router(`/${link}`)

  return (
    <Wrapper style={wrapperStyle}>
      <Background opacity={opacity} />
      {data.map(
        ({ id, link, svg, label, mainIcon = null, mainIconShadow = null }) => {
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
                onClick={openLink}
                backgroundColor={backgroundColor}
                label={label}
              >
                {svg}
                {label && <span style={labelStyle}>{label}</span>}
              </IconCon>
            </Fragment>
          ) : (
            <MainIconCon
              activeColor={activeColor}
              mainIconShadow={mainIconShadow}
              onClick={onMainIconClick}
            >
              {svg}
            </MainIconCon>
          )
        },
      )}
    </Wrapper>
  )
}
// PropTypes
NavBar.defaultProps = defaultProps
NavBar.propTypes = propTypes

export default memo(NavBar)

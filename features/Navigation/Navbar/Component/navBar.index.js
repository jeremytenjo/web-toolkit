//Vendors
import React, { memo } from 'react'
import { Wrapper, IconCon } from './navBar.styles'

import { defaultProps, propTypes } from './navBar.propTypes'
// Main
const BottomNav = ({
  data,
  wrapperStyle,
  router,
  defaultColor,
  activeColor,
  backgroundColor,
  labelStyle,
}) => {
  const openLink = ({
    currentTarget: {
      dataset: { link },
    },
  }) => router(`/${link}`)

  return (
    <Wrapper style={wrapperStyle}>
      {data.map(({ id, link, svg, label }) => {
        let isFocused = window.location.pathname
        isFocused = isFocused.split('/')
        isFocused = isFocused[1]
        isFocused = isFocused === link
        let color = isFocused ? activeColor : defaultColor

        return (
          <IconCon
            key={id}
            data-link={link}
            color={color}
            onClick={openLink}
            backgroundColor={backgroundColor}
          >
            {svg}
            <span style={labelStyle}>{label}</span>
          </IconCon>
        )
      })}
    </Wrapper>
  )
}
// PropTypes
BottomNav.defaultProps = defaultProps
BottomNav.propTypes = propTypes

export default memo(BottomNav)

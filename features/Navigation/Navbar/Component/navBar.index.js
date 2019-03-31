//Vendors
import React, { memo, Fragment } from 'react'
import { Wrapper, IconCon, MainIconCon } from './navBar.styles'

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
  MainIcon,
  children,
  onMainIconClick,
}) => {
  const openLink = ({
    currentTarget: {
      dataset: { link },
    },
  }) => router(`/${link}`)
  const dataLength = data.length

  return (
    <Wrapper style={wrapperStyle}>
      {data.map(({ id, link, svg, label }, index) => {
        let isFocused = window.location.pathname
        isFocused = isFocused.split('/')
        isFocused = isFocused[1]
        isFocused = isFocused === link
        let color = isFocused ? activeColor : defaultColor
        const middleIndex = Math.ceil(index / dataLength + 1)
        const isCenter = middleIndex === index

        return (
          <Fragment key={id}>
            {MainIcon ||
              (children && isCenter && (
                <MainIconCon onClick={onMainIconClick}>
                  <MainIcon />
                  {children}
                </MainIconCon>
              ))}
            <IconCon
              data-link={link}
              color={color}
              onClick={openLink}
              backgroundColor={backgroundColor}
            >
              {svg}
              <span style={labelStyle}>{label}</span>
            </IconCon>
          </Fragment>
        )
      })}
    </Wrapper>
  )
}
// PropTypes
BottomNav.defaultProps = defaultProps
BottomNav.propTypes = propTypes

export default memo(BottomNav)

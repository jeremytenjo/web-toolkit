import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Wrapper } from './tabs.base.styles'
import { defaultProps, propTypes } from './tabs.base.propTypes'

const Tabs = ({ Tab, data, color, font, style, pathname }) => {
  const { push } = useHistory()
  const {
    location: { pathname: Lpathname },
  } = useLocation()

  const currentUrl = pathname || Lpathname

  //Template
  return (
    <Wrapper style={{ ...style }} color={color}>
      {data.map(({ label, link }) => {
        const active = currentUrl === link

        return (
          <Tab
            color={color}
            key={label}
            onClick={() => push(link)}
            font={font}
            active={active}
          >
            <span>{label}</span>
          </Tab>
        )
      })}
    </Wrapper>
  )
}

Tabs.defaultProps = defaultProps
Tabs.propTypes = propTypes

export default Tabs

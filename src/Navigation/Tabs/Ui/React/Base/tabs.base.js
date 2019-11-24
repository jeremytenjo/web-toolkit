import React from 'react'

import { Wrapper } from './tabs.base.styles'
import { defaultProps, propTypes } from './tabs.base.propTypes'

const Tabs = ({ Tab, data, color, font, style, pathname, router }) => {
  const { push } = router
  const {
    location: { pathname: Lpathname },
  } = window

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

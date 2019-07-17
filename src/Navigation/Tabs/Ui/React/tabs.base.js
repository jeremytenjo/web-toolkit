import React from 'react'

import { Wrapper } from './tabs.base.styles'
import { defaultProps, propTypes } from './tabs.propTypes'

const Tabs = ({ Tab, data, color, font, style, router, pathname }) => {
  const currentUrl = pathname || window.location.pathname

  //Template
  return (
    <Wrapper style={{ ...style }} color={color}>
      {data.map(({ label, link }) => {
        const active = currentUrl === link

        return (
          <Tab
            color={color}
            key={label}
            onClick={() => router.push(link)}
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

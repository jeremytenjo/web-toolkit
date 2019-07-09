import React from 'react'

import { Wrapper, Link } from './tabs.styles'
import { defaultProps, propTypes } from './tabs.propTypes'

const Tabs = ({ data, color, font, style, router, pathname }) => {
  const historyRouter = router || window.historyRouter
  const currentUrl = pathname || window.location.pathname

  //Template
  return (
    <Wrapper style={{ ...style }} color={color}>
      {data.map(({ label, link }) => {
        console.log(currentUrl)
        console.log(link)
        const isActive = currentUrl === link

        return (
          <Link
            color={color}
            key={label}
            onClick={() => historyRouter.push(link)}
            font={font}
            isActive={isActive}
          >
            <span>{label}</span>
          </Link>
        )
      })}
    </Wrapper>
  )
}

Tabs.defaultProps = defaultProps
Tabs.propTypes = propTypes

export default Tabs

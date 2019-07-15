import React, { memo } from 'react'

import List from '../../../../../Data-Display/List/Ui/React/list.index'
import Icon from '../../../../../Data-Display/Icon/Ui/React/icon.index'

import { defaultProps, propTypes } from './navBar.propTypes'
import { Wrapper, Other } from './navBar.styles'

const NavBar = ({ data, color }) => {
  return (
    <Wrapper>
      <List>
        {data.map(({ icon, label }) => {
          return (
            <Icon
              key={label}
              name={icon}
              label={label}
              color={color}
              noBackground
            >
              gfgfgf
            </Icon>
          )
        })}
      </List>
    </Wrapper>
  )
}

NavBar.defaultProps = defaultProps
NavBar.propTypes = propTypes

export default memo(NavBar)

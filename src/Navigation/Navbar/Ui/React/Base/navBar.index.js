import React, { memo } from 'react'

import List from '../../../../../Data-Display/List/Ui/React/list.index'
import Icon from '../../../../../Data-Display/Icon/Ui/React/icon.index'

import { defaultProps, propTypes } from './navBar.propTypes'
import { Wrapper } from './navBar.styles'

const NavBar = ({ data, color }) => {
  return (
    <Wrapper>
      <List style={{ justifyContent: 'space-around' }}>
        {data.map(({ icon, label, link }) => {
          return (
            <Icon
              key={label}
              name={icon}
              label={label}
              color={color}
              link={link}
              noBackground
            />
          )
        })}
      </List>
    </Wrapper>
  )
}

NavBar.defaultProps = defaultProps
NavBar.propTypes = propTypes

export default memo(NavBar)

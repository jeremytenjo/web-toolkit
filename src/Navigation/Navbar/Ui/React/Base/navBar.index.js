import React, { memo, Fragment } from 'react'

import List from '../../../../../Data-Display/List/Ui/React/list.index'
import Icon from '../../../../../Data-Display/Icon/Ui/React/icon.index'
import Image from '../../../../../Media/Image/Ui/React/image.index'

import { defaultProps, propTypes } from './navBar.propTypes'
import { Wrapper } from './navBar.styles'

const NavBar = ({ data, backgroundColor, color, onInput, router }) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <List
        style={{
          alignItems: 'center',
          justifyItems: 'center',
          gridAutoColumns: '1fr',
        }}
      >
        {data.map(
          (
            {
              file = null,
              src = null,
              icon,
              label,
              link,
              iconColor,
              iconBackgroundColor,
              iconSize,
            },
            index,
          ) => {
            const { location } = router
            const isActive = location === link
            const inputProps = file ? { onInput } : null
            const key = label || link || icon || index

            return (
              <Fragment key={key}>
                {icon && (
                  <Icon
                    name={icon}
                    label={label}
                    color={iconColor ? iconColor : isActive ? color : 'grey'}
                    link={link}
                    size={iconSize}
                    background={iconBackgroundColor}
                    backgroundColor={iconBackgroundColor}
                    inputProps={inputProps}
                  />
                )}

                {src && (
                  <Image
                    src={src}
                    round
                    borderColor={isActive ? color : null}
                    inputProps={inputProps}
                    size={40}
                  />
                )}
              </Fragment>
            )
          },
        )}
      </List>
    </Wrapper>
  )
}

NavBar.defaultProps = defaultProps
NavBar.propTypes = propTypes

export default memo(NavBar)

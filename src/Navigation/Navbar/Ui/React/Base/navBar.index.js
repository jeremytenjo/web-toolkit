import React, { memo } from 'react'

import List from '../../../../../Data-Display/List/Ui/React/list.index'
import Icon from '../../../../../Data-Display/Icon/Ui/React/icon.index'
import Image from '../../../../../Media/Image/Ui/React/image.index'

import { defaultProps, propTypes } from './navBar.propTypes'
import { Wrapper } from './navBar.styles'

const NavBar = ({
  data,
  backgroundColor,
  color,
  onInput,
  router,
  position,
}) => {
  return (
    <Wrapper backgroundColor={backgroundColor} position={position}>
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
              iconPlain = true,
              top,
            },
            index,
          ) => {
            const { location } = router
            const isActive = location === link
            const inputProps = file ? { onInput } : null
            const key = label || link || icon || index
            const isPlain = iconPlain
            const iconPosition = top ? { transform: 'translateY(-30px)' } : null

            return (
              <div key={key} style={iconPosition}>
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
                    plain={isPlain}
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
              </div>
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

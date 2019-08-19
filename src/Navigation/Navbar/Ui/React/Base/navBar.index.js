import React, { memo } from 'react'

import List from '../../../../../Data-Display/List/Ui/React/list.index'
import Icon from '../../../../../Data-Display/Icon/Ui/React/Base/icon.index'
import Avatar from '../../../../../Data-Display/Avatars/avatar.index'

import { defaultProps, propTypes } from './navBar.propTypes'
import { Wrapper } from './navBar.styles'

const NavBar = ({
  data,
  backgroundColor,
  color,
  onInput,
  router,
  position,
  shadow,
}) => {
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      position={position}
      shadow={shadow}
    >
      <List
        padding='none'
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
              top,
              url,
              iconStyles = { plain: true },
            },
            index,
          ) => {
            const {
              location: { pathname },
              history,
            } = router
            const splitUrl = url ? url.split('/')[0] : undefined
            const currentUrl = splitUrl === '/' ? '/' : `/${splitUrl}`
            const splitpathname = pathname ? pathname.split('/')[1] : undefined
            const currentpathname =
              splitpathname === '/' ? '/' : `/${splitpathname}`
            const isActive = currentpathname === currentUrl
            const inputProps = file ? { onInput } : null
            const key = label || currentUrl || icon || index
            const isPlain = iconStyles.plain
            const iconPosition = top ? { transform: 'translateY(-30px)' } : null

            const handleClick = () => url && history.push(`/${url}`)

            console.log(iconStyles)
            return (
              <div key={key} style={iconPosition} onClick={handleClick}>
                {icon && (
                  <Icon
                    name={icon}
                    label={label}
                    color={
                      iconStyles.color
                        ? iconStyles.color
                        : isActive
                        ? color
                        : 'grey'
                    }
                    size={iconStyles.size}
                    background={!!iconStyles.backgroundColor}
                    backgroundColor={iconStyles.backgroundColor}
                    inputProps={inputProps}
                    plain={isPlain}
                    {...iconStyles}
                  />
                )}

                {src && (
                  <Avatar
                    src={src}
                    radius={100}
                    borderColor={isActive && color}
                    paddedBorder
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

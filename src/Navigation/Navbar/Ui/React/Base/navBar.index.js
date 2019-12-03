import React, { memo } from 'react'

import List from '../../../../../Data-Display/List/Ui/React/list.index'
import Icon from '../../../../../Data-Display/Icon/Ui/React/Base/icon.index'
import Avatar from '../../../../../Data-Display/Avatars/avatar.index'
import SearchIcon from '../../../../../Data-Display/Icon/Ui/React/Special/Search/search.index'

import { defaultProps, propTypes } from './navBar.propTypes'
import { Wrapper } from './navBar.styles'

const NavBar = ({
  data,
  onInput,
  onSearchSubmit,
  labelVariant,
  router,
  styles,
}) => {
  return (
    <Wrapper styles={styles}>
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
              search,
            },
            index,
          ) => {
            const {
              history: { push },
              location: { pathname },
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
            const _color = iconStyles.color
              ? iconStyles.color
              : isActive
              ? styles.colors
              : 'grey'

            const handleClick = () => {
              url && push(`/${url}`)
            }

            return (
              <div key={key} style={iconPosition} onClick={handleClick}>
                {search ? (
                  <SearchIcon
                    onSubmit={onSearchSubmit}
                    icon={icon}
                    iconStyles={iconStyles}
                  />
                ) : icon ? (
                  <Icon
                    name={icon}
                    label={label}
                    color={_color}
                    labelColor={_color}
                    labelVariant={labelVariant}
                    size={iconStyles.size}
                    background={!!iconStyles.backgroundColor}
                    backgroundColor={iconStyles.backgroundColor}
                    inputProps={inputProps}
                    plain={isPlain}
                    center
                    {...iconStyles}
                  />
                ) : null}

                {src && (
                  <Avatar
                    src={src}
                    radius={100}
                    borderColor={isActive && styles.color}
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

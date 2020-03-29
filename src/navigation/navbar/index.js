import React, { memo } from 'react'

import List from '../../dataDisplay/list'
import Icon from '../../dataDisplay/icon'
import Avatar from '../../dataDisplay/avatars'
import SearchIcon from '../../dataDisplay/icon/special/search/index'

import { defaultProps, propTypes } from './propTypes'
import { Wrapper } from './styles'

const NavBar = ({ data, onInput, onSearchSubmit, router, styles }) => {
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
              label = {},
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
            const currentpathname = splitpathname === '/' ? '/' : `/${splitpathname}`
            const isActive = currentpathname === currentUrl
            const inputProps = file ? { onInput } : null
            const key = label.text || icon || currentUrl || index
            const iconPosition = top ? { transform: 'translateY(-30px)' } : null
            const _color = iconStyles.color
              ? iconStyles.color
              : isActive
              ? styles.color || 'primary'
              : 'grey'

            const { styles: labelSyles, variant: labelVariant = 'navbar' } = label
            const labelProps = {
              ...label,
              variant: labelVariant,
              styles: { ...labelSyles, color: _color },
            }

            const handleClick = () => {
              url && push(`/${url}`)
            }

            return (
              <div key={key} style={iconPosition} onClick={handleClick}>
                {search ? (
                  <SearchIcon onSubmit={onSearchSubmit} icon={icon} styles={iconStyles} />
                ) : icon ? (
                  <Icon
                    name={icon}
                    color={_color}
                    label={labelProps}
                    inputProps={inputProps}
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
                    size='40px'
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

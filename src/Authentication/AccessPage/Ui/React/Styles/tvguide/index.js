import React, { memo, useState, Fragment } from 'react'

import Typography from '../../../../../../Data-Display/Typography/Ui/React/typography.index'
import Drawer from '../../../../../../Feedback/Drawer/UI/React/drawer.index'
import Box from '../../../../../../Data-Display/Box/Ui/React/box.index'
import Icon from '../../../../../../Data-Display/Icon/Ui/React/Base/icon.index'
import { defaultProps, propTypes } from '../../Base/accessPage.propTypes'

const AccessPageTvGuide = ({
  show,
  onSuccess,
  onError,
  providers,
  onClose,
  service,
  typographyVariant,
}) => {
  const [error, seterror] = useState(null)
  const handleLogin = async (provider) => {
    try {
      const { default: func } = await import(
        `../../../../../Functions/${service}/auth.social`
      )
      const { error, accessToken, user } = await func({ provider })
      if (user) onSuccess({ accessToken, user })
      else seterror(error.errorMessage)
    } catch (error) {
      onError(error)
      seterror(error.errorMessage)
    }
  }
  return (
    <Drawer open={show} position='bottom' onClose={onClose}>
      <Box styles={{ padding: 'm', justifyContent: 'center', gridGap: 's' }}>
        <Typography
          text='Sign In'
          variant={typographyVariant}
          styles={{ textAlign: 'center', fontWeight: 'bold' }}
        />
        <Box
          styles={{
            padding: 'none',
            gridAutoFlow: 'column',
            justifyContent: 'center',
            gridGap: 'm',
          }}
        >
          {providers.map((prov) => {
            return (
              <Fragment key={prov}>
                <Icon
                  onClick={() => handleLogin(prov)}
                  name={`${prov}/logo`}
                  size={60}
                  style={{
                    boxShadow: ' 0px 1px 4px rgba(0, 0, 0, 0.25)',
                    padding: '17px',
                  }}
                />
              </Fragment>
            )
          })}
        </Box>
        {error && <Typography text={error} variant='body2' styles={{ color: 'red' }} />}
      </Box>
    </Drawer>
  )
}

AccessPageTvGuide.defaultProps = defaultProps
AccessPageTvGuide.propTypes = propTypes

export default memo(AccessPageTvGuide)

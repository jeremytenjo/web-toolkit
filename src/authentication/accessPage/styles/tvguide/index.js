import React, { memo, useState, Fragment } from 'react'

import Typography from '../../../../dataDisplay/typography'
import Drawer from '../../../../feedback/drawer'
import Box from '../../../../dataDisplay/box'
import Icon from '../../../../dataDisplay/icon'
import { defaultProps, propTypes } from '../../propTypes'
import Animation from '../../../../utils/animations/wap'

const AccessPageTvGuide = ({
  user,
  onSuccess,
  onError,
  providers,
  onClose,
  service,
  typographyVariant,
}) => {
  const userIsSignedin = user === null ? null : !user
  const [error, seterror] = useState(null)
  const [loading, setLoading] = useState(null)

  const handleLogin = async (provider) => {
    try {
      setLoading(true)
      const { default: func } = await import(`../../../functions/${service}/auth.social`)
      const { error, accessToken, user } = await func({ provider })
      if (user) onSuccess({ accessToken, user })
      else seterror(error.errorMessage)
    } catch (error) {
      onError(error)
      seterror(error.errorMessage)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Drawer open={userIsSignedin} position='bottom' onClose={onClose}>
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
                  size='20px'
                  style={{
                    boxShadow: ' 0px 1px 4px rgba(0, 0, 0, 0.25)',
                    padding: '17px',
                  }}
                />
              </Fragment>
            )
          })}
        </Box>
        {error && (
          <Typography
            text={error}
            variant='body2'
            styles={{ color: 'red', textAlign: 'center' }}
          />
        )}
        <Animation show={loading}>
          <Typography
            text='Loading...'
            variant='body2'
            styles={{ color: 'green', textAlign: 'center' }}
          />
        </Animation>
      </Box>
    </Drawer>
  )
}

AccessPageTvGuide.defaultProps = defaultProps
AccessPageTvGuide.propTypes = propTypes

export default memo(AccessPageTvGuide)

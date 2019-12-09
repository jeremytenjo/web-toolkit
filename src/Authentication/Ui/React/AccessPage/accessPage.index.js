import React, { memo, useState, useRef } from 'react'

import Animation from '../../../../Misc-Utils/Animations/Web-Animations-API/animation.index'
import capitalize from '../../../../Misc-Utils/String/capitalize.index'
import Box from '../../../../Data-Display/Box/Ui/React/box.index'
import Image from '../../../../Media/Image/Ui/React/image.index'
import Typography from '../../../../Data-Display/Typography/Ui/React/typography.index'
import Icon from '../../../../Data-Display/Icon/Ui/React/Base/icon.index'

import { defaultProps, propTypes } from './accessPage.propTypes'

const AccessPage = ({ onSuccess, logo, name, desc, service, providers }) => {
  const errorRef = useRef(null)
  const [errMessage, setErrMessage] = useState(null)

  const handleClick = async (provider) => {
    const capProvider = capitalize(service)
    let res = await import(`../../../Functions/${capProvider}/auth.social`)
    const { token, user, error } = await res.default(provider)
    if (error) return setErrMessage(error.errorMessage)
    onSuccess({ token, user })

    // If new user - add to crecential manager

    // if user exists - load from credential manager
  }

  return (
    <Box
      name='access_wrapper'
      backgroundColor={['white', 'primary']}
      height='100%'
      padding='none'
    >
      <Box
        name='access_inner_wrapper'
        styles={{
          padding: 'none',
          paddingTop: 'xxl',
          paddingBottom: 'xxl',
          alignContent: 'space-between',
          backgroundColor: 'white',
        }}
      >
        <Box
          name='Info'
          styles={{ justifyItems: 'center', textAlign: 'center', height: 'fit-content' }}
        >
          <Image src={logo} size={93} />
          <Typography text={name} color='primary' />
          <Typography text={desc} />
        </Box>

        <Box
          name='providers'
          styles={{
            alignItems: 'center',
            textAlign: 'center',
            height: 'fit-content',
            gridGap: 'm',
          }}
        >
          <Typography text='Continue with' />
          <Box
            name='providers_list'
            styles={{ gridAutoFlow: 'column', justifyContent: 'center', gridGap: 'xl' }}
          >
            {providers.map((p) => (
              <Icon
                key={p}
                boxShadow='0px 1px 4px rgba(0, 0, 0, 0.25)'
                style={{ boxShadow: ' 0px 1px 4px rgba(0, 0, 0, 0.25)' }}
                backgroundColor='white'
                name={`${p}/logo`}
                backgroundSize={65}
                size={23}
                onClick={() => handleClick(p)}
              />
            ))}
          </Box>

          <Animation name='showHide' show={errMessage} el={errorRef} />
          <div ref={errorRef}>
            <Typography text={errMessage} variant='body2' color='error' />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

AccessPage.defaultProps = defaultProps
AccessPage.propTypes = propTypes

export default memo(AccessPage)

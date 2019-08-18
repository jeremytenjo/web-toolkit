import React, { memo } from 'react'

import capitalize from '../../../../Misc-Utils/String/capitalize.index'
import Box from '../../../../Data-Display/Box/Ui/React/box.index'
import Image from '../../../../Media/Image/Ui/React/image.index'
import Typography from '../../../../Data-Display/Typography/Ui/React/typography.index'
import Icon from '../../../../Data-Display/Icon/Ui/React/Base/icon.index'

import { defaultProps, propTypes } from './accessPage.propTypes'

const AccessPage = ({
  variation,
  onSuccess,
  logo,
  name,
  desc,
  service,
  providers,
}) => {
  const handleClick = async (provider) => {
    const capProder = capitalize(service)
    let res = await import(`../../../Functions/${capProder}/auth.${provider}`)
    res = res.default()
    console.log(res)
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
        padding='none'
        paddingTop='xxl'
        paddingBottom='xxl'
        alignContent='space-between'
        backgroundColor='white'
      >
        <Box
          name='Info'
          justifyItems='center'
          textAlign='center'
          height='fit-content'
        >
          <Image src={logo} size={93} />
          <Typography text={name} color='primary' />
          <Typography text={desc} />
        </Box>

        <Box
          name='providers'
          alignItems='center'
          textAlign='center'
          height='fit-content'
          gridGap='m'
        >
          <Typography text='Continue with' />
          <Box
            name='providers_list'
            gridAutoFlow='column'
            justifyContent='center'
            gridGap='xl'
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
        </Box>
      </Box>
    </Box>
  )
}

AccessPage.defaultProps = defaultProps
AccessPage.propTypes = propTypes

export default memo(AccessPage)

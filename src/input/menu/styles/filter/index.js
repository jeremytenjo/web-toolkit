import React, { useState, memo } from 'react'

import Typography from '../../../../dataDisplay/typography/'
import Animation from '../../../../utils/animations/wap/index'
import Overlay from '../../../../utils/overlay/index'
import Icon from '../../../../dataDisplay/icon/index'
import Box from '../../../../dataDisplay/box/index'
import { defaultProps, propTypes } from '../../propTypes'

import styles from './styles'

const Menu = ({ iconProps, iconWrapperStyles }) => {
  const [show, setShow] = useState(null)
  const iconName = !show ? 'filter/1' : 'close/material'

  return (
    <>
      <Box styles={{ ...styles.icon, ...iconWrapperStyles }}>
        <Icon
          name={iconName}
          size={56}
          backgroundColor='primary'
          dark
          background
          color='primary'
          onClick={() => setShow(!show)}
          {...iconProps}
        />
      </Box>

      <Animation show={show} name='outmostIn' style={styles.animationBox}>
        <Box styles={styles.filterBox}>
          <Typography text='Filter By' styles={styles.filterBox.title} />
        </Box>
      </Animation>

      <Overlay show={show} backgroundcolor='primary' onClick={() => setShow(false)} />
    </>
  )
}

Menu.defaultProps = defaultProps
Menu.propTypes = propTypes

export default memo(Menu)

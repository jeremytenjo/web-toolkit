import React, { memo } from 'react'
import Box from '@tenjojeremy/web-toolkit/dataDisplay/box'
import Typography from '@tenjojeremy/web-toolkit/dataDisplay/typography'

const Home = () => {
  return (
    <Box
      fullscreen
      styles={{ alignCenter: 'center', alignContent: 'center', justifyContent: 'center' }}
    >
      <Box>
        <Typography text='Wapp' />
      </Box>
    </Box>
  )
}

export default memo(Home)

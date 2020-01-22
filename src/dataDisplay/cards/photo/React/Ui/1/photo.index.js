import React, { memo } from 'react'

import List from '../../../../../list'
import Image from '../../../../../../media/image'
import IconBack from '../../../../../icon/special/back'
import Menu from '../../../../../../input/menu/styles/material'
import Donut from '../../../../../../feedback/progress/donut'
import Chip from '../../../../../chip'
import LikeButton from '../../../../../icon/special/like'
import Box from '../../../../../box'

import { Wrapper, TopRow, ImageCon, donutStyle, LikeIconCon } from './photo.styles'
import { defaultProps } from './photo.propTypes'

const CardPhoto = ({
  photoUrl,
  onTagClick,
  onGoBack,
  goBackUrl,
  menuOptions,
  onMenuOptionSelect,
  children,
  likeable,
  liked,
  onLike,
  onUnlike,
  style,
}) => {
  const goBack = () => onGoBack()
  const handleOnLike = () => onLike()
  const handleOnUnlike = () => onUnlike()

  //Template
  return (
    <Wrapper style={style}>
      <Box styles={TopRow}>
        <IconBack to={goBackUrl} onGoBack={goBack} />
        {menuOptions.length > 0 && (
          <Menu options={menuOptions} onSelect={onMenuOptionSelect} />
        )}
      </Box>
      <ImageCon>
        {photoUrl ? (
          <Image src={photoUrl} cursor='default' position='top' width='100%' />
        ) : (
          <Donut style={donutStyle} />
        )}
        {likeable && (
          <LikeIconCon>
            <LikeButton liked={liked} onLike={handleOnLike} onUnlike={handleOnUnlike} />
          </LikeIconCon>
        )}
      </ImageCon>
      {children}
    </Wrapper>
  )
}

CardPhoto.defaultProps = defaultProps

export default memo(CardPhoto)

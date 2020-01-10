import React, { memo } from 'react'

import List from '../../../../../List/Ui/React/list.index'
import Image from '../../../../../../Media/Image/Ui/React/image.index'
import IconBack from '../../../../../Icon/Ui/React/Special/Back/back.index'
import Menu from '../../../../../../Input/Menu/menu.index'
import Donut from '../../../../../../Feedback/Progress/Ui/React/donut'
import Chip from '../../../../../Chip/Ui/React/chip.index'
import LikeButton from '../../../../../Icon/Ui/React/Special/Like/like.index'
import Box from '../../../../../Box/Ui/React'

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

import React, { memo } from 'react'

import List from '../../List/Ui/React/list.index'
import Image from '../../../Media/Image/Ui/React/image.index'
// import IconBack from '../../Icons/Functional/Back/back.index'
import Menu from '../../../Input/Menu/menu.index'
import Donut from '../../../Feedback/Progress/Ui/React/Donut/donutIndex'
import Chip from '../../Chip/Ui/React/chip.index'
// import LikeButton from '../../Icons/Functional/Like/like.index'

import {
  Wrapper,
  IconRow,
  ImageCon,
  donutStyle,
  LikeIconCon,
} from './photo.styles'
import { defaultProps } from './photo.propTypes'

const CardPhoto = ({
  photoUrl,
  onTagClick,
  onGoBack,
  goBackUrl,
  menuOptions,
  onMenuOptionSelect,
  children,
  tags,
  likeable,
  liked,
  onLike,
  onUnlike,
}) => {
  const goBack = () => onGoBack()
  const handleOnLike = () => onLike()
  const handleOnUnlike = () => onUnlike()

  //Template
  return (
    <Wrapper>
      <IconRow>
        {/* <IconBack to={goBackUrl} onGoBack={goBack} />
        {menuOptions.length > 0 && (
          <Menu options={menuOptions} onSelect={onMenuOptionSelect} />
        )} */}
      </IconRow>
      <ImageCon>
        {photoUrl ? (
          <Image src={photoUrl} cursor='default' position='top' />
        ) : (
          <Donut style={donutStyle} />
        )}
        {likeable && (
          <LikeIconCon>
            {/* <LikeButton
              liked={liked}
              onLike={handleOnLike}
              onUnlike={handleOnUnlike}
            /> */}
          </LikeIconCon>
        )}
      </ImageCon>

      <List
        overflow
        autoColumns
        data={tags}
        type='horizontal'
        ItemComponent={({ item, onClick }) => (
          <Chip noCancel text={item} onClick={onClick} />
        )}
        onItemClick={onTagClick}
      />

      {children}
    </Wrapper>
  )
}

CardPhoto.defaultProps = defaultProps

export default memo(CardPhoto)

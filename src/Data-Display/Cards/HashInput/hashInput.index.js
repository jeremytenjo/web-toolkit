import React from 'react'

import Avatar from '../../Avatars/avatar.index'
import Rating from '../../../Feedback/Rating/Ui/React/ratings.index'
import Button from '../../../Input/Button/Ui/React/Styles/Style1/button.style1.index'

import { defaultProps, propTypes } from './hashInput.propTypes'
import {
  Wrapper,
  Info,
  City,
  Name,
  ButtonCon,
  AvatarInfoCOn,
} from './hashInput.styles'

{
  /* <List
              itemComponent={Chip}
              type={tagListType}
              data={cardTags}
              onItemClick={removeTag}
              padding={10}
              gap={10}
            />
            <TagInput onTagAddition={addTag} /> */
}
const HashInput = ({
  name,
  rating,
  city,
  onContactClick,
  onAvatarClick,
  photoUrl,
}) => (
  <Wrapper>
    <AvatarInfoCOn>
      <Avatar photoUrl={photoUrl} name={name} onClick={onAvatarClick} />
      <Info>
        <Name>{name}</Name>
        <Rating rating={rating} starDimension='15px' />
        <City>{city}</City>
      </Info>
    </AvatarInfoCOn>
    <ButtonCon>
      <Button onClick={onContactClick} text='Contact' />
    </ButtonCon>
  </Wrapper>
)

HashInput.defaultProps = defaultProps
HashInput.propTypes = propTypes

export default HashInput

import React from 'react'

import Icon from '../../../icon'
import Avatar from '../../../avatars'
import Rating from '../../../../feedback/rating'
import Button from '../../../../input/button/styles/1'

import { defaultProps, propTypes } from './propTypes'
import { Wrapper, Info, City, Name, ButtonCon, AvatarInfoCOn } from './styles'

const Contact = ({
  name,
  rating,
  city,
  onContactClick,
  onAvatarClick,
  photoUrl,
  onChatBtnClick,
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
      <Button onClick={onContactClick} text='Book' />
      <Icon name='comment/material' onCLick={onChatBtnClick} color='primary' dark />
    </ButtonCon>
  </Wrapper>
)

Contact.defaultProps = defaultProps
Contact.propTypes = propTypes

export default Contact

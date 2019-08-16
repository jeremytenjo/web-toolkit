import React, { memo } from 'react'

import Icon from '../../../../../Icon/Ui/React/Base/icon.index'
import StarsRating from '../../../../../../Feedback/Rating/Ui/React/ratings.index'
import Typography from '../../../../../Typography/Ui/React/typography.index'
import Avatar from '../../../../../Avatars/avatar.index'

import {
  Wrapper,
  ContactIcons,
  InfoCon,
  Rating,
  Location,
  LocationIcons,
  NumReview,
} from './details.styles'
import { defaultProps, propTypes } from './details.propTypes'

const DetailsCard = ({ photoURL, name, rating, location }) => {
  // Global State
  const reviewsLength = 65

  return (
    <Wrapper>
      <Avatar name={name} photoUrl={photoURL} size={120} />

      <InfoCon>
        <Typography variant='h6' text={name} />
        <Rating onClick={() => console.log('open review')}>
          <StarsRating
            count={5}
            value={rating}
            size={17}
            color1={'#EEEEEE'}
            color2={'#ffd700'}
            edit={false}
          />
        </Rating>
        <NumReview>
          <span> {reviewsLength}</span> Reviews
        </NumReview>
        <LocationIcons>
          <Location>{location} </Location>
          <ContactIcons>
            <Icon name='phone/material' color='primary' />
            <Icon name='message/1' color='primary' />
          </ContactIcons>
        </LocationIcons>
      </InfoCon>
    </Wrapper>
  )
}
DetailsCard.defaultProps = defaultProps
DetailsCard.propTypes = propTypes

export default memo(DetailsCard)

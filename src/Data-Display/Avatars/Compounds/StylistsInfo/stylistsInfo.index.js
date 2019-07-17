import React, { memo } from 'react'

import Avatar from '../../avatar.index'
import Rating from '../../../../Feedback/Rating/Ui/React/ratings.index'

import { defaultProps, propTypes } from './stylistsInfo.propTypes'
import { Wrapper, StylistName } from './stylistsInfo.styles'

const StylistsInfo = ({ name, rating, onClick, photoUrl, router }) => {
  const size = 120
  // Functions
  const redirect = () => {
    // router(`/stylists/${id}`)
    onClick()
  }

  return (
    <Wrapper onClick={redirect} width={120}>
      <Avatar
        name={name}
        rating={rating}
        photoUrl={photoUrl}
        radius={10}
        size={size}
      />
      <StylistName>{name}</StylistName>
      <Rating value={rating} starDimension='16' starSpacing='1' />
    </Wrapper>
  )
}

StylistsInfo.defaultProps = defaultProps
StylistsInfo.propTypes = propTypes

export default memo(StylistsInfo)

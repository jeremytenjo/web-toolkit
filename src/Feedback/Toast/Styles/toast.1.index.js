import React from 'react'
import styled from 'styled-components'

import Icon from '../../../Data-Display/Icon/Ui/React/Base/icon.index'

export const Wrapper = styled.div`
  img {
    width: 20px;
    height: 20px;
  }
`

export default ({
  background = 'black',
  foreground = 'white',
  message = 'message',
  iconName = 'checkmark/1',
  display = 'none',
}) => (
  <Wrapper background={background} foreground={foreground} display={display}>
    <Icon name={iconName} plain />
    {message}
  </Wrapper>
)

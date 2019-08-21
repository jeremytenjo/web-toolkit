import React from 'react'
import styled from 'styled-components'

import Icon from '../../../Data-Display/Icon/Ui/React/Base/icon.index'

export const Wrapper = styled.div`
  background: ${({ background }) => `var(--color-${background})`};
  color: ${({ foreground }) => `var(--color-${foreground})`};
  z-index: 999;
  border-radius: 100px;
  width: fit-content;
  max-width: 300px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  padding: var(--spacing-s) var(--spacing-m);
  grid-gap: var(--spacing-s);
  user-select: none;

  * {
    cursor: auto;
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    font-family: ${({ font }) => `var(--font-${font})`};
    text-align: left;
    font-weight: 100;
    font-size: 14px;
    white-space: nowrap;
  }
`

export default ({
  type = 'success',
  background = 'black',
  foreground = 'white',
  message = 'message',
  iconName = 'checkmark/1',
  display = 'none',
  font = 'primary',
}) => (
  <Wrapper
    background={background}
    foreground={foreground}
    display={display}
    font={font}
  >
    <Icon name={iconName} plain />
    <span> {message}</span>
  </Wrapper>
)

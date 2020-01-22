import React from 'react'
import styled from 'styled-components'

import Button from '../../'
import { BaseWrapper, BaseButton, BaseLoadingCon } from '../base'

const Wrapper = styled(BaseWrapper)``

const ButtonInner = styled(BaseButton)`
  ${({ activeColor, disabled, matchesUrl }) => `
  background-color: ${matchesUrl && !disabled && `var(--color-${activeColor})`};
  border-color: ${matchesUrl && !disabled && `var(--color-${activeColor})`};
  border-radius: 0 50px 50px 0;
  width: 200px;
  justify-content: start;
  grid-gap: 20px;

  :hover {
    background-color: ${!disabled && activeColor};
    border-color: ${!disabled && activeColor};
  };
`}

  div[data-name="icon-wrapper"] {
    grid-column-end: -1;
  }
`

const LoadingCon = styled(BaseLoadingCon)`
  border-radius: 0 50px 50px 0;
`

export default (props) => (
  <Button
    Wrapper={Wrapper}
    ButtonInner={ButtonInner}
    LoadingCon={LoadingCon}
    {...props}
  />
)

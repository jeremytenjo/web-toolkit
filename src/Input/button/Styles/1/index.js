import React from 'react'
import styled from 'styled-components'

import Button from '../../'
import { BaseWrapper, BaseButton, BaseLoadingCon } from '../base'

const Wrapper = styled(BaseWrapper)``

const StyledButton = styled(BaseButton)`
  ${({ isActive, activeColor, backgroundColor, foregroundColor }) => `
  transition: 0.2s;
  user-select: none;
  background-color: ${isActive} ? ${activeColor} : ${backgroundColor};
  color: ${foregroundColor};
  padding: var(-spacing-s);
  padding-left: var(-spacing-m);
  grid-gap: var(-spacing-s);
  display: grid;
  grid-auto-flow: column;
  border-radius: 0 50px 50px 0;
  cursor: pointer;
  width: 200px;
  justify-content: start;

  :hover {
    background-color: ${activeColor};
  };
`}
`

const LoadingCon = styled(BaseLoadingCon)`
  border-radius: 0 50px 50px 0;
`

export default (props) => (
  <Button
    Wrapper={Wrapper}
    StyledButton={StyledButton}
    LoadingCon={LoadingCon}
    {...props}
  />
)

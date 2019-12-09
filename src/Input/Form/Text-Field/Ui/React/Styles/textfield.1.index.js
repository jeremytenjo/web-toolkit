import React from 'react'
import styled from 'styled-components'

import TextField from '../Base/textField.base'

const Wrapper = styled.div`
  transition: .2s;
  background-color: ${({ backgroundColor }) => `var(--color-${backgroundColor})`};
  color: ${({ textColor }) => `var(--color-${textColor})`};
  border-radius: 10px;
  padding: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  width: ${({ width }) => width};
  border: 2px solid transparent;

  img {
    color: ${({ color }) => `var(--color-${color})`};
    cursor: pointer;
  }

  /* Round */
  ${({ round }) => round && ` border-radius: 100px;`}

    /* Focused */
  ${({ isFocused, foregroundColor }) =>
    isFocused && `border: 2px solid var(--color-${foregroundColor});`}

    svg {
    fill: ${({ foregroundColor }) => `var(--color-${foregroundColor})`};
  }

    /* isValid */
  ${({ isValid }) => !isValid && `border: 2px solid var(--color-red);`}  

`

const Input = styled.input`
  ::placeholder {
    opacity: 0.5;
    color: ${({ color }) => `var(--color-${color}-darker)`};
  }

  color: ${({ color }) => `var(--color-${color}-darker)`};
  font-family: ${({ font }) => `var(--font-${font})`};
  font-size: 16px;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
`

const IconLeftCon = styled.div`
  margin-right: 5px;
`
const IconRightCon = styled.div`
  margin-left: 10px;
`

const InputCon = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: var(--spacing-xs);
  position: relative;
`

const CloseIconCon = styled.div`
  display: flex;
  align-items: center;
  svg {
    fill: ${({ textColor }) => `var(--color-${textColor})`};
  }
`

export default (props) => (
  <>
    <TextField
      Wrapper={Wrapper}
      Input={Input}
      IconLeftCon={IconLeftCon}
      IconRightCon={IconRightCon}
      InputCon={InputCon}
      CloseIconCon={CloseIconCon}
      {...props}
    />
  </>
)

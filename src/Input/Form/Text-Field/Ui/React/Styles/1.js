import React from 'react'
import styled from 'styled-components'

import TextField from '../textField.index'

const Wrapper = styled.div`
  transition: .2s;
  background-color: ${({ color }) => `var(--color-${color}-background)`};
  color: ${({ color }) => `var(--color-${color}-darker)`};
  border-radius: 10px;
  padding: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  width: ${({ width }) => width};
  border: 2px solid var(--color-${({ color }) => color}-background);

  img {
    color: ${({ color }) => `var(--color-${color})`};
    cursor: pointer;
  }

  /* Round */
  ${({ round }) => round && ` border-radius: 100px;`}

    /* Focused */
  ${({ isFocused, color }) =>
    isFocused && `border: 2px solid var(--color-${color}-darker);`}

    svg {
    fill: ${({ color }) => `var(--color-${color}-darker)`};
  }

`

const Input = styled.input`
  ::placeholder {
    opacity: 0.5;
    color: ${({ color }) => `var(--color-${color}-darker)`};
  }

  color: ${({ color }) => `var(--color-${color}-darker)`};
  font-family: var(--font-secondary);
  font-size: 16px;
  font-weight: bold;
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

export default (props) => (
  <>
    <TextField
      Wrapper={Wrapper}
      Input={Input}
      IconLeftCon={IconLeftCon}
      IconRightCon={IconRightCon}
      InputCon={InputCon}
      {...props}
    />
  </>
)

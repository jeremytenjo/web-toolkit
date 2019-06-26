import styled from 'styled-components'

export const Wrapper = styled.div`
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

export const Input = styled.input`
  ::placeholder {
    opacity: 0.5;
    color: ${({ color }) => `var(--color-${color}-darker)`};
  }

  color: ${({ color }) => `var(--color-${color}-darker)`};
  user-select: none;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
`

export const IconLeftCon = styled.div`
  margin-right: 5px;
`
export const IconRightCon = styled.div`
  margin-left: 10px;
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  div {
    border-radius: 9px;
    transition: 0.2s;
    transition-timing-function: ease-in-out;

    &:active {
      transform: scale(0.6);
    }
  }
`

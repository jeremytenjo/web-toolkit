import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  /* No src */
  ${({ src, backgroundColor, loading }) =>
    (!src || loading) &&
    `
    display: flex !important;
    align-items: center;
    justify-content: center;
    background-color: var(--color-${backgroundColor});
    border-radius: 9px;
  `}

  div {
    border-radius: 9px;
    transition: 0.2s;
    transition-timing-function: ease-in-out;

    &:active {
      transform: scale(0.6);
    }
  }
`

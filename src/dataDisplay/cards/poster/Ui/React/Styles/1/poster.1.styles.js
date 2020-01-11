import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  word-break: break-word;
  overflow-y: auto;

  /* No src */
  ${({ src, backgroundColor, isLoading }) =>
    (!src || isLoading) &&
    `
    display: flex !important;
    align-items: center;
    justify-content: center;
    background-color: var(--color-${backgroundColor});
    border-radius: 9px;
    padding: var(--spacing-s);
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

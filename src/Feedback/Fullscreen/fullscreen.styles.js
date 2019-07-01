import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 8;
  width: fit-content;
  margin: 0 auto;
  align-items: stretch;
  align-content: stretch;
  width: 100%;

  @media (min-width: 600px) {
    box-shadow: var(--boxShadow-2);
    top: 50px;
    bottom: 50px;
    width: fit-content;
  }
`

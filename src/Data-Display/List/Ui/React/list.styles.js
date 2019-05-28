import styled from 'styled-components'

export const Wrapper = styled.div`
  /* Shared */
  transition: 0.2s;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  display: grid;
  padding: ${({ padding }) => padding && `var(--spacing-${padding})`};
  grid-gap: ${({ padding }) => padding && `var(--spacing-${padding})`};
  grid-auto-flow: ${({ direction }) => direction && direction};
`

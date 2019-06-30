import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  padding: ${({ padding }) => `0 var(--spacing-${padding})`};
`

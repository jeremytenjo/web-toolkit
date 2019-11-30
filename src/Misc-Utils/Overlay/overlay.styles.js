import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ backgroundcolor }) =>
    `var(--color-${backgroundcolor}Opaque)`};
  display: ${({ noAnimation }) => (noAnimation ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ zIndex }) => zIndex};
`

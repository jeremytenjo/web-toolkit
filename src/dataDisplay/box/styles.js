import styled from 'styled-components'

import system from '../../theme/system'

export const Wrapper = styled.div`
  ${system}

  ${({ size }) =>
    size &&
    `
  width: ${size}px;
  height: ${size}px;
  `}

  ${({ fullscreen }) =>
    fullscreen &&
    `
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  `}
  
  ${({ sticky }) =>
    sticky &&
    `
    top: 0; 
    position: sticky; 
  `}
`

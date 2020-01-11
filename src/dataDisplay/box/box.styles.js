import styled from 'styled-components'

import system from '../../../../Theme/System/React/system.index'

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
`

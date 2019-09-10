import styled from 'styled-components'

import withMediaQueries from '../../../../Theme/MediaQuery/WithMediaQueries/withMediaQueries.index'

export const Wrapper = styled.div`
  ${({ mediaQueries, ...styles }) => withMediaQueries({ styles, mediaQueries })}
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

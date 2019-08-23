import styled from 'styled-components'

import Position from '../../../../../Misc-Utils/Position/position.index'
import withMediaQueries from '../../../../../Theme/MediaQuery/WithMediaQueries/withMediaQueries.index'

export const Wrapper = styled.div`
  background: ${({ backgroundColor }) => `var(--color-${backgroundColor})`};
  ${({ position }) => position && Position({ position })}
  box-shadow: ${({ shadow }) => `var(--boxShadow-${shadow})`};
  ${({ mediaQueries, ...styles }) => withMediaQueries({ styles, mediaQueries })}

`

export const Other = styled.span``

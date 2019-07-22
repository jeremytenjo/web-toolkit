import styled from 'styled-components'

import Position from '../../../../../Misc-Utils/Position/position.index'

export const Wrapper = styled.div`
  background: ${({ backgroundColor }) => `var(--color-${backgroundColor})`};
  ${({ position }) => position && Position({ position })}
  box-shadow: var(--boxShadow-2);
`

export const Other = styled.span``

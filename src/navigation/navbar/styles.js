import styled from 'styled-components'

import Position from '../../utils/position/position.index'
import system from '../../theme/system'

export const Wrapper = styled.div`
  ${system}
  ${({ position }) => position && Position({ position })}
`

export const Other = styled.span``

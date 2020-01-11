import styled from 'styled-components'

import Position from '../../../miscUtils/position/position.index'
import system from '../../../theme/system/system.index'

export const Wrapper = styled.div`
  ${system}
  ${({ position }) => position && Position({ position })}
`

export const Other = styled.span``

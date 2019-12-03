import styled from 'styled-components'

import Position from '../../../../../Misc-Utils/Position/position.index'
import system from '../../../../../Theme/System/system.index'

export const Wrapper = styled.div`
  ${system}
  ${({ position }) => position && Position({ position })}
`

export const Other = styled.span``

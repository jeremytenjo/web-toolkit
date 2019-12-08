import React from 'react'
import styled from 'styled-components'

import system from '../system.index'

const Wrapper = styled.div`
  ${system}
`

export default () => <Wrapper styles={{ color: ['primary', 'secondary'], margin: 'xl' }}>Theme system</Wrapper>

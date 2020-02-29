import React from 'react'
import styled from 'styled-components'

import system from '../'

const Wrapper = styled.div`
  ${system}
`

export default () => (
  <Wrapper
    styles={{
      color: ['primary', 'secondary'],
      margin: 'xl',
      ':hover': {
        backgroundColor: ['white', 'red'],
      },
    }}
  >
    Theme system
  </Wrapper>
)

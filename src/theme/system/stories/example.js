import React from 'react'
import styled from 'styled-components'

import system from '..'

const Wrapper = styled.div`
  ${system}
`

export default () => (
  <>
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

    <Wrapper
      styles={{
        color: ['primary', 'secondary', ['primaryLighter', 'error']],
        fontSize: ['20px', '33px'],
        margin: 'xl',
        transition: '.2s',
      }}
    >
      Theme system
    </Wrapper>

    <Wrapper
      styles={{
        backgroundColor: ['primary', 'secondary', ['primaryLighter', 'error']],
        fontSize: ['20px', '33px'],
        margin: 'xl',
        transition: '.2s',
        height: ['100px', '500px'],
      }}
    >
      Theme system
    </Wrapper>
  </>
)

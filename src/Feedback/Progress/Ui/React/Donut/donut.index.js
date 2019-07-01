import React, { memo } from 'react'
import styled, { keyframes } from 'styled-components'

const Donut = ({ style }) => <Wrapper style={style} />

// Style
const donutSpin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`
const Wrapper = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${donutSpin} 0.7s linear infinite;
`

export default memo(Donut)

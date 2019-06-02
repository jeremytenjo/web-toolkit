import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-gap: 10px;
`

export const Title = styled.span`
  font-family: monospace;
  font-weight: bold;
  color: #cdfff9;
`

export const Content = styled.div`
  background-color: ${({ noBackground, color }) =>
    noBackground ? 'transparent' : color};
  border-radius: 5px;
  padding: 10px;
  width: fit-content;
`

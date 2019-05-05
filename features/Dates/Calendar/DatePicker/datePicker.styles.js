import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 5px;

  svg {
    display: block;
    cursor: pointer;
    padding: 10px;
    fill: ${({ arrowColor }) => `var(--color-${arrowColor})`};
  }

  select {
    text-align-last: center;
    width: 100px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -ms-appearance: none;
  }
`

export const LeftArrow = styled.div``
export const RightArrow = styled.div`
  transform: rotate(180deg);
`

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
    border-radius: 50%;
    transition: 0.3s;

    &:active {
      background-color: ${({ color }) =>
        color ? `var(--color-${color}-background)` : 'rgba(0, 0, 0, 0.1)'};
    }
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

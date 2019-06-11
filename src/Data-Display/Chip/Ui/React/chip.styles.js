import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ color }) => `var(--color-${color}-background)`};
  color: ${({ color }) => `var(--color-${color}-darker)`};
  border-radius: 100px;
  padding: 10px;
  display: grid;
  align-items: center;
  justify-contents: center;
  text-align: center;
  width: fit-content;
  grid-gap: var(--spacing-xxs);
  grid-template-columns: auto auto;
  user-select: none;
  cursor: ${({ noCancel }) => noCancel && `pointer`};

  svg {
    fill: ${({ color }) => `var(--color-${color}-darker)`};
    cursor: pointer;
  }
`

export const Text = styled.span`
  color: ${({ color }) => `var(--color-${color}-darker)`};
  user-select: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  text-align: center;
  cursor: pointer;
`

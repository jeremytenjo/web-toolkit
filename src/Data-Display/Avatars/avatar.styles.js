import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ color }) => `var(--color-${color})`};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: ${({ radius }) => `${radius}px`};
  transition: 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    border-radius: ${({ radius }) => `${radius}px`};
  }

  /* Transparent Background */
  ${({ paddedBorder }) =>
    paddedBorder &&
    `
  background-color: transparent;

  * {
    background-color: transparent;
  }

  img {
    padding: 5px;
    background-color: transparent;
  }

  `}
`

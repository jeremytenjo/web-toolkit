import styled from 'styled-components'

export const Wrapper = styled.div``

export const Image = styled.div`
  background-color: ${({ type }) => `var(--color-${type}-background)`};
  background-image: ${({ photoUrl }) => `url(${photoUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: ${({ radius }) => `${radius}px`};
  cursor: pointer;
  border: 2px solid
    ${({ photoUrl, type }) =>
      photoUrl ? 'white' : `var(--color-${type}-background)`};
  transition: 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    border: 2px solid ${({ type }) => `var(--color-${type})`};
  }

  span {
    text-transform: uppercase;
    color: ${({ type }) => `var(--color-${type})`};
    font-size: 32px;
    font-weight: bold;
    user-select: none;
  }
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100%;
  background-repeat: no-repeat;
  cursor: ${({ cursor }) => cursor};
  transition: 0.2s;
  height: 0;
  overflow: hidden;
  padding-top: 591.44px / 1127.34px * 100%;
  position: relative;
  background-color: lightgray;
  tansition: var(--transition-main);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ letterColor }) =>
    `var(--color-${letterColor}-background)`};

  ${({ round }) => round && _round()}
  ${({ borderColor }) => borderColor && _borderColor(borderColor)}
  ${({ size, width, height }) => _size(size, width, height)}
`

const _size = (size, width, height) => `
width: ${width || size}px;
height: ${height || size}px;
`

const _round = () => `
border-radius: 100px;
`

const _borderColor = (borderColor) => `
border: 2px solid transparent;
&:active {
  border: 2px solid var(--color-${borderColor});
}
`

export const InnerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Letters = styled.span`
  font-family: ${({ lettersFont }) => `var(--font-${lettersFont})`};
  text-transform: uppercase;
  color: ${({ letterColor }) => `var(--color-${letterColor})`};
  font-size: 32px;
  font-weight: bold;
  user-select: none;
`

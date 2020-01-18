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
  background-color: ${({ letterColor }) => `var(--color-${letterColor}Background)`};

  ${({ size, width, height }) => _size(size, width, height)}
`

const _size = (size, width, height) => `
width: ${width || size}px;
height: ${height || size}px;
`

export const InnerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

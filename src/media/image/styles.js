import styled from 'styled-components'

import system from '../../theme/system'

export const Wrapper = styled.div`
  ${system}

  overflow: hidden;
  position: relative;
  tansition: var(--transition-main);
  display: grid;
  justify-content: center;
  align-items: center;

  ${({ letterColor }) =>
    letterColor && `background-color: var(--color-${letterColor}Background)`};

  ${({ size, width, height }) =>
    size ? _size(size) : width && height ? _size(null, width, height) : ''}
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

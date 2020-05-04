import styled from 'styled-components'

import system from '../../theme/system'

export const ImageWrapper = styled.div`
  ${system}

  overflow: hidden;
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;

  ${({ letterColor }) =>
    letterColor && `background-color: var(--color-${letterColor}Background)`};

  img[data-base64='true'] {
    filter: blur(10px);
  }
`

export const InnerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1);

  animation-name: blurOut;
  animation-duration: 0.2s;

  @keyframes blurOut {
    from {
      filter: blur(10px);
    }
    to {
      filter: blur(none);
    }
  }
`

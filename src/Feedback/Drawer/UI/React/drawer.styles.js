import styled from 'styled-components'

export const Wrapper = styled.div`
  height: ${({ overflowHeight }) => `${overflowHeight}px`};
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: ${({ height }) => `${height}px`};
  transition: opacity 450ms;
  pointer-events: none;
  background-color: black;
  opacity: 0;
  ${({ isOpen }) =>
    isOpen &&
    `
  opacity: 0.54; 
  pointer-events: auto;
  `}
`

export const ShadowTip = styled.div`
  position: fixed;
  height: 60;
  width: 200%;
  bottom: -60;
  left: -50%;
  boxshadow: rgba(0, 0, 0, 0.7) 0px 0px 30px;
  transition: transform 450ms;
  transform: ${({ isOpen }) => (isOpen ? `translateY(50px)` : `translateY(0)`)};
`

export const Body = styled.div`
  overflow: ${({ isOpen }) => (isOpen ? `auto` : `hidden`)};
  height: ${({ fullScreen, maxHeight }) =>
    fullScreen ? `${maxHeight}px` : `initial`};
  background-color: white;
  max-height: ${({ maxHeight }) => `${maxHeight}px`};
  border-radius: ${({ borderRadius }) =>
    `${borderRadius}px ${borderRadius}px 0 0`};
  padding: ${({ padding }) => `${padding}px`};
`

export const BottomSlide = styled.div`
  margin-bottom: ${({ overflowHeight }) => `${overflowHeight}px`};
`

export const Pill = styled.svg`
  display: block;
  margin: 0 auto;
  transform: translateY(-3px);

  rect {
    fill: black;
    strokewidth: 5;
    opacity: 0.4;
  }
`

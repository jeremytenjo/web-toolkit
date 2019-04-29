import styled from 'styled-components'

//Styles
export const Wrapper = styled.footer`
  width: 100%;
  display: grid;
  max-width: 900px;
  grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
  bottom: 0;
  background-color: transparent;
  padding-bottom: 2px;
  margin: auto;
  left: 0;
  right: 0;
  justify-items: center;
  font-family: ${({ fontFamily }) => fontFamily};
  position: relative;

  * {
    position: relative;
  }

  input {
    cursor: pointer;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
  }
`

export const IconCon = styled.div`
  position: relative;
  width: 50px;
  text-align: center;
  font-size: 10px;
  display: ${({ label }) => (label ? 'grid' : 'block')};
  grid-template-rows: 32px 12px;
  cursor: pointer;
  box-sizing: border-box;
  padding-top: ${({ label }) => (label ? '2px' : '0')};
  padding-bottom: ${({ label }) => (label ? '5px' : '0')};
  transition: 0.2s;
  border-radius: 100px;

  &:active {
    background-color: ${({ backgroundColor }) => backgroundColor};
  }

  span {
    user-select: none;
    transition: 0.1s;
    color: ${({ color }) => color};
  }

  svg {
    width: 23px;
    fill: ${({ color }) => color};
    transition: 0.1s;
    margin: 0 auto;
    height: 35px;
  }
`

export const MainIconCon = styled.div`
  background-color: ${({ activeColor }) => activeColor};
  width: 50px;
  border-radius: 100px;
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ mainIconShadow }) => mainIconShadow};
  transform: translateY(-25px);
`

export const Background = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: -1;
  filter: drop-shadow(0px -4px 14px rgba(0, 0, 0, 0.06));
`

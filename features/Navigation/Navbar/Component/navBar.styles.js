import styled from 'styled-components'

//Styles
export const Wrapper = styled.footer`
  width: 100%;
  display: grid;
  max-width: 900px;
  grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
  background: rgba(37, 49, 55, 0.2);
  bottom: 0;
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  padding-bottom: 2px;
  margin: auto;
  left: 0;
  right: 0;
  justify-items: center;
  @media (min-width: 900px) {
    box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.12);
  }
`

export const IconCon = styled.div`
  potistion: relative;
  width: 50px;
  text-align: center;
  font-size: 10px;
  display: grid;
  grid-template-rows: 32px 12px;
  cursor: pointer;
  box-sizing: border-box;
  padding-top: 2px;
  padding-bottom: 5px;
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
  position: relative;

  svg {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-25px);
  }
`

export const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  opacity: ${({ opacity }) => opacity};
  z-index: -1;
`

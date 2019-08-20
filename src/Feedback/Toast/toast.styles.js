import styled from 'styled-components'

export const Wrapper = styled.div`
  user-select: none;
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  z-index: 999;
  border-radius: 100px;
  height: 100px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background: ${({ background }) => `var(--color-${background})`};
  color: ${({ foreground }) => `var(--color-${foreground})`};
  text-align: center;
  height: 40px;
  width: 200px;
  padding: 15px 25px;
  opacity: 0;
  display: none;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  font-family: var(--font-secondary);
  font-size: 16px;

  img {
    width: 20px;
    height: 20px;
  }
`

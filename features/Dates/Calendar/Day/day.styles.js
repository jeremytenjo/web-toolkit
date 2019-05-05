import styled from 'styled-components'

const DAY_SIZE = '30px'

export const Wrapper = styled.div`
  display: grid;
  background: lightblue;
  grid-auto-flow: row;
`
export const DayCon = styled.div`
  background-color: ${({ activeColor }) => activeColor};
  width: ${DAY_SIZE};
  height: ${DAY_SIZE};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  justify-self: center;
  cursor: pointer;
  user-select: none;

  ${({ activeColor, ...props }) =>
    isCurrentDay(
      props,
      `
  background: transparent;
  border: 2px solid ${activeColor};
  color: black;`,
    )}

  ${(props) =>
    isGrey(
      props,
      `
  background: transparent;
  color: grey;`,
    )}
`

export const StatusCon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`

// Variants
const isCurrentDay = ({ isCurrentDay }, styles) => isCurrentDay && styles
const isGrey = ({ grey }, styles) => grey && styles

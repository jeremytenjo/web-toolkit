import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  background: lightblue;
  grid-template-rows: fit-content(100%) fit-content(100%);
`

export const DayCon = styled.div`
  background-color: ${({ activeColor }) => activeColor};
  padding: 10px 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  justify-self: center;

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

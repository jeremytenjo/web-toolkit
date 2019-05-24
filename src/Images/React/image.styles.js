import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--color-lightgrey);
  background-image: url(${(props) => props.src});
  background-position: ${({ position }) => position};
  background-size: 100%;
  height: auto;
  min-height: 100%;
  background-repeat: no-repeat;
  padding-top: 100%;
  cursor: ${({ cursor }) => cursor};
  transition: 0.2s;
  ${({ skeleton }) =>
    skeleton &&
    `
      background-color: var(--color-lightgrey);
    `}
`

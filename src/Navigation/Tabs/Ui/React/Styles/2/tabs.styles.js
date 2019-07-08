import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 25px;
  justify-content: center;
`

export const Link = styled.div`
  cursor: pointer;
  user-select: none;
  span {
    transition: var(--transition-main);
    font-style: normal;
    font-weight: bolder;
    font-size: 22px;
    line-height: 27px;
    white-space: nowrap;
    ${({ font }) => `
    font-family: var(--font-${font});
    `}

    ${({ color, isActive }) =>
      isActive
        ? `
    color: var(--color-${color});
    `
        : `
    color: var(--color-${color}-opaque);
    `}
  }
`

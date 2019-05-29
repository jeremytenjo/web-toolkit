import styled from 'styled-components'

export const Wrapper = styled.div`
  /* Shared */
  transition: 0.2s;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  display: grid;
  padding: ${({ padding }) => `var(--spacing-${padding})`};
  grid-gap: ${({ gap }) => `var(--spacing-${gap})`};
  grid-auto-flow: ${({ direction }) => direction};

  /* Overflows */
  ${({ overflows, dataLength }) =>
    overflows &&
    `
    overflow: auto;
    overflow-y: hidden;
    grid-template-columns: repeat(${dataLength > 0 && dataLength}, auto);
    grid-template-rows: 100%;
    justify-content: flex-start;
  `}

    /* Grid */
    ${({ grid, repeat }) =>
      grid &&
      repeat &&
      `
      grid-auto-flow: row;
      align-items: stretch;
      grid-template-columns: repeat(${repeat}, minmax(10px, 1fr));
    `} 

  /* Min Width */
  @media (min-width: ${({ minWidth }) => `${minWidth}px`}) {
    grid-template-columns: repeat(${({ repeatOnMinWidth }) =>
      repeatOnMinWidth}, minmax(10px, 1fr));
  }   
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
  width: fit-content;
  display: grid;
  grid-gap: var(--spacing-xs);
  user-select: none;
  font-family: Montserrat;
  font-weight: bolder;
`
export const WrapperIcon = styled.div`
  display: flex;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 100px;
  animation-timing-function: ease-out;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  &:active {
    background-color: ${({ color }) =>
      color ? `var(--color-${color}-background)` : 'rgba(0, 0, 0, 0.1)'};
  }


  
  /* Background */
  ${({ background, size, color }) =>
    background &&
    `
    background-color:${
      color ? `var(--color-${color}-background)` : 'rgba(0, 0, 0, 0.1)'
    };
    border: 2px solid ${color ? `var(--color-${color}-background)` : 'none'};
    width: ${size}px;
    height: ${size}px;  

    &:active {
    border: 2px solid ${color ? `var(--color-${color}-darker)` : 'none'};
    }
  `}

  /* noBackgroundChange */
  ${({ background, color, noBackgroundChange }) =>
    background &&
    !noBackgroundChange &&
    `
    &:active {
    background-color: ${color ? 'transparent' : 'rgba(97, 97, 97, 0.5)'};
    }
  `}

  /*  No Background */
  ${({ noBackground }) =>
    noBackground &&
    `    
    border: none;
    width:auto;
    height:auto;
    &:active {
    background-color: transparent;
    border: none;
    }
  `}

    /* Outlined */
    ${({ outlined, color }) =>
      outlined &&
      `
  border: 2px solid var(--color-${color});
  &:active {
    background-color: var(--color-${color}-background);

    }
  `}

  svg {
    fill: ${({ color, dark }) =>
      color && !dark
        ? `var(--color-${color})`
        : color && dark
        ? `var(--color-${color}-darker)`
        : 'var(--color-white)'};
    display: block;
    margin: 0 auto;
    align-self: center;
    width: ${({ size }) => size}px;
     /*  No Background */
  ${({ noBackground }) =>
    noBackground &&
    `    
   width: auto;
   `}

`

export const Label = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`

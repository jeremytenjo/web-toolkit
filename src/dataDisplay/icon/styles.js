import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
  width: fit-content;
  display: grid;
  user-select: none;
  cursor: pointer;
  align-content: space-between;

  ${({ label }) =>
    label &&
    `    
  grid-gap: var(--spacing-xxs);
  justify-items: center;
  `};
`
export const WrapperIcon = styled.div`
  display: flex;
  transition: 0.3s;
  border-radius: 100px;
  animation-timing-function: ease-out;
  width: ${({ backgroundSize, size }) => backgroundSize || size}px;
  height: ${({ backgroundSize, size }) => backgroundSize || size}px;

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  /* Background */
  ${({ background, size, backgroundColor }) =>
    background &&
    `
    background-color: var(--color-${backgroundColor});    
    border: 2px solid var(--color-${backgroundColor});
    width: ${size}px;
    height: ${size}px;  

    &:active {
    background-color: var(--color-${backgroundColor});   
    border: 2px solid var(--color-${backgroundColor});
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
  border: 2px solid var(--color-${color}Darker);
  &:active {
    background-color: var(--color-${color}Background);
    border: 2px solid var(--color-${color}Darker);    
    }
  `}

      /* Plain */
      ${({ plain }) =>
        plain &&
        `     
  &:active {
    background-color: transparent;
    border: none;    
    }
  `}

      /* boxShadow */
      ${({ boxShadow }) =>
        boxShadow &&
        `
        box-shadow: ${boxShadow};
  `}

  svg {
    color: ${({ color, dark }) =>
      color && !dark
        ? `var(--color-${color})`
        : color && dark
        ? `var(--color-${color}Darker)`
        : 'var(--color-white)'};
    fill: ${({ color, dark }) =>
      color && !dark
        ? `var(--color-${color})`
        : color && dark
        ? `var(--color-${color}Darker)`
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

       /* Outlined */
       ${({ outlined, color }) =>
         outlined &&
         `
         fill: var(--color-${color}Darker);
  `}

     /* Stroke */
     ${({ color, isStroke }) =>
       isStroke &&
       `
     fill: none;
     stroke: var(--color-${color});     
     `}

 /* Plain */
 ${({ plain }) =>
   plain &&
   `
        margin: 0;  
        `}
 /* Center */
 ${({ center }) =>
   center &&
   `
        margin: 0 auto;
        `}
`

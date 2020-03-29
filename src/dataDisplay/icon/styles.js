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
  padding: ${({ backgroundSize }) =>
    backgroundSize ? `${backgroundSize}px` : 'var(--spacing-xs, 10px)'} ;
  
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  /* backgroundColor */
  ${({ backgroundColor }) =>
    !!backgroundColor &&
    `
    background-color: var(--color-${backgroundColor});    
    border: 2px solid var(--color-${backgroundColor});

    &:active {
    background-color: var(--color-${backgroundColor});   
    border: 2px solid var(--color-${backgroundColor});
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
        width: auto;
        height: auto;
        padding: none;
  &:active {
    background-color: transparent;
    border: none;    
    }
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
    ${({ width, size }) => width || (size && `width: ${width || size}px;`)}
    ${({ height, size }) => height || (size && `height: ${height || size}px;`)}
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
`

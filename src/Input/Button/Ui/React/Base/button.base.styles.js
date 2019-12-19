import styled from 'styled-components'

export const BaseWrapper = styled.div`
position: relative;
`
export const BaseButton = styled.button`
  background-color: ${({ color }) => `var(--color-${color}Lighter)`};
  border-radius: 100px;
  cursor: pointer;
  padding: 0 var(--spacing-s);
  display: flex;  
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.2s ease-in-out;
  height: 40px;  
  border: 2px solid ${({ color }) => `var(--color-${color}Lighter)`};
  user-select: none;
  box-sizing: content-box;
  &:focus {outline:0;}


  &:active {
    border: 2px solid ${({ color }) => `var(--color-${color}Darker)`};
  }


  /* Active */
  ${({ active, color }) => active && `border: 2px solid var(--color-${color}Darker);`}

  /* Disabled */
  ${({ disabled }) =>
    disabled &&
    `
  background-color: var(--color-disabledLighter);
  border: 2px solid var(--color-disabledLighter);
  &:active {
    border: 2px solid var(--color-disabledLighter);
  }`}

  /* Outlined */
  ${({ outlined }) =>
    outlined &&
    `background-color: transparent;
     border: 2px solid var(--color-white);
     &:active {
       border: 2px solid var(--color-white);
    }`}

  /* with Icon */
  ${({ icon, color }) =>
    icon &&
    `
  svg {
    margin-left: 10px;
    fill: var(--color-${color}Darker);
    }
  `}

  /* FAB */
  ${({ type, color }) =>
    type === 'FAB' &&
    `
    box-shadow: var(--boxShadow-1);
    background-color: var(--color-${color});
    border: 2px solid var(--color-${color});
     &:active {
       border: 2px solid var(--color-${color});
    }
  svg {
    margin-left: 10px;
    fill: var(--color-white);
    }
  `}
`

export const BaseLoadingCon = styled.div`
  ${({ color }) => `
    position: absolute;
    top:0;
    right:0;
    bottom: 0;
    left: 0;
    background-color: var(--color-${color}Opaque);
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
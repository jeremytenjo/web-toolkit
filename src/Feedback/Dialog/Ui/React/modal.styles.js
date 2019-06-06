import styled from 'styled-components'

const SPACING = '20px'

export const Wrapper = styled.div`
  display: none;
  width: fit-content;
  height: fit-content;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 999;
  border-radius: 20px;
  background-color: var(--color-secondary-darker);
  border-radius: 20px;
  color: var(--color-white);
  padding: ${SPACING};
  box-shadow: var(--boxShadow-3);
  opacity: 0;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  /* Fullscreen */
  ${({ fullscreen }) =>
    fullscreen &&
    `
    height: 100%;
    width: 100%;
    border-radius: 0;
    box-shadow: none;
    `}
    
    /* Loading */
    ${({ loading }) => loading && ` width: 80%; max-width: 300px;`}
`

export const ConfirmationCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--spacing-m);
`

export const ChildrenCon = styled.div`
  font-family: Montserrat;
  /* With Children */
  ${({ childs }) => childs && `margin: ${SPACING} 0;`}

  /* No title */
  ${({ title }) => !title && `margin-top: 0;`}

  /* No confirmaion */
  ${({ confirmation }) => !confirmation && `margin-bottom: 0;`}

  /* With Title and confirmation */
  ${({ title, confirmation }) =>
    title && confirmation && `margin: ${SPACING} 0;`}
  
  /* Loading */
  ${({ loading }) =>
    loading &&
    `
  font-family: Montserrat;
font-weight: bold;
font-size: 18px;
text-align: center;
  `}
`

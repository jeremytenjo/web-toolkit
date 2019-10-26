import styled from 'styled-components'

export const Wrapper = styled.div`
  transition: 0.2s;
  ${({ active, backgroundColor }) =>
    active &&
    `
background-color: var(--color-${backgroundColor});
`}

  ${({ foregroundColor, backgroundColor }) => `
color: var(--color-${foregroundColor});
padding: var(--spacing-s);
padding-left: var(--spacing-m);
grid-gap: var(--spacing-s);
display: grid;
grid-auto-flow: column;
border-radius: 0 50px 50px 0;
cursor: pointer;
width: 200px;
justify-content: start;

&:hover {
  background-color: var(--color-${backgroundColor});
}

svg {
fill: var(--color-${foregroundColor});
}
`}
`

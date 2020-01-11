export const wrapperSyles = ({
  isActive,
  activeColor,
  backgroundColor,
  foregroundColor,
}) => ({
  transition: '0.2s',
  userSelect: 'none',
  backgroundColor: isActive ? activeColor : backgroundColor,
  color: foregroundColor,
  padding: 's',
  paddingLeft: 'm',
  gridGap: 's',
  display: 'grid',
  gridAutoFlow: 'column',
  borderRadius: '0 50px 50px 0',
  cursor: 'pointer',
  width: '200px',
  justifyContent: 'start',
  ':hover': {
    backgroundColor: activeColor,
  },
})

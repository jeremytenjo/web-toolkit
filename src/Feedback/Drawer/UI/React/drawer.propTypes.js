import { func, bool, oneOf } from 'prop-types'

export const defaultProps = {
  position: 'left',
  open: null,
  onClose: () => null,
}

export const propTypes = {
  position: oneOf(['left', 'top', 'right', 'bottom']),
  open: bool,
  onClose: func,
}

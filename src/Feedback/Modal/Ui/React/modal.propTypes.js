import { string, bool, func, node } from 'prop-types'

export const defaultProps = {
  title: null,
  children: null,
  onClose: () => null,
  show: null,
  type: 'center',
  animationStyle: 'centerOut',
}

export const propTypes = {
  title: string,
  children: node,
  type: string,
  onClose: func,
  show: bool,
  animationStyle: string,
}

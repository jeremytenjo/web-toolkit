import { string, bool, func, node, object } from 'prop-types'

export const defaultProps = {
  title: null,
  children: null,
  onClose: () => null,
  show: null,
  style: {},
  overlayStyles: {},
  type: 'center',
  animationStyle: 'centerOut',
}

export const propTypes = {
  title: string,
  children: node,
  type: string,
  style: object,
  overlayStyles: object,
  onClose: func,
  show: bool,
  animationStyle: string,
}

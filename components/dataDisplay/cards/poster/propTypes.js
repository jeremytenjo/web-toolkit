import { string, func, bool } from 'prop-types'

export const defaultProps = {
  src: null,
  noAnimation: null,
  size: 184,
  alt: 'poster',
  backgroundColor: 'blackOpaque',
  onClick: () => null,
}

export const propTypes = {
  src: string,
  text: string,
  onClick: func,
  noAnimation: bool,
}

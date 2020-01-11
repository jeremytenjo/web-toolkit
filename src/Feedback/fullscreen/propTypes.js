import { number, func, string, bool } from 'prop-types'

export const defaultProps = {
  children: null,
  noAnimation: null,
  maxWidth: 450,
  backgroundcolor: 'black',
  onClose: () => null,
}

export const propTypes = {
  noAnimation: bool,
  maxWidth: number,
  backgroundcolor: string,
  onClose: func,
}

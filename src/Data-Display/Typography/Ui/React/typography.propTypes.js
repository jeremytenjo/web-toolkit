import { string, func, oneOfType, number, object } from 'prop-types'

export const defaultProps = {
  tag: 'span',
  variant: '',
  styles: { color: 'black' },
  onClick: () => null,
  text: '',
}

export const propTypes = {
  tag: string,
  variant: string,
  styles: object,
  onClick: func,
  text: oneOfType([string, number]),
}

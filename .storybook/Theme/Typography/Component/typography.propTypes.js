import { string, oneOf, oneOfType, number } from 'prop-types'

export const defaultProps = {
  variant: 'body1',
  color: null,
  text: '',
}

export const propTypes = {
  variant: oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'caption',
    'overline',
  ]),
  color: string,
  text: oneOfType([string, number]),
}

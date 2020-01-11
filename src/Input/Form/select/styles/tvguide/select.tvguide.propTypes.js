import { string, oneOfType, number } from 'prop-types'

export const defaultProps = {
  label: null,
  backgroundColor: 'primary',
  foregroundColor: 'primaryDarker',
  titleColor: 'black',
  titleVariant: 'body2',
  title: null,
}

export const propTypes = {
  label: oneOfType([string, number]),
  backgroundColor: string,
  foregroundColor: string,
  titleColor: string,
  title: string,
}

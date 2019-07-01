import { string, number, func, object, bool } from 'prop-types'

export const defaultProps = {
  name: null,
  style: {},
  color: 'white',
  onClick: () => null,
  background: null,
  size: 45,
  label: null,
  noBackground: null,
  dark: null,
  noBackgroundChange: null,
  outlined: null,
}

export const propTypes = {
  name: string.isRequired,
  style: object,
  color: string,
  onClick: func,
  background: bool,
  noBackground: bool,
  size: number,
  label: string,
  dark: bool,
  noBackgroundChange: bool,
  outlined: bool,
}

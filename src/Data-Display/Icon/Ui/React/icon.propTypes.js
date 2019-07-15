import { string, number, func, object, bool } from 'prop-types'

export const defaultProps = {
  name: null,
  style: {},
  color: 'white',
  onClick: () => null,
  background: null,
  size: 45,
  label: null,
  font: 'primary',
  noBackground: null,
  dark: null,
  noBackgroundChange: null,
  outlined: null,
  link: null,
}

export const propTypes = {
  name: string.isRequired,
  style: object,
  color: string,
  font: string,
  onClick: func,
  background: bool,
  noBackground: bool,
  size: number,
  label: string,
  dark: bool,
  noBackgroundChange: bool,
  outlined: bool,
  link: string,
}

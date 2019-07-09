import { string, array, object } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  font: 'primary',
  data: [],
  style: {},
}

export const propTypes = {
  color: string,
  font: string,
  data: array,
  style: object,
}

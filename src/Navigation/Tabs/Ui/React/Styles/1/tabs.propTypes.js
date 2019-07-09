import { string, array, object } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  data: [],
  style: {},
}

export const propTypes = {
  color: string,
  data: array,
  style: object,
}

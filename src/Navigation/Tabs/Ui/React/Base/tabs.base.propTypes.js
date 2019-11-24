import { string, array, object, shape } from 'prop-types'

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
  router: shape({ history: object.isRequired, location: object.isRequired }),
}

import { string, array, object, shape } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  data: [],
  style: {},
  router: { push: () => null },
}

export const propTypes = {
  color: string,
  data: array,
  style: object,
  router: shape({ history: object.isRequired, location: object.isRequired }),
}

import { string, array, object } from 'prop-types'

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
  router: object.isRequired,
}

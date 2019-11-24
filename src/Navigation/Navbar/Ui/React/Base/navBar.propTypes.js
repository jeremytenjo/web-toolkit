import { string, func, array, number, object, shape } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  backgroundColor: 'white-opaque',
  labelVariant: 'body2',
  onClick: () => null,
  onSearchSubmit: () => null,
  shadow: 2,
  mediaQueries: [600, 900],
}

export const propTypes = {
  color: string,
  backgroundColor: string,
  onClick: func,
  onSearchSubmit: func,
  shadow: number,
  mediaQueries: array,
  router: shape({ history: object.isRequired, location: object.isRequired }),
}

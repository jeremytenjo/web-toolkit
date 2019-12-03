import { string, func, array, number, object, shape } from 'prop-types'

export const defaultProps = {
  labelVariant: 'body2',
  onClick: () => null,
  onSearchSubmit: () => null,
  styles: {
    color: 'primary',
    backgroundColor: 'whiteOpaque',
    shadow: 2,
  },
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

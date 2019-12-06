import { func, object, shape } from 'prop-types'

export const defaultProps = {
  labelVariant: 'body2',
  onClick: () => null,
  onSearchSubmit: () => null,
  styles: {
    color: 'primary',
    backgroundColor: 'whiteOpaque',
    boxShadow: 2,
  },
  labelStyles: { color: 'primary' },
}

export const propTypes = {
  onClick: func,
  onSearchSubmit: func,
  router: shape({ history: object.isRequired, location: object.isRequired }),
}

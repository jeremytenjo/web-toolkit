import { string, func, object } from 'prop-types'

export const defaultProps = {
  title: 'primary',
  logo: 'Chip',
  wrapperProps: {},
  imageProps: { size: 29 },
  typographyProps: { carot: true, color: 'primary' },
  onClick: () => null,
}

export const propTypes = {
  title: string,
  logo: string,
  wrapperProps: object,
  imageProps: object,
  typographyProps: object,
  onClick: func,
}

import { bool, string } from 'prop-types'

export const defaultProps = {
  newTab: true,
  url: '',
}

export const propTypes = {
  newTab: bool,
  url: string,
}

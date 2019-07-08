import { string, array, object } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  tabList: [],
  style: {},
}

export const propTypes = {
  color: string,
  tabList: array,
  style: object,
}

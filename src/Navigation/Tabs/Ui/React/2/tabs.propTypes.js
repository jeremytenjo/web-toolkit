import { string, array, object } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  font: 'primary',
  tabList: [],
  style: {},
}

export const propTypes = {
  color: string,
  font: string,
  tabList: array,
  style: object,
}

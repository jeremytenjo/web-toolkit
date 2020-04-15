import { string, bool, func, object, instanceOf, oneOfType } from 'prop-types'

export const defaultProps = {
  endDate: '2021-01-01',
  wrapperStyles: {},
  typographyProps: {},
  separator: '',
  onTimeUp: () => null,
  noText: false,
}

export const propTypes = {
  endDate: oneOfType([string, instanceOf(Date)]),
  wrapperStyles: object,
  typographyProps: object,
  separator: string,
  noText: bool,
  onTimeUp: func,
}

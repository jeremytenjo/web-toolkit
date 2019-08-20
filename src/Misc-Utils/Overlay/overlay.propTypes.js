import { bool, func, string, number } from 'prop-types'

export const defaultProps = {
  show: null,
  onClick: () => null,
  backgroundcolor: 'white',
  noAnimation: null,
  zIndex: 1,
  disableScrollOnShow: true,
  dataCy: null,
  appendToBody: null,
}

export const propTypes = {
  show: bool,
  noAnimation: bool,
  onClick: func,
  backgroundcolor: string,
  zIndex: number,
  disableScrollOnShow: bool,
  dataCy: string,
}

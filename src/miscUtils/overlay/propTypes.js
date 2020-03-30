import { bool, func, string } from 'prop-types'

export const defaultProps = {
  show: null,
  onClick: () => null,
  disableScrollOnShow: true,
  dataCy: null,
  appendToBody: null,
  wrapperStyles: {},
}

export const propTypes = {
  show: bool,
  onClick: func,
  backgroundcolor: string,
  disableScrollOnShow: bool,
  dataCy: string,
}

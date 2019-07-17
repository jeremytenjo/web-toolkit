import {
  arrayOf,
  node,
  shape,
  func,
  oneOfType,
  number,
  string,
} from 'prop-types'

export const defaultProps = {
  data: [],
  children: null,
  opacity: '1',
  fontFamily: 'var(--font-primary)',
  router: window.historyRouter || {},
  onMainIconClick: () => null,
  onFileSelect: () => null,
}

export const propTypes = {
  data: arrayOf(shape({ id: oneOfType([string, number]).isRequired }))
    .isRequired,
  children: oneOfType([node, func]),
  opacity: string,
  fontFamily: string,
  onMainIconClick: func,
  onFileSelect: func,
  router: func,
}

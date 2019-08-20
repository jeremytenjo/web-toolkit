import { string, func } from 'prop-types'

export const defaultProps = {
  mainIcon: 'search/feather',
  closeIcon: 'close/feather',
  backgroundColor: 'primary',
  inputName: 'query',
  boxShadow: '0px 4px 12px rgba(36, 195, 169, 0.5)',
  onSubmit: () => null,
}

export const propTypes = {
  mainIcon: string,
  closeIcon: string,
  backgroundColor: string,
  onSubmit: func,
}

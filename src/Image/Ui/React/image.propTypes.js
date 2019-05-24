import { string, number, bool, object, func } from 'prop-types'

export const defaultProps = {
  src: '',
  index: null,
  onClick: () => null,
  definitions: null,
  skeleton: null,
  cursor: 'pointer',
  position: 'center',
  OnVisibilityParams: {
    offset: 200,
    once: true,
  },
}

export const propTypes = {
  src: string,
  cursor: string,
  position: string,
  index: number,
  onClick: func,
  definitions: object,
  skeleton: bool,
}

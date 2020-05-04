import { object, string, bool, func, number } from 'prop-types'

export const defaultProps = {
  index: 0,
  setIndex: null,
  wrapperStyles: {},
  iconColor: 'white',
  iconName: 'arrow/feather',
  infinite: null,
}

export const propTypes = {
  index: number,
  setIndex: func.isRequired,
  wrapperStyles: object,
  iconColor: string,
  iconName: string,
  infinite: bool,
}

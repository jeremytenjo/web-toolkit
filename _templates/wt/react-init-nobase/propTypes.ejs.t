---
to: src/<%= category %>/<%= name %>/Ui/React/Styles/example/example.propTypes.js
---
import { string, func } from 'prop-types'

export const defaultProps = {
  type: 'primary',
  text: 'Chip',
  onClick: () => null,
}

export const propTypes = {
  type: string,
  text: string,
  onClick: func,
}

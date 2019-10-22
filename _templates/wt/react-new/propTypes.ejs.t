---
to: src/<%= category %>/<%= name %>/Ui/React/Styles/<%= h.lowercase(name) %>/<%= h.lowercase(name) %>.propTypes.js
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

import React, { useState, memo } from 'react'
import Menu_ui from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import Icon from '../../dataDisplay/icon'

import { defaultProps, propTypes } from './menu.propTypes'

const Menu = ({ options, onSelect }) => {
  const optionsLength = options.length
  // State
  const [anchorEl, setanchorEl] = useState(null)

  // Functions
  const handleClose = ({
    target: {
      dataset: { option: selectedOption },
    },
  }) => {
    setanchorEl(null)
    onSelect(selectedOption)
  }

  const handleClick = ({ currentTarget }) => setanchorEl(currentTarget)

  // Template
  return (
    <>
      <Icon name='options/material' onClick={handleClick} />

      {optionsLength > 0 && (
        <Menu_ui
          id='simple-menu'
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
        >
          {options.map(
            (option) =>
              option && (
                <MenuItem key={option} data-option={option} onClick={handleClose}>
                  {option}
                </MenuItem>
              ),
          )}
        </Menu_ui>
      )}
    </>
  )
}

Menu.defaultProps = defaultProps
Menu.propTypes = propTypes

export default memo(Menu)

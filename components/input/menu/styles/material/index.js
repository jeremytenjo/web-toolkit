import React, { useState, memo } from 'react'
import Menu_ui from '@material-ui/core/Menu'
import Item from '@material-ui/core/MenuItem'

import Icon from '../../../../dataDisplay/icon'
import { defaultProps, propTypes } from '../../propTypes'

const Menu = ({ options, onSelect, itemProps, iconProps, ...rest }) => {
  const optionsLength = options.length
  const [anchorEl, setanchorEl] = useState(null)

  const handleClose = ({
    target: {
      dataset: { option: selectedOption },
    },
  }) => {
    setanchorEl(null)
    selectedOption && onSelect(selectedOption)
  }

  const handleClick = ({ currentTarget }) => setanchorEl(currentTarget)

  return (
    <>
      <Icon onClick={handleClick} name='options/material' {...iconProps} />

      {optionsLength > 0 && (
        <Menu_ui
          id='simple-menu'
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          {...rest}
        >
          {options.map(
            (option) =>
              option && (
                <Item
                  key={option}
                  data-option={option}
                  onClick={handleClose}
                  {...itemProps}
                >
                  {option}
                </Item>
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

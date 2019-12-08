import React, { useEffect, memo } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

const Drawer = ({ open, position, children, onClose }) => {
  useEffect(() => {
    open !== null && toggleDrawer(position, true)
  }, [open])

  const toggleDrawer = () => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
  }

  return (
    <SwipeableDrawer anchor={position} open={open} onClose={onClose} onOpen={() => toggleDrawer(position, true)}>
      {children}
    </SwipeableDrawer>
  )
}

export default memo(Drawer)

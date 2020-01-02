import React, { useEffect, memo } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

const Drawer = ({
  open,
  position,
  children,
  onClose,
  disableSwipeToOpen,
  PaperProps = {
    bottom: { style: { borderRadius: '20px 20px 0 0' } },
    top: { style: { borderRadius: '0 0 20px 20px' } },
  },
}) => {
  useEffect(() => {
    open !== null && toggleDrawer(position, true)
  }, [open])

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
  }

  return (
    <SwipeableDrawer
      PaperProps={PaperProps[position]}
      disableSwipeToOpen={disableSwipeToOpen}
      anchor={position}
      open={!!open}
      onClose={onClose}
      onOpen={() => toggleDrawer(position, true)}
    >
      {children}
    </SwipeableDrawer>
  )
}

export default memo(Drawer)

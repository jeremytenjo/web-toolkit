import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'

import { defaultProps, propTypes } from './drawer.propTypes'
import {
  Wrapper,
  Overlay,
  ShadowTip,
  Body,
  BottomSlide,
  Pill,
} from './drawer.styles'
import HeightUpdater from './Utils/HeightUpdater'
import ScrollToTop from './Utils/ScrollToTop'

const SwipeableBottomSheet = ({
  overflowHeight,
  fullScreen,
  marginTop,
  topShadow,
  shadowTip,
  overlay,
  swipeableViewsProps,
  scrollTopAtClose,
  defaultOpen,
  overlayStyle,
  bodyElt,
  children,
  bodyStyle,
  style,
  onChange,
  open,
  borderRadius,
  padding,
}) => {
  const [height, setHeight] = useState(window.innerHeight)
  const hiddenWhenClosed = overflowHeight === 0
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : open
  const hideShadows = hiddenWhenClosed && !isOpen
  const index = isOpen ? 1 : 0
  const maxHeight = height - marginTop

  const onHeightChange = (height) => setHeight(height)

  const onChangeIndex = (index) => {
    const open = index === 1
    if (open === undefined) onChange(open)
    if (onChange !== undefined) onChange(open)
  }

  const onTransitionEnd = () => {
    if (overflowHeight === 0) bodyElt.scrollTop = 0
    if (swipeableViewsProps.onTransitionEnd)
      swipeableViewsProps.onTransitionEnd()
  }

  const stylesRoot = {
    overflowY: 'initial',
    boxSizing: 'border-box',
    ...swipeableViewsProps.style,
  }

  const stylesContainer = {
    boxSizing: 'border-box',
    ...(topShadow &&
      !hideShadows && {
        boxShadow: 'rgba(0, 0, 0, 0.156863) 0px -6px 5px',
      }),
    borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
    ...swipeableViewsProps.containerStyle,
  }

  const stylesSlide = {
    boxSizing: 'border-box',
    overflow: 'visible',
    marginBottom: -overflowHeight,
    ...swipeableViewsProps.slideStyle,
  }

  return (
    <Wrapper style={style} overflowHeight={overflowHeight}>
      <HeightUpdater height={height} onHeightChange={onHeightChange} />
      {overlay && (
        <Overlay
          style={overlayStyle}
          height={height}
          isOpen={isOpen}
          onClick={() => onChangeIndex(0)}
        />
      )}
      <SwipeableViews
        index={index}
        axis='y'
        enableMouseEvents
        onChangeIndex={onChangeIndex}
        onTransitionEnd={onTransitionEnd}
        style={stylesRoot}
        containerStyle={stylesContainer}
        slideStyle={stylesSlide}
        {...swipeableViewsProps}
      >
        <Body
          ref={(elt) => (bodyElt = elt)}
          style={bodyStyle}
          className={`ReactSwipeableBottomSheet--${isOpen ? 'open' : 'closed'}`}
          maxHeight={maxHeight}
          isOpen={isOpen}
          borderRadius={borderRadius}
          padding={padding}
        >
          <Pill width='30px' height='10px'>
            <rect rx='3' ry='5' width='30px' height='5px' />
          </Pill>
          {children}
        </Body>
        <BottomSlide overflowHeight={overflowHeight} />
      </SwipeableViews>
      {shadowTip && !hideShadows && <ShadowTip isOpen={isOpen} />}
      {!isOpen && scrollTopAtClose && !hiddenWhenClosed && (
        <ScrollToTop element={() => bodyElt} />
      )}
    </Wrapper>
  )
}

SwipeableBottomSheet.defaultProps = defaultProps
SwipeableBottomSheet.propTypes = propTypes

export default SwipeableBottomSheet

import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'

import Box from '../box'
import Icon from '../icon/index'

import { defaultProps, propTypes } from './propTypes'
import * as styles from './styles'

function Carousel({ children, wrapperStyles, infinite, initialndex }) {
  const [activeItem, setActiveItem] = useState(initialndex)
  const childrenLength = children.length
  const showLeftArrow = infinite || activeItem !== 0
  const showRightArrow = infinite || activeItem !== childrenLength

  const handleNext = () => {
    let nextItem = activeItem + 1
    const nextItemIsHigherThanTotal = nextItem > childrenLength
    nextItem = nextItemIsHigherThanTotal ? 0 : nextItem

    setActiveItem(nextItem)
  }

  const handleBack = () => {
    let prevItem = activeItem - 1
    const prevItemIsLowerThanTotal = prevItem === -1
    prevItem = prevItemIsLowerThanTotal ? childrenLength : prevItem
    setActiveItem(prevItem)
  }

  const handleItemChange = (nextIndex) => setActiveItem(nextIndex)

  return (
    <Box styles={{ ...styles.wrapper, wrapperStyles }}>
      <SwipeableViews
        axis='x'
        index={activeItem}
        onChangeIndex={handleItemChange}
        enableMouseEvents
      >
        {children.map(() => children)}
      </SwipeableViews>

      {showLeftArrow && (
        <Icon name='arrow/1' onClick={handleBack} style={styles.leftArrow} />
      )}

      {showRightArrow && (
        <Icon name='arrow/1' onClick={handleNext} style={styles.rightArrow} />
      )}
    </Box>
  )
}

Carousel.defaultProps = defaultProps
Carousel.propTypes = propTypes

export default Carousel

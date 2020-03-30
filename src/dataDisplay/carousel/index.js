import React from 'react'
import SwipeableViews from 'react-swipeable-views'

import Box from '../box'
import Icon from '../icon/index'

import { defaultProps, propTypes } from './propTypes'
import * as styles from './styles'

function Carousel({ children, wrapperStyles, infinite, index, setIndex }) {
  const childrenLength = children.length
  const showLeftArrow = infinite || index !== 0
  const showRightArrow = infinite || index !== childrenLength

  const handleNext = () => {
    let nextItem = index + 1
    const nextItemIsHigherThanTotal = nextItem > childrenLength
    nextItem = nextItemIsHigherThanTotal ? 0 : nextItem

    setIndex(nextItem)
  }

  const handleBack = () => {
    let prevItem = index - 1
    const prevItemIsLowerThanTotal = prevItem === -1
    prevItem = prevItemIsLowerThanTotal ? childrenLength : prevItem
    setIndex(prevItem)
  }

  const handleItemChange = (nextIndex) => setIndex(nextIndex)

  return (
    <Box name='carousel' styles={{ ...styles.wrapper, ...wrapperStyles }}>
      <SwipeableViews
        axis='x'
        index={index}
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

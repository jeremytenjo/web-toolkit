import React from 'react'
import SwipeableViews from 'react-swipeable-views'

import Box from '../box'
import Icon from '../icon/index'

import { defaultProps, propTypes } from './propTypes'
import * as styles from './styles'

const Carousel = ({
  children,
  wrapperStyles,
  infinite,
  index,
  setIndex,
  iconColor,
  iconName,
}) => {
  children = Array.isArray(children) ? children : [children]
  const childrenLength = children.length
  const hasOneItem = childrenLength === 1
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

      {showLeftArrow && !hasOneItem && (
        <Icon
          name={iconName}
          onClick={handleBack}
          color={iconColor}
          style={styles.leftArrow}
        />
      )}

      {showRightArrow && !hasOneItem && (
        <Icon
          name={iconName}
          onClick={handleNext}
          style={styles.rightArrow}
          color={iconColor}
        />
      )}
    </Box>
  )
}

Carousel.defaultProps = defaultProps
Carousel.propTypes = propTypes

export default Carousel

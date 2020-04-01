import React, { Fragment } from 'react'
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
  const showRightArrow = infinite || index !== childrenLength - 1

  const handleBack = () => {
    let prevItem = index - 1
    const prevItemIsLowerThanTotal = prevItem === -1
    prevItem = prevItemIsLowerThanTotal ? childrenLength - 1 : prevItem
    setIndex(prevItem)
  }

  const handleNext = () => {
    let nextItem = index + 1
    const nextItemIsHigherThanTotal = nextItem > childrenLength - 1
    nextItem = nextItemIsHigherThanTotal ? 0 : nextItem

    setIndex(nextItem)
  }

  const handleItemChange = (nextIndex) => {
    setIndex(nextIndex)
  }

  return (
    <Box name='carousel' styles={{ ...styles.wrapper, ...wrapperStyles }}>
      <SwipeableViews index={index} onChangeIndex={handleItemChange} enableMouseEvents>
        {children.map((child, index) => {
          return <Fragment key={index + Math.random()}>{child}</Fragment>
        })}
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

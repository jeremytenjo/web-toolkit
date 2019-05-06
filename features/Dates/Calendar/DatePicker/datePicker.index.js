import React, { memo, useRef } from 'react'

import { defaultProps, propTypes } from './datePicker.propTypes'
import { Wrapper, LeftArrow, RightArrow } from './datePicker.styles'

const ArrowSVG = () => (
  <svg
    width='8'
    height='12'
    viewBox='0 0 8 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.4 1.4L6 0L0 6L6 12L7.4 10.6L2.8 6L7.4 1.4Z'
    />
  </svg>
)

const DatePicker = ({ data, arrowColor, value, onSelect, color }) => {
  const selectRef = useRef(null)
  const handleOnSelect = ({ target: { value } }) => {
    onSelect(value)
  }

  const handlePrev = () => {
    const selectedItem = selectRef.current.value
    const selectedItemIndex =
      data.findIndex((item) => item === selectedItem) - 1
    const prevItem = data[selectedItemIndex]
    const returnItem = prevItem || data[data.length - 1]

    onSelect(returnItem)
  }
  const handleNext = () => {
    const selectedItem = selectRef.current.value
    const selectedItemIndex =
      data.findIndex((item) => item === selectedItem) + 1
    const nextItem = data[selectedItemIndex]
    const returnItem = nextItem || data[0]

    onSelect(returnItem)
  }

  return (
    <Wrapper arrowColor={arrowColor} color={color}>
      <LeftArrow onClick={handlePrev}>
        <ArrowSVG />
      </LeftArrow>

      {data.length > 0 && (
        <select ref={selectRef} onChange={handleOnSelect} value={value}>
          {data.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}

      <RightArrow onClick={handleNext}>
        <ArrowSVG />
      </RightArrow>
    </Wrapper>
  )
}

DatePicker.defaultProps = defaultProps
DatePicker.propTypes = propTypes

export default memo(DatePicker)

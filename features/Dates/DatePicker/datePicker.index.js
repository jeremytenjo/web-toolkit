import React, { memo, useRef, useState, useEffect } from 'react'

import monthData from '../Utils/monthList'

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

const DatePicker = ({ arrowColor, onSelect, color, type, yearRange }) => {
  const selectRef = useRef(null)

  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const currentMonthString = monthData[currentMonth]
  const initData = type === 'month' ? monthData : []
  const initSelectedValue = type === 'month' ? currentMonthString : currentYear

  const [data, setData] = useState(initData)
  const [selectedValue, setselectedValue] = useState(initSelectedValue)

  useEffect(() => {
    type === 'year' && calcYearRange()
  }, [])

  const calcYearRange = () => {
    const years = []
    for (let i = 0; i < yearRange; i++) {
      years.push(Math.abs(i + 1 - currentYear).toString())
    }
    years.reverse()
    years.push(currentYear.toString())
    for (let i = 0; i < yearRange; i++) {
      years.push(Math.abs(i + 1 + currentYear).toString())
    }
    setData(years)
  }

  const handleOnSelect = ({ target: { value } }) => {
    setselectedValue(value)
    onSelect(value)
  }

  const handlePrev = () => {
    const selectedItem = selectRef.current.value
    const selectedItemIndex =
      data.findIndex((item) => item === selectedItem) - 1
    const prevItem = data[selectedItemIndex]
    const returnItem = prevItem || data[data.length - 1]

    setselectedValue(returnItem)
    onSelect(returnItem)
  }
  const handleNext = () => {
    const selectedItem = selectRef.current.value
    const selectedItemIndex =
      data.findIndex((item) => item === selectedItem) + 1
    const nextItem = data[selectedItemIndex]
    const returnItem = nextItem || data[0]

    setselectedValue(returnItem)
    onSelect(returnItem)
  }

  return (
    <Wrapper arrowColor={arrowColor} color={color}>
      <LeftArrow onClick={handlePrev}>
        <ArrowSVG />
      </LeftArrow>

      {data.length > 0 && (
        <select ref={selectRef} onChange={handleOnSelect} value={selectedValue}>
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

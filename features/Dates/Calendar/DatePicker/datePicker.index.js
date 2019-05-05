import React, { memo } from 'react'

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

const DatePicker = ({
  data,
  arrowColor,
  onSelect,
  onRightClick,
  onLeftClick,
}) => {
  const handleOnSelect = ({ target: { value } }) => {
    onSelect(value)
  }
  return (
    <Wrapper arrowColor={arrowColor}>
      <LeftArrow onClick={onLeftClick}>
        <ArrowSVG />
      </LeftArrow>

      <select onChange={handleOnSelect}>
        {data.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <RightArrow onClick={onRightClick}>
        <ArrowSVG />
      </RightArrow>
    </Wrapper>
  )
}

DatePicker.defaultProps = defaultProps
DatePicker.propTypes = propTypes

export default memo(DatePicker)

import React, { memo, Fragment, useState, useRef } from 'react'

import { defaultProps, propTypes } from './propTypes'
import { Wrapper, SelectStyle } from './styles'

const Select = ({
  data,
  initialValue,
  valueKey,
  labelKey,
  Item,
  onChange,
  ...itemProps
}) => {
  const selectedValueDefault = initialValue
    ? initialValue
    : data.length > 0 && valueKey === 'index'
    ? 1
    : data[0][valueKey] || 0
  const selectRef = useRef(null)
  const [selectedValue, setselectedValue] = useState(selectedValueDefault)

  const handleChange = () => {
    const {
      current: { value },
    } = selectRef
    setselectedValue(value)
    onChange(value)
  }

  return (
    <div style={Wrapper}>
      <select style={SelectStyle} ref={selectRef} onChange={handleChange}>
        {data.map((item, index) => {
          const value = valueKey === 'index' ? index + 1 : item[valueKey]
          const label = labelKey === 'index' ? index + 1 : item[labelKey]
          return (
            <Fragment key={index}>
              <option value={value}>{label}</option>
            </Fragment>
          )
        })}
      </select>
      <Item label={selectedValue} {...itemProps} />
    </div>
  )
}

Select.defaultProps = defaultProps
Select.propTypes = propTypes

export default memo(Select)

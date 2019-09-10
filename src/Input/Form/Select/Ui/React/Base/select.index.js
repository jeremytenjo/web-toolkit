import React, { memo, Fragment, useState, useRef } from 'react'

import { defaultProps, propTypes } from './select.propTypes'
import { Wrapper, SelectStyle } from './select.styles'

const Select = ({
  data,
  initialValue,
  valueKey,
  labelKey,
  Item,
  onChange,
  title,
}) => {
  const selectRef = useRef(null)
  const [selectedValue, setselectedValue] = useState(
    initialValue || data[0][valueKey],
  )
  const handleChange = () => {
    const newValue = selectRef.current.value
    setselectedValue(newValue)
    onChange(newValue)
  }

  return (
    <div style={Wrapper}>
      <select style={SelectStyle} ref={selectRef} onChange={handleChange}>
        {data.map((item, index) => (
          <Fragment key={index}>
            <option value={item[valueKey]}>{item[labelKey]}</option>
          </Fragment>
        ))}
      </select>
      <Item label={selectedValue} title={title} />
    </div>
  )
}

Select.defaultProps = defaultProps
Select.propTypes = propTypes

export default memo(Select)

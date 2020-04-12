import React, { useState, memo, useEffect } from 'react'

import Form from '../../../../input/form/'
import Box from '../../../box/index'
import Textfield from '../../../../input/form/textField/styles/1/index'
import Icon from '../../'
import Animation from '../../../../utils/animations/Web-Animations-API'

import { defaultProps, propTypes } from './propTypes'
import { Wrapper, WrapperInput } from './styles'

const IconSearch = ({
  mainIcon,
  closeIcon,
  backgroundColor,
  onSubmit,
  boxShadow,
  inputName,
  styles,
}) => {
  const [show, setShow] = useState(null)

  useEffect(() => {
    const inputEl = document.querySelector(`input[id=${inputName}]`)
    if (show) inputEl.focus()
    else inputEl.blur()
  }, [show])

  const toggleShow = () => setShow(!show)

  return (
    <Box styles={Wrapper}>
      <Box styles={WrapperInput}>
        <Animation show={show}>
          <Form onSubmitSuccess={onSubmit}>
            <Textfield name={inputName} placeholder='Search...' />
          </Form>
        </Animation>
      </Box>

      <Icon
        style={styles}
        onClick={toggleShow}
        name={show ? closeIcon : mainIcon}
        backgroundColor={backgroundColor}
        boxShadow={boxShadow}
      />
    </Box>
  )
}

IconSearch.defaultProps = defaultProps
IconSearch.propTypes = propTypes

export default memo(IconSearch)

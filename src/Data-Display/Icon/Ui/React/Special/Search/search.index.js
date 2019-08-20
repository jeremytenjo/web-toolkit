import React, { useState, memo } from 'react'

import Form from '../../../../../../Input/Form/Ui/React/form.index'
import Box from '../../../../../../Data-Display/Box/Ui/React/box.index'
import Textfield from '../../../../../../Input/Form/Text-Field/Ui/React/Styles/textfield.1.index'
import Icon from '../../Base/icon.index'
import Animation from '../../../../../../Misc-Utils/Animations/Web-Animations-API/animation.index'

import { defaultProps, propTypes } from './search.propTypes'
import { Wrapper, WrapperInput } from './search.styles'

const IconSearch = ({
  mainIcon,
  closeIcon,
  backgroundColor,
  onSubmit,
  boxShadow,
}) => {
  const [show, setShow] = useState(null)

  const toggleShow = () => setShow(!show)

  return (
    <Box {...Wrapper}>
      <Box {...WrapperInput}>
        <Animation show={show}>
          <Form onSubmitSuccess={onSubmit}>
            <Textfield name='query' placeholder={'Search...'} />
          </Form>
        </Animation>
      </Box>

      <Icon
        onClick={toggleShow}
        name={show ? closeIcon : mainIcon}
        backgroundColor={backgroundColor}
        background
        size={50}
        boxShadow={boxShadow}
      />
    </Box>
  )
}

IconSearch.defaultProps = defaultProps
IconSearch.propTypes = propTypes

export default memo(IconSearch)

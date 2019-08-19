import React, { memo } from 'react'

import Form from '../../../../../../Input/Form/Ui/React/form.index'
import Box from '../../../../../../Data-Display/Box/Ui/React/box.index'
import Textfield from '../../../../../../Input/Form/Text-Field/Ui/React/Styles/textfield.1.index'

import { defaultProps, propTypes } from './search.propTypes'
import { Wrapper, Other } from './search.styles'

const IconSearch = ({ onSubmitSuccess, icon, iconStyles }) => {
  return (
    <Wrapper>
      <Form onSubmitSuccess={onSubmitSuccess}>
        <Textfield name='query' placeholder={'Search...'} />
      </Form>
    </Wrapper>
  )
}

IconSearch.defaultProps = defaultProps
IconSearch.propTypes = propTypes

export default memo(IconSearch)

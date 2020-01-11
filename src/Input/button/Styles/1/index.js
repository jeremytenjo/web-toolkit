import React from 'react'
import styled from 'styled-components'

import Button from '../../base/button.base'
import { BaseWrapper, BaseButton, BaseLoadingCon } from '../../base/button.base.styles'

const Wrapper = styled(BaseWrapper)``
const StyledButton = styled(BaseButton)``
const LoadingCon = styled(BaseLoadingCon)``

export default (props) => (
  <Button
    Wrapper={Wrapper}
    StyledButton={StyledButton}
    LoadingCon={LoadingCon}
    {...props}
  />
)

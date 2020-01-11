import React, { memo } from 'react'

import { Wrapper } from './illustration.styles'

const Illustration = ({ children }) => <Wrapper>{children}</Wrapper>

export default memo(Illustration)

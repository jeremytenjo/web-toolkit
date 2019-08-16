import styled from 'styled-components'

import withMediaQueries from '../../../../Theme/MediaQuery/WithMediaQueries/withMediaQueries.index'

export const Wrapper = styled.div`
  ${({ mediaQueries, ...styles }) => withMediaQueries({ styles, mediaQueries })}
`

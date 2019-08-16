## with Media Query

#### Add to styled component

```js
import styled from 'styled-components'

import mediaQueries from '../../../../../.storybook/Theme/MediaQueries/mediaQueries'
import withMediaQueries from '../../../../Styling/Theme/MediaQuery/withMediaQueries.index'

export const Wrapper = styled.div`
  ${(styles) => withMediaQueries({ styles, mediaQueries })}
```

#### Usage

````js
 <Box
        backgroundColor={['secondary', 'primary']}
        justifyItems={['start', 'end']}
      >
        <h4>Featured</h4>
        <Icon name='search/material' color='primary' />
      </Box>```
````

##### How

`mediaQueries` exports an array [600, 800] (600 = min width, 800 min width) mobile first

backgroundColor={['secondary', 'primary']} `withMediaQueries` takes each value and assignes it to `mediaQueries` equivalent

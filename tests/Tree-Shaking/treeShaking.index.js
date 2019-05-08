import React, { memo } from 'react'

import { Calendar } from '../../build/index'

const Name = () => {
  return (
    <>
      TEST -TREE SHAKING!
      <Calendar />
    </>
  )
}

// webpack ./tests/Tree-Shaking/treeShaking.index.js -0 build-treeShaking

export default memo(Name)

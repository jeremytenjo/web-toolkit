import React, { memo, Fragment } from 'react'

import { Wrapper } from './list.styles'
import { defaultProps, propTypes } from './list.propTypes'

const List = ({
  data,
  direction,
  onItemClick,
  ItemComponent,
  listItemDefinitions,
  repeat,
  autoColumns,
  overflows,
  minWidth,
  repeatOnMinWidth,
  ...styles
}) => {
  const dataLength = data.length

  const loadNoItemComponent = () =>
    data.map((Item, index) => (
      <Fragment key={index}>
        <Item />
      </Fragment>
    ))

  const loadWithItemComponent = () =>
    data.map((item, index) => (
      <ItemComponent
        item={item}
        key={item._id || item.id || index}
        index={index}
        onClick={() => onItemClick({ item, index })}
        id={item._id || item.id || index}
        definitions={listItemDefinitions}
        {...item}
      />
    ))

  // Template
  return (
    <Wrapper
      direction={direction}
      dataLength={dataLength}
      repeat={repeat}
      autoColumns={autoColumns}
      overflows={overflows}
      minWidth={minWidth}
      repeatOnMinWidth={repeatOnMinWidth}
      {...styles}
    >
      {!ItemComponent && loadNoItemComponent()}
      {ItemComponent && loadWithItemComponent()}
    </Wrapper>
  )
}

List.defaultProps = defaultProps
List.propTypes = propTypes

export default memo(List)

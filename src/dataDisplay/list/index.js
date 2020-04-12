import React, { memo } from 'react'

import BottomScrollListener from '../../utils/scrolling/eventListeners/scrollEnd'

import { Wrapper } from './styles'
import { defaultProps, propTypes } from './propTypes'

const List = ({
  photoGrid,
  data,
  children,
  direction,
  onItemClick,
  ItemComponent,
  listItemDefinitions,
  repeat,
  autoColumns,
  overflows,
  minWidth,
  repeatOnMinWidth,
  onScrollEnd,
  ...styles
}) => {
  const dataLength = data.length
  children = Array.isArray(children) ? children : [children]

  const loadWithItemComponent = () =>
    data.map((item, index) => (
      <li key={item._id || item.id || index}>
        <ItemComponent
          item={item}
          index={index}
          onClick={() => onItemClick({ item, index })}
          id={item._id || item.id || index}
          definitions={listItemDefinitions}
          {...item}
        />
      </li>
    ))

  const Main = (scrollRef) => (
    <Wrapper
      ref={scrollRef}
      direction={direction}
      dataLength={dataLength}
      repeat={repeat}
      autoColumns={autoColumns}
      overflows={overflows}
      minWidth={minWidth}
      repeatOnMinWidth={repeatOnMinWidth}
      photoGrid={photoGrid}
      {...styles}
    >
      {children &&
        children.map((child, index) => <li key={children.length + index}>{child}</li>)}
      {ItemComponent && loadWithItemComponent()}
      {overflows && <li className='min' />}
    </Wrapper>
  )

  return onScrollEnd ? (
    <BottomScrollListener onBottom={onScrollEnd}>{Main}</BottomScrollListener>
  ) : (
    Main()
  )
}

List.defaultProps = defaultProps
List.propTypes = propTypes

export default memo(List)

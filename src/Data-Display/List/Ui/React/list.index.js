import React, { memo, Fragment } from 'react'

// Optinal Funcitons
import useEndScroll from '../../../../Misc-Utils/Scrolling/EventListeners/scrollingEventListeners.index'

import { Wrapper } from './list.styles'
import { defaultProps, propTypes } from './list.propTypes'

const List = ({
  data,
  direction,
  onScrollListEnd,
  onListItemClick,
  ItemComponent,
  listItemDefinitions,
  skeletonItemLength,
  listLoading,
  elToWatched,
  theme,
  repeat,
  autoColumns,
  onlyMobileStyle,
  mediaQuery,
  style,
  ...styles
}) => {
  const dataLength = data.length
  const thereIsData = dataLength > 0 || false

  // Optional Funcitons
  const hi = useEndScroll({ elToWatched, enabled: onScrollListEnd })
    ? onScrollListEnd()
    : null

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
        onClick={() => onListItemClick({ item, index })}
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
      onlyMobileStyle={onlyMobileStyle}
      style={style}
      mediaQuery={mediaQuery}
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

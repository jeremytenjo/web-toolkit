// Updates component when scrolled to the bottom
import React from 'react'
import BottomScrollListener from 'react-bottom-scroll-listener'

const Watcher = ({ children, onScrollEnd }) => {
  const callback = () => {
    console.log('dsfgsdfg')
  }

  return (
    <BottomScrollListener onBottom={callback}>
      {(scrollRef) => (
        <div ref={scrollRef} style={{ height: 200, overflow: 'scroll' }}>
          <p>djsfglsdhfgjsdf</p> <p>djsfglsdhfgjsdf</p> <p>djsfglsdhfgjsdf</p>{' '}
          <p>djsfglsdhfgjsdf</p> <p>djsfglsdhfgjsdf</p> <p>djsfglsdhfgjsdf</p>{' '}
          <p>djsfglsdhfgjsdf</p>
          Callback will be invoked when this container is scrolled to bottom.
        </div>
      )}
    </BottomScrollListener>
  )
}

export default Watcher

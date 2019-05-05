import React, { memo } from 'react'

import { defaultProps, propTypes } from './day.propTypes'
import { Wrapper, DayCon, StatusCon } from './day.styles'

const Day = ({
  number,
  isCurrentDay,
  activeColor,
  active,
  onClick,
  acceptedColor,
  pendingColor,
  rejectedColor,
  accepted,
  pending,
  rejected,
  grey,
}) => {
  const circleWidthHeight = 12
  const cicleCCyx = circleWidthHeight / 2
  const circleRadius = 3
  const handleClick = () => onClick(number)

  return (
    <Wrapper>
      <DayCon
        onClick={handleClick}
        isCurrentDay={isCurrentDay}
        active={active}
        activeColor={activeColor}
        grey={grey}
      >
        {number}
      </DayCon>

      <StatusCon>
        {accepted && (
          <svg height={circleWidthHeight} width={circleWidthHeight}>
            <circle
              cx={cicleCCyx}
              cy={cicleCCyx}
              r={circleRadius}
              fill={acceptedColor}
            />
          </svg>
        )}

        {pending && (
          <svg height={circleWidthHeight} width={circleWidthHeight}>
            <circle
              cx={cicleCCyx}
              cy={cicleCCyx}
              r={circleRadius}
              fill={pendingColor}
            />
          </svg>
        )}

        {rejected && (
          <svg height={circleWidthHeight} width={circleWidthHeight}>
            <circle
              cx={cicleCCyx}
              cy={cicleCCyx}
              r={circleRadius}
              fill={rejectedColor}
            />
          </svg>
        )}
      </StatusCon>
    </Wrapper>
  )
}

Day.defaultProps = defaultProps
Day.propTypes = propTypes

export default memo(Day)

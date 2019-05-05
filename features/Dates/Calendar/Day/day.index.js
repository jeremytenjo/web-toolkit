import React, { memo } from 'react'

import { defaultProps, propTypes } from './day.propTypes'
import { Wrapper, DayCon, StatusCon } from './day.styles'

const CircleIcon = ({ circleWidthHeight, cicleCCyx, circleRadius, color }) => (
  <svg height={circleWidthHeight} width={circleWidthHeight}>
    <circle cx={cicleCCyx} cy={cicleCCyx} r={circleRadius} fill={color} />
  </svg>
)

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
  const circleDefaultProps = {
    circleWidthHeight,
    cicleCCyx,
    circleRadius,
  }
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
          <CircleIcon {...circleDefaultProps} color={acceptedColor} />
        )}

        {pending && <CircleIcon {...circleDefaultProps} color={pendingColor} />}

        {rejected && (
          <CircleIcon {...circleDefaultProps} color={rejectedColor} />
        )}
      </StatusCon>
    </Wrapper>
  )
}

Day.defaultProps = defaultProps
Day.propTypes = propTypes

export default memo(Day)

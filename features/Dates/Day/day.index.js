import React, { memo } from 'react'

import { defaultProps, propTypes } from './day.propTypes'
import { Wrapper, DayCon, StatusCon } from './day.styles'

const CircleIcon = ({ circleWidthHeight, cicleCCyx, circleRadius, color }) => (
  <svg height={circleWidthHeight} width={circleWidthHeight}>
    <circle cx={cicleCCyx} cy={cicleCCyx} r={circleRadius} fill={color} />
  </svg>
)

const Day = ({
  statuses,
  number,
  isCurrentDay,
  activeColor,
  isActive,
  onClick,
  acceptedColor,
  pendingColor,
  rejectedColor,
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
  const statusColors = {
    accepted: acceptedColor,
    pending: pendingColor,
    rejected: rejectedColor,
  }

  const handleClick = () => onClick(number)

  return (
    <Wrapper>
      <DayCon
        onClick={handleClick}
        isCurrentDay={isCurrentDay}
        isActive={isActive}
        activeColor={activeColor}
        grey={grey}
      >
        {number}
      </DayCon>

      <StatusCon>
        {statuses.map((item) => (
          <CircleIcon
            {...circleDefaultProps}
            key={item}
            color={statusColors[item]}
          />
        ))}
      </StatusCon>
    </Wrapper>
  )
}

Day.defaultProps = defaultProps
Day.propTypes = propTypes

export default memo(Day)

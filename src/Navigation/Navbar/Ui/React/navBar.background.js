import React, { memo } from 'react'

const style = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: ' translate(-50%, -50%)',
  zIndex: -1,
  filter: 'drop-shadow(0px -4px 14px rgba(0, 0, 0, 0.06))',
}

const NavBarBackground = () => (
  <svg
    style={style}
    width='900'
    height='77'
    viewBox='0 0 900 77'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M899.5 67H451.648H1V18H401.899C406.317 18 409.811 21.6135 410.529 25.9731C413.817 45.9572 429.6 57 449 57C468.401 57 484.896 45.9559 488.342 25.9697C489.093 21.6156 492.584 18 497.003 18H899.5V67Z'
      fill='#fff'
      filter='url(#filter0_d)'
    />
    <defs>
      <filter
        id='filter0_d'
        x='-13'
        y='0'
        width='926.5'
        height='77'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='-4' />
        <feGaussianBlur stdDeviation='7' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
      </filter>
    </defs>
  </svg>
)

export default memo(NavBarBackground)

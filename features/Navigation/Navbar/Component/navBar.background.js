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
    width='440'
    height='77'
    viewBox='0 0 440 77'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_d)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M426 67H221.648H14V18H171.899C176.317 18 179.811 21.6135 180.529 25.9731C183.817 45.9572 199.6 57 219 57C238.401 57 254.896 45.9559 258.342 25.9697C259.093 21.6156 262.584 18 267.003 18H426V67Z'
        fill='white'
      />
    </g>
    <defs>
      <filter
        id='filter0_d'
        x='0'
        y='0'
        width='440'
        height='77'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='-4' />
        <feGaussianBlur stdDeviation='7' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
)

export default memo(NavBarBackground)

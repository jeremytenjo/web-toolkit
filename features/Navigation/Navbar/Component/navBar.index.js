import React, { memo, Fragment, useRef } from 'react'

import { Wrapper, IconCon, MainIconCon, Background } from './navBar.styles'
import { defaultProps, propTypes } from './navBar.propTypes'

const NavBar = ({
  data,
  wrapperStyle,
  router,
  defaultColor,
  activeColor,
  backgroundColor,
  labelStyle,
  opacity,
  onMainIconClick,
  onFileSelect,
  fontFamily,
}) => {
  const inputRef = useRef(null)
  const openLink = ({
    currentTarget: {
      dataset: { link },
    },
  }) => router(`/${link}`)
  const handleFIleUpload = async (e, file) => {
    const selectedFile = file || inputRef.current.files[0]
    if (typeof selectedFile === 'object') onFileSelect(selectedFile)
  }

  return (
    <Wrapper style={wrapperStyle} fontFamily={fontFamily}>
      <Background
        width='440'
        height='86'
        viewBox='0 0 440 86'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_d)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M426 76H221.648H14V18H171.899C176.317 18 179.801 21.6348 180.86 25.9244C184.826 41.9943 200.598 54 219.451 54C238.303 54 254.075 41.9943 258.041 25.9244C259.1 21.6348 262.584 18 267.003 18H426V76Z'
            fill='white'
          />
        </g>
        <defs>
          <filter
            id='filter0_d'
            x='0'
            y='0'
            width='440'
            height='86'
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
      </Background>
      {data.map(
        ({
          id,
          link,
          svg,
          label,
          mainIcon = null,
          mainIconShadow = null,
          fileInput = null,
        }) => {
          let isFocused = window.location.pathname
          isFocused = isFocused.split('/')
          isFocused = isFocused[1]
          isFocused = isFocused === link
          let color = isFocused ? activeColor : defaultColor

          return !mainIcon ? (
            <Fragment key={id}>
              <IconCon
                data-link={link}
                color={color}
                onClick={fileInput ? () => null : openLink}
                backgroundColor={backgroundColor}
                label={label}
              >
                {svg}
                {label && <span style={labelStyle}>{label}</span>}
                {fileInput && (
                  <input
                    ref={inputRef}
                    type='file'
                    accept='.jpg, .jpeg, .png'
                    onChange={handleFIleUpload}
                  />
                )}
              </IconCon>
            </Fragment>
          ) : (
            <MainIconCon
              activeColor={activeColor}
              mainIconShadow={mainIconShadow}
              onClick={onMainIconClick}
              key={id}
            >
              {svg}
              {fileInput && (
                <input
                  ref={inputRef}
                  type='file'
                  accept='.jpg, .jpeg, .png'
                  onChange={handleFIleUpload}
                />
              )}
            </MainIconCon>
          )
        },
      )}
    </Wrapper>
  )
}

NavBar.defaultProps = defaultProps
NavBar.propTypes = propTypes

export default memo(NavBar)

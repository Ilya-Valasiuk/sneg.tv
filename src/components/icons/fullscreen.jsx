import React from "react";

export function FullScreenIcon({ }) {
  return (
    <svg className="fullscreen-icon" xmlns='http://www.w3.org/2000/svg' width='34' height='34' fill='none'
      viewBox='0 0 34 34'>
      <path fill='#fff' fillRule='evenodd' d='M32 15V3a3 3 0 0 0-3-3H17v2h12a1 1 0 0 1 1 1v12h2zM2 15v12a3 3 0 0 0 3 3h12v-2H5a1 1 0 0 1-1-1V15H2z'
        clipRule='evenodd' filter='url(#a)' />
      <defs>
        <filter id='a' width='34' height='34' x='0' y='0' colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy='2' />
          <feGaussianBlur stdDeviation='1' />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
      </defs>
    </svg>
  );
}

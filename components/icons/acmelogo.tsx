import React from 'react';
import {Svg} from '../styles/svg';

export const AcmeLogo = () => (
   <Svg
      className=""
      fill="none"
      height="42"
      viewBox="0 0 32 32"
      width="42"
      xmlns="http://www.w3.org/2000/svg"
      css={{
         '& path': {
            fill: '$accents7',
         },
         'backgroundColor': '$background',
         'border': '1px solid $border',
         'borderRadius': '$xs',
      }}
   >
      <rect height="100%" rx="16" width="100%" />
      <path
         clipRule="evenodd"
         d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
         fill="currentColor"
         fillRule="evenodd"
      />
   </Svg>
);

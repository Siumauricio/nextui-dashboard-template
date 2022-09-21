import React from 'react';
import {Svg} from '../../styles/svg';

export const ViewIcon = () => {
   return (
      <Svg
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         css={{
            '& path': {
               fill: '$accents6',
            },
         }}
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 3H5C3.9 3 3 3.9 3 5V12C3 13.1 3.9 14 5 14H19C20.1 14 21 13.1 21 12V5C21 3.9 20.1 3 19 3ZM19 9H15.86C15.39 9 15.02 9.33 14.89 9.78C14.53 11.04 13.35 12 12 12C10.65 12 9.47 11.04 9.11 9.78C8.98 9.33 8.61 9 8.14 9H5V6C5 5.45 5.45 5 6 5H18C18.55 5 19 5.45 19 6V9ZM15.87 16H20C20.55 16 21 16.45 21 17V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V17C3 16.45 3.45 16 4 16H8.13C8.6 16 8.98 16.34 9.11 16.8C9.46 18.07 10.62 19 12 19C13.38 19 14.54 18.07 14.89 16.8C15.02 16.34 15.4 16 15.87 16Z"
            fill="#969696"
         />
      </Svg>
   );
};

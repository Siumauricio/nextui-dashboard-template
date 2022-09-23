import {CSS} from '@nextui-org/react';
import React from 'react';
import {Svg} from '../../styles/svg';

interface Props extends React.SVGAttributes<SVGElement> {
   css?: CSS;
}

export const ChevronUpIcon = ({css, ...props}: Props) => {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         {...props}
         css={{
            '& path': {
               fill: '$accents6',
            },
            ...css,
         }}
      >
         <Svg.Path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></Svg.Path>
      </Svg>
   );
};

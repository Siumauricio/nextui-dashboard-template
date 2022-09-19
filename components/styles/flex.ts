import {styled} from '@nextui-org/react';

export const Flex = styled('div', {
   boxSizing: 'border-box',
   display: 'flex',
   flexDirection: 'row',

   variants: {
      direction: {
         column: {
            flexDirection: 'column',
         },
         row: {
            flexDirection: 'row',
         },
      },
      justify: {
         center: {
            justifyContent: 'center',
         },
         start: {
            justifyContent: 'flex-start',
         },
         end: {
            justifyContent: 'flex-end',
         },
         between: {
            justifyContent: 'space-between',
         },
         around: {
            justifyContent: 'space-around',
         },
      },
      align: {
         center: {
            alignItems: 'center',
         },
         start: {
            alignItems: 'flex-start',
         },
         end: {
            alignItems: 'flex-end',
         },
         stretch: {
            alignItems: 'stretch',
         },
      },
      wrap: {
         wrap: {
            flexWrap: 'wrap',
         },
         nowrap: {
            flexWrap: 'nowrap',
         },
      },
   },
});

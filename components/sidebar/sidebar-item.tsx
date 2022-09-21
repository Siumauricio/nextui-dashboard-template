import {Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

interface Props {
   title: string;
   icon: React.ReactNode;
   isActive?: boolean;
}

export const SidebarItem = ({icon, title, isActive}: Props) => {
   return (
      <Flex
         css={{
            'gap': '$6',
            'minHeight': '44px',
            'height': '100%',
            'alignItems': 'center',
            'px': '$7',
            'borderRadius': '8px',
            'cursor': 'pointer',
            'transition': 'all 0.15s ease',
            '&:active': {
               transform: 'scale(0.98)',
            },
            ...(isActive
               ? {
                    'bg': '$blue200',
                    '& svg path': {
                       fill: '$blue600',
                    },
                 }
               : {'&:hover': {bg: '$accents2'}}),
         }}
         align={'center'}
      >
         {icon}
         <Text
            span
            weight={'normal'}
            size={'$base'}
            css={{
               color: '$accents9',
            }}
         >
            {title}
         </Text>
      </Flex>
   );
};

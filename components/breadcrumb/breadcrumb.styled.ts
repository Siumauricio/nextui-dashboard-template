import {Link, styled} from '@nextui-org/react';

export const Breadcrumbs = styled('ul', {
   listStyle: 'none',
   display: 'flex',
   gap: '$4',
   padding: 0,
   mx: 0,
});

export const CrumbLink = styled(Link, {
   color: '$accents8',
});

export const Crumb = styled('li', {
   'display': 'flex',
   'flexDirection': 'row',
   'alignItems': 'center',
   'gap': '$2',
   '&:last-of-type:after': {
      content: '',
      padding: 0,
   },

   '&:last-child': {
      '& > a': {
         color: '$accents9',
         cursor: 'default',
         pointerEvents: 'none',
      },
   },
});

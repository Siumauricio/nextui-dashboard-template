import {Avatar, Card, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

const pictureUsers = [
   'https://i.pravatar.cc/150?u=a042581f4e29026024d',
   'https://i.pravatar.cc/150?u=a042581f4e29026704d',
   'https://i.pravatar.cc/150?u=a04258114e29026702d',
   'https://i.pravatar.cc/150?u=a048581f4e29026701d',
   'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
];

export const CardAgents = () => {
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$accents0',
            height: '275px',
            borderRadius: '$xl',
            alignContent: 'center',
            justifyContent: 'center',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10', gap: '$4'}}>
            <Flex
               css={{
                  width: '100%',
               }}
               justify={'center'}
            >
               <Flex
                  align={'center'}
                  direction={'row'}
                  justify={'center'}
                  css={{
                     width: '150px',
                     border: '2.5px dashed $border',
                     borderRadius: '$base',
                  }}
               >
                  {'⭐'}
                  <Box>
                     <Flex direction={'column'}>
                        <Text h3 css={{margin: 0}}>
                           Agents
                        </Text>
                     </Flex>
                  </Box>
               </Flex>
            </Flex>
            <Flex css={{gap: '$6', py: '$4'}} align={'center'}>
               <Text span size={'$xs'}>
                  Meet your agenda and see their ranks to get the best results
               </Text>
            </Flex>
            <Flex css={{pt: '$4'}} align={'center'} justify={'center'}>
               <Avatar.Group count={12}>
                  {pictureUsers.map((url, index) => (
                     <Avatar
                        key={index}
                        size="lg"
                        pointer
                        src={url}
                        bordered
                        color="gradient"
                        stacked
                     />
                  ))}
               </Avatar.Group>
            </Flex>
         </Card.Body>
      </Card>
   );
};

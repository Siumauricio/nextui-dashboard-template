import React from 'react';

import {Text, Spacer, Card, Row, Button, Avatar} from '@nextui-org/react';
import {Box} from '../styles/box';
import dynamic from 'next/dynamic';
import {Flex} from '../styles/flex';
import {PaymentsIcon} from '../icons/sidebar/payments-icon';
import {Community} from '../icons/community';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
   ssr: false,
});

const state: ApexCharts.ApexOptions['series'] = [
   {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
   },
];
const options: ApexCharts.ApexOptions = {
   chart: {
      height: 350,
      type: 'area',
      toolbar: {
         show: false,
         tools: {
            zoomin: false,
            zoomout: false,
         },
      },
   },

   grid: {
      borderColor: 'var(--nextui-colors-border)',
   },
   dataLabels: {
      enabled: false,
   },
   xaxis: {
      type: 'datetime',
      categories: [
         '2018-09-19T00:00:00.000Z',
         '2018-09-19T01:30:00.000Z',
         '2018-09-19T02:30:00.000Z',
         '2018-09-19T03:30:00.000Z',
         '2018-09-19T04:30:00.000Z',
         '2018-09-19T05:30:00.000Z',
         '2018-09-19T06:30:00.000Z',
      ],
   },
   tooltip: {
      x: {
         format: 'dd/MM/yy HH:mm',
      },
   },
};

const pictureUsers = [
   'https://i.pravatar.cc/150?u=a042581f4e29026024d',
   'https://i.pravatar.cc/150?u=a042581f4e29026704d',
   'https://i.pravatar.cc/150?u=a04258114e29026702d',
   'https://i.pravatar.cc/150?u=a048581f4e29026701d',
   'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
];

export const Content = () => (
   <Flex
      css={{
         'gap': '$8',
         'pt': '$10',
         'flexWrap': 'wrap',
         '@lg': {
            flexWrap: 'nowrap',
         },
      }}
      justify={'center'}
   >
      <Flex
         css={{
            'px': '$12',
            'mt': '$8',
            '@xsMax': {px: '$10'},
            'gap': '$6',
         }}
         direction={'column'}
      >
         <Box>
            <Text
               h3
               css={{
                  'textAlign': 'center',
                  '@sm': {
                     textAlign: 'inherit',
                  },
               }}
            >
               Available Balance
            </Text>
            <Flex
               css={{
                  'gap': '$10',
                  'flexWrap': 'wrap',
                  'justifyContent': 'center',
                  '@sm': {
                     flexWrap: 'nowrap',
                  },
               }}
               direction={'row'}
            >
               <Card
                  css={{
                     mw: '375px',
                     bg: '$blue600',
                     borderRadius: '$xl',
                     px: '$6',
                  }}
               >
                  <Card.Body css={{py: '$10'}}>
                     <Flex css={{gap: '$5'}}>
                        <Community />
                        <Flex direction={'column'}>
                           <Text span css={{color: 'white'}}>
                              Auto Insurance
                           </Text>
                           <Text span css={{color: 'white'}} size={'$xs'}>
                              1311 Cars
                           </Text>
                        </Flex>
                     </Flex>
                     <Flex css={{gap: '$6', py: '$4'}} align={'center'}>
                        <Text
                           span
                           size={'$xl'}
                           css={{color: 'white'}}
                           weight={'semibold'}
                        >
                           $45,910
                        </Text>
                        <Text span css={{color: '$green600'}} size={'$xs'}>
                           + 4.5%
                        </Text>
                     </Flex>
                     <Flex css={{gap: '$12'}} align={'center'}>
                        <Box>
                           <Text
                              span
                              size={'$xs'}
                              css={{color: '$green600'}}
                              weight={'semibold'}
                           >
                              {'↓'}
                           </Text>
                           <Text span size={'$xs'} css={{color: '$white'}}>
                              100,930 USD
                           </Text>
                        </Box>
                        <Box>
                           <Text
                              span
                              size={'$xs'}
                              css={{color: '$red600'}}
                              weight={'semibold'}
                           >
                              {'↑'}
                           </Text>
                           <Text span size={'$xs'} css={{color: '$white'}}>
                              54,120 USD
                           </Text>
                        </Box>
                        <Box>
                           <Text
                              span
                              size={'$xs'}
                              css={{color: '$green600'}}
                              weight={'semibold'}
                           >
                              {'⭐'}
                           </Text>
                           <Text span size={'$xs'} css={{color: '$white'}}>
                              125 VIP
                           </Text>
                        </Box>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card
                  css={{
                     mw: '375px',
                     bg: '$accents0',
                     borderRadius: '$xl',
                     px: '$6',
                  }}
               >
                  <Card.Body css={{py: '$10'}}>
                     <Flex css={{gap: '$5'}}>
                        <Community color={'$accents9'} />
                        <Flex direction={'column'}>
                           <Text span css={{color: ''}}>
                              Healt Insurance
                           </Text>
                           <Text span size={'$xs'}>
                              +2400 People
                           </Text>
                        </Flex>
                     </Flex>
                     <Flex css={{gap: '$6', py: '$4'}} align={'center'}>
                        <Text span size={'$xl'} weight={'semibold'}>
                           $12,138
                        </Text>
                        <Text span css={{color: '$red600'}} size={'$xs'}>
                           + 4.5%
                        </Text>
                     </Flex>
                     <Flex css={{gap: '$12'}} align={'center'}>
                        <Box>
                           <Text
                              span
                              size={'$xs'}
                              css={{color: '$green600'}}
                              weight={'semibold'}
                           >
                              {'↓'}
                           </Text>
                           <Text span size={'$xs'}>
                              11,930 USD
                           </Text>
                        </Box>
                        <Box>
                           <Text
                              span
                              size={'$xs'}
                              css={{color: '$red600'}}
                              weight={'semibold'}
                           >
                              {'↑'}
                           </Text>
                           <Text span size={'$xs'}>
                              54,120 USD
                           </Text>
                        </Box>
                        <Box>
                           <Text
                              span
                              size={'$xs'}
                              css={{color: '$green600'}}
                              weight={'semibold'}
                           >
                              {'⭐'}
                           </Text>
                           <Text span size={'$xs'}>
                              150 VIP
                           </Text>
                        </Box>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card
                  css={{
                     mw: '375px',
                     bg: '$green600',
                     borderRadius: '$xl',
                     px: '$6',
                  }}
               >
                  <Card.Body css={{py: '$10'}}>
                     <Flex css={{gap: '$5'}}>
                        <Community />
                        <Flex direction={'column'}>
                           <Text span css={{color: 'white'}}>
                              Balance Insurance
                           </Text>
                           <Text span css={{color: 'white'}} size={'$xs'}>
                              1311 Cars
                           </Text>
                        </Flex>
                     </Flex>
                     <Flex css={{gap: '$6', py: '$4'}} align={'center'}>
                        <Text
                           span
                           size={'$xl'}
                           css={{color: 'white'}}
                           weight={'semibold'}
                        >
                           $3,910
                        </Text>
                        <Text span css={{color: '$red600'}} size={'$xs'}>
                           + 4.5%
                        </Text>
                     </Flex>
                     <Flex css={{gap: '$12'}} align={'center'}>
                        <Box>
                           <Text
                              span
                              size={'$xs'}
                              css={{color: '$red600'}}
                              weight={'semibold'}
                           >
                              {'↓'}
                           </Text>
                           <Text span size={'$xs'} css={{color: '$white'}}>
                              100,930 USD
                           </Text>
                        </Box>
                        <Box>
                           <Text
                              span
                              size={'$xs'}
                              css={{color: '$red600'}}
                              weight={'semibold'}
                           >
                              {'↑'}
                           </Text>
                           <Text span size={'$xs'} css={{color: '$white'}}>
                              54,120 USD
                           </Text>
                        </Box>
                        <Box>
                           <Text
                              span
                              size={'$xs'}
                              css={{color: '$green600'}}
                              weight={'semibold'}
                           >
                              {'⭐'}
                           </Text>
                           <Text span size={'$xs'} css={{color: '$white'}}>
                              125 VIP
                           </Text>
                        </Box>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
         </Box>

         <Text
            h3
            css={{
               'textAlign': 'center',
               '@lg': {
                  textAlign: 'inherit',
               },
            }}
         >
            Statistics
         </Text>
         <Box
            css={{
               width: '100%',
               boxShadow: '$lg',
               borderRadius: '$2xl',
               bg: '$accents0',
               px: '$10',
            }}
         >
            <ReactApexChart
               width={'100%'}
               options={options}
               series={state}
               type="area"
               height={350}
            />
         </Box>

         <Spacer y={1} />
      </Flex>
      <Box css={{'px': '$12', 'mt': '$8', '@xsMax': {px: '$10'}, 'gap': '$6'}}>
         <Text
            h3
            css={{
               'textAlign': 'center',
               '@lg': {
                  textAlign: 'inherit',
               },
            }}
         >
            Section
         </Text>
         <Flex
            direction={'column'}
            justify={'center'}
            css={{
               'gap': '$8',
               'flexDirection': 'row',
               'flexWrap': 'wrap',
               '@sm': {
                  flexWrap: 'nowrap',
               },
               '@lg': {
                  flexWrap: 'nowrap',
                  flexDirection: 'column',
               },
            }}
         >
            <Card
               css={{
                  mw: '350px',
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
                        Meet your agenda and see their ranks to get the best
                        results
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

            <Card
               css={{
                  mw: '375px',
                  height: '320px',
                  bg: '$accents0',
                  borderRadius: '$xl',
                  alignContent: 'center',
                  justifyContent: 'center',
                  px: '$6',
               }}
            >
               <Card.Body css={{py: '$10'}}>
                  <Flex css={{gap: '$5'}}>
                     <Community color={'$accents9'} />
                     <Flex direction={'column'}>
                        <Text span>Balance Insurance</Text>
                        <Text span size={'$xs'}>
                           1311 Cars
                        </Text>
                     </Flex>
                  </Flex>
                  <Flex css={{gap: '$6', py: '$4'}} align={'center'}>
                     <Text span size={'$xl'} weight={'semibold'}>
                        $3,910
                     </Text>
                     <Text span css={{color: '$red600'}} size={'$xs'}>
                        + 4.5%
                     </Text>
                  </Flex>
                  <Flex css={{gap: '$12'}} align={'center'}>
                     <Box>
                        <Text
                           span
                           size={'$xs'}
                           css={{color: '$red600'}}
                           weight={'semibold'}
                        >
                           {'↓'}
                        </Text>
                        <Text span size={'$xs'}>
                           100,930 USD
                        </Text>
                     </Box>
                     <Box>
                        <Text
                           span
                           size={'$xs'}
                           css={{color: '$red600'}}
                           weight={'semibold'}
                        >
                           {'↑'}
                        </Text>
                        <Text span size={'$xs'}>
                           54,120 USD
                        </Text>
                     </Box>
                     <Box>
                        <Text
                           span
                           size={'$xs'}
                           css={{color: '$green600'}}
                           weight={'semibold'}
                        >
                           {'⭐'}
                        </Text>
                        <Text span size={'$xs'}>
                           125 VIP
                        </Text>
                     </Box>
                  </Flex>
               </Card.Body>
            </Card>
         </Flex>
      </Box>
   </Flex>
);

import React from 'react';

import {Text, Spacer, Card, Row, Button} from '@nextui-org/react';
import {Box} from '../styles/box';
import dynamic from 'next/dynamic';
import {Flex} from '../styles/flex';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
   ssr: false,
});

const state = {
   series: [
      {
         name: 'series1',
         data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
         name: 'series2',
         data: [11, 32, 45, 32, 34, 52, 41],
      },
   ],
};
const options: ApexCharts.ApexOptions = {
   chart: {
      height: 350,
      type: 'area',
   },
   dataLabels: {
      enabled: false,
   },
   stroke: {
      curve: 'smooth',
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
export const Content = () => (
   <Box css={{'px': '$12', 'mt': '$8', '@xsMax': {px: '$10'}}}>
      <Flex css={{gap: '$10'}}>
         {/* <Card css={{mw: '300px'}}>
            <Card.Header>
               <Text b>Card Title</Text>
            </Card.Header>
            <Card.Body css={{py: '$10'}}>
               <Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
               </Text>
            </Card.Body>
            <Card.Footer>
               <Row justify="flex-end">
                  <Button size="sm" light>
                     Cancel
                  </Button>
                  <Button size="sm">Agree</Button>
               </Row>
            </Card.Footer>
         </Card>
         <Card css={{maxW: '250px'}}>
            <Card.Body>
               <Text span>Default card. (shadow)</Text>
            </Card.Body>
         </Card>
         <Card css={{maxW: '250px'}}>
            <Card.Body>
               <Text span>Default card. (shadow)</Text>
            </Card.Body>
         </Card>
         <Card css={{maxW: '250px'}}>
            <Card.Body>
               <Text span>Default card. (shadow)</Text>
            </Card.Body>
         </Card> */}
      </Flex>

      {/* <ReactApexChart
         options={options}
         series={state.series}
         type="area"
         height={350}
      /> */}

      <Spacer y={1} />
   </Box>
);

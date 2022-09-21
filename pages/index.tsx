import type {NextPage} from 'next';
import Head from 'next/head';
import {useTheme as useNextTheme} from 'next-themes';
import {Switch, useTheme} from '@nextui-org/react';
import {Layout} from '../components/layout/layout';
import {Content} from '../components/navbar/content';

const Home: NextPage = () => {
   return (
      <Layout>
         <Head>
            <title>Dashboard | Next UI</title>
            <meta name="description" content="Next UI Dashboard" />
         </Head>
         <Content />
      </Layout>
   );
};

export default Home;

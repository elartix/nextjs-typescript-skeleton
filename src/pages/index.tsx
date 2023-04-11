// outsource dependencies
import Head from 'next/head';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

// local dependencies
import { config } from '@/constants';
import { Index } from '@/modules/index';
import { BaseLayout } from '@/modules/layouts/base/BaseLayout';

// Configure
const inter = Inter({ subsets: ['latin'] });

export default function IndexPage () {
  return <>
    <Head>
      <title>Create Next App</title>
      <meta name="title" content="Create Next App" />
    </Head>
    <Index />
  </>;
}

IndexPage.getLayout = function getLayout (page: ReactNode) {
  return <BaseLayout className="home-page">{ page }</BaseLayout>;
};

export async function getStaticProps () {
  console.info(`> ${config('NAME')} - ${config('VERSION')} - ${config('SID')}`,);

  return { props: {} };
}

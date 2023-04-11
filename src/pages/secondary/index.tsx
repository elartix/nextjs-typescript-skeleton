import Head from 'next/head';
import { ReactNode } from 'react';

import { config } from '@/constants';
import { BaseLayout } from '@/modules/layouts/base/BaseLayout';
import { Secondary } from '@/modules/secondary';

export default function SecondaryPage () {
  return <>
    <Head>
      <title>Create Next App </title>
      <meta name="title" content="Secondary page of Next App" />
    </Head>
    <Secondary />
  </>;
}

SecondaryPage.getLayout = function getLayout (page: ReactNode) {
  return <BaseLayout className="home-page">{ page }</BaseLayout>;
};

export async function getStaticProps () {
  console.info(`> ${config('NAME')} - ${config('VERSION')} - ${config('SID')}`,);

  return { props: {} };
}

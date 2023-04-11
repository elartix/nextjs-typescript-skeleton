import Head from 'next/head';
import { useVH } from 'react-vh';
import { ReactNode } from 'react';
import { type AppLayoutProps, NextWebVitalsMetric } from 'next/app';

import '@/assets/styles/globals.scss';
import { config } from '@/constants';

export default function App ({ Component, pageProps }: AppLayoutProps) {
  useVH();
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return getLayout(<>
    <Head>
      <meta charSet="utf-8" />
      { /* NextJs Bug, viewport declaration should in App layer */ }
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
    </Head>
    <Component {...pageProps} />
  </>);
}

export function reportWebVitals (metric: NextWebVitalsMetric) {
  // eslint-disable-next-line no-console
  console.log('==> reportWebVitals env debug =', config.all());
  // eslint-disable-next-line no-console
  config('DEBUG', false) && metric.label === 'web-vital' && console.log(metric);
  // eslint-disable-next-line no-console
  config('DEBUG', false) && metric.label === 'custom' && console.log(metric);
}

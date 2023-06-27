import Head from 'next/head';
import { Store } from 'redux';
import { useVH } from 'react-vh';
import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { type AppLayoutProps, NextWebVitalsMetric } from 'next/app';

import '@/assets/styles/globals.scss';
import { config } from '@/constants';
import { wrapper } from '@/constants/store';
import { nextAppRootCtrl } from '@/modules/next-app-root.controller';


export default function NextAppRoot ({ Component, pageProps }: AppLayoutProps) {
  useVH();
  const { store, props } = wrapper.useWrappedStore(pageProps);

  // NOTE initialize root slice for each page - this slice not hydrated
  useEffect(() => { store.dispatch(nextAppRootCtrl.action.initialize()); }, [store]);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (<NextAppProviders store={store}>
    <Head>
      <meta charSet="utf-8" />
      { /* NextJs Bug, viewport declaration should in App layer */ }
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
    </Head>
    { getLayout(<Component {...pageProps} />) }
  </NextAppProviders>);
}

// eslint-disable-next-line func-style
const NextAppProviders = function({ children, store }: PropsWithChildren<{store: Store}>) {
  return <ReduxStoreProvider store={store}>
    { children }
  </ReduxStoreProvider>;
};

export function reportWebVitals (metric: NextWebVitalsMetric) {
  // eslint-disable-next-line no-console
  console.log('==> reportWebVitals env debug =', config.all());
  // eslint-disable-next-line no-console
  config('DEBUG', false) && metric.label === 'web-vital' && console.log(metric);
  // eslint-disable-next-line no-console
  config('DEBUG', false) && metric.label === 'custom' && console.log(metric);
}

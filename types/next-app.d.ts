import { ReactNode } from 'react';
import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
  export declare type NextLayoutComponentType<P = {}, IP = P> = NextComponentType<NextPageContext, any, IP, P > & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

declare module 'next/app' {
  export declare type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType<P>;
  };
}

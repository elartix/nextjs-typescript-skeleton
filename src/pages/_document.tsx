import { Html, Head, Main, NextScript } from 'next/document';

export default function Document () {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="%REACT_APP_DESCRIPTION%" />
        { /* Open Graph / Facebook */ }
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:title" content="%REACT_APP_TITLE%" />
        <meta property="og:description" content="%REACT_APP_DESCRIPTION%" />
        <meta property="og:image" content="/meta.jpg?v=%REACT_APP_VERSION%" />
        { /* Twitter */ }
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="/" />
        <meta property="twitter:title" content="%REACT_APP_TITLE%" />
        <meta property="twitter:description" content="%REACT_APP_DESCRIPTION%" />
        <meta property="twitter:image" content="/meta.jpg?v=%REACT_APP_VERSION%" />

        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=%REACT_APP_VERSION%" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=%REACT_APP_VERSION%" color="#ff902b" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=%REACT_APP_VERSION%" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=%REACT_APP_VERSION%" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png?v=%REACT_APP_VERSION%" />
        <link rel="shortcut icon" href="/favicon.ico?v=%REACT_APP_VERSION%" />
        <link rel="manifest" href="/manifest.webmanifest?v=%REACT_APP_VERSION%" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

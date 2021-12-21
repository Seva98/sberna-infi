import Head from 'next/head';
///import { HOME_OG_IMAGE_URL } from '../lib/constants';

export default function Meta() {
  return (
    <Head>
      <title>Sběrna Krmelín</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content="Sběrna Krmelín" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link href="/apple_splash_2048.png" sizes="2048x2732" rel="apple-touch-startup-image" />
      <link href="/apple_splash_1668.png" sizes="1668x2224" rel="apple-touch-startup-image" />
      <link href="/apple_splash_1536.png" sizes="1536x2048" rel="apple-touch-startup-image" />
      <link href="/apple_splash_1125.png" sizes="1125x2436" rel="apple-touch-startup-image" />
      <link href="/apple_splash_1242.png" sizes="1242x2208" rel="apple-touch-startup-image" />
      <link href="/apple_splash_750.png" sizes="750x1334" rel="apple-touch-startup-image" />
      <link href="/apple_splash_640.png" sizes="640x1136" rel="apple-touch-startup-image" />
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
    </Head>
  );
}

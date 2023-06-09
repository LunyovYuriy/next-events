import '../src/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../src/layouts/Layout/Layout';
import Head from 'next/head';
import { NotificationContextProvider } from '../src/context/NotificationContext/NotificationContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta
            name="description"
            content="Find a lot of great events that allow you to evolve..."
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

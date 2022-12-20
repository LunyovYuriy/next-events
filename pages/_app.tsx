import '../src/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../src/layouts/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

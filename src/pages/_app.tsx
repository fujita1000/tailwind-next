import 'tailwindcss/tailwind.css';
import '../styles/index.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main className='main'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
    </>
  );
}

export default MyApp;

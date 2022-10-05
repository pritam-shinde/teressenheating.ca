import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import "swiper/css/bundle";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { Footer, Header } from '../components/components';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp

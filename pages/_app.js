import { useEffect, useState } from 'react';
import Head from 'next/head';
import "swiper/css/bundle";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Footer, Header } from '../components/components';
import { Box } from '@mui/material';
import { ArrowCircleUp } from "@mui/icons-material"
import '../styles/globals.css'

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  const [scrollHeight, setScrollHeight] = useState()
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollHeight(window.scrollY)
    })
  }, [scrollHeight])

  const handleGoTOTop = () => {
    window.scrollTo(0, 0)
  }

  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="EyzpH-lXbXN8fg7XPxUm_lfNy29_AIRYbcgFqJbJ8Kw" />
    </Head>
    <Header />
          <Script id="google-tag-manager" strategy="afterInteractive">
      {
        `(function (w, d, s, l, i) {
          w[l] = w[l] || []; w[l].push({
            'gtm.start':
              new Date().getTime(), event: 'gtm.js'
          }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-TFB5PTT');`
      }
    </Script>

<noscript dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TFB5PTT"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
    <Component {...pageProps} />
    {
      scrollHeight > 100 ? <Box className='d-flex justify-content-center align-items-center rounded-circle' style={{ height: "3rem", width: "3rem", backgroundColor: "var(--red)", position: "fixed", right: "1%", bottom: "2%" }}>
        <button className='btn border-0 outline-none' onClick={handleGoTOTop}><ArrowCircleUp className='text-white' style={{ fontSize: "2rem !important" }} /></button>
      </Box> : null
    }
    <Footer />
  </>)
}

export default MyApp

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import "swiper/css/bundle";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { Footer, Header } from '../components/components';
import { Box } from '@mui/material';
import { ArrowCircleUp } from "@mui/icons-material"

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
      <script type="application/ld+json">
                {
                    JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Dentist",
                        "name": "Bayswater Dentist",
                        "image": "https://bayswaterdentist.com.au/img/logo.png",
                        "@id": "",
                        "url": "https://bayswaterdentist.com.au",
                        "telephone": "0395460011",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "664 Mountain Hwy",
                            "addressLocality": "Bayswater",
                            "addressRegion": "VIC",
                            "postalCode": "3153",
                            "addressCountry": "AU"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": -37.8422484,
                            "longitude": 145.2629995
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday"
                            ],
                            "opens": "10:00",
                            "closes": "18:00"
                        },
                        "sameAs": [
                            "https://www.facebook.com/Bayswater-Dentist-102893878969691",
                            "https://twitter.com/bayswaterdentst",
                            "https://www.instagram.com/bayswaterdentist/",
                            "https://www.pinterest.com.au/bayswaterdentist"
                        ]
                    })
                }
            </script>
    </Head>
    <Header />
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
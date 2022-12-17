import { useEffect, useState } from 'react';
import Head from 'next/head';
import "swiper/css/bundle";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Footer, Header } from '../components/components';
import { ArrowCircleUp } from "@mui/icons-material"
import '../styles/globals.css'
import Script from 'next/script'
import { Grid, Container, Box, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router'

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const [width, setWidth] = useState(601);
  const [scrollHeight, setScrollHeight] = useState()
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollHeight(window.scrollY)
    })
  }, [scrollHeight])

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  }, [width]);

  console.log(router.pathname);

  const handleGoTOTop = () => {
    window.scrollTo(0, 0)
  }

  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="EyzpH-lXbXN8fg7XPxUm_lfNy29_AIRYbcgFqJbJ8Kw" />
    </Head>
    <Header />

    <Script>
      {
        `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TFB5PTT');`
      }
    </Script>


    <Component {...pageProps} />
    {
      scrollHeight > 100 ? <Box className='d-flex justify-content-center align-items-center rounded-circle' style={{ height: "3rem", width: "3rem", backgroundColor: "var(--red)", position: "fixed", right: "1%", bottom: "2%" }}>
        <button className='btn border-0 outline-none' onClick={handleGoTOTop}><ArrowCircleUp className='text-white' style={{ fontSize: "2rem !important" }} /></button>
      </Box> : null
    }
    <section className='fixedButtons'>
      <Container maxWidth="xxl">
        <Grid container>
          <Grid item xs={12} md={10} className="mx-auto">
            <box p={3}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <Box p={2} className="d-flex">
                  {
                    router.pathname != '/contact-us' ? <Button p={3} variant="contained" fullWidth disableElevation size="large" startIcon={<CalendarMonthIcon />} style={{ backgroundColor: '#02599a', margin: '0.3rem' }}>
                    <Link href="/contact-us/" color="#fff">{width > 600 ? 'BOOK AN APPOINTMENT' : 'BOOK'}  </Link>
                  </Button> : null
                  }
                    
                    <Button variant="contained" fullWidth disableElevation size="large" startIcon={<PhoneIcon />} style={{ backgroundColor: '#D92C18', margin: '0.3rem' }}>
                      <Link href="tel:604-363-6622" color="#fff"> {width > 600 ? '604-363-6622 ' : 'CALL'}</Link>
                    </Button>
                    <Button variant="contained" fullWidth disableElevation size="large" startIcon={<QuestionAnswerIcon />} style={{ backgroundColor: '#357bb4', margin: '0.3rem' }} disabled>
                      <Link href="#" color="#fff"> {width > 600 ? 'CHAT LIVE NOW' : 'CHAT'}</Link>
                    </Button>
                  </Box>
                </Grid>

              </Grid>
            </box>
          </Grid>
        </Grid>
      </Container>
    </section>
    <Footer />
  </>)
}

export default MyApp
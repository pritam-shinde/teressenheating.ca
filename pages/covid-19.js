import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { AppointmentForm, CommonBanner } from '../components/components'
import Banner from '../public/covid/covivd-compressed.webp'
import BannerMob from '../public/covid/mob-compressed.webp'
import BannerTab from '../public/covid/tab-compressed.webp'

const Covid19 = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>
        <title>Covid - Airlinxheating.ca</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/covid19/" />
      </Head>
      <main>
        <CommonBanner bg={width > 992 ? Banner : width > 601 ? BannerTab : BannerMob} />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                      <Typography></Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <AppointmentForm />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Covid19
import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import { AppointmentForm, CommonBanner } from '../components/components'
import Family from '../public/home/testimonial.webp'
import Banner from '../public/write-review/review.webp'
import { BrandSlider, Locations, Testimonial } from '../sections/sections'

const WriteAReview = () => {
  return (
    <>
      <Head>
        <title>Leave Us a Review - Share Your Experience With Airlinx</title>
        <meta name="description" content="Your feedback helps us grow! Share your experience with Airlinx Heating and let us know how our heating, cooling, or repair services team helped you." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/write-a-review/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title="Write A Review" color="#fff" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Typography variant='h2' align='center'>You can write a review for Airlinx Ltd by <a href="https://g.page/r/CdlSgou1yAB-EBI/review">clicking Here</a></Typography>
                  <Box mt={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Image layout='responsive' src={Family} alt="family" className="img-fluid" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <AppointmentForm />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <Testimonial />
        <BrandSlider />
        <Locations />
      </main>
    </>
  )
}

export default WriteAReview
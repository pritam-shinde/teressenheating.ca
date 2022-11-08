import React from 'react'
import Head from 'next/head'
import { Box, Container, Grid, Typography } from '@mui/material'
import Banner from '../public/write-review/review.webp'
import { CommonBanner, AppointmentForm } from '../components/components'
import Family from '../public/home/testimonial.webp'
import Image from 'next/legacy/image'

const WriteAReview = () => {
  return (
    <>
      <Head>
        <title>Write a Review - teressenheating.ca</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/write-a-review/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title="Write A Review" color="#fff" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Typography variant='h2' align='center'><a href="#">You can write a review for Teressen Ltd by clicking Here</a></Typography>
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
      </main>
    </>
  )
}

export default WriteAReview
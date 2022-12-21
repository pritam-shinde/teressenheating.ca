import React from 'react'
import Head from 'next/head'
import { Box, Container, Grid, Typography } from '@mui/material'
import Banner from '../public/write-review/review.webp'
import { CommonBanner, AppointmentForm } from '../components/components'
import Family from '../public/home/testimonial.webp'
import Image from 'next/legacy/image'
import {BrandSlider, Locations, Testimonial} from '../sections/sections'

const WriteAReview = () => {
  return (
    <>
      <Head>
        <title>Write a Review - Heating & Cooling Services | Teressenheating </title>
        <meta name="description" content="If you're looking for a heating and cooling company, check out our Reviews, Ratings, and Cost Guide. We have the information you need to find the perfect HVAC. " />
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
                  <Typography variant='h2' align='center'>You can write a review for Teressen Ltd by <a href="https://g.page/r/CdlSgou1yAB-EBI/review">clicking Here</a></Typography>
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
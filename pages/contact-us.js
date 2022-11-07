import { Box, Container, Grid } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { Facilities, FaqAndForm } from '../sections/sections'
import Banner from '../public/contact/contact.webp'
import { CommonBanner } from '../components/components'

const ContactUs = () => {
  return (
    <>
    <Head>
    <title>Contact - teressenheating.ca</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/contact-us/" />
    </Head>
      <main>
      <CommonBanner bg={Banner} title="Contact" color="#fff" variant="h1" />
        <Facilities />
        <section>
          <Container maxWidth="xxl">
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <FaqAndForm address={true} addressBlackTitle="Get In" addressBlueTitle="Touch" form={true} addressVariant="h2" formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
              </Box>
            </Grid>
          </Container>
        </section>
        <section>
          <Container maxWidth="xxl" className='p-0'>
            <Box className='ratio ratio-16x9'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88991.81448584596!2d-105.79892280573817!3d54.117568645397384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sin!4v1665567069724!5m2!1sen!2sin" width="800" height="600" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
          </Container>
        </section>
      </main>
    </>
  )
}

export default ContactUs
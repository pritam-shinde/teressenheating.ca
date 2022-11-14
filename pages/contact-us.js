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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166655.30827522842!2d-123.2639867747921!3d49.2576507715125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sin!4v1668403508071!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
          </Container>
        </section>
      </main>
    </>
  )
}

export default ContactUs
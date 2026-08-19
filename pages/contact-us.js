import { Box, Container, Grid } from '@mui/material'
import Head from 'next/head'
import { CommonBanner } from '../components/components'
import Banner from '../public/contact/contact.webp'
import { Facilities, FaqAndForm } from '../sections/sections'

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact for Emergency Heating And Cooling Service​ - Airlinx</title>
        <meta name="description" content="Ready to upgrade your system or need a quick fix? Contact Airlinx Heating for top-tier AC installation, furnace repair, and maintenance services. Book Now." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/contact-us/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title="Contact" color="#fff" variant="h1" />
        <Facilities />
        <section>
          <Container maxWidth="xxl">
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <FaqAndForm address={true} addressBlackTitle="Get In" addressBlueTitle="Touch" form={true} addressVariant="h2" formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" />
              </Box>
            </Grid>
          </Container>
        </section>
        {/*    <section>
          <Container maxWidth="xxl" className='p-0'>
            <Box className='ratio ratio-16x9'>
            <Box position="relative">
              <a href="https://www.google.com/maps/place/3701+Hastings+St+Ste+201,+Burnaby,+BC+V5C+2H6,+Canada" target="_blank" rel="noreferrer">
                <Box style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, cursor: 'pointer' }}></Box>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.6859770496226!2d-123.02220399999999!3d49.281569999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548670c55ab2981b%3A0x1c3dfe02e4635069!2s3701%20Hastings%20St%20Ste%20201%2C%20Burnaby%2C%20BC%20V5C%202H6%2C%20Canada!5e1!3m2!1sen!2sin!4v1787116886968!5m2!1sen!2sin" width="100%" height="300px" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </a>
            </Box>
            </Box>
          </Container>
        </section> */}
      </main>
    </>
  )
}

export default ContactUs
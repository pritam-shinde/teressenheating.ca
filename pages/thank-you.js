import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import Head from 'next/head'
import Link from 'next/link'

const ThankYou = () => {
  return (
    <>
      <Head>
        <title>Thank You - Airlinx Furnace Heating & AC HVAC Ltd.</title>
        <meta name="description" content="Thank you for contacting Airlinx. We have received your request and will get back to you shortly." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://airlinxheating.ca/thank-you/" />
      </Head>
      <main>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="70vh"
          py={10}
          textAlign="center"
          bgcolor="#f8fafc"
        >
          <Container maxWidth="sm">
            <Box
              p={5}
              borderRadius={4}
              bgcolor="white"
              boxShadow="0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <CheckCircleOutlineIcon
                style={{ fontSize: '5rem', color: '#0076c0', marginBottom: '1.5rem' }}
              />
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                style={{ fontWeight: 700, color: 'var(--navy)', fontFamily: 'inherit' }}
              >
                Thank You!
              </Typography>
              <Typography
                variant="h6"
                style={{ color: '#475569', marginBottom: '2rem', fontWeight: 400, lineHeight: 1.6 }}
              >
                Your appointment request has been successfully submitted and saved. We've received your details and one of our HVAC experts will contact you shortly.
              </Typography>
              <Link href="/" passHref legacyBehavior>
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: '#0076c0',
                    color: 'white',
                    borderRadius: '50px',
                    padding: '0.75rem 2.5rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 118, 192, 0.3)'
                  }}
                >
                  Back to Homepage
                </Button>
              </Link>
            </Box>
          </Container>
        </Box>
      </main>
    </>
  )
}

export default ThankYou

import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import { BlueFilledBtn, CommonBanner } from '../components/components';
import Banner from '../public/blog/blog.webp';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Airlinx Heating</title>
        <meta name="description" content="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Return to Airlinx Heating homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title={<span className='text--black'>404 Not Found</span>} />
        <Container maxWidth="md">
          <Box py={10} textAlign="center">
            <Typography variant="h2" mb={3}>
              Oops! This page could not be found.
            </Typography>
            <Typography variant="body1" mb={4}>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </Typography>
            <BlueFilledBtn navlink={true} btnlink="/" btnTitle="Go to Homepage" />
          </Box>
        </Container>
      </main>
    </>
  );
}

import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { AppointmentForm, CommonBanner, SectionalHeading } from '../../components/components'
import Family from '../../public/home/testimonial.jpg'
import Image from 'next/image'
import Banner from '../../public/brand-page/brand.jpg'

const Brand = () => {
  const [hydration, setHydration] = useState(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      setHydration(true)
    } else {
      setHydration(false)
    }
  }, [])

  return (
    <>
      {
        hydration ? <>
          <Head>
            <title>Brand - teressenheating.ca</title>
            <meta name="description" content="" />
            <meta name="robots" content="index" />
            <link rel="canonical" href="/brand/" />
          </Head>
          <main>
            <CommonBanner bg={Banner} title="Brand" color="#fff" />
            <section>
              <Container maxWidth="xxl">
                <Grid container>
                  <Grid item xs={12} md={10} className="mx-auto">
                    <Box py={5}>
                      <SectionalHeading blacktext="Brands" blueText="We Carry" variant="h2" align="center" />
                      <Box mt={5}>
                        <Grid container spacing={3}>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2} className="border">
                            <Box>
                              <Image />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </section>
            <section>
              <Container maxWidth="xxl">
                <Grid container>
                  <Grid item xs={12} md={10} className="mx-auto">
                    <Box py={5}>
                      <Grid container spacing={5}>
                        <Grid item xs={12} md={6}>
                          <Box>
                            <SectionalHeading simpletext="Top-rated local expert to help with all of your home’s HVAC needs." variant="h2" />
                            <Typography className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                            <Typography className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                          </Box>
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
        </> : null
      }
    </>
  )
}

export default Brand
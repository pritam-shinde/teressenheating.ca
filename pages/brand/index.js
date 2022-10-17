import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { AppointmentForm, CommonBanner, SectionalHeading } from '../../components/components'
import Family from '../../public/home/testimonial.jpg'
import Image from 'next/image'
import Banner from '../../public/brand-page/brand.jpg'
import Brand1 from '../../public/brand-page/Layer-103.jpg'
import Brand2 from '../../public/brand-page/Layer-104.jpg'
import Brand3 from '../../public/brand-page/Layer-105.jpg'
import Brand4 from '../../public/brand-page/Layer-106.jpg'
import Brand5 from '../../public/brand-page/Layer-107.jpg'
import Brand6 from '../../public/brand-page/Layer-108.jpg'
import Brand7 from '../../public/brand-page/Layer-109.jpg'
import Brand8 from '../../public/brand-page/Layer-110.jpg'
import Brand9 from '../../public/brand-page/Layer-111.jpg'
import Brand10 from '../../public/brand-page/Layer-112.jpg'
import Brand11 from '../../public/brand-page/Layer-113.jpg'
import Brand12 from '../../public/brand-page/Layer-114.jpg'
import Brand13 from '../../public/brand-page/Layer-115.jpg'
import Brand14 from '../../public/brand-page/Layer-116.jpg'
import Brand15 from '../../public/brand-page/Layer-117.jpg'
import Brand16 from '../../public/brand-page/Layer-118.jpg'
import Brand17 from '../../public/brand-page/Layer-119.jpg'
import Brand18 from '../../public/brand-page/Layer-120.jpg'
import Brand19 from '../../public/brand-page/Layer-121.jpg'
import Brand20 from '../../public/brand-page/Layer-122.jpg'
import Brand21 from '../../public/brand-page/Layer-123.jpg'
import Brand22 from '../../public/brand-page/Layer-124.jpg'
import Brand23 from '../../public/brand-page/Layer-125.jpg'
import Brand24 from '../../public/brand-page/Layer-126.jpg'
import Brand25 from '../../public/brand-page/Layer-127.jpg'
import Brand26 from '../../public/brand-page/Layer-128.jpg'
import Brand27 from '../../public/brand-page/Layer-129.jpg'
import Brand28 from '../../public/brand-page/Layer-130.jpg'

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
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand1} alt="bryant" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand2} alt="tempstar" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand3} alt="heil" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand4} alt="keeprite" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand5} alt="Kenmore" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand6} alt="lennox" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand7} alt="Concord" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand8} alt="luxaire" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand9} alt="maytag" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand10} alt="navien" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand11} alt="payne" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand12} alt="rinnai" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand13} alt="Trane" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand14} alt="vissmann" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand15} alt="York" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand16} alt="Coleman" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand17} alt="aire-flo" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand18} alt="amana" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand19} alt="american-standard" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand20} alt="arcoaire" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand21} alt="armstrong" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand22} alt="carrier" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand23} alt="comfortmaker" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand24} alt="daikin" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand25} alt="day & night" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand26} alt="ameristar" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand27} alt="frigidaire" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand28} alt="Goodman" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={4} md={3} lg={2}>
                            <Box>
                              <Image src={Brand28} alt="Goodman" />
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
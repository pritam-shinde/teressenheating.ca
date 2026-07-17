import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'
import { AppointmentForm, CommonBanner, SectionalHeading } from '../components/components'
import Banner from '../public/brand-page/brand.webp'
import Brand1 from '../public/brand-page/Layer-103.webp'
import Brand2 from '../public/brand-page/Layer-104.webp'
import Brand3 from '../public/brand-page/Layer-105.webp'
import Brand4 from '../public/brand-page/Layer-106.webp'
import Brand5 from '../public/brand-page/Layer-107.webp'
import Brand6 from '../public/brand-page/Layer-108.webp'
import Brand7 from '../public/brand-page/Layer-109.webp'
import Brand8 from '../public/brand-page/Layer-110.webp'
import Brand9 from '../public/brand-page/Layer-111.webp'
import Brand10 from '../public/brand-page/Layer-112.webp'
import Brand11 from '../public/brand-page/Layer-113.webp'
import Brand12 from '../public/brand-page/Layer-114.webp'
import Brand13 from '../public/brand-page/Layer-115.webp'
import Brand14 from '../public/brand-page/Layer-116.webp'
import Brand15 from '../public/brand-page/Layer-117.webp'
import Brand16 from '../public/brand-page/Layer-118.webp'
import Brand17 from '../public/brand-page/Layer-119.webp'
import Brand18 from '../public/brand-page/Layer-120.webp'
import Brand19 from '../public/brand-page/Layer-121.webp'
import Brand20 from '../public/brand-page/Layer-122.webp'
import Brand21 from '../public/brand-page/Layer-123.webp'
import Brand22 from '../public/brand-page/Layer-124.webp'
import Brand23 from '../public/brand-page/Layer-125.webp'
import Brand24 from '../public/brand-page/Layer-126.webp'
import Brand25 from '../public/brand-page/Layer-127.webp'
import Brand26 from '../public/brand-page/Layer-128.webp'
import Brand27 from '../public/brand-page/Layer-129.webp'
import Brand28 from '../public/brand-page/Layer-130.webp'

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
      <Head>
        <title>HVAC Services Provider for all Brands - Airlinx Heating</title>
        <meta name="description" content="Airlinx Heating specializes in HVAC installation, repair, and maintenance services for major brands like Rheem, Carrier, Lennox, and Trane. Call today!" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/brand/" />
      </Head>

      <main>
        <CommonBanner bg={Banner} title="Brand" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <SectionalHeading blacktext="Brands" blueText="We Carry" variant="h2" align="center" className="fs-1" />
                  <Box mt={5}>
                    <Grid container spacing={3}>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Bryant Logo' src={Brand1} alt="Bryant Logo" width={150} height={60} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Tempstar Logo' src={Brand2} alt="Tempstar Logo" width={150} height={22} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Heil HVAC Logo' src={Brand3} alt="Heil HVAC Logo" width={150} height={52} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Keeprite Logo' src={Brand4} alt="Keeprite Logo" width={150} height={49} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Kenmore Logo' src={Brand5} alt="Kenmore Logo" width={150} height={32} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Lennox Logo' src={Brand6} alt="Lennox Logo" width={150} height={43} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Concord Logo' src={Brand7} alt="Concord Logo" width={150} height={33} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Luxaire Logo' src={Brand8} alt="Luxaire Logo" width={150} height={42} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Maytag Logo' src={Brand9} alt="Maytag Logo" width={150} height={57} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Navien Logo' src={Brand10} alt="Navien Logo" width={150} height={22} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Payne Logo' src={Brand11} alt="Payne Logo" width={70} height={70} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Rinnai Logo' src={Brand12} alt="Rinnai Logo" width={150} height={38} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Trane Logo' src={Brand13} alt="Trane Logo" width={142} height={48} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Viessmann Logo' src={Brand14} alt="Viessmann Logo" width={149} height={33} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='York Brand Logo' src={Brand15} alt="York Brand Logo" width={150} height={34} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Coleman Logo' src={Brand16} alt="Coleman Logo" width={150} height={49} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Aire Flo Logo' src={Brand17} alt="Aire Flo Logo" width={150} height={51} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Amana Logo' src={Brand18} alt="Amana Logo" width={150} height={39} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='American Standard Logo' src={Brand19} alt="American Standard Logo" width={150} height={68} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Arcoaire Logo' src={Brand20} alt="Arcoaire Logo" width={150} height={42} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Armstrong Logo' src={Brand21} alt="Armstrong Logo" width={150} height={35} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Carrier Logo' src={Brand22} alt="Carrier Logo" width={150} height={62} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Comfortmaker Logo' src={Brand23} alt="Comfortmaker Logo" width={150} height={25} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Daikin Logo' src={Brand24} alt="Daikin Logo" width={150} height={33} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Day & Night Logo' src={Brand25} alt="Day & Night Logo" width={64} height={70} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Ameristar Logo' src={Brand26} alt="Ameristar Logo" width={150} height={27} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Frigidaire Logo' src={Brand27} alt="Frigidaire Logo" width={150} height={19} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Box>
                          <Image title='Goodman Logo' src={Brand28} alt="Goodman Logo" width={150} height={40} />
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
                        <SectionalHeading simpletext="At Airlinx, we service all your brands." variant="h2" />
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>HVAC services</strong>} secondary="We help you with same-day service, on-time and reliable technicians, and free estimates for installation." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>24*7 emergency services</strong>} secondary="We help you with a wide range of services in different regions. You can get in touch with us for all kinds of HVAC work. So, call us at any point in time 24*7 without any stress or worry." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>We service all your brands</strong>} secondary="We do all your HVAC servicing work for all brands like Lennox, Rheem, Carrier, Godman, and American standards." />
                          </ListItem>
                        </List>
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

    </>
  )
}

export default Brand
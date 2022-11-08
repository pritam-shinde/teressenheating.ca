import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import React from 'react'
import { AppointmentForm, BlueFilledBtn, CommonBanner, SectionalHeading } from '../components/components'
import AirConditioner from '../public/service/air-conditioner.webp'
import { CheckCircleOutline } from '@mui/icons-material'
import { Appointment } from '../sections/sections'
import AcRepair from '../public/home/s3.webp'
import Banner from '../public/service/service-compressed.webp'
import Family from '../public/home/testimonial.webp'

const Service = () => {
  return (
    <>
      <Head>
        <title>HVAC Services - Heating & Cooling Services in Canada | Teressen</title>
        <meta name="description" content="Teressen Heating and Air Conditioning offer home comfort services in Canada. Our goal is to make sure you have a comfortable home no matter what the weather is outside. " />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/services/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title="HVAC Services" color="#fff" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Box mb={3}>
                    <Typography variant='h2' gutterBottom>Teressen Heating Ltd.</Typography>
                    <Typography variant="h3" gutterBottom>Your trusted expert for all your <span className='text--red'>heating</span> and <span className='text--blue'>cooling</span> services</Typography>
                    <Typography className='para'>Serving Canada, we repair and maintain nearly all makes, brands of furnaces, and models. If your model is kicking on and off frequently, or there is water coming from the model, then you need assistance. So, we are at your assistance. We have our maintenance plans that will help you with the best possible solutions.</Typography>
                  </Box>
                  <Box>
                    <SectionalHeading simpletext="Furnace repairs and installation services assured" variant="h2" />
                    <Typography className='para'>We provide you with our 90-Day Diagnostic Guarantee and repair guarantee. Our experts are always there for you to perform a brief investigation of your furnace and help you with the desired solution. We are also keen on giving you the best possible installation services of models or furnaces.</Typography>
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
                        <SectionalHeading simpletext="Air conditioning services and repair work is done with utmost care" variant="h2" />
                        <Box>
                          <Typography className='para'>We understand how humid and hot your city can get. That is why a high-performing, dependable AC unit is non-negotiable at your place or office. We have a team of expert technicians who are here 24*7 for your assistance with all your HVAC needs. Our services include:</Typography>
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="Air conditioning services and repair." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="Air conditioning maintenance services" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="Air conditioning installation services" />
                            </ListItem>
                          </List>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Image layout='responsive' src={AirConditioner} alt="Air conditioning services" title='Air conditioning services' />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <Appointment />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Image layout='responsive' src={AcRepair} alt="Teressen Expert Technician Cooling Service" title='Teressen Expert Technician Cooling Service' />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <SectionalHeading simpletext="When do you need an AC repair service?" variant="h2" />
                      <Typography className='para'>Yes, not every repair is an emergency, but there are times when you might not know. If your AC system is doing any of these things, then it&apos;s high time you should call us:</Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutline className='text--blue' />
                          </ListItemIcon>
                          <ListItemText primary="Presence of ice on the outdoor and indoor AC unit." />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutline className='text--blue' />
                          </ListItemIcon>
                          <ListItemText primary="Burning smell from the unit." />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutline className='text--blue' />
                          </ListItemIcon>
                          <ListItemText primary="Excess condensation happens at your indoor AC unit." />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutline className='text--blue' />
                          </ListItemIcon>
                          <ListItemText primary="Unusual sounds coming from your HVAC system." />
                        </ListItem>
                      </List>
                      <Typography className='para'>So, we are always here when you need us the most. Consult Teressen heating and air conditioning services today!</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='bg--grey'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <SectionalHeading simpletext="Teressen home heating services: We are just a call away" variant="h2" align="center" />
                  <Typography className='para' align="center">Winter weather in your city is brutal. Hence, you need a reliable home heating system to keep you warm and comfortable throughout the winter. At Teressen we are always there when you need us for whatever home heating problems you may have.</Typography>
                  <Box className='d-flex justify-content-center'>
                    <BlueFilledBtn navlink={true} btnlink={'/contact-us/'} btnTitle={'Make An Appointment'} />
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
                  <Box mb={3}>
                    <SectionalHeading simpletext="24*7 Heating services assured" variant="h2" />
                    <Typography className='para'>Teressen is proud to offer you the best possible services 24*7. In addition to this; we also provide a flexible weekday scheduling and Saturday is a regular working day for us to engage busy families. A Teressen employee will always answer your call. We never use an answering service to give you false hopes. After your call, we show up at your home as soon as possible to resolve any issue you might be facing.</Typography>
                  </Box>
                  <Box mb={3}>
                    <SectionalHeading simpletext=" Teressen Heating Ltd: Quality, Trust, and Affordability are assured!" variant="h2" />
                    <SectionalHeading simpletext="We provide you with the following heating services" variant="h3" />
                    <Box className='d-flex flex-md-row flex-column'>
                      <List className='p-0 m-0'>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutline className='text--blue' />
                          </ListItemIcon>
                          <ListItemText primary="Heating repairing services" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutline className='text--blue' />
                          </ListItemIcon>
                          <ListItemText primary="Furnace services are done" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutline className='text--blue' />
                          </ListItemIcon>
                          <ListItemText primary="Heating installation services" />
                        </ListItem>
                      </List>
                      <List className='p-0 m-0'>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutline className='text--blue' />
                          </ListItemIcon>
                          <ListItemText primary="Heating repairs are done right" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutline className='text--blue' />
                          </ListItemIcon>
                          <ListItemText primary="Boiler Repair & Installation Services" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutline className='text--blue' />
                          </ListItemIcon>
                          <ListItemText primary="Boiler services are made" />
                        </ListItem>
                      </List>
                    </Box>
                    <Typography className='para'>Unfortunately, the equipment at our home does not last forever. It can be because of strange noises, inconsistent weather or maybe some other reasons, our devices always need constant repairs. We understand your problem and help you to provide a quick diagnosis of your heating problems. Also, there are times when you need to get a new heating system. So, we are your comfort consultants who visit your home and provide you with the best possible solutions. We evaluate your home, size, and other factors to assist you with the best heating and air conditioning services.</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='bg-light'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Image layout='responsive' src={Family} alt="Happy Terseen Heating Customers" title='Happy Terseen Heating Customers' />
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

export default Service
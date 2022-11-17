import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Head from 'next/head'
import React, { useState } from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import Banner from '../public/career/career-bg.webp'

const Careers = () => {
  return (
    <>
      <Head>
        <title>Career - teressenheating.ca</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/career/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title="Career" color="#fff" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Box >
                    <Box mb={3}>
                      <SectionalHeading simpletext="Need a relevant job that suits your requirement? Work with us, we are hiring" variant="h2" />
                      <Typography className='para'>Teressen is one of the top employers of HVAC professionals across the world. So, if you are looking for a rewarding and stable work, then you can definitely get in touch with us.</Typography>
                    </Box>
                    <Box>
                      <SectionalHeading simpletext="Why us?" variant="h2" />
                      <Typography className='para'>Because we consider our employees part of our family. We work hard and are customer-centric who are willing to go that extra mile not only for you, but also for our co-workers too. We are also looking for people who would join our valuable team.</Typography>
                      <Typography className='para'>We proudly offer several industry-leading benefits and perks to our employees. So, that's indeed a reason to join us.</Typography>
                    </Box>
                    <Box mt={3}>
                      <SectionalHeading simpletext="Teressen: Grow to the fullest!" variant="h2" />
                      <Typography className='para'>Teressen takes care of its people. With an extensive professional development, competitive compensation and benefits, we have tremendous opportunities for you.</Typography>
                      <Typography className='para'>We look after our employees because they are the foundation of our success stories. Our company-centric approach provides them a free environment to work.</Typography>
                    </Box>
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
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <SectionalHeading blacktext="Opening" blueText="Position" variant="h2" />
                        <Box mt={3}>
                          <List>
                            {
                              ["HVAC Service Technician", "HVAC install Helpers", "Duct Cleaning Specialists", "Air Conditioner Technician", "Heating Technician", "HVAC install Helpers"].map(item => <ListItem key={item}>
                                <ListItemIcon>
                                  <CheckCircleOutline className='text--blue' />
                                </ListItemIcon>
                                <ListItemText primary={<strong>{item}</strong>} />
                              </ListItem>)
                            }
                          </List>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <SectionalHeading blacktext="Apply" blueText="Now" variant="h2" />
                        <Box mt={3}>
                          <form method='post' action='https://formsubmit.co/0bd1f7a3902b639d8def60c343479ba9' encType="multipart/form-data">
                            <div className='row'>
                              <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                  <input type="text" name="Firstname" className='form-control rounded-pill' placeholder='Firstname' required />
                                </div>
                              </div>
                              <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                  <input type="text" name="Lastname" className='form-control rounded-pill' placeholder='Lastname' required />
                                </div>
                              </div>
                              <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                  <input type="email" name="Email" className='form-control rounded-pill' placeholder='Email' required />
                                </div>
                              </div>
                              <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                  <input type="tel" name="Phone" className='form-control rounded-pill' placeholder='Phone No.' required />
                                </div>
                              </div>
                              <div className='col-12'>
                                <div className='form-group'>
                                  <input type="text" name="Applying_For" className='form-control rounded-pill' placeholder='Applying for' required />
                                </div>
                              </div>
                              <div className='col-12'>
                                <div className='form-group'>
                                  <label className="uploadFile">Upload Resume
                                    <input type="file" name="Resume" className='form-control rounded-pill d-none' placeholder='Upload Resume' required />
                                  </label>
                                </div>
                              </div>
                              <div className='col-12'>
                                <Button type="submit" className='blueFilledBtn text-white'>Submit</Button>
                              </div>
                            </div>
                          </form>
                        </Box>
                      </Box>
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

export default Careers
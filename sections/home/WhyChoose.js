import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Styles from '../../styles/Home.module.css'
import { BlueFilledBtn, SectionalHeading } from '../../components/components'

const WhyChoose = () => {
    return (
        <>
            <section className={`${Styles.whyChoose} mb-3`} id="whyChoose">
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container>
                                    <Grid item xs={12} lg={4} className="ms-md-auto">
                                        <Box>
                                            <SectionalHeading blacktext="Why" blueText="Choose Us" variant="h2" align="left" />
                                            <Typography className='para'>Our company has always earned a reputation as one of the leading and fastest-growing HVAC services in Canada. With our offices and service technicians in the major part of the world, we bring you a family-driven service to your doorstep.</Typography>
                                            <Typography className='para'>Starting as a small truck and a couple of guys type of company, we have now grown to be one of the leading and growing companies in Canada.</Typography>
                                            <Typography className='para'>Our people are passionate about taking good care of your needs in the fastest possible ways out. Our customer service representatives, installers, and service technicians stay ahead of updates in the ever-changing HVAC field. Teressen air conditioning and heating services come with no headache and no obligation consultation to determine the perfect system for your business and home.</Typography>
                                            <Box mt={3}>
                                                <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book An Appointment" />
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default WhyChoose
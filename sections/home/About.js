import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/legacy/image'
import React from 'react'
import { BlueFilledBtn } from '../../components/components'
import AboutImage from '../../public/home/about.webp'
import Styles from '../../styles/Home.module.css'

const About = () => {
    return (
        <>
            <section className={Styles.about}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <Box>
                                            <Image layout='responsive' src={AboutImage} alt="Teressen Trusted Heating and Cooling Services" title='Teressen Trusted Heating and Cooling Services'  />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box>
                                            <Typography variant='h1' className='text--black' gutterBottom>Teressen Heating Ltd.</Typography>
                                            <Typography variant="h2" className='trusted' gutterBottom>Your trusted expert for all your <span className='text--red'>heating</span> and <span className='text--blue'>cooling</span> services</Typography>
                                            <Typography className='para'>When it comes to HVAC services, like heating and air conditioning services, we, Teressen Heating Ltd are a name. We have expert technicians who assist you in giving the best advice on an on-site visit or help you with a free quotation for the installation system.</Typography>
                                            <Typography className='para'>When homemakers need reliable heating or air conditioning services, they do not have to think about whom to call. They directly call us to get the best possible guidance on their heating and air conditioning services. We are your premier HVAC service providers for a simple reason: our loyalty and expert guidance.</Typography>
                                            <Typography className='para'>Your trust has been our most important asset in giving you the best possible services. That is also one of the reasons why we back all our work with 100% customer satisfaction.</Typography>
                                            <Box mt={3}>
                                                <BlueFilledBtn btnlink="/about-us/" btnTitle="EXPLORE MORE" navlink={true} />
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

export default About
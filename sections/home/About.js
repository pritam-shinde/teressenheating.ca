import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BlueFilledBtn } from '../../components/components'
import AboutImage from '../../public/home/about.jpg'
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
                                    <Image src={AboutImage} alt="about" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box>
                                    <Typography variant='h1' className='text--black' gutterBottom>Teressen Heating Ltd.</Typography>
                                    <Typography className='text--blue'><strong>A trusted name in air conditioning and heating services</strong></Typography>
                                    <Typography className='para'>When it comes to HVAC services, like heating and air conditioning services, we, Teressen Heating Ltd are a name. We have expert technicians who assist you in giving the best advice on an on-site visit or help you with a free quotation for the installation system.</Typography>
                                    <Typography className='para'>When homemakers need reliable heating or air conditioning services, they do not have to think about whom to call. They directly call us to get the best possible guidance on their heating and air conditioning services We are your premier HVAC service providers for a simple reason: our loyalty and expert guidance.</Typography>
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
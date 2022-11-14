import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { BlueFilledBtn, SectionalHeading } from '../../components/components'
import Styles from '../../styles/HighlySkilled.module.css'

const HighlySkilled = () => {
    return (
        <>
            <section className={`${Styles.HighlySkilled} mt-3`}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} sm={10} md={8} lg={6} className="mx-auto">
                            <Box py={5}>
                                <SectionalHeading blacktext="Highly Skilled" blueText="Mechanics" variant="h2" align="center" />
                                <Box mt={3}>
                                    <Typography align='center' className='para'>If your heating system is not working, then we are here to figure out what is wrong. Our experts have finished extensive testing to earn HVAC's gold standard certification. It means that we can manage any heating repair. </Typography>
                                    <Typography align='center' className='para'>Teressen service experts have extensive knowledge to get all the repairs done right the first time. So, you can simply sit and relax and know more about furnace repairs which assure 100% customer satisfaction.</Typography>
                                    <Typography align='center' className='para'>It might happen that a majority of furnace meltdowns can be stopped through our right service. This also keeps your warranty intact and helps your furnace run more efficiently. During furnace maintenance, our technicians will examine, clean, and lubricate all the essential components which are required during furnace maintenance. It involves a heat exchanger, which can give off deadly carbon monoxide if cracks are not noticed. Hence, Teressen offers a wide range of HVAC services that will make it simple to keep up with maintenance.</Typography>
                                    <Typography className='para'>We have 24*7 servicing and repairs. With more than 20 years of work experience, we serve you with our quality and affordable services. So, call us today!</Typography>
                                </Box>
                                <Box mt={3} className="d-flex justify-content-center">
                                    <BlueFilledBtn navlink={true} btnTitle="Learn More About Us" btnlink="/about-us/" />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default HighlySkilled
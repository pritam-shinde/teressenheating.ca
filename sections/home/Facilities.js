import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Clock from '../../public/icons/24-hours.svg'
import Hand from '../../public/icons/hand.svg'
import Certificate from '../../public/icons/certificate-new.svg'
import Styles from '../../styles/Home.module.css'
import Image from 'next/legacy/image'

const Facilities = () => {
    return (
        <>
            <section>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} lg={4}>
                                    <Box p={3} className='d-flex flex-column align-items-center'>
                                            <Box mb={2} className={`${Styles.circle} p-4 shadow-lg`}>
                                                <Image layout='responsive' src={Certificate} alt="Certificate Logo" title='Certificate Logo' />
                                            </Box>
                                            <Typography variant='h4' className='text--grey' gutterBottom>Certified Dealer</Typography>
                                            <Typography className='para' align='center'>Trust, affordability, and quality are the pillars on which we work. Our certified dealers work 24*7 especially to serve you better.</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4}>
                                        <Box p={3} className='d-flex flex-column align-items-center'>
                                            <Box mb={2} className={`${Styles.circle} p-4 shadow-lg`}>
                                                <Image layout='responsive' src={Clock} alt="24 hours Logo" title='24 hours Logo' />
                                            </Box>
                                            <Typography variant='h4' className='text--grey' gutterBottom>Request A Service Call</Typography>
                                            <Typography className='para' align='center'>If you are facing any heating-related issues, then request a service call. We are here for your assistance and will give you the best of everything.</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4}>
                                        <Box p={3} className='d-flex flex-column align-items-center'>
                                            <Box mb={2} className={`${Styles.circle} p-4 shadow-lg`}>
                                                <Image layout='responsive' src={Hand} alt="Financing Logo" title='Financing Logo' />
                                            </Box>
                                            <Typography variant='h4' className='text--grey' gutterBottom>Need Financing?</Typography>
                                            <Typography className='para' align='center'>If you need financing aid, we are there for your service. So, don&apos;t worry and leave all your worries to us. We will make your day better!</Typography>
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

export default Facilities
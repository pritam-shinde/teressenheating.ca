import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Clock from '../../public/icons/24-hours.svg'
import Hand from '../../public/icons/hand.svg'
import Certificate from '../../public/icons/certificate-new.svg'
import Styles from '../../styles/Home.module.css'

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
                                                <img src={Certificate.src} alt="certificate" />
                                            </Box>
                                            <Typography variant='h4' className='text--grey' gutterBottom>Certified Dealer</Typography>
                                            <Typography className='para' align='center'>Pellentesque non quam porttitor condimentum condimentum ut sed</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4}>
                                        <Box p={3} className='d-flex flex-column align-items-center'>
                                            <Box mb={2} className={`${Styles.circle} p-4 shadow-lg`}>
                                                <img src={Clock.src} alt="clock" />
                                            </Box>
                                            <Typography variant='h4' className='text--grey' gutterBottom>Request A Service Call</Typography>
                                            <Typography className='para' align='center'>Pellentesque non quam porttitor condimentum condimentum ut sed</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4}>
                                        <Box p={3} className='d-flex flex-column align-items-center'>
                                            <Box mb={2} className={`${Styles.circle} p-4 shadow-lg`}>
                                                <img src={Hand.src} alt="hand" />
                                            </Box>
                                            <Typography variant='h4' className='text--grey' gutterBottom>Need Financing?</Typography>
                                            <Typography className='para' align='center'>Pellentesque non quam porttitor condimentum condimentum ut sed</Typography>
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
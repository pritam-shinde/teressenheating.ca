import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Styles from '../../styles/Home.module.css'

const Hero = () => {
    return (
        <>
            <section>
                <Container maxWidth="xxl" className={`${Styles.hero} d-flex justify-content-center align-items-center`}>
                    <Box>
                        <Typography className={Styles.bannerText} align="center">Quality, Trust, and Affordability!</Typography>
                    </Box>
                </Container>
            </section>
        </>
    )
}

export default Hero
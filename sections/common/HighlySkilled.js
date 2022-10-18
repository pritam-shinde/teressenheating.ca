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
                                    <Typography align='center' className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel elit nulla. Mauris et porttitor nulla, vel ornare velit. Nunc tristique, neque sit amet maximus sollicitudin, neque dui sollicitudin quam, et dapibus leo eros at ex. maximus sollicitudin, neque</Typography>
                                    <Typography align='center' className='para'>Integer vulputate augue nec ultrices feugiat. Donec in tristique neque. Curabitur pretium nisl nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec cursus feugiat dictum. Etiam eleifend tortor id libero pellentesque dignissim. Ut sit amet elit in orci auctor suscipit at in ante.</Typography>
                                    <Typography align='center' className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel elit nulla. Mauris et porttitor nulla, vel ornare velit. Nunc tristique, neque sit amet maximus sollicitudin, neque dui sollicitudin quam, et dapibus leo eros at ex. maximus sollicitudin, neque</Typography>
                                    <Typography align='center' className='para'>Integer vulputate augue nec ultrices feugiat. Donec in tristique neque. Curabitur pretium nisl nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec cursus feugiat dictum. Etiam eleifend tortor id libero pellentesque dignissim. Ut sit amet elit in orci auctor suscipit at in ante.</Typography>
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
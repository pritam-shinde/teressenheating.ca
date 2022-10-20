import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { BlueFilledBtn, SectionalHeading } from '../../components/components'
import Styles from '../../styles/PopularService.module.css'

const PopularService = ({color}) => {
    return (
        <>
            <section className={`${Styles.PopularService} mt-3`}>
                <Container maxWidth="xxl" style={{ height: "inherit" }}>
                    <Grid container style={{ height: "inherit" }}>
                        <Grid item xs={12} md={10} className="mx-auto" style={{ height: "inherit" }}>
                            <Box style={{ height: "inherit" }}>
                                <Grid container style={{ height: "inherit" }}>
                                    <Grid item xs={12} sm={10} md={8} className="me-start d-flex align-items-center" style={{ height: "inherit" }}>
                                        <Box>
                                            <Typography className={Styles.head}>WE PROVIDE <span className={color == "red" ? 'text--red' : color == 'blue' ? 'text--blue' : null}>MOST POPULAR REPAIR SERVICES</span></Typography>
                                            <Box mt={3}>
                                                <BlueFilledBtn navlink={true} btnlink="/contact/" btnTitle="Book An Appointment" />
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

export default PopularService
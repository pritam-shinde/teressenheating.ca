import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Styles from "../../styles/FeaturedCoolingService.module.css"
import { SectionalHeading } from '../../components/components'
import Link from 'next/link'
import Service1 from '../../public/featuareCoolingService/c1.png'
import Service2 from '../../public/featuareCoolingService/c2.png'
import Service3 from '../../public/featuareCoolingService/c3.png'
import Image from 'next/image'

const FeaturedCoolingServices = () => {
    return (
        <>
            <section className={Styles.FeaturedCoolingService}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={6} className="mx-auto">
                            <Box py={5}>

                                <SectionalHeading variant="h2" simpletext="We Provide Superior AC Service" align="center"  />
                                <SectionalHeading variant="h3" simpletext="Cooling ,Installation, Repair, Maintenance Services" align="center" />
                                <Box mt={5}>
                                    <Grid container spacing={3}>

                                        <Grid item xs={12} md={4}>
                                            <Box className="d-flex flex-column align-items-center">
                                                <Box className='d-flex justify-content-center' style={{ height: "12rem" }}>
                                                    <Link legacyBehavior={true} href="/">
                                                        <a className="coolingIcon">
                                                            <Image  src={Service1} alt="Installation Logo" title='Installation Logo' className='img-fluid' />
                                                        </a>
                                                    </Link>
                                                </Box>
                                                <Box>
                                                    <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link legacyBehavior={true} href="/"><a className='text-white'>Installation</a></Link></strong></Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Box className="d-flex flex-column align-items-center">
                                                <Box className='d-flex justify-content-center' style={{ height: "12rem" }}>
                                                    <Link legacyBehavior={true} href="/">
                                                        <a className="coolingIcon">
                                                            <Image  src={Service2} title="Repair Logo" alt="Repair Logo" className='img-fluid' />
                                                        </a>
                                                    </Link>
                                                </Box>
                                                <Box>
                                                    <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link legacyBehavior={true} href="/"><a className='text-white'>Repair</a></Link></strong></Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Box className="d-flex flex-column align-items-center">
                                                <Box className='d-flex justify-content-center' style={{ height: "12rem" }}>
                                                    <Link legacyBehavior={true} href="/">
                                                        <a className="coolingIcon">
                                                            <Image  src={Service3} title="Maintanance Logo" alt="Maintanance Logo" className='img-fluid' />
                                                        </a>
                                                    </Link>
                                                </Box>
                                                <Box>
                                                    <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link legacyBehavior={true} href="/"><a className='text-white'>Maintanance</a></Link></strong></Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default FeaturedCoolingServices
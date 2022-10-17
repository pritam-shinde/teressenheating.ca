import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Styles from "../../styles/FeaturedHeatingServices.module.css"
import { SectionalHeading } from '../../components/components'
import Link from 'next/link'
import Furnace from '../../public/featuredheatingservice/furnace.png'
import Boiler from '../../public/featuredheatingservice/boiler.png'
import Fireplace from '../../public/featuredheatingservice/fireplace.png'
import HeatPump from '../../public/featuredheatingservice/heat-pump.png'
import Image from 'next/image'

const FeaturedHeatingServices = () => {
    return (
        <>
            <section className={Styles.FeaturedHeatingServices}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={5}>
                                <SectionalHeading variant="h2" simpletext="Featured Heating Services" align="center" />
                                <SectionalHeading variant="h3" simpletext="Heating Installation, Maintenance & Repair Services" align="center" />
                                <Box mt={5}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={6} md={3}>
                                            <Box>
                                                <Box className='d-flex justify-content-center' style={{height:"16rem"}}>
                                                    <Link href="/furnace/">
                                                        <a>
                                                            <Image src={Furnace} alt="Furnace" />
                                                        </a>
                                                    </Link>
                                                </Box>
                                                <Box>
                                                    <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link href="/furnace/"><a className='text-white'>Furnace</a></Link></strong></Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Box>
                                                <Box className='d-flex justify-content-center' style={{height:"16rem"}}>
                                                    <Link href="/boilers/">
                                                        <a>
                                                            <Image src={Boiler} alt="Boiler" />
                                                        </a>
                                                    </Link>
                                                </Box>
                                                <Box>
                                                    <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link href="/boilers/"><a className='text-white'>Boiler</a></Link></strong></Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Box>
                                                <Box className='d-flex justify-content-center' style={{height:"16rem"}}>
                                                    <Link href="/heat-pump/">
                                                        <a>
                                                            <Image src={HeatPump} alt="Heat-pump" />
                                                        </a>
                                                    </Link>
                                                </Box>
                                                <Box>
                                                    <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link href="/heat-pump/"><a className='text-white'>Heat Pump</a></Link></strong></Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Box>
                                                <Box className='d-flex justify-content-center' style={{height:"16rem"}}>
                                                    <Link href="/fireplace/">
                                                        <a>
                                                            <Image src={Fireplace} alt="fireplace" />
                                                        </a>
                                                    </Link>
                                                </Box>
                                                <Box>
                                                    <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link href="/fireplace/"><a className='text-white'>Fireplace</a></Link></strong></Typography>
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

export default FeaturedHeatingServices
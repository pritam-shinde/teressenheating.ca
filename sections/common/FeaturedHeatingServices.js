import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Styles from "../../styles/FeaturedHeatingServices.module.css"
import { SectionalHeading } from '../../components/components'
import Link from 'next/link'
import Furnace from '../../public/featuredheatingservice/furnace.png'
import Boiler from '../../public/featuredheatingservice/boiler.png'
import Fireplace from '../../public/featuredheatingservice/fireplace.png'
import HeatPump from '../../public/featuredheatingservice/heat-pump.png'
import Image from 'next/image'

const FeaturedHeatingServices = () => {
    const [width, setWidth] = useState();

    useEffect(()=>{
        setWidth(window.innerWidth)
    },[])

    return (
        <>
            <section className={`${Styles.FeaturedHeatingServices} mt-3`} id="FeaturedHeatingServices">
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
                                                <Box className='d-flex justify-content-center' style={{height:width < 720 ? "auto" :"14rem"}}>
                                                    <Link legacyBehavior={true} href="/furnace/">
                                                        <a className='heatingLogo'>
                                                            <Image layout='responsive'  src={Furnace} alt="Furnace Logo" title='Furnace Logo' />
                                                        </a>
                                                    </Link>
                                                </Box>
                                                <Box>
                                                    <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link legacyBehavior={true} href="/furnace/"><a className='text-white'>Furnace</a></Link></strong></Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Box>
                                                <Box className='d-flex justify-content-center' style={{height:width < 720 ? "auto" :"14rem"}}>
                                                    <Link legacyBehavior={true} href="/boilers/">
                                                        <a className='heatingLogo'>
                                                            <Image layout='responsive'  src={Boiler} alt="Boiler Logo" title='Boiler Logo' />
                                                        </a>
                                                    </Link>
                                                </Box>
                                                <Box>
                                                    <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link legacyBehavior={true} href="/boilers/"><a className='text-white'>Boiler</a></Link></strong></Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Box>
                                                <Box className='d-flex justify-content-center' style={{height:width < 720 ? "auto" :"14rem"}}>
                                                    <Link legacyBehavior={true} href="/heat-pump/">
                                                        <a className='heatingLogo'>
                                                            <Image layout='responsive'  src={HeatPump} alt="Heat Pump Logo" title='Heat Pump Logo' />
                                                        </a>
                                                    </Link>
                                                </Box>
                                                <Box>
                                                    <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link legacyBehavior={true} href="/heat-pump/"><a className='text-white'>Heat Pump</a></Link></strong></Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Box>
                                                <Box className='d-flex justify-content-center' style={{height:width < 720 ? "auto" :"14rem"}}>
                                                    <Link legacyBehavior={true} href="/fireplace/">
                                                        <a className='heatingLogo'>
                                                            <Image layout='responsive'  src={Fireplace} alt="Fireplace Logo" title='Fireplace Logo' />
                                                        </a>
                                                    </Link>
                                                </Box>
                                                <Box>
                                                    <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link legacyBehavior={true} href="/fireplace/"><a className='text-white'>Fireplace</a></Link></strong></Typography>
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
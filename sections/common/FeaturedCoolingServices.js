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
                    
                        <SectionalHeading variant="h2" simpletext="We Provide Superior AC Service" align="center"/>
                        <SectionalHeading variant="h3" simpletext="Cooling ,Installation, Repair, Maintenance Services" align="center" />
                        <Box mt={5}>
                            <Grid container spacing={3}>
                           
                                <Grid item xs={12} md={4}>
                                    <Box>
                                        <Box className='d-flex justify-content-center' style={{height:"16rem"}}>
                                            <Link href="/">
                                                <a>
                                                    <Image src={Service1} alt="Intallation" />
                                                </a>
                                            </Link>
                                        </Box>
                                        <Box>
                                            <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link href="/"><a className='text-white'>Installation</a></Link></strong></Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box>
                                        <Box className='d-flex justify-content-center' style={{height:"16rem"}}>
                                            <Link href="/">
                                                <a>
                                                    <Image src={Service2} alt="Repair" />
                                                </a>
                                            </Link>
                                        </Box>
                                        <Box>
                                            <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link href="/"><a className='text-white'>Repair</a></Link></strong></Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box>
                                        <Box className='d-flex justify-content-center' style={{height:"16rem"}}>
                                            <Link href="/">
                                                <a>
                                                    <Image src={Service3} alt="maintenance"/>
                                                </a>
                                            </Link>
                                        </Box>
                                        <Box>
                                            <Typography align='center'><strong style={{ fontSize: "1.5rem" }} ><Link href="/"><a className='text-white'>Maintanance</a></Link></strong></Typography>
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
import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Styles from "../../styles/FeaturedHeatingServices.module.css"
import { BlueFilledBtn, SectionalHeading } from '../../components/components'
import Link from 'next/link'
import Furnace from '../../public/featuredheatingservice/furnace.png'
import Boiler from '../../public/featuredheatingservice/boiler.png'
import Fireplace from '../../public/featuredheatingservice/fireplace.png'
import HeatPump from '../../public/featuredheatingservice/heat-pump.png'
import Image from "next/image"

const FeaturedHeatingServices = ({ title, subTitle, bannerText, btnTitle, btnLink, balancedLogos }) => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    const heatingItems = [
        { href: "/furnace/", src: Furnace, name: "Furnace", alt: "Furnace Logo", heightDesktop: "115px", heightMobile: "75px" },
        { href: "/boilers-service/", src: Boiler, name: "Boiler", alt: "Boiler Logo", heightDesktop: "115px", heightMobile: "75px" },
        { href: "/heat-pump/", src: HeatPump, name: "Heat Pump", alt: "Heat Pump Logo", heightDesktop: "105px", heightMobile: "70px" },
        { href: "/fireplace/", src: Fireplace, name: "Fireplace", alt: "Fireplace Logo", heightDesktop: "110px", heightMobile: "72px" }
    ]

    return (
        <>
            <section className={`${Styles.FeaturedHeatingServices} mt-3`} id="FeaturedHeatingServices">
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={5}>
                                <SectionalHeading variant="h2" simpletext={title || "Featured Heating Services"} align="center" />
                                <SectionalHeading variant="h3" simpletext={subTitle || "Heating Installation, Maintenance & Repair Services"} align="center" />
                                <Box mt={5}>
                                    <Grid container spacing={3}>
                                        {heatingItems.map((item, idx) => (
                                            <Grid item xs={6} md={3} key={idx}>
                                                <Box>
                                                    <Box
                                                        className={`d-flex justify-content-center ${balancedLogos ? 'align-items-center' : ''}`}
                                                        style={{ height: width < 720 ? (balancedLogos ? "7.5rem" : "auto") : (balancedLogos ? "9.5rem" : "14rem") }}
                                                    >
                                                        <Link legacyBehavior={true} href={item.href}>
                                                            <a
                                                                className={balancedLogos ? "" : "heatingLogo"}
                                                                style={balancedLogos ? { display: 'inline-flex', alignItems: 'center', justifyContent: 'center' } : {}}
                                                            >
                                                                <Image
                                                                    src={item.src}
                                                                    alt={item.alt}
                                                                    title={item.alt}
                                                                    sizes="100vw"
                                                                    style={balancedLogos ? {
                                                                        width: "auto",
                                                                        height: width < 720 ? item.heightMobile : item.heightDesktop,
                                                                        maxHeight: item.heightDesktop,
                                                                        maxWidth: "100%",
                                                                        objectFit: "contain"
                                                                    } : {
                                                                        width: "100%",
                                                                        height: "auto"
                                                                    }}
                                                                />
                                                            </a>
                                                        </Link>
                                                    </Box>
                                                    <Box>
                                                        <Typography align='center'><strong style={{ fontSize: "1.5rem" }}><Link legacyBehavior={true} href={item.href}><a className='text-white'>{item.name}</a></Link></strong></Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>

                                {bannerText && (
                                    <Box mt={{ xs: 4, md: 5 }} textAlign="center">
                                        <Typography
                                            variant="h3"
                                            component="h3"
                                            sx={{
                                                color: '#fff',
                                                fontSize: { xs: '1.25rem', sm: '1.45rem', md: '1.65rem' },
                                                fontWeight: 600,
                                                mb: 2.5,
                                                maxWidth: '850px',
                                                mx: 'auto',
                                                lineHeight: 1.4
                                            }}
                                        >
                                            {bannerText}
                                        </Typography>
                                        {btnTitle && (
                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <BlueFilledBtn
                                                    navlink={true}
                                                    btnlink={btnLink || "/contact-us/"}
                                                    btnTitle={btnTitle}
                                                />
                                            </Box>
                                        )}
                                    </Box>
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
}

export default FeaturedHeatingServices
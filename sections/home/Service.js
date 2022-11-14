import { Box, Container, Grid, Typography, Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SectionalHeading from '../../components/SectionalHeading/SectionalHeading'
import Snow from '../../public/icons/cool.svg'
import Fire from '../../public/icons/hot.svg'
import Styles from '../../styles/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s1 from '../../public/home/s1.webp'
import s2 from '../../public/home/s2.webp'
import s3 from '../../public/home/s3.webp'
import Boiler from '../../public/home/boiler.webp'
import Fireplace from '../../public/home/fireplace.webp'
import Heatpump from '../../public/home/heatpump.webp'
import Furnace from '../../public/home/furnace.webp'
import Link from 'next/link'
import {ArrowForward} from '@mui/icons-material'
import Image from 'next/image'

const Service = () => {
    const [width, setWidth] = useState()
    const [active, setActive] = useState('box1');

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    return (
        <>
            <section>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={5}>
                                <Typography className={`text--grey text-center mb-2 ${Styles.subtitle}`} variant='h3'><b>CHOOSE YOUR SERVICE</b></Typography>
                                <SectionalHeading blacktext="How Can We" blueText="Help You?" variant="h2" align="center" />
                                <Box mt={3}>
                                    <Box className={Styles.tab}>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Button onClick={() => setActive('box1')} className={`d-flex justify-content-between align-items-center text-white ${Styles.box1}  ${active === 'box1' ? 'bg--blue' : Styles.inactive} m-0`}>
                                                    <Box p={1.5} mr={1} style={{ width: "3rem", height: "3rem", borderRadius: "50%" }} className="bg--white d-flex justify-content-center align-items-center">
                                                        <Image layout='responsive' src={Snow} alt="Cooling Services" title='Cooling Services' />
                                                    </Box>
                                                    <strong style={{ fontSize: "1.2rem" }}>Cooling Services</strong>
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button onClick={() => setActive('box2')} className={`d-flex justify-content-between align-items-center text-white ${Styles.box2} ${active === 'box2' ? 'bg--red' : Styles.inactive} m-0`}>
                                                    <strong style={{ fontSize: "1.2rem" }}>Heating Services</strong>
                                                    <Box p={1.5} ml={1} style={{ width: "3rem", height: "3rem", borderRadius: "50%" }} className="bg--white d-flex justify-content-center align-items-center">
                                                        <Image layout='responsive' src={Fire} alt="Heating Services" title='Heating Services' />
                                                    </Box>
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box mt={5} alignSelf="center">
                                        {
                                            active === 'box1' ? <>
                                                <Swiper
                                                    slidesPerView={width > 992 ? 3 : width > 0 && width < 600 ? 1 : 2}
                                                    spaceBetween={60}
                                                    modules={[Navigation, Autoplay]}
                                                    className="mySwiper py-4 px-md-5"
                                                    autoplay={{
                                                        delay: 2500,
                                                        disableOnInteraction: false,
                                                    }}
                                                    navigation={true}
                                                    loop={true}
                                                >
                                                    <SwiperSlide>
                                                        <Box className={Styles.sliderContainer}>
                                                            <Image layout='responsive' src={s1} alt="AC Remote" title='AC Remote' className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainer}>
                                                            <Typography variant='h3' className="text-white">AC Installation & Replacement</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overview}>
                                                                <Typography variant='h3' gutterBottom className="text-white">AC Installation & Replacement</Typography>
                                                                <Typography className='text-white'>One of the most crucial Investment you can make in your house is installing an air conditioning system. We provide a wide range of services, including installation, yearly maintenance, and more, to ensure that everything is completed correctly...</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--blue'><Link legacyBehavior={true} href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <Box className={Styles.sliderContainer}>
                                                            <Image layout='responsive' src={s2} alt="AC Repair" title='AC Repair' className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainer}>
                                                            <Typography variant='h3' className="text-white">AC Repairing</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overview}>
                                                                <Typography variant='h3' gutterBottom className="text-white">AC Repairing</Typography>
                                                                <Typography className='text-white'>Residential air conditioning repair is offered by the family-run business Teressen Heating and Air Conditioning. Regardless of the time of day, we have the knowledge to quickly fix your heating system...</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--blue'><Link legacyBehavior={true} href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <Box className={Styles.sliderContainer}>
                                                            <Image layout='responsive' src={s3} alt="Teressen Expert Technician Cooling Service" className='img-fluid' title='Teressen Expert Technician Cooling Service' />
                                                            <Box p={2} className={Styles.titleContainer}>
                                                            <Typography variant='h3' className="text-white">AC Maintaince</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overview}>
                                                                <Typography variant='h3' gutterBottom className="text-white">AC Maintaince</Typography>
                                                                <Typography className='text-white'>Local residents own and run the business Terresen Heating. To keep your family comfortable all year round, we know the proper home AC maintenance and tune-ups...</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--blue'><Link legacyBehavior={true} href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </> : active === "box2" ? <>
                                            
                                            
                                            <Swiper
                                                    slidesPerView={width > 992 ? 3 : width > 0 && width < 600 ? 1 : 2}
                                                    spaceBetween={60}
                                                    modules={[Navigation, Autoplay]}
                                                    className="mySwiper py-4 px-md-5"
                                                    autoplay={{
                                                        delay: 2500,
                                                        disableOnInteraction: false,
                                                    }}
                                                    navigation={true}
                                                    loop={true}
                                                >
                                                    <SwiperSlide>
                                                        <Box className={Styles.sliderContainer}>
                                                            <Image layout='responsive' src={Furnace} alt="Furnace System" title='Furnace System' className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainerRed}>
                                                            <Typography variant='h3' className="text-white">Furnaces</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overviewRed}>
                                                                <Typography variant='h3' gutterBottom className="text-white">Furnaces</Typography>
                                                                <Typography className='text-white'>a building that uses combustion or another method to generate useful heat. Because coal was so readily available for heating, the furnace evolved historically from the fireplace and stove...</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--red'><Link legacyBehavior={true} href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <Box className={Styles.sliderContainer}>
                                                            <Image layout='responsive' src={Boiler} alt="Trusted Service Partner for Boiler Installation" title='Trusted Service Partner for Boiler Installation' className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainerRed}>
                                                            <Typography variant='h3' className="text-white">Boiler</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overviewRed}>
                                                                <Typography variant='h3' gutterBottom className="text-white">Boiler</Typography>
                                                                <Typography className='text-white'>Teressen has been offering professional boiler setup, maintenance, and repair services. Teressen, a seasoned pioneer in the home heating sector, takes care of all your heating requirements with first-rate service at competitive prices.</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--red'><Link legacyBehavior={true} href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <Box className={Styles.sliderContainer}>
                                                            <Image layout='responsive' src={Heatpump} alt="Certified Heat Pump Technician" title='Certified Heat Pump Technician' className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainerRed}>
                                                            <Typography variant='h3' className="text-white">Heat Pump</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overviewRed}>
                                                                <Typography variant='h3' gutterBottom className="text-white">Heat Pump</Typography>
                                                                <Typography className='text-white'>Along with the manufacturer&apos;s warranty, we also provide full installation of your heat pump system with a 1-year labour warranty!</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--red'><Link legacyBehavior={true} href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <Box className={Styles.sliderContainer}>
                                                            <Image layout='responsive' src={Fireplace} alt="Professional Fireplace Central Sysytem" title='Professional Fireplace Central Sysytem' className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainerRed}>
                                                            <Typography variant='h3' className="text-white">Fireplace</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overviewRed}>
                                                                <Typography variant='h3' gutterBottom className="text-white">Fireplace</Typography>
                                                                <Typography className='text-white'>Installation & Replacement of Professional Gas Fireplaces for Central Home Heating Systems</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--red'><Link legacyBehavior={true} href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                </Swiper>
                                            
                                            
                                            </> : null
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Service
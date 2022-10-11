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
import s1 from '../../public/home/s1.jpg'
import s2 from '../../public/home/s2.jpg'
import s3 from '../../public/home/s3.jpg'
import Link from 'next/link'
import {ArrowForward} from '@mui/icons-material'

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
                                <Typography className='text--grey text-center mb-2'><b>CHOOSE YOUR SERVICE</b></Typography>
                                <SectionalHeading blacktext="How Can We" blueText="Help You?" variant="h2" align="center" />
                                <Box mt={3}>
                                    <Box className={Styles.tab}>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Button onClick={() => setActive('box1')} p={1} className={`d-flex justify-content-between align-items-center text-white ${Styles.box1}  ${active === 'box1' ? 'bg--blue' : Styles.inactive} m-0`}>
                                                    <Box p={1.5} mr={1} style={{ width: "3rem", height: "3rem", borderRadius: "50%" }} className="bg--white d-flex justify-content-center align-items-center">
                                                        <img src={Snow.src} />
                                                    </Box>
                                                    <strong style={{ fontSize: "1.2rem" }}>Cooling Services</strong>
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button onClick={() => setActive('box2')} p={1} className={`d-flex justify-content-between align-items-center text-white ${Styles.box2} ${active === 'box2' ? 'bg--red' : Styles.inactive} m-0`}>
                                                    <strong style={{ fontSize: "1.2rem" }}>Heating Services</strong>
                                                    <Box p={1.5} ml={1} style={{ width: "3rem", height: "3rem", borderRadius: "50%" }} className="bg--white d-flex justify-content-center align-items-center">
                                                        <img src={Fire.src} />
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
                                                            <img src={s1.src} alt="slide1" className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainer}>
                                                            <Typography variant='h3' className="text-white">AC Installation & Replacement</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overview}>
                                                                <Typography variant='h3' gutterBottom className="text-white">AC Installation & Replacement</Typography>
                                                                <Typography className='text-white'>Your AC has an important job to do: to keep you and your family comfortable indoors. So, when your air conditioning breaks down, it is very frustrating. This is when we play a major role in taking your frustration away and helping you...</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--blue'><Link href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <Box className={Styles.sliderContainer}>
                                                            <img src={s2.src} alt="slide1" className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainer}>
                                                            <Typography variant='h3' className="text-white">AC Repairing</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overview}>
                                                                <Typography variant='h3' gutterBottom className="text-white">AC Repairing</Typography>
                                                                <Typography className='text-white'>Your AC has an important job to do: to keep you and your family comfortable indoors. So, when your air conditioning breaks down, it is very frustrating. This is when we play a major role in taking your frustration away and helping you...</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--blue'><Link href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <Box className={Styles.sliderContainer}>
                                                            <img src={s3.src} alt="slide1" className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainer}>
                                                            <Typography variant='h3' className="text-white">AC Maintaince</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overview}>
                                                                <Typography variant='h3' gutterBottom className="text-white">AC Maintaince</Typography>
                                                                <Typography className='text-white'>Your AC has an important job to do: to keep you and your family comfortable indoors. So, when your air conditioning breaks down, it is very frustrating. This is when we play a major role in taking your frustration away and helping you...</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--blue'><Link href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <Box className={Styles.sliderContainer}>
                                                            <img src={s3.src} alt="slide1" className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainer}>
                                                            <Typography variant='h3' className="text-white">AC Maintaince</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overview}>
                                                                <Typography variant='h3' gutterBottom className="text-white">AC Maintaince</Typography>
                                                                <Typography className='text-white'>Your AC has an important job to do: to keep you and your family comfortable indoors. So, when your air conditioning breaks down, it is very frustrating. This is when we play a major role in taking your frustration away and helping you...</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--blue'><Link href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
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
                                                            <img src={s1.src} alt="slide1" className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainerRed}>
                                                            <Typography variant='h3' className="text-white">AC Installation & Replacement</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overviewRed}>
                                                                <Typography variant='h3' gutterBottom className="text-white">AC Installation & Replacement</Typography>
                                                                <Typography className='text-white'>Your AC has an important job to do: to keep you and your family comfortable indoors. So, when your air conditioning breaks down, it is very frustrating. This is when we play a major role in taking your frustration away and helping you...</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--red'><Link href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <Box className={Styles.sliderContainer}>
                                                            <img src={s2.src} alt="slide1" className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainerRed}>
                                                            <Typography variant='h3' className="text-white">AC Repairing</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overviewRed}>
                                                                <Typography variant='h3' gutterBottom className="text-white">AC Repairing</Typography>
                                                                <Typography className='text-white'>Your AC has an important job to do: to keep you and your family comfortable indoors. So, when your air conditioning breaks down, it is very frustrating. This is when we play a major role in taking your frustration away and helping you...</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--red'><Link href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <Box className={Styles.sliderContainer}>
                                                            <img src={s3.src} alt="slide1" className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainerRed}>
                                                            <Typography variant='h3' className="text-white">AC Maintaince</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overviewRed}>
                                                                <Typography variant='h3' gutterBottom className="text-white">AC Maintaince</Typography>
                                                                <Typography className='text-white'>Your AC has an important job to do: to keep you and your family comfortable indoors. So, when your air conditioning breaks down, it is very frustrating. This is when we play a major role in taking your frustration away and helping you...</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--red'><Link href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                    <Box className={Styles.sliderContainer}>
                                                            <img src={s3.src} alt="slide1" className='img-fluid' />
                                                            <Box p={2} className={Styles.titleContainerRed}>
                                                            <Typography variant='h3' className="text-white">AC Maintaince</Typography>
                                                            </Box>
                                                            <Box p={4} className={Styles.overviewRed}>
                                                                <Typography variant='h3' gutterBottom className="text-white">AC Maintaince</Typography>
                                                                <Typography className='text-white'>Your AC has an important job to do: to keep you and your family comfortable indoors. So, when your air conditioning breaks down, it is very frustrating. This is when we play a major role in taking your frustration away and helping you...</Typography>
                                                                <Box mt={1}>
                                                                    <IconButton className='bg--red'><Link href="/air-conditioning-service/"><ArrowForward /></Link></IconButton>
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
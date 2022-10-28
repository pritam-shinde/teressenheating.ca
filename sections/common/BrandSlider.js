import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionalHeading } from '../../components/components';
import B1 from '../../public/brands/b1.jpg'
import B2 from '../../public/brands/b2.jpg'
import B3 from '../../public/brands/b3.png'
import B4 from '../../public/brands/b4.jpg'

const BrandSlider = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    return (
        <>
            <section className='mt-3'>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={5}>
                                <SectionalHeading blacktext="Brands" blueText="We Service" variant="h2" align="center" />
                                <Box mt={3}>
                                    <Swiper
                                        slidesPerView={width > 992 ? 4 : width > 0 && width < 600 ? 1 : 3}
                                        spaceBetween={50}
                                        modules={[Navigation, Autoplay]}
                                        className="mySwiper px-5"
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        navigation={true}
                                        loop={true}
                                    >
                                        <SwiperSlide>
                                            <img src={B1.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={B2.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={B3.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={B4.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                    </Swiper>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default BrandSlider
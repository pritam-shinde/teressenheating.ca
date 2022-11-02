import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionalHeading } from '../../components/components';
import Brand1 from '../../public/brand-page/Layer-103.webp'
import Brand2 from '../../public/brand-page/Layer-104.webp'
import Brand3 from '../../public/brand-page/Layer-105.webp'
import Brand4 from '../../public/brand-page/Layer-106.webp'
import Brand5 from '../../public/brand-page/Layer-107.webp'
import Brand6 from '../../public/brand-page/Layer-108.webp'
import Brand7 from '../../public/brand-page/Layer-109.webp'
import Brand8 from '../../public/brand-page/Layer-110.webp'
import Brand9 from '../../public/brand-page/Layer-111.webp'
import Brand10 from '../../public/brand-page/Layer-112.webp'
import Brand11 from '../../public/brand-page/Layer-113.webp'
import Brand12 from '../../public/brand-page/Layer-114.webp'
import Brand13 from '../../public/brand-page/Layer-115.webp'
import Brand14 from '../../public/brand-page/Layer-116.webp'
import Brand15 from '../../public/brand-page/Layer-117.webp'
import Brand16 from '../../public/brand-page/Layer-118.webp'
import Brand17 from '../../public/brand-page/Layer-119.webp'
import Brand18 from '../../public/brand-page/Layer-120.webp'
import Brand19 from '../../public/brand-page/Layer-121.webp'
import Brand20 from '../../public/brand-page/Layer-122.webp'
import Brand21 from '../../public/brand-page/Layer-123.webp'
import Brand22 from '../../public/brand-page/Layer-124.webp'
import Brand23 from '../../public/brand-page/Layer-125.webp'
import Brand24 from '../../public/brand-page/Layer-126.webp'
import Brand25 from '../../public/brand-page/Layer-127.webp'
import Brand26 from '../../public/brand-page/Layer-128.webp'
import Brand27 from '../../public/brand-page/Layer-129.webp'
import Brand28 from '../../public/brand-page/Layer-130.webp'

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
                                            <img src={Brand1.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand2.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand3.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand4.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand5.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand6.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand7.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand8.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand9.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand10.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand11.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand12.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand13.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand14.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand15.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand16.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand17.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand18.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand19.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand20.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand21.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand22.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand23.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand24.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand25.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand26.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand27.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Brand28.src} alt="brand 1" className='img-fluid' />
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
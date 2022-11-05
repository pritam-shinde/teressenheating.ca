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
import Image from 'next/legacy/image';

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
                                            <Image  src={Brand1} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand2} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand3} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand4} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand5} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand6} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand7} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand8} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand9} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand10} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand11} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand12} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand13} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand14} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand15} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand16} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand17} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand18} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand19} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand20} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand21} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand22} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand23} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand24} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand25} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand26} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand27} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand28} alt="brand 1" className='img-fluid' />
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
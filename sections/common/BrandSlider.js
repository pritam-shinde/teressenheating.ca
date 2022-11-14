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
                                            <Image  src={Brand1} alt="Bryant Logo" className='img-fluid' title='Bryant Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand2} alt="Tempstar Logo" className='img-fluid' title='Tempstar Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand3} alt="Heil HVAC Logo" className='img-fluid' title='Heil HVAC Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand4} alt="Keeprite Logo" className='img-fluid' title='Keeprite Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand5} alt="Kenmore Logo" className='img-fluid' title='Kenmore Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand6} alt="Lennox Logo" className='img-fluid' title='Lennox Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand7} alt="Concord Logo" className='img-fluid' title='Concord Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand8} alt="Luxaire Logo" className='img-fluid' title='Luxaire Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand9} alt="Maytag Logo" className='img-fluid' title='Maytag Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand10} alt="Navien Logo" className='img-fluid' title='Navien Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand11} alt="Payne Logo" className='img-fluid' title='Payne Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand12} alt="Rinnai Logo" className='img-fluid' title='Rinnai Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand13} alt="Trane Logo" className='img-fluid' title='Trane Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand14} alt="Viessmann Logo" className='img-fluid' title='Viessmann Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand15} alt="York Brand Logo" className='img-fluid' title='York Brand Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand16} alt="Coleman Logo" className='img-fluid' title='Coleman Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand17} alt="Aire Flo Logo" className='img-fluid' title='Aire Flo Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand18} alt="Amana Logo" className='img-fluid' title='Amana Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand19} alt="American Standard Logo" className='img-fluid' title='American Standard Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand20} alt="Arcoaire Logo" className='img-fluid' title='Arcoaire Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand21} alt="Armstrong Logo" className='img-fluid' title='Armstrong Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand22} alt="Carrier Logo" className='img-fluid' title='Carrier Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand23} alt="Comfortmaker Logo" className='img-fluid' title='Comfortmaker Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand24} alt="Daikin Logo" className='img-fluid' title='Daikin Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand25} alt="Day And Night HVAC Logo" className='img-fluid' title='Day And Night HVAC Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand26} alt="Ameristart Logo" className='img-fluid' title='Ameristart Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand27} alt="Frigidaire Logo" className='img-fluid' title='Frigidaire Logo' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image  src={Brand28} alt="Goodman Logo" className='img-fluid' title='Goodman Logo' />
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
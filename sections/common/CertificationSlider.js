import { Box, Container, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import certificate1 from '../../public/certification/BBB_PrimaryLogo_Blue_RGB.svg'
// import certificate1 from '../../public/certification/cer1.webp'
import certificate2 from '../../public/certification/cer2.webp'
import certificate3 from '../../public/certification/technical-safety.svg'
// import certificate3 from '../../public/certification/cer3.webp'
import certificate4 from '../../public/certification/cer4.webp'
import certificate5 from '../../public/certification/HPSC_Logo.png'
import { SectionalHeading } from '../../components/components';
import Image from 'next/image';

const CertificationSlider = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])
    return (
        <>
            <section className='my-3'>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={3}>
                                <SectionalHeading blacktext="Our" blueText="Certification" variant="h2" align="center" />
                                <Box mt={5} position="relative" px={5} sx={{ '--swiper-navigation-size': '24px' }}>
                                    <div className="swiper-button-prev cert-prev" style={{ left: 0 }}></div>
                                    <div className="swiper-button-next cert-next" style={{ right: 0 }}></div>
                                    <Swiper
                                        slidesPerView={width > 992 ? 4 : width > 0 && width < 600 ? 1 : 3}
                                        spaceBetween={30}
                                        modules={[Navigation, Autoplay]}
                                        className="mySwiper"
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        navigation={{ prevEl: '.cert-prev', nextEl: '.cert-next' }}
                                        loop={true}
                                    >
                                        <SwiperSlide>
                                            <Image src={certificate1} alt="Accredited Business Logo" title='Accredited Business Logo' className='img-fluid' sizes="(max-width: 600px) 100vw, (max-width: 992px) 33vw, 25vw" style={{ width: '75%', height: '80px', objectFit: 'contain', margin: '0 auto' }} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src={certificate2} alt="Work Safe BC Logo" title='Work Safe BC Logo' className='img-fluid' sizes="(max-width: 600px) 100vw, (max-width: 992px) 33vw, 25vw" style={{ width: '75%', height: '80px', objectFit: 'contain', margin: '0 auto' }} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src={certificate3} alt="Technical Safety BC Logo" title='Technical Safety BC Logo' className='img-fluid' sizes="(max-width: 600px) 100vw, (max-width: 992px) 33vw, 25vw" style={{ width: '75%', height: '80px', objectFit: 'contain', margin: '0 auto' }} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src={certificate4} alt="Fortis BC Logo" title='Fortis BC Logo' className='img-fluid' sizes="(max-width: 600px) 100vw, (max-width: 992px) 33vw, 25vw" style={{ width: '75%', height: '80px', objectFit: 'contain', margin: '0 auto' }} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src={certificate5} alt="Technical Safety BC Logo" title='Technical Safety BC Logo' className='img-fluid' sizes="(max-width: 600px) 100vw, (max-width: 992px) 33vw, 25vw" style={{ width: '75%', height: '80px', objectFit: 'contain', margin: '0 auto' }} />
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

export default CertificationSlider
import { Box, Container, Grid } from '@mui/material'
import React,{useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import certificate1 from '../../public/certification/cer1.webp'
import certificate2 from '../../public/certification/cer2.webp'
import certificate3 from '../../public/certification/cer3.webp'
import certificate4 from '../../public/certification/cer4.webp'
import { SectionalHeading } from '../../components/components';
import Image from 'next/legacy/image';

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
                                <Box mt={5}>
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
                                            <Image layout='responsive' src={certificate1} alt="Accredited Business Logo" title='Accredited Business Logo' className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image layout='responsive' src={certificate2} alt="Work Safe BC Logo" title='Work Safe BC Logo' className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image layout='responsive' src={certificate3} alt="Technical Safety BC Logo" title='Technical Safety BC Logo' className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image layout='responsive' src={certificate4} alt="Fortis BC Logo" title='Fortis BC Logo' className='img-fluid' />
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
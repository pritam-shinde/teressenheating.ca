import { Box, Container, Grid } from '@mui/material'
import React,{useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import certificate1 from '../../public/certification/cer1.png'
import certificate2 from '../../public/certification/cer2.png'
import certificate3 from '../../public/certification/cer3.png'
import certificate4 from '../../public/certification/cer4.png'
import { SectionalHeading } from '../../components/components';

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
                                            <img src={certificate1.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={certificate2.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={certificate3.src} alt="brand 1" className='img-fluid' />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={certificate4.src} alt="brand 1" className='img-fluid' />
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
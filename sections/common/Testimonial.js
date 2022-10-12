import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { SectionalHeading } from '../../components/components'
import Styles from '../../styles/Home.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import {FormatQuote} from '@mui/icons-material'

const Testimonial = () => {
    return (
        <>
            <section className={Styles.testimonial}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={10}>
                                <Grid container>
                                    <Grid item xs={12} md={4} className="ms-md-auto">
                                        <Box>
                                            <SectionalHeading blacktext="Customer" blueText="Testimonial" variant="h2" />
                                            <Box mt={3}>
                                                <Swiper
                                                    spaceBetween={30}
                                                    effect={"fade"}
                                                    pagination={{
                                                        clickable: true,
                                                    }}
                                                    modules={[EffectFade, Pagination, Autoplay]}
                                                    loop={true}
                                                    slidesPerView={1}
                                                    autoplay={{
                                                        delay: 5000,
                                                        disableOnInteraction: false,
                                                    }}
                                                    className="py-5"
                                                >
                                                    <SwiperSlide>
                                                        <Box className='"d-flex"'>
                                                            <Box className="flex-shrink-0">
                                                                <FormatQuote className='text--blue' style={{fontSize:"5rem", color:"var(--blue) !important"}} />
                                                            </Box>
                                                            <Box className="flex-grow-1 ms-3">
                                                                <Typography className='para'><stong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.</stong></Typography>
                                                                <Typography className='para'><stong>- Wilson Trayer</stong>, Customer</Typography>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <Box className='"d-flex"'>
                                                            <Box className="flex-shrink-0">
                                                                <FormatQuote className='text--blue' style={{fontSize:"5rem", color:"var(--blue) !important"}} />
                                                            </Box>
                                                            <Box className="flex-grow-1 ms-3">
                                                                <Typography className='para'><stong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.</stong></Typography>
                                                                <Typography className='para'><stong>- Wilson Trayer</stong>, Customer</Typography>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <Box className='"d-flex"'>
                                                            <Box className="flex-shrink-0">
                                                                <FormatQuote className='text--blue' style={{fontSize:"5rem", color:"var(--blue) !important"}} />
                                                            </Box>
                                                            <Box className="flex-grow-1 ms-3">
                                                                <Typography className='para'><stong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.</stong></Typography>
                                                                <Typography className='para'><stong>- Wilson Trayer</stong>, Customer</Typography>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Testimonial
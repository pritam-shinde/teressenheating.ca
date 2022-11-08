import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { SectionalHeading } from '../../components/components'
import Styles from '../../styles/Home.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { FormatQuote } from '@mui/icons-material'

const Testimonial = ({ testimonialArr }) => {
    return (
        <>
            <section className={`${Styles.testimonial} mt-3`}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={10}>
                                <Grid container>
                                    <Grid item xs={12} lg={4} className="ms-md-auto">
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
                                                    {
                                                        testimonialArr.map(item => <SwiperSlide key={item.customerName}>
                                                            <Box className='"d-flex"'>
                                                                <Box className="flex-shrink-0">
                                                                    <FormatQuote className='text--blue' style={{ fontSize: "5rem", color: "var(--blue) !important" }} />
                                                                </Box>
                                                                <Box className="flex-grow-1 ms-3">
                                                                    <Typography style={{ fontSize: "1.1rem !important" }}><strong>{item.text}</strong></Typography>
                                                                    <Typography className='para'><strong>- {item.customerName}</strong>, Customer</Typography>
                                                                </Box>
                                                            </Box>
                                                        </SwiperSlide>)
                                                    }
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
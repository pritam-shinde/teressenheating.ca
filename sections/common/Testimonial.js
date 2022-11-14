import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { SectionalHeading } from '../../components/components'
import Styles from '../../styles/Home.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Autoplay } from "swiper";
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
                                                    modules={[Navigation, Autoplay]}
                                                    loop={true}
                                                    slidesPerView={1}
                                                    autoplay={{
                                                        delay: 5000,
                                                        disableOnInteraction: false,
                                                    }}
                                                    className="py-5"
                                                >
                                                    <SwiperSlide>
                                                        <Box className="d-flex">
                                                            <Box className="flex-shrink-0">
                                                                <FormatQuote className='text--blue' style={{ fontSize: "5rem", color: "var(--blue) !important", marginTop:"-3rem !important" }} />
                                                            </Box>
                                                            <Box className="flex-grow-1 ms-3">
                                                                <Typography style={{ fontSize: "1.1rem !important" }}><strong>They carried out a challenging replacement of our failing AC system in the middle of a horrible heat wave.  They are courteous and very knowledgeable about their job. Highly recommend them.</strong></Typography>
                                                                <Typography className='para'><strong>- Michael Brown</strong>, Customer</Typography>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <Box className="d-flex">
                                                            <Box className="flex-shrink-0 mt-n5">
                                                                <FormatQuote className='text--blue' style={{ fontSize: "5rem", color: "var(--blue) !important",marginTop:"-3rem !important" }} />
                                                            </Box>
                                                            <Box className="flex-grow-1 ms-3">
                                                                <Typography style={{ fontSize: "1.1rem !important" }}><strong>The entire Teressen Heating & Air Conditioning team has been great to work with. They protected our floors and working area throughout the day, provided a clear understanding of the work, and left the job site in the same way as they started (very clean!). We have been happy to be a customer of Teressen.</strong></Typography>
                                                                <Typography className='para'><strong>- Catherine M.</strong>, Customer</Typography>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <Box className="d-flex">
                                                            <Box className="flex-shrink-0 mt-n5">
                                                                <FormatQuote className='text--blue' style={{ fontSize: "5rem", color: "var(--blue) !important", marginTop:"-3rem !important" }} />
                                                            </Box>
                                                            <Box className="flex-grow-1 ms-3">
                                                                <Typography style={{ fontSize: "1.1rem !important" }}><strong>I've always found their technicians are very tentative, they let me know if they see any issues or concerns about the unit. It was perfect! They were on time, very genuine & professional!</strong></Typography>
                                                                <Typography className='para'><strong>- Ben Hartman</strong>, Customer</Typography>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <Box className="d-flex">
                                                            <Box className="flex-shrink-0 mt-n5">
                                                                <FormatQuote className='text--blue' style={{ fontSize: "5rem", color: "var(--blue) !important", marginTop:"-3rem !important" }} />
                                                            </Box>
                                                            <Box className="flex-grow-1 ms-3">
                                                                <Typography style={{ fontSize: "1.1rem !important" }}><strong>I want to thank you for your excellent service. They answered all my questions and was very professional. He gave me peace of mind and complete comfort. I know I am in good hands with your company.</strong></Typography>
                                                                <Typography className='para'><strong>- Sara</strong>, Customer</Typography>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <Box className="d-flex">
                                                            <Box className="flex-shrink-0 mt-n5">
                                                                <FormatQuote className='text--blue' style={{ fontSize: "5rem", color: "var(--blue) !important", marginTop:"-3rem !important" }} />
                                                            </Box>
                                                            <Box className="flex-grow-1 ms-3">
                                                                <Typography style={{ fontSize: "1.1rem !important" }}><strong>Teressen is the epitome of excellence in customer service and professionalism. They explained the process of repairing my A/C every step of the way and gave me an estimate before each action. I understand my unit better due to their detailed explanation of how the whole system operates and I truly appreciated their maintenance suggestions to extend the life of my teams. Excellent job! You have a loyal customer here!</strong></Typography>
                                                                <Typography className='para'><strong>- Michelle Connell</strong>, Customer</Typography>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <Box className="d-flex">
                                                            <Box className="flex-shrink-0 mt-n5">
                                                                <FormatQuote className='text--blue' style={{ fontSize: "5rem", color: "var(--blue) !important", marginTop:"-3rem !important" }} />
                                                            </Box>
                                                            <Box className="flex-grow-1 ms-3">
                                                                <Typography style={{ fontSize: "1.1rem !important" }}><strong>They showed up when they said they would and were on time. Professional and extremely polite. There was leak in our system and they repaired the leak and had the AC freezing us out in no time. I recommend them.</strong></Typography>
                                                                <Typography className='para'><strong>- Rick Jacobs</strong>, Customer</Typography>
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
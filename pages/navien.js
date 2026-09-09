import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from "next/image"
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import BrandLogo from '../public/brand-page/Layer-112.webp'
import BBB from '../public/certification/cer1.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Technical from '../public/certification/cer3.webp'
import BlueLogo from '../public/logo/airlinx-logo2.png'
import { BrandDetails, FaqAndForm, FeaturedCoolingServices, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const Navien = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you install Navien tankless water heaters and boilers in Burnaby?", ans: "Yes, we install Navien tankless water heaters and high-efficiency boilers for homeowners and businesses throughout Burnaby, ensuring professional installation and reliable performance.", list: null },
    { id: "faq-2", que: "Why is my Navien tankless water heater not producing consistent hot water?", ans: "Fluctuating water temperatures can be caused by mineral buildup, ignition issues, or component wear. Our technicians can inspect your Navien system and restore consistent hot water quickly.", list: null },
    { id: "faq-3", que: "Can regular maintenance improve the performance of my Navien system?", ans: "Yes. Routine maintenance helps keep your Navien boiler or tankless water heater operating efficiently, improves system reliability, and can help prevent unexpected repairs.", list: null },
    { id: "faq-4", que: "Is a Navien system a good choice for energy savings?", ans: "Navien products are designed with high-efficiency technology that can reduce energy consumption while providing dependable heating and hot water for Burnaby homes.", list: null },
    { id: "faq-5", que: "Why should I choose Airlinx for Navien services in Burnaby?", ans: "Our experienced technicians are trained to install, maintain, and repair Navien systems, providing honest recommendations, quality workmanship, and prompt local service for customers across Burnaby.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const ListArray = ["Navien heating/ AC experienced technicians make sure that you are served well.", "We have professional services at affordable pricing.", "All our experts are licensed experts.", "We provide the best heating, and air quality services for you."]
  return (
    <>
      <Head>
        <title>Quality and Affordable Services of Navien Furnace - Airlinx</title>
        <meta name="description" content="Airlinx Heating offers a complete range of high-efficiency Navien furnaces and water heaters for residential, commercial, and industrial applications." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/navien/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <main>
        <CommonBanner bg={BoilerMaintainanceBanner} title="Navien" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl" className="px-0">
            <Grid container>
              <Grid item xs={12} md={6} className='bg--grey'>
                <Box p={3}>
                  <Grid container>
                    <Grid item xs={12} md={11} className="ms-auto">
                      <Box>
                        <Grid container>
                          <Grid item xs={6}>
                            <Box p={3}>
                              <Image
                                src={BlueLogo}
                                alt="Airlinx heating"
                                sizes="100vw"
                                style={{
                                  width: "100%",
                                  height: "auto"
                                }} />
                            </Box>
                          </Grid>
                          <Grid item xs={6} className="d-flex align-items-center">
                            <Box p={3}>
                              <Image
                                src={BrandLogo}
                                alt="carrier"
                                sizes="100vw"
                                style={{
                                  width: "100%",
                                  height: "auto"
                                }} />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image
                                src={BBB}
                                alt="Airlinx heating"
                                sizes="100vw"
                                style={{
                                  width: "100%",
                                  height: "auto"
                                }} />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image
                                src={WorkSafe}
                                alt="Work safe"
                                sizes="100vw"
                                style={{
                                  width: "100%",
                                  height: "auto"
                                }} />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image
                                src={Technical}
                                alt="Technical"
                                sizes="100vw"
                                style={{
                                  width: "100%",
                                  height: "auto"
                                }} />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} id="brandDetails">
                <Box p={3}>
                  <Grid container>
                    <Grid item xs={12} md={11}>
                      <BrandDetails title='Get the best Navien products servicing at relative ease' list={true} ListArray={ListArray} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='mt-md-4 mt-3'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <Box>
                    <SectionalHeading simpletext="Let us help you take care of everything" variant="h2" />
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutline className='text--blue' />
                        </ListItemIcon>
                        <ListItemText primary="Furnaces repair, maintenance, and installation." />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutline className='text--blue' />
                        </ListItemIcon>
                        <ListItemText primary="Heat pump maintenance, installation, and repair." />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutline className='text--blue' />
                        </ListItemIcon>
                        <ListItemText primary="Boiler installation, installation, and repair." />
                      </ListItem>
                    </List>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='mt-md-4 mt-3 bg--grey'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box p={3}>
                  <SectionalHeading simpletext="We have skilled and certified mechanics" variant="h2" />
                  <Typography className='para'>We have <a href="/emergency/">24*7 servicing and repairs</a>. With more than 20 years of work experience, we serve you with our quality and affordable services. So, call us today!</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='bg--grey'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box p={3}>
                  <SectionalHeading simpletext="What makes us special?" variant="h2" />
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary={<strong>Scheduling an in-home appointment</strong>} secondary="Call us for a free in-home estimate. We will help you with an expert solution by coming to your home and discussing your comfort needs." />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary={<strong>Consulting and choosing an expert</strong>} secondary="Call us for a free in-home estimate. We will send our experienced and licensed technician to assist you." />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary={<strong>Installation Day</strong>} secondary="We remove old equipment from your home and install new equipment. Once done, we take care of everything." />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <FeaturedHeatingServices />
        <PopularService color='red' />
        <FeaturedCoolingServices />
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
      </main>
    </>
  );
}

export default Navien
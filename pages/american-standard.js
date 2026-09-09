import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Head from 'next/head'
import Image from "next/image"
import { useEffect, useState } from 'react'
import { CommonBanner } from '../components/components'
import JsonLd from '../components/JsonLd'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import BrandLogo from '../public/brand-page/Layer-121.webp'
import BBB from '../public/certification/cer1.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Technical from '../public/certification/cer3.webp'
import BlueLogo from '../public/logo/airlinx-logo2.png'
import { BrandDetails, FaqAndForm, FeaturedCoolingServices, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const AmericanStandard = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you install American Standard HVAC systems in Burnaby?", ans: "Yes, we provide professional installation of American Standard furnaces, heat pumps, and air conditioning systems for homes and businesses throughout Burnaby.", list: null },
    { id: "faq-2", que: "Can you repair and maintain American Standard heating and cooling systems?", ans: "Absolutely. Our technicians service American Standard HVAC equipment, offering inspections, repairs, and routine maintenance to keep your system running efficiently year-round.", list: null },
    { id: "faq-3", que: "Why choose an American Standard HVAC system?", ans: "American Standard systems are known for their durability, energy efficiency, and reliable performance, making them a smart choice for Burnaby's heating and cooling needs.", list: null },
    { id: "faq-4", que: "How do I know if my American Standard system needs replacement?", ans: "If your system is experiencing frequent breakdowns, higher energy bills, or inconsistent performance, our team can assess whether repair or a new installation is the best long-term solution.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for American Standard HVAC services in Burnaby?", ans: "Our experienced local technicians provide expert American Standard installations, repairs, and maintenance with quality workmanship, honest recommendations, and dependable service for customers across Burnaby and surrounding areas.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const ListArray = ["We have American standard furnace experienced professionals.", "We provide professional services at affordable pricing.", "We have insured and licensed products.", "American standard heating, maintenance, and repair services.", "Airlinx's heating and air conditioning services for all our clients who trust us."]
  return (
    <>
      <Head>
        <title>Professional American standard Heating Services - Airlinx</title>
        <meta name="description" content="HVAC Services for Professional American Standard Heating Services by Airlinx Heating. We are a company with experience providing heating services." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/american-standard/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <main>
        <CommonBanner bg={BoilerMaintainanceBanner} title="American Standard" color="#fff" variant="h1" />
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
                                alt="Airlinxheating Logo"
                                title='Airlinxheating Logo'
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
                                alt="American Standard Logo"
                                title='American Standard Logo'
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
                                alt="Accredited Business Logo"
                                title='Accredited Business Logo'
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
                                alt="Work Safe BC Logo"
                                title='Work Safe BC Logo'
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
                                alt="Technical Safety BC Logo"
                                title='Technical Safety BC Logo'
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
                      <BrandDetails title='Airlinx&apos;s American standard products and services' list={true} ListArray={ListArray} />
                    </Grid>
                  </Grid>
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

export default AmericanStandard
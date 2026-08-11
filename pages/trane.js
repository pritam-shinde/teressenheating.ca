import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { CommonBanner } from '../components/components'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import BrandLogo from '../public/brand-page/Layer-115.webp'
import BBB from '../public/certification/cer1.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Technical from '../public/certification/cer3.webp'
import BlueLogo from '../public/logo/airlinx-logo2.png'
import { BrandDetails, FaqAndForm, FeaturedCoolingServices, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'
import JsonLd from '../components/JsonLd'

const Trane = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you install Trane heating and cooling systems in Burnaby?", ans: "Yes, we provide professional installation of Trane furnaces, heat pumps, and air conditioners for homeowners and businesses throughout Burnaby, ensuring reliable and energy-efficient performance.", list: null },
    { id: "faq-2", que: "Can you repair and maintain Trane HVAC systems?", ans: "Absolutely. Our experienced technicians service Trane heating and cooling equipment, including routine maintenance, diagnostics, and repairs to keep your system operating at its best.", list: null },
    { id: "faq-3", que: "Why choose a Trane HVAC system for your home?", ans: "Trane systems are built for durability, energy efficiency, and consistent indoor comfort, making them a dependable choice for Burnaby's changing weather conditions.", list: null },
    { id: "faq-4", que: "How do I know if it's time to replace my Trane HVAC system?", ans: "If your Trane system is over 15 years old, requires frequent repairs, or no longer heats or cools efficiently, our team can assess whether repair or replacement is the better option.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for Trane HVAC services in Burnaby?", ans: "Our local technicians provide expert Trane installation, repair, and maintenance services with quality workmanship, prompt response times, and customized solutions for homes and commercial properties across Burnaby.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const brandDetailparagraph = [
    'We have Trane furnace experienced technicians.',
    'We give professional services at affordable rates.',
    'We do all types of Trane heating, installation, maintenance, and repair work.',
    <>
      <a href="/">Airlinx's heating and air conditioning services</a> are proudly meant to serve you the best.
    </>
  ]
  return (
    <>
      <Head>
        <title>Expert Trane Furnace Service by Skilled Technicians- Airlinx</title>
        <meta name="description" content="The Trane Furnace experts at Airlinx Heating are factory-trained, certified and insured. We install and service Trane furnace systems. Book Now." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/trane/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <CommonBanner bg={BoilerMaintainanceBanner} title="Trane" color="#fff" variant="h1" />
      <main>
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
                              <Image layout='responsive' src={BlueLogo} alt="Airlinxheating Logo" title='Airlinxheating Logo' />
                            </Box>
                          </Grid>
                          <Grid item xs={6} className="d-flex align-items-center">
                            <Box p={3}>
                              <Image layout='responsive' src={BrandLogo} alt="Trane Logo" title='Trane Logo' />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image layout='responsive' src={BBB} alt="Accredited Business Logo" title='Accredited Business Logo' />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image layout='responsive' src={WorkSafe} alt="Work Safe BC Logo" title='Work Safe BC Logo' />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image layout='responsive' src={Technical} alt="Technical Safety BC Logo" title='Technical Safety BC Logo' />
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
                      <BrandDetails title='Trane products and services' list={true} ListArray={brandDetailparagraph} />
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
  )
}

export default Trane
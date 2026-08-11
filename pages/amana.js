import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { CommonBanner } from '../components/components'
import JsonLd from '../components/JsonLd'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import BrandLogo from '../public/brand-page/Layer-120.webp'
import BBB from '../public/certification/cer1.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Technical from '../public/certification/cer3.webp'
import BlueLogo from '../public/logo/airlinx-logo2.png'
import { BrandDetails, FaqAndForm, FeaturedCoolingServices, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const Amana = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you install Amana heating and cooling systems in Burnaby?", ans: "Yes, we install Amana furnaces, heat pumps, and air conditioners for residential and commercial properties throughout Burnaby, ensuring every system is set up for long-term performance.", list: null },
    { id: "faq-2", que: "Why is my Amana furnace making unusual noises?", ans: "Banging, rattling, or squealing sounds may indicate loose components, airflow problems, or normal wear and tear. Our technicians can inspect your Amana system and resolve the issue before it becomes a major repair.", list: null },
    { id: "faq-3", que: "Can you service my existing Amana HVAC system?", ans: "Absolutely. We provide routine maintenance, diagnostics, and repairs for Amana heating and cooling systems to help improve efficiency and maintain reliable year-round comfort.", list: null },
    { id: "faq-4", que: "Is it worth upgrading to a new Amana HVAC system?", ans: "If your current system is older, requires frequent repairs, or has become less energy-efficient, we can help you determine whether upgrading to a new Amana unit is the best investment for your Burnaby property.", list: null },
    { id: "faq-5", que: "Why do Burnaby homeowners choose Airlinx for Amana HVAC services?", ans: "Customers rely on our experienced local technicians for professional installations, accurate repairs, honest recommendations, and dependable ongoing support for all Amana heating and cooling systems.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const brandDetailparagraph = [
    'We provide Amana heating and furnace experienced technicians who serve you to the fullest.',
    'We provide professional services at affordable rates.',
    'Our technicians are insured and licensed.',
    ' Amana heating, maintenance, and repairing services assure you full tune-up timely services.',
    'We strive to maintain excellence through our good.'
  ]
  return (
    <>
      <Head>
        <title>Amana Furnace and Heating Experienced Technicians - Airlinx</title>
        <meta name="description" content="Get your Amana furnace serviced by certified technicians, who will make sure your furnace system is operating at peak performance. Call Airlinx heating." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/amana/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <CommonBanner bg={BoilerMaintainanceBanner} title="Amana" color="#fff" variant="h1" />
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
                              <Image layout='responsive' src={BrandLogo} alt="Amana Logo" title='Amana Logo' />
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
                      <BrandDetails title='Airlinx&apos;s Amana products and services' list={true} ListArray={brandDetailparagraph} />
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

export default Amana
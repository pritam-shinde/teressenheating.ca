import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import BrandLogo from '../public/brand-page/Layer-118.webp'
import BBB from '../public/certification/cer1.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Technical from '../public/certification/cer3.webp'
import BlueLogo from '../public/logo/airlinx-logo2.png'
import { BrandDetails, FaqAndForm, FeaturedCoolingServices, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const Coleman = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you install Coleman heating and cooling systems in Burnaby?", ans: "Yes, we provide professional installation of Coleman furnaces, air conditioners, and heat pumps for residential and commercial properties throughout Burnaby.", list: null },
    { id: "faq-2", que: "Can you repair and maintain Coleman HVAC equipment?", ans: "Absolutely. Our technicians service Coleman heating and cooling systems, offering inspections, repairs, and routine maintenance to keep your equipment running efficiently year-round.", list: null },
    { id: "faq-3", que: "Are Coleman HVAC systems suitable for Burnaby homes?", ans: "Yes, Coleman systems are designed to deliver dependable heating and cooling performance, making them a reliable option for homeowners dealing with Burnaby's changing seasons.", list: null },
    { id: "faq-4", que: "How often should a Coleman HVAC system be serviced?", ans: "We recommend scheduling professional maintenance once a year to improve efficiency, reduce the likelihood of breakdowns, and extend the life of your Coleman HVAC system.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for Coleman HVAC services in Burnaby?", ans: "Our experienced local team provides expert Coleman installations, repairs, and maintenance with quality workmanship, prompt service, and customized heating and cooling solutions for customers across Burnaby and nearby communities.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const ListArray = ["Coleman heating/ AC experienced technicians make sure that you are served well.", "We have professional services at affordable pricing.", "All our experts are licensed experts.", "We provide the best heating, and air quality services for you."]
  return (
    <>
      <Head>
        <title>Coleman heating Experienced Technicians - Airlinx</title>
        <meta name="description" content="Whether you need a furnace, air conditioner, or any other heating or cooling equipment, Airlinx Heating will diagnose & repair your Coleman system quickly" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/coleman/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <main>
        <CommonBanner bg={BoilerMaintainanceBanner} title="Coleman" color="#fff" variant="h1" />
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
                              <Image layout='responsive' src={BrandLogo} alt="Coleman Logo" title='Coleman Logo' />
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
                      <BrandDetails title='Get the best Coleman products servicing at relative ease' list={true} ListArray={ListArray} />
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
                        <ListItemText primary={<span><a href="/furnace/">Furnaces repair, maintenance, and installation</a>.</span>} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutline className='text--blue' />
                        </ListItemIcon>
                        <ListItemText primary={<span><Link href="/heat-pump/">Heat pump maintenance</Link>, installation, and repair.</span>} />
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
                  <Typography className='para'>We have 24*7 servicing and repairs. With more than 20 years of work experience, we serve you with our quality and affordable services. So, call us today!</Typography>
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
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quotee" formVariant="h2" formtitleAlign="center" />
      </main>
    </>
  )
}

export default Coleman
import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import BrandLogo from '../public/brand-page/Layer-123.webp'
import BBB from '../public/certification/cer1.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Technical from '../public/certification/cer3.webp'
import BlueLogo from '../public/logo/airlinx-logo2.png'
import { BrandDetails, FaqAndForm, FeaturedCoolingServices, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const Armstrong = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you install Armstrong Air heating and cooling systems in Burnaby?", ans: "Yes, we install Armstrong Air furnaces, heat pumps, and air conditioning systems for residential and commercial properties throughout Burnaby, ensuring reliable year-round comfort.", list: null },
    { id: "faq-2", que: "Can you troubleshoot airflow issues with Armstrong Air systems?", ans: "Absolutely. If your Armstrong Air system has weak airflow or uneven temperatures, our technicians can inspect the ductwork and HVAC components to identify and resolve the issue.", list: null },
    { id: "faq-3", que: "How long do Armstrong Air HVAC systems typically last?", ans: "With proper installation and regular maintenance, Armstrong Air heating and cooling systems can provide dependable performance for many years. Annual servicing helps maximize their lifespan.", list: null },
    { id: "faq-4", que: "Do you provide seasonal maintenance for Armstrong Air equipment?", ans: "Yes, we offer comprehensive maintenance that includes cleaning, safety inspections, performance testing, and component checks to keep your Armstrong Air system operating efficiently.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for Armstrong Air HVAC services in Burnaby?", ans: "Our Burnaby-based HVAC professionals deliver expert Armstrong Air installation, repairs, and maintenance with personalized recommendations, quality workmanship, and dependable local support.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const ListArray = ["Armstrong HVAC heating/ AC experienced technicians make sure that you are served well.", "We have professional services at affordable pricing.", "All our experts are licensed experts.", "We provide the best heating, and air quality services for you."]
  return (
    <>
      <Head>
        <title>Armstrong Furnace and Air Conditioner Services - Airlinx</title>
        <meta name="description" content="Airlinx heating offers HVAC repairs, furnace installation and furnace maintenance. We service Armstrong Furnace and Air Conditioner with comfort." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/armstrong/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <main>
        <section>
          <CommonBanner bg={BoilerMaintainanceBanner} title="Armstrong" color="#fff" variant="h1" />
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
                              <Image layout='responsive' src={BrandLogo} alt="Luxaire Logo" title='Luxaire Logo' />
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
                      <BrandDetails title='Get the best Armstrong HVAC products servicing at relative ease' list={true} ListArray={ListArray} />
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
              <Grid item xs={12} md={10} className='mx-auto'>
                <Box>
                  <SectionalHeading variant="h2" simpletext='Choose the best Amstrong HVAC professionals' />
                  <Typography className='para'>Armstrong has been a smart choice for homeowners who expect much from their cooling and heating system. Incorporated with durable materials and brilliant technology, Armstrong Air is a brand to trust when it comes to your home's comfort.
                  </Typography>
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
                  <SectionalHeading variant="h2" simpletext='Why choose Armstrong HVAC Products?' />
                  <Typography className='para'>So, when you choose Day and night HVAC heating and cooling equipment, you are selecting sophisticated, quality-driven, and comfort over everything. We are proud to help you with the best and latest technology with smart and efficient products with smooth operations.</Typography>
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
                  <SectionalHeading variant="h2" simpletext='Selecting a Heating and cooling system that&apos;s right for you' />
                  <Typography className='para'>If you are not sure which product is right for you, then you can give us a call and explore the different options that suit your requirement.</Typography>
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
                  <SectionalHeading variant="h2" simpletext='Are you looking for a saving option?' />
                  <Typography className='para'>If yes, then we offer many ultra-high efficiency products which exceeds the minimum qualifications of our "ENERGY STAR" program. We have products that are ENERGY STAR certified.</Typography>
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
                      <ListItemText primary=' Heat pump maintenance, installation, and repair.' />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary='Boiler installation, installation, and repair.' />
                    </ListItem>
                  </List>
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
                  <SectionalHeading simpletext="What makes us special?  " variant="h2" />
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
                      <ListItemText primary={<strong>Installation Day </strong>} secondary="We remove old equipment from your home and install new equipment. Once done, we take care of everything." />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <FeaturedCoolingServices />
        <PopularService color='red' />
        <FeaturedHeatingServices />
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />

      </main>
    </>
  )
}

export default Armstrong
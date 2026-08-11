import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import Carrier1 from '../public/brand-page/Layer-124.webp'
import BBB from '../public/certification/cer1.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Technical from '../public/certification/cer3.webp'
import BlueLogo from '../public/logo/airlinx-logo2.png'
import { BrandDetails, FaqAndForm, FeaturedCoolingServices, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'
import Link from 'next/link'

const Carrier = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you install Carrier heating and cooling systems in Burnaby?", ans: "Yes, we install Carrier furnaces, heat pumps, and air conditioning systems for homes and businesses across Burnaby, ensuring every system is professionally installed for optimal performance.", list: null },
    { id: "faq-2", que: "Can you help improve the efficiency of my Carrier HVAC system?", ans: "Yes. Our technicians perform detailed inspections, clean key components, and make performance adjustments to help your Carrier system operate more efficiently and lower energy costs.", list: null },
    { id: "faq-3", que: "What should I do if my Carrier furnace won't start?", ans: "If your Carrier furnace isn't turning on, it could be due to a thermostat issue, ignition failure, or electrical problem. Our Burnaby technicians can quickly diagnose the fault and restore your heating system.", list: null },
    { id: "faq-4", que: "Do you offer preventative maintenance for Carrier equipment?", ans: "Absolutely. We recommend annual maintenance for Carrier heating and cooling systems to improve reliability, extend equipment life, and reduce the chance of unexpected repairs.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for Carrier HVAC services in Burnaby?", ans: "Our local team provides expert Carrier installation, maintenance, and repair services with experienced technicians, transparent recommendations, and dependable support for homeowners and businesses throughout Burnaby.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const brandDetailparagraph = [

    { id: 'branddetail-1', text: "You would like to know what kind of repairing services you can get from Airlinx's HVAC services if you hire us. Depending on your demands and the scenarios, we can perform major repair work if you need our assistance. Everything from faulty fans to igniters, we repair everything. We will work hard to give you a first-rate Carrier furnace repair service as part of our job. We also believe in delivering the best outcomes." },
    { id: 'branddetail-2', text: "We fix any furnace models. We can immediately dispatch the closest heating team to your home and send our multiple groups to your locations with the help of a GPS. Airlinx's multiple business licenses can fix any brand and provide you with the best possible assistance." }

  ]
  return (
    <>
      <Head>
        <title>Certified Carrier Furnace Technician Services - Airlinx</title>
        <meta name="description" content="Airlinx heating is your local Carrier furnace experts. We have been providing quality furnace service since long. Call today for furnace services." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/carrier/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <main>
        <CommonBanner bg={BoilerMaintainanceBanner} title="Carrier" color="#fff" variant="h1" />
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
                          <Grid item xs={6}>
                            <Box p={3}>
                              <Image layout='responsive' src={Carrier1} alt="Carrier Logo" title='Carrier Logo' />
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
                      <BrandDetails title='Get certified carrier HVAC repairing services at your doorstep' brandDetaillArr={brandDetailparagraph} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='mt-md-4 mt-3'>
          <Container maxWidth="xxl" className="px-md-0">
            <Grid container>
              <Grid item xs={12} md={10} className='mx-auto'>
                <Box>
                  <SectionalHeading simpletext="Common issues faced with Carrier furnaces" variant="h2" />
                  <Typography className='para'>Whether you have an electric or gas furnace, it is important to comprehend how they operate. So, here are the most common issues your Carrier furnaces might face:</Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary={<strong>Your Carrier furnace would not light up:</strong>} secondary="Your furnace's pilot light should be blamed if it does not ignite. You should try leaning the sensor or get our help if your Carrier furnace is not lighting." />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary={<strong>Carrier furnace leakage:</strong>} secondary={<span>If your Carrier furnace is tripping water, there is some condensation issue. Also, the secondary heat exchanger in a Carrier furnace might occasionally be the source of leakage. <a href="/contact-us/">Call us</a> today and get the right assistance for free.</span>} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary={<strong>Furnace from Carrier spreading chilly air:</strong>} secondary={<span>If your Carrier is blowing out cold air rather than warm air, then there is a problem. This can be the result of the fan limit switch malfunctioning. In this case, you should look for an LED light on the <Link href="/furnace-inspection/">furnace</Link> control board on your thermostat.</span>} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary={<strong>Flashes codes for Carrier furnaces:</strong>} secondary="What is the meaning of flashing signals on your Carrier furnaces? For this, you should understand that each code is unique and it conveys a different meaning. The number of brief flashes will decide the first number, while the number of extended flashes will determine the second number. To clear up any doubt and get your furnace repaired, you can call us." />
                    </ListItem>
                  </List>
                  <SectionalHeading simpletext="Near Me repairing services for Carrier Furnaces:" variant='h2' />
                  <Typography className='para'>Installing a Carrier furnace as soon as possible is essential throughout the winter. And if your furnace suffers a breakdown, then you need a repair.</Typography>
                  <Typography className='para'>Also, ignoring routine furnace maintenance can increase energy costs, and make parts of the furnace work harder, causing the furnace system to malfunction completely. So, give us a call and we will be there as your Carrier furnace technician.</Typography>
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

export default Carrier
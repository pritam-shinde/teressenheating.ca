import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/emergency/emergency.webp'
import { BrandSlider, FaqAndForm, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const Emergency = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you provide emergency heating and cooling services in Burnaby?", ans: "Yes, we offer emergency heating and cooling service across Burnaby to address sudden breakdowns, unexpected system failures, and urgent repair needs.", list: null },
    { id: "faq-2", que: "What counts as an HVAC emergency?", ans: "An HVAC emergency includes a complete loss of heat during cold weather, AC failure during extreme heat, gas odors, burning smells, or major water leaks from your heating or cooling system.", list: null },
    { id: "faq-3", que: "Are your emergency HVAC services available after hours?", ans: "Yes, our after hours air conditioning service and emergency heating repairs are available when you need fast, dependable service outside regular business hours.", list: null },
    { id: "faq-4", que: "How quickly can a technician respond to an emergency service call?", ans: "We prioritize emergency calls and work to dispatch an experienced technician as quickly as possible to restore safety and comfort to your home or business.", list: null },
    { id: "faq-5", que: "What HVAC systems do you repair during emergency service calls?", ans: "We provide emergency repairs for furnaces, heat pumps, air conditioners, boilers, and other heating and cooling systems throughout Burnaby.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  return (
    <>
      <Head>
        <title>24/7 Emergency Heating & Cooling Service - Airlinx</title>
        <meta name="description" content="HVAC failure? Don't panic. Airlinx Heating provides 24/7 emergency heating and cooling service in Burnaby for fast furnace, boiler, and AC repairs." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/emergency/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>

      <main>
        <CommonBanner bg={Banner} title="Airlinx's emergency services are affordable, trustworthy, and come with good quality" color="#fff" variant="h1" />
        <Container maxWidth="xxl" className='px-0'>
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl">
                        <Typography className='para'>In the winter season, we need our furnace to keep our home cozy. But what if your furnace breaks down? In that case, you need an instant solution that is fast and reliable too. That is why the experts at Airlinx offer superior HVAC emergency <Link href="/tankless-water-heaters/">water heater repair services</Link> to meet your everyday needs. No matter the time, we are always there for your assistance.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Situations where you need an emergency service" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>So, here are the emergencies, where we will help you with the best possible solutions:</Typography>
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>When your thermostat is not answering</strong>} secondary="If your thermostat is not working properly and is not responding right, then you need an expert who will be there for your help. Whenever you observe that your thermostat isn't answering, then make sure that all your settings are correct and the system is set to auto. But if that is not working, then we are there for your assistance" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>When your heating system is making weird noises:</strong>} secondary="Strange sounds are never something you would like to hear out. And in the case of a heating system, you should pay attention to this. It gets only worse if proper attention is not given. So, at this time you should immediately call us and we will be there for your assistance." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Smelling gas in your home:</strong>} secondary="If you are using a gas-burning heating system, and you smell gas at your home, then that's risky. Hence, this is the time you should call our emergency services and get the best heating and cooling services without any delays." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>When cold air is coming from your heating system:</strong>} secondary="When winters are too chilly and cold air comes from outdoors, you need an expert at your home. So, call us we are there for your service." />
                            </ListItem>
                          </List>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Airlinx's 24*7 evergreen service day and night" variant="h2" align="left" />
                        <Typography className='para'>Our technicians have over years of experience and they serve you without any delays. We are there even on holidays, weekends, and after hours. We know how important it is to have the best possible heating and cooling services when the weather hits hard for you. So, we stand with you 24*7*365 days for you.</Typography>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Peace of mind is guaranteed" variant="h2" />
                        <Typography className='para'><Link href="/">Airlinx&apos;s heating ltd services</Link> offer the best 24-hour emergency heating services for you. So, best assured that you are in safe hands with our family-owned business. With so many positive reviews, you can trust us for our emergency HVAC heating requirements.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2'>
                      <Container maxWidth="xxl">
                        <Box>
                          <SectionalHeading simpletext="Why us?" variant="h2" />
                          <Typography className='para'>When it comes to offering you the best emergency services 24*7, we are always active and make sure that you are always stress-free. So, here are the reasons why we are the best:</Typography>
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Affordable, trust, and quality:</strong>} secondary="We offer the best services in town and will never try and sell something which does no good. We also provide all the necessary equipment for your job. Along with this, we also make sure that you are comfortable with us." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Around-the-clock service:</strong>} secondary={<>Airlinx&apos;s <a href="/heating-services/">heating services</a> will never disappoint you. We offer a variety of services to meet your requirements 24*7.</>} />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Worldwide quick services:</strong>} secondary="We have a team of expert who takes care of everything. We send out our experts to your location in the world." />
                            </ListItem>
                          </List>
                        </Box>
                      </Container>
                    </section>
                  </Grid>
                  <Grid item xs={12} lg={4} className={width > 1199 ? 'd-block' : 'd-none'}>
                    <ServiceCommonSidebar />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid>
            </Grid>
          </Grid>
        </Container>
        <FeaturedHeatingServices />
        <PopularService color="red" />
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  )
}

export default Emergency
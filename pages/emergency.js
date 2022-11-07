import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/emergency/emergency.webp'
import { CheckCircleOutline } from '@mui/icons-material'

const Emergency = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "How do you maintain a heating and cooling system?", ans: "Here are a few tips on how you can maintain your home heating systems:.", list: ["Looking after your heating pump: Always schedule a tune-up before winter because there are chances that your heat pump might have got some damage during the last cooling season.", "Knowing your heating system's thermostat settings: Make sure that you always know three major thermostat settings-heating, cooling, and emergency heating.", "Cleaning the ducts: It is always recommended to check your heating system ducts every year. Duct cleaning is required in cases like pets, water damage, smoking, or reconstruction of your property."] },
    { id: "faq-2", que: "Can you combine heating and cooling system?", ans: "Yes, you can combine a cooling and heating system. Through this, you can save a lot of money and space with one unit. However, if you have existing systems, then you will be able to replace them with a new setup.", list: null },
    { id: "faq-3", que: "Should I leave my heat pump on all the time?", ans: "Heat pumps are an effective way to use electricity to heat your home during the winter. So, leaving them running day and night is not an economically feasible option. You should always switch off your heat pumps when you do not need them.", list: null },
    { id: "faq-4", que: "Can you use the same ducts for heating and cooling?", ans: "Yes, you can always use an add-on refrigerated cooling system as an add-on component to your ducted gas heating system. This allows you to run refrigerated air conditioning with the help of the same ducting and outlet systems.", list: null },
    { id: "faq-5", que: "How does geothermal heating and cooling work?", ans: "Geothermal heating works by moving temperature-conducting fluid through an underground loop of pipes beneath. This allows the fluid to collect the thermal energy which is deposited in the earth from the sun.", list: null },
    { id: "faq-6", que: "How does ductless heating and cooling work?", ans: "It works by using heat exchanger coils to move warm air from one location to another. During winter, the heat pump draws warm air from outside your home to increase temperatures inside. During the summer, the heat pump reverses the process, passing out warm air from your home.", list: null },
    { id: "faq-7", que: "How Much Does HVAC Installation Cost?", ans: "The cost to replace an HVAC system varies from $5,000 to $10,000, which comes to around $25 to $60 per square foot of coverage, depending on the brand and size. For a new installation, you might have to pay $1,500 to $12,500.", list: null },
    { id: "faq-8", que: "How Long Does HVAC Installation take?", ans: "Usually, it takes three to five days for installation.", list: null },
    { id: "faq-9", que: "	What Kinds of Warranties Come with My New HVAC Installation?", ans: "It has the following warranties:", list: ["HVAC Manufacturer Warranty.", "HVAC Extended Warranty.", "Homeowners Insurance.", "Home Warranty"] },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]
  return (
    <>
      <Head>
        <title>Affordable Heating and Cooling Emergency Services in Canada | Teressen</title>
        <meta name="description" content="Teressen's heating services offer the best 24*7 emergency heating and cooling services in Canada. We serve the best affordable , trusted and quality service." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/emergency/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title="Teressen's emergency services are affordable, trustworthy, and come with good quality" color="#fff" variant="h1" />
        <Container maxWidth="xxl" className='px-0'>
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl">
                        <Typography className='para'>In the winter season, we need our furnace to keep our home cozy. But what if your furnace breaks down? In that case, you need an instant solution that is fast and reliable too. That is why the experts at Teressen offer superior HVAC emergency water heater repair services to meet your everyday needs. No matter the time, we are always there for your assistance.</Typography>
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
                        <SectionalHeading simpletext="Teressen's 24*7 evergreen service day and night" variant="h2" align="left" />
                        <Typography className='para'>Our technicians have over years of experience and they serve you without any delays. We are there even on holidays, weekends, and after hours. We know how important it is to have the best possible heating and cooling services when the weather hits hard for you. So, we stand with you 24*7*365 days for you.</Typography>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Peace of mind is guaranteed" variant="h2" />
                        <Typography className='para'>Teressen&apos;s heating ltd services offer the best 24-hour emergency heating services for you. So, best assured that you are in safe hands with our family-owned business. With so many positive reviews, you can trust us for our emergency HVAC heating requirements.</Typography>
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
                              <ListItemText primary={<strong>Around-the-clock service:</strong>} secondary="Teressen's heating services will never disappoint you. We offer a variety of services to meet your requirements 24*7." />
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
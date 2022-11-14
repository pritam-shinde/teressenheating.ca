import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/furnace-inspection/banner.webp'
import Furnace from '../public/furnace-inspection/furnace.webp'
import Image from 'next/legacy/image'
import { CheckCircleOutline } from '@mui/icons-material'
import HomeFurnace from '../public/furnace-inspection/Ductwork-and-Ventilation.webp'

const FurnaceInspection = () => {
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
        <title>Furnace Installation and Repair Services in Canada | Teressenheating</title>
        <meta name="description" content="Teressenheating is a furnace installation and repair service company with professional experience. We offer different types of furnance to meet your needs and budget." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/furnace-inspection/" />
      </Head>
      <main>
      <CommonBanner bg={Banner} title="The best furnace repair and installation services in Canada" color="#fff" variant="h1" />
        <Container maxWidth="xxl" className='px-0'>
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl">
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image layout='responsive' src={Furnace} alt="Furnace service" title='Furnace service' />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <SectionalHeading blacktext="Furnace" blueText="service and repair" variant="h2" />
                              <Typography className='para'>Teressen heating ltd provides one of the best furnace installation and repair services in Canada. We have been working continuously in HVAC services and have played a crucial role in the Canadian fire safety association. We take care of installation, repair, and furnace maintenance work for years with love,</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} className="m-0 pt-0">
                            <Box>
                              <Typography className='para'> dedication, and concern. So, if your furnace system gets a breakdown, do not panic. Just give us a call and we will serve you with the best of everything. Our organization provides 24*7 furnace repair services in Canada and also takes care of your safety.</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="So, why choose Teressen's furnace inspection services" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>It is because we have never failed to follow all the annual fire safety inspection guidelines. We strictly adhere to all the norms and make sure that we help you with the best of everything. So, here are the things that make us different from the crowd:</Typography>
                          <List>
                            {
                              ["Years of work experience", "Licensed and insured HVAC services", "Following annual fire safety inspection guidelines", "24*7 emergency furnace repairs", "We have certified technicians", "We provide safety inspection for each service", "We have free estimates for installation"].map(item => <ListItem key={item}>
                                <ListItemIcon>
                                  <CheckCircleOutline className='text--blue' />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                              </ListItem>)
                            }
                          </List>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Residential Heating services" variant="h2" align="center" />
                        <Box mt={3}>
                          <Grid container>
                            <Grid item xs={12} md={6}>
                              <Typography className='para'>Teressen heating ltd understands the importance of emergency HVAC services which are needed for residential heating. It is difficult to live without cooling and heating systems these days. So, we make sure that we help you with the best residential heating and home HVAC services which includes system repairing, furnace installation and repair, rooftop unit repair, and central heating system maintenance services.</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Image layout='responsive' src={HomeFurnace} alt="Residential Furnace" />
                            </Grid>
                            <Grid item xs={12} className="m-0 py-0">
                              <Typography className='para'>So, if your heating system is not being tuned up once a year, if it has some mechanical issues and if it has a faulty error sign, then simply give us a call. Our annual fire safety inspection services will leave you stress-free and happy. Also, people who have been working with us, have been trained and certified with the best. So, we will always help you to deal with problems like unexpected breakdowns, higher-than-usual heating bills, and carbon monoxide poisoning.</Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2'>
                      <Container maxWidth="xxl">
                        <Box>
                          <SectionalHeading simpletext="Teressen's services that make us different from the crowd" variant="h2" />
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>HVAC services</strong>} secondary="We provide same day service, with on-time and reliable technicians. We have a no-hidden charges policy and help you with free estimates of installation services." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>24*7 Emergency services</strong>} secondary="We deal in providing a wide range of services all over the Canadian region for a long time. For all kinds of HVAC work, please feel free to call us anytime, without keeping any doubt in mind." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Our service for all brands</strong>} secondary="We do services for all brands like Rheem, Goodman, Carrier, Lennox, and Trane." />
                            </ListItem>
                          </List>
                          <Typography className='para'>Teressen professional furnace installation services are fast and affordable. You can call us 24*7 to service all your major brands. We are a one-stop destination for your professional furnace installation services that take care of everything without any hidden charges. All our technicians and installers are well-groomed and provide you with the best competitor price match guarantee.</Typography>
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

export default FurnaceInspection
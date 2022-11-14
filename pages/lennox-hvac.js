import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/lennox-hvac/lennox.webp'
import Image from 'next/legacy/image'
import { CheckCircleOutline } from '@mui/icons-material'
import hvacLennox from '../public/lennox-hvac/dlsc-family-new.webp'

const LennoxHVAC = () => {
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
        <title>Lennox HVAC Systems Installation and Service Dealer | Teressenheating</title>
        <meta name="description" content="We are the Lennox dealer specialize in Lennox products installation and services We have experienced technicians who ensure that your system is running smoothing." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/lennox-hvac/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title="Teressen your Lennox HVAC systems have certified technicians" color="#fff" variant="h1" />
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
                              <Image layout='responsive' src={hvacLennox} alt="Lennox HVAC Systems" title='Lennox HVAC Systems' />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'>We help you with the best quality Lennox furnaces in the industry. It is one of the most trusted brands in heating equipment because it is very easy to install, operate and maintain too.</Typography>
                              <Typography className='para'>We are the Lennox dealer in your area. We have experienced technicians who ensure that your furnace is running smoothing. If something goes wrong, then we are here to make sure that everything is smooth and easygoing.</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Teressen is one of the top-rated companies that specialize in Lennox products installation and services" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>So, when you are looking for someone who has HVAC experience, it is crucial to find the one who will work hard until your satisfaction is assured. With the right experts available, we make sure that there are no delays in your work. We are here to assist you 24*7 to ensure you with optimal indoor air quality by helping you with equipment that is maintained regularly as per the manufacturer&apos;s recommendations. Also, these systems help you ensure protection from potential malfunctions resulting due to dirt buildup. This leads to not only increasing energy bills but also safety hazards such as carbon monoxide poisoning if left just like that.</Typography>
                          <Typography className='para'>Now, installing a new heating and cooling system is one of the biggest decisions you will make. Our certified experts understand that each home is different and they need different solutions. We work closely with homeowners like you to assure stress-free free living. So, whatever installation problems you are facing, just make sure that you give us a call today.</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="We have Lennox HVAC dealers who will take care of everything personally" variant="h2" align="left" />
                        <Typography className='para'>You can count on us for our expert guidance and we will look after everything. Right from oil changing to fixing your furnace, we look after everything. We are available in your area and ensure that your work is done safely, efficiently, and smoothly.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2'>
                      <Container maxWidth="xxl">
                        <Box>
                          <SectionalHeading simpletext="Why us?" variant="h2" />
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Cost-effective solutions</strong>} secondary="We work to provide your home with the best Lennox HVAC products which are efficient, cost-effective, and safe. We have competitive prices for all our services which make us extremely affordable and easy." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Offering quality services</strong>} secondary="We offer furnace installation and maintenance services to all our clients. We also make sure that we find the solutions which best suit your requirements." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Flexible scheduling and convenient hours</strong>} secondary="We offer flexible appointment times to make sure that everything goes well." />
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

export default LennoxHVAC
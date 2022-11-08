import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/lennox-hvac/lennox.webp'
import Image from 'next/legacy/image'
import { CheckCircleOutline } from '@mui/icons-material'
import boiler from '../public/boiler/boiler-service.webp'

const BoilerService = () => {
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
        <title>Affordable Boiler System Maintenance Service in Canada | Teressen</title>
        <meta name="description" content="We are a leading company of boiler repair, installation and servicing company in Canada. Our staff is experienced and licensed to work on boilers." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/boilers-service/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title="Teressen boiler repair and maintenance service: Quality, trust, and affordability assured" color="#fff" variant="h1" />
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
                            <Image layout='responsive' src={boiler} alt="boiler service" />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>Are you in need of reliable and affordable boiler services for your home? Then, Teressen heating ltd is your expert solution. We are one of the top-rated boiler maintenance and repair service providers near you. We are here to help you get quick residential boiler repair services. With over years of experience, we can quickly get the best possible solutions for you and diagnose any issue with your boiler system. So why wait? Call us today for all your boiler-related issues.</Typography>
                            <Typography>Teressen has always been a perfect choice for all your boiler servicing needs in Canada. We are a professional and reliable company which</Typography>
                          </Grid>
                          <Grid item xs={12} className="pt-0 m-0">
                            <Typography className='para'>needs no introduction. We have an extensive experience in the industry, and we make sure that your boiler is up and running quickly. You can also call us today and get a free consultation. Also, make sure that your home is ready with our quick boiler and repair services. Our experts will have your system up and running in no time so that you sit, relax, chill and stay warm all winter long. </Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Boiler system maintenance" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>To keep your boiler unit in good working condition, it is necessary to operate it safely and efficiently. It is also important that basic system maintenance should be performed at regular intervals. As one of the most qualified, reputed, and experienced names in the boiler industry and Canada, you can count on us. You can trust us to provide the best boiler repair services.</Typography>
                          <Typography className='para'>An improper boiler installation can be dangerous and results in serious injury and major damage. Boiler repair and maintenance must be performed by a highly-trained and certified professional. All Teressen technicians are qualified with the knowledge and ability to perform a professional analysis of the home, and building layout, and also ensure water lines are of the appropriate size.</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Teressen best boiler services, maintenance, and repair" variant="h2" align="left" />
                        <Typography className='para'>The process industry like yours depends on heat transfer equipment like steam boilers to get the job done. So, when you need an emergency service, you should call professionals who not only understand the features of your equipment, but also the complex nature of your boiler.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2'>
                      <Container maxWidth="xxl">
                        <Box>
                          <SectionalHeading simpletext="So, why us?" variant="h2" />
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="We have experienced and qualified personnel." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="Installation and erection services for steam boilers and equipment." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="Controls programming" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="Equipment safety and operator training" />
                            </ListItem>
                          </List>
                        </Box>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Signs your boiler needs servicing" variant="h2" />
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>Water leaks:</strong>} secondary="Boiler water is never good. While some homeowners think that they can simply patch leaks up and move on, most boilers have issues like corrosion, broken seals, and poor installation. Leaks should be inspected by a professional technician to restore heat, and prevent future water damage." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>Unusual smelling:</strong>} secondary="If odd smells are coming from your boiler, then you can contact your local boiler technicians. While the pungent smell is not a sign of immediate danger, the smell of natural gas coming from your gas-fuelled boiler is." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>Strange sounds:</strong>} secondary="While some rumbling may cause you to jump in the night, odd furnaces do not present immediate danger. But excessive kettling and whistling can be dangerous and address the limescale build-up." />
                          </ListItem>
                        </List>
                        <Typography className='para'>{`So, next time when you google, about the best "boiler repair services near me", you will always have us by your side.`}</Typography>
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
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quotee" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  )
}

export default BoilerService
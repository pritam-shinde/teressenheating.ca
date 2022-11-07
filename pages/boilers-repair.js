import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/lennox-hvac/lennox.webp'
import Image from 'next/legacy/image'
import { CheckCircleOutline } from '@mui/icons-material'
import boiler from '../public/boiler/worker-repairing-water-heater.webp'

const BoilerRepair = () => {
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
        <title>Boiler Repair Services in Canada | Teressenheating</title>
        <meta name="description" content="We are a leading boiler repair company in Canada. Our knowledgeable technicians can diagnose any boiler-related issue and provide a complete solution." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/boilers-repair/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title="Teressen boiler repair service is one of the best boiler repairing services in Canada" color="#fff" variant="h1" />
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
                            <Typography className='para'>Teressen has been providing expert boiler installation, boiler repair, and boiler installation services in Canada for years now. As an experienced leader in the home heating industry, we must provide our customers with a wide variety of boiler maintenance and boiler repair services at affordable prices.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="What are boilers?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>{`Boilers heat water is used to produce 'wet heat'. It is then channeled through a network of pipes to provide comfortable and efficient warmth through a business. The average boiler comes in a wide range of sizes to suit any application in efficiency from as low as 81% to high-efficiency which can surpass 90%.`}</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Boiler repairing system" variant="h2" align="left" />
                        <Typography className='para'>To keep your boiler in good working condition; it is mandatory to provide boiler repairing services at relative ease. As one of the most qualified, respected, and experienced names in the industry and Canada, you can always trust Teressen to provide you with the best residential boiler repairing services 24*7.</Typography>
                        <Typography className='para'>An improper boiler repair can be a bit dangerous process resulting in serious injury. It must be performed by a highly-trained and certified professional. All Teressen technicians are qualified with knowledge and their ability to perform a professional analysis of the home will win your heart.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3 bg-grey'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="We keep your boilers running for long" variant="h2" align="left" />
                        <Typography className='para'>Repairing is one of the primary specialties of Teressen heating ltd. Our field staff is available 24*7 and has a combined history of literally hundreds of years of service and experience. We can meet the needs of the most complex boiler systems. We also repair or rebuild boilers that exceed OEM standards in less time. Easy access to critical parts allows our boiler repairs to swiftly remedy issues from minor refractory repairs to emergency generator tube bank replacements. And this makes us one of the best boiler repairing industries in the world.</Typography>
                        <Typography className='para'>We have a true understanding of, downtime loss of production and approach repair projects with a sense of urgency. Our on-call boiler repair groups are available 24*7 and can be on-site within hours of your initial call. Our trucks act as rolling boiler parts departments and include the best operational services immediately.</Typography>
                        <Typography className='para'>If your boiler is forced to be down for an extended period, then we also arrange for rental boilers. This helps you to relax and count on us.</Typography>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Why consider us?" variant="h2" align="left" />
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="We have got years of work experience" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="There are no hidden charges" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="We have fully trained experts" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="We guarantee comfort" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="We have exceptional reviews." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="Trained and certified technicians." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="24*7 services." />
                          </ListItem>
                        </List>
                        <Typography className='para'>We understand that it is not an easy task to find a reliable company in providing the best boiler repair services. So, when you are looking for a home boiler company in Canada, it is important to do your market research and then, find the best option that suits your requirement.</Typography>
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

export default BoilerRepair
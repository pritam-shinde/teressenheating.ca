import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/boiler/boiler-2.webp'
import ReapearWaterHeater from '../public/boiler/worker-repairing-water-heater.webp'
import Image from 'next/legacy/image'
import { CheckCircleOutline } from '@mui/icons-material'


const Boiler = () => {
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
        <title>Teressen Boiler Repair & Maintenance Services in Canada</title>
        <meta name="description" content="Teressen provides full boiler servicing, maintenance, and repair services in Canada. We service all types of heating systems including natural gas, oil, electric." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/boilers/" />
      </Head>
      <CommonBanner bg={Banner} title="Boiler Services" color="#fff" variant="h1" />
      <main>
        <Container maxWidth="xxl" className='px-0'>
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Image layout='responsive' src={ReapearWaterHeater} alt="Teressen Boiler repairing services" title='Worker Teressen Boiler repairing services' />
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography className='para'>Teressen Boiler repairing services in Canada can help with any problems that arise with your boiler; whether you need boiler replacement or some guidance for boiler installation. We offer the best boiler repairing services that can give you a variety of solutions for your home&apos;s comfort needs.</Typography>
                                <Typography className='para'>We have quality solutions for all your problems and help you solve any issues that come up with your home&apos;s heating system. </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} className="m-0 pt-0">
                              <Box>
                                <Typography className='para'>Also, it is a good idea to repair your home boiler before it breaks down. Hence, boiler repairs should be done by experts like us. So, whether you need a new boiler or want your current one repaired, we are always there for your assistance. Give us a call now!.</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Box>
                                <SectionalHeading variant='h2' simpletext='Boiler repairing and installation services in Canada:' />
                                <Typography className='para'>Teressen heating ltd has been providing expert boiler repair, installation, and boiler maintenance in Canada for years now. As an experienced leader in the home heating industry, Teressen takes care of all your heating problems with top-notched services at affordable prices.</Typography>
                                <Typography className='para'>Quality you can always count on: It is our job to make sure, that your home is always comfortable and warm. We have the best products to ensure you that everything is done right the first time.
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Box>
                                <SectionalHeading variant='h2' simpletext='Quality workmanship is guaranteed:' />
                                <Typography className='para'>We are experts in this industry. So, you can always count on us to give you the best advice about what is best for your home. You can always use the finest products designed with the latest technology.</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Box>
                                <SectionalHeading variant='h2' simpletext='Experts in the heating industry:' />
                                <Typography className='para'>So, if you have any questions related to your boiler repair and installation, then, give us a call instantly. Our experts are ready to assist you in everything.</Typography>
                                <Typography className='para'>Teressen heating ltd specializes in all types of boiler repair and maintenance work. We have a long track record of providing our clients with high-quality workmanship and affordability at relative ease.</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Box>
                                <SectionalHeading variant='h2' simpletext=' Benefits of professional boiler services from Teressen:' />
                                <Typography className='para'>Our professional boiler services ensure that your boiler installation, maintenance, or repair work is done spot-on. Our employees are highly trained and are equipped with all skills. They have the knowledge and understanding of different boiler systems. So, hiring a professional to service your heating system saves you money and time. Also, we are the pioneers in the boiler industry for providing quality, trust, and affordability.</Typography>
                                <Typography className='para'>A properly installed sized boiler system will heat your place and ensure that your utility bills stay low and your system operation is quiet.</Typography>
                                <Typography className='para'>So, do not delay when you notice signs of boiler disrepair. Consult us today!</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Box>
                                <SectionalHeading variant='h2' simpletext='Why choose Teressen boiler maintenance and repair services?' />
                                <Typography className='para'>Teressen delivers top-level products and is a reliable boiler partner to support your home&apos;s safer operation. Just install, a top-of-the-line boiler system in your home to provide you with energy-saving options.</Typography>

                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Our boiler repair and installation services:" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'> Canada can get cold in the winter. So, necessitating a reliable method for home heating is a must. Boilers help in heating your home and heating the water. Hence, Teressen offers the best boiler services in Canada because:
                          </Typography>
                          <List>
                            {
                              [" We have the best boiler installation and replacement: You can get quality performance from your boiler system by ensuring that you have the best products and installation techniques to support it.", " Best boiler repairs: When it comes to boilers, they have a life span between 10 to 15 years. But they need repairs and tune-ups to keep them working. So, choose the best always!"].map(item => <ListItem key={item}>
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
        <PopularService color='red'/>
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  )
}

export default Boiler
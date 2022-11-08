import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { CommonBanner, ServiceCommonSidebar, SectionalHeading } from '../components/components';
import Heating from '../public/heating-service/heating-bg.webp';
import HeaterMachine from '../public/heating-service/heating.webp'
import { Container, Box, Grid, Typography } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { List, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import Image from 'next/legacy/image'

const HeatingService = () => {
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
        <title>Heating Services - Installation And Maintenance Services | Teressenheating</title>
        <meta name="description" content="Teressen Heating & Air Conditioning offers heating installation, maintenance, and repair services to residential and commercial customers in Canada. Contact us." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/heating-services/" />
      </Head>
      <main>
        <CommonBanner bg={Heating} title="Heating Services" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl" className='px-0'>
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                      <section>
                        <Container maxWidth="xxl">

                          <Box mt={3}>
                            <Grid container spacing={5}>
                              <Grid item xs={12} md={6}>
                                <Box style={{ textAlign: 'center' }}>
                                  <Image src={HeaterMachine} alt="Heating Sysytem" title='Heating Sysytem' style={{ maxWidth: '70%' }} layout="responsive" />
                                </Box>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Box>
                                  <SectionalHeading simpletext="Providing the best heating maintenance services" variant="h2" />
                                  <Typography className='para'>Teressen heating services has been providing expert heating services in Canada for years. Our clients call us every day to meet their needs for emergency heating maintenance services, heating repairs, and cooling and heating system installation services. We have a group of trained technicians who take care of all your heating and maintenance issues and help you with the best of everything. Our factory-trained experts provide reliable heating maintenance and installation services for all brands such as boilers, furnaces, heat pumps, and yet more.</Typography>

                                </Box>
                              </Grid>
                              <Grid item xs={12} className="m-0 pt-0">
                                <Box>
                                  <SectionalHeading variant='h2' simpletext='What kind of heating system is available at your home?' />
                                  <Typography className='para'> So, if you are calling us about the heating system installation, maintenance, or replacement, it is always important for us to know what kind of heating system you have. It is because we can send the right expert with the right parts and types of machinery to complete your repairing requirement efficiently.</Typography>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Container>
                      </section>
                      <section className='mt-md-3 mt-2'>
                        <Container maxWidth="xxl">
                          <Box>
                            <SectionalHeading variant='h3' simpletext='Licensed and insured HVAC services:' />
                            <Typography className='para'>Before the chill of fall sets in it is time to think about servicing your furnace. When winter arrives, it is mandatory to look after your furnace maintenance so that it will keep you warm. At Teressen heating ltd, we have designed our furnace maintenance services and total comfort tune-up with people like you in mind. Hence, for furnace maintenance services, you simply, call us and we will be right there for your quick assistance.</Typography>
                            <Typography className='para'>During this call, we will audit your furnace for repair frequency, age, overall comfort, and energy efficiency. Our quality maintenance services include:</Typography>

                            <List className='ps-m-5 ps-4'>
                              {
                                ["A complete check-up of your furnace.", "Adjustment of controls.", "Inspect all your furnace components.", "And professional cleaning."].map(item => <ListItem key={item}>
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
                      <section className='mt-md-3 mt-2'>
                        <Container maxWidth="xxl">
                          <Box>
                            <SectionalHeading variant='h3' simpletext='Boiler services:' />

                            <Typography className='para'>If you want to keep your home warm and cozy, then your boiler maintenance should be your top priority. Whether you need a new heating system or need updates and repairs to your current boiler, then we are here to make you go through various options. Usually, there are three choices when it comes to boilers:</Typography>


                            <List className='ps-m-5 ps-4'>
                              {
                                ["Oil boiler", "Gas boiler.", "Electric boiler."].map(item => <ListItem key={item}>
                                  <ListItemIcon>
                                    <CheckCircleOutline className='text--blue' />
                                  </ListItemIcon>
                                  <ListItemText primary={item} />
                                </ListItem>)
                              }
                            </List>
                            <SectionalHeading variant='h4' simpletext='How often do you need our boiler services?' />

                            <Typography className='para'>If you already have a boiler installed at your home, then you need to check that it is performing effectively by scheduling yearly maintenance. Boilers begin to lose their efficiency as they get old. Also, when you call us, we can identify the potential issues you have in the boilers and fix them before winter.</Typography>
                            <SectionalHeading variant='h4' simpletext='Call Teressen heating ltd to discuss your boiler heating problems:' />

                            <Typography className='para'>From furnaces to boilers to heat pumps, you have so many options to choose from when it comes to keeping your space comfortable. You need to select a heating system that works according to your city&apos;s climate, living space, and budget. So, when you call our heating experts we will review your requirements and help you get the perfect boiler for your home. Our experts can also perform reliable boiler repair and maintenance when needed.</Typography>
                          </Box>
                        </Container>
                      </section>

                      <section className='mt-md-3 mt-4'>
                        <Container maxWidth="xxl">
                          <Box>
                            <SectionalHeading variant="h3" simpletext="Heat Pump" />
                            <SectionalHeading variant="h4" simpletext="Teressen heat pump installation services at their best:" />

                            <Typography className='para'>If you are looking to install a heating system or replace your furnace with something efficient, then an HVAC heat-pumping system is always a great option. You can count on our experienced team, to install the best heat pump.</Typography>
                            <SectionalHeading variant="h4" simpletext={'Our heating pumping services:'} />

                            <List className='ps-m-5 ps-4'>
                              <ListItem>
                                <ListItemIcon>
                                  <CheckCircleOutline className='text--blue' />
                                </ListItemIcon>
                                <ListItemText primary={<strong>Air-source heat pumping system: </strong>} secondary={'These units transfer heat from the air outside and move it throughout your home.'} />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <CheckCircleOutline className='text--blue' />
                                </ListItemIcon>
                                <ListItemText primary={<strong>Geothermal heat pumping system: </strong>} secondary={'These systems extract cold and warm energy from the earth and then transfer it into your home.'} />
                              </ListItem>
                            </List>

                            <SectionalHeading variant="h4" simpletext={' Heat pumping installation, and replacement services:'} />
                            <Typography className='para'>Depending on whether you are installing an air-source heat pump or a geothermal heat pump, the installation process may take a single afternoon or several weeks. This is because installing an air-source heat pump is simple just like installing an air conditioner. But a geothermal heat pump has a technical approach. It requires installation below the ground. So, the first thing that we do is check for your installation requirement first and then start our installation process.
                            </Typography>
                            <Typography className='para'>Also, if you are looking for a heat-pumping replacement, our technicians will be there to guarantee you how your new installation works. Our team is continuously trained on modern systems so that they can effectively replace filters, valves, and refrigerants.</Typography>
                          </Box>
                        </Container>
                      </section>
                      <section className='mt-md-3 mt-4'>
                        <Container maxWidth="xxl">
                          <Box>
                            <SectionalHeading variant="h3" simpletext="Radiator repairing and replacement services:" />

                            <Typography className='para'>Radiators are an efficient way to heat your space. But when one unit breaks, your plumbing, boiler, and comfort can suffer. So, if you are struggling with improper heating from one or more of your radiators, then you can count on us.
                            </Typography>
                            <SectionalHeading variant="h4" simpletext={'Our home radiator repairing services:'} />
                            <Typography className='para'> If you see that your radiator system is leaking and not heating correctly, or smell, then you need a repair. Yes, or repairing services might differ. But we do repairs in the following cases:</Typography>

                            <List className='ps-m-5 ps-4'>
                              {
                                [" There is a malfunctioning thermostat.", "There are rusty exteriors.", "There is faulty wiring.", "There is a system imbalance.", "There is trapped air."].map(item => <ListItem key={item}>
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
            </Grid>
          </Container>
        </section>
        <FeaturedHeatingServices />
        <PopularService color='red' />
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>

    </>
  )
}

export default HeatingService
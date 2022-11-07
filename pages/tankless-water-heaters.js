import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/lennox-hvac/lennox.webp'
import Image from 'next/legacy/image'
import waterheater from '../public/tankless-water-heater/water-heater.webp'

const TanklesWaterHeater = () => {
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
        <title>Tankless Water Heater Maintenance Service in Canada | Teressenheating</title>
        <meta name="description" content="Teressenheating is the best company to provide you with a tankless water heater maintenance service in Canada because of our expertise and experience." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/tankless-water-heaters/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title="Teressen tankless water heater maintenance service" color="#fff" variant="h1" />
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
                              <Image layout='responsive' src={waterheater} alt="tankless water heater" title='tankless water heater' />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'>Tankless water heaters are epic for people who want energy efficiency and hot water. These are small in size and are one of the best possible choices for water heaters in residential and businesses. But it is also necessary to check that your tankless water heaters should be operational.</Typography>
                              <Typography className='para'>Hence, you need an expert service who would serve you with the best/ Also, if you are living in an area where you have hard water, then, tankless water heater maintenance should be done twice a year. This helps you ensure that all your components are working properly and efficiently.</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Water flushing" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>Hot water should be flushed, at least once a year. During this year, minerals are collected inside the water heater. So, if you have hard water flowing, then mineral build-ups can damage the heat exchanger in your unit. Due to this, the efficiency of the tank could fail, and you could end up with a higher energy bill every month. Also, by not flushing your tankless water heater, the life expectancy of your heater will get shortened.</Typography>
                          <Typography className='para'>All these assimilated minerals can be removed, with the help of flushing. For flushing the water, you need a professional plumber to do the honors.</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Teressen tankless water heaters: Quality, trust, and affordability at their best!" variant="h2" align="left" />
                        <Typography className='para'>Tankless water heaters are the best possible options, to provide hot water service to your home. It saves your money and space by producing hot water on demand. The lack of a tank saves your energy and makes your work easy.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <Box>
                            <SectionalHeading simpletext="Do you need hot water?" variant="h2" />
                            <Typography className='para'>Traditional tank-style water heaters do not deliver what is required. They can take up lots of space in your home and uses more energy. Tankless water heaters produce hot water on demand and save more energy.</Typography>
                          </Box>
                          <Box mt={3}>
                            <SectionalHeading simpletext="Quality is our only aim" variant="h2" />
                            <Typography className='para'>We are committed to providing high-quality products at relative ease. We are an expert in Canada with a certified BPI (Bureau of portable water) for exceeding the strictest industry standards for cleanliness and safety.</Typography>
                          </Box>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Saving money with an instant hot water heater service" variant="h2" align="left" />
                        <Typography className='para'>Tankless hot water heaters produce more hot water on demand to save energy. They take less space than traditional hot water heaters.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Teressen’s  inline water heater services save your money" variant="h2" align="left" />
                        <Typography className='para'>The cost of heating your home&apos;s water increases exponentially when it comes to a tank-type heater. Tankless models have more fuel-efficient methods of heating your home&apos;s water so that you can conserve natural resources for years.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Cleaning your tank regularly" variant="h2" align="left" />
                        <Typography className='para'>It is always a good idea to wipe down the outside of the tank to ensure no dust settled upon it. Cut the power supply and water supply before you start cleaning. Also, routine tankless water heater maintenance will help your machine&apos;s functionality. When you do your maintenance, just look at all the other aspects of the heater.</Typography>
                        <Typography className='para'>Also, if you find any issues with your tankless hot water, we are just a call away. We have years of experience with tankless hot water heaters and, ensure you that your water heater maintenance service is done efficiently.</Typography>
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

export default TanklesWaterHeater
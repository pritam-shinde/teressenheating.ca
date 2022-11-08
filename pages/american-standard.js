import { Box, Container, Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { BrandDetails, FeaturedCoolingServices, Testimonial, PopularService, FaqAndForm, HighlySkilled, FeaturedHeatingServices } from '../sections/sections'
import BoilerMaintainanceBanner from '../public/boilerMaintanance/maintainencebg.webp'
import { CommonBanner, SectionalHeading } from '../components/components'
import Image from 'next/image'
import BrandLogo from '../public/brand-page/Layer-121.webp'
import BlueLogo from '../public/logo/blue-logo.svg'
import BBB from '../public/certification/cer1.webp'
import Technical from '../public/certification/cer3.webp'
import WorkSafe from '../public/certification/cer2.webp'

const AmericanStandard = () => {
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

  const ListArray = ["We have American standard furnace experienced professionals.", "We provide professional services at affordable pricing.", "We have insured and licensed products.", "American standard heating, maintenance, and repair services.", "Teressen's heating and air conditioning services for all our clients who trust us."]
  return (
    <>
      <Head>
        <title>Professional American standard Heating Services at your Doorstep</title>
        <meta name="description" content="HVAC Services in Canada for Professional American Standard Heating Services at your Doorstep. We are a company with professional experience providing heating services." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/american-standard/" />
      </Head>
      <main>
        <CommonBanner bg={BoilerMaintainanceBanner} title="American Standard" color="#fff" variant="h2" />
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
                              <Image layout='responsive' src={BlueLogo} alt="Teressenheating Logo" title='Teressenheating Logo' />
                            </Box>
                          </Grid>
                          <Grid item xs={6} className="d-flex align-items-center">
                            <Box p={3}>
                              <Image layout='responsive' src={BrandLogo} alt="American Standard Logo" title='American Standard Logo' />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box>
                        <Grid container>
                          <Grid item xs={6}>
                            <Box p={3}>
                              <List className="d-flex flex-md-row flex-column">
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline className='text--blue' />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong>SERVICE</strong>} />
                                </ListItem>

                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline className='text--blue' />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong>INSTALLATION</strong>} />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline className='text--blue' />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong>MAINTANANCE</strong>} />
                                </ListItem>
                              </List>
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
                      <BrandDetails title='Teressen&apos;s American standard products and services' list={true} ListArray={ListArray} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <FeaturedHeatingServices />
        <PopularService color='red' />
        <FeaturedCoolingServices />
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
      </main>
    </>
  )
}

export default AmericanStandard
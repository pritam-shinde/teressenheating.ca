import { Box, Container, Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { BrandDetails, FeaturedCoolingServices, Testimonial, PopularService, FaqAndForm, HighlySkilled, FeaturedHeatingServices } from '../sections/sections'
import BoilerMaintainanceBanner from '../public/boilerMaintanance/maintainencebg.webp'
import { CommonBanner, SectionalHeading } from '../components/components'
import Image from 'next/image'
import BrandLogo from '../public/brand-page/Layer-106.webp'
import BlueLogo from '../public/logo/blue-logo.svg'
import BBB from '../public/certification/cer1.webp'
import Technical from '../public/certification/cer3.webp'
import WorkSafe from '../public/certification/cer2.webp'

const Keeprite = () => {
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

  const brandDetails = [
    { id: 'branddetail-1', text: "Correct Keeprite furnace maintenance is mandatory to prevent your home from fire hazards. These furnaces are well-liked since they are affordable and effective. But these eventual malfunction due to some technical issues." },
    { id: 'branddetail-1', text: "So, it is necessary to get in touch with a furnace repair company if you find any problems with this furnace. As a result, you should also avoid other big issues, because it will save you time and money. Fortunately, Teressen HVAC services are at your service. Also, you can count on us because our experts have years of work experience in installing and repairing your furnaces." },
  ]
  return (
    <>
      <Head>
        <title>Keeprite Furnace Maintenance Services | Teressenheating</title>
        <meta name="description" content="Keeprite furnaces are the most dependable furnaces on the market, but they need routine maintenance. Teressen offers maintenance to keep your furnace operating properly." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/keeprite/" />
      </Head>
      <main>
        <CommonBanner bg={BoilerMaintainanceBanner} title="Keeprite" color="#fff" variant="h2" />
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
                              <Image layout='responsive' src={BrandLogo} alt="Keeprite Logo" title='Keeprite Logo' />
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
                      <BrandDetails title='We have certified Keeprite HVAC repair services, experts' list={false} brandDetaillArr={brandDetails} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='mt-md-4 mt-3'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <SectionalHeading simpletext="Repairing and installing air conditioners" variant="h2" />
                  <Typography className='para'>Why wait for tomorrow to get your Keeprite air conditioner repaired? Get in touch with a reliable brand of furnace and get your furnace repaired instantly. Our professionals ate prompt, and provide high-quality installation services. We also excel at home than just installing air conditioners with Keeprite furnaces. We know how important it is to help you with quick assistance with everything. So, just call us, and within minutes, our experts will arrive at your door to evaluate the problem with your appliance. Initially, we will provide you with an explanation of the problem and then help you with the solution. Our speedy and hassle-free repair service is all you need.</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='mt-md-4 mt-3 bg--grey'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box p={3}>
                  <SectionalHeading simpletext="What us?" variant="h2" />
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary={<strong>Scheduling an in-home appointment</strong>} secondary="Call us for a free in-home estimate. We will help you with an expert solution by coming to your home and discussing your comfort needs." />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary={<strong>Consulting and choosing an expert</strong>} secondary="Call us for a free in-home estimate. We will send our experienced and licensed technician to assist you." />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary={<strong>Installation Day</strong>} secondary="We remove old equipment from your home and install new equipment. Once done, we take care of everything." />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='mt-md-4 mt-3'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <SectionalHeading simpletext="Finding your 'Nearby' keeprite furnace repair expert" variant="h2" />
                  <Typography className='para'>If you are searching for a Keeprite furnace nearby, you can get several possibilities. However, you should be cautious about selecting a provider and making sure that you get top-notched repair services.</Typography>
                  <Typography className='para'>It is not difficult to determine whether a firm is the best for your problem. So, just trust us and our experts, because they are knowledgeable and they are skilled in the right way. We value transparency and provide you with all the information required by you in the right way. So, count on us and we will help you with the right solution always.</Typography>
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

export default Keeprite
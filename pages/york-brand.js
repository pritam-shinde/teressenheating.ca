import { Box, Container, Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { BrandDetails, FeaturedCoolingServices, Testimonial, PopularService, FaqAndForm, HighlySkilled, FeaturedHeatingServices } from '../sections/sections'
import BoilerMaintainanceBanner from '../public/boilerMaintanance/maintainencebg.webp'
import { CommonBanner, SectionalHeading } from '../components/components'
import Image from 'next/image'
import BrandLogo from '../public/brand-page/Layer-117.webp'
import BlueLogo from '../public/logo/blue-logo.svg'
import BBB from '../public/certification/cer1.webp'
import Technical from '../public/certification/cer3.webp'
import WorkSafe from '../public/certification/cer2.webp'

const YorkBrand = () => {
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

  const ListArray = ["York heating/ AC experienced technicians make sure that you are served well.","We have professional services at affordable pricing.","All our experts are licensed experts.","We provide the best heating, and air quality services for you."]
  return (
    <>
    <Head>
    <title>York Brand - teressenheating.ca</title>
    <meta name="description" content="" />
    <meta name="robots" content="index" />
    <link rel="canonical" href="/york-brand/" />
  </Head>
  <main>
    <CommonBanner bg={BoilerMaintainanceBanner} title="York Brand" color="#fff" variant="h2" />
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
                          <Image src={BlueLogo} alt="teressen heating" layout="responsive" />
                        </Box>
                      </Grid>
                      <Grid item xs={6} className="d-flex align-items-center">
                        <Box p={3}>
                        <Image layout='responsive' src={BrandLogo} alt="carrier" />
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
                          <Image src={BBB} alt="teressen heating" layout="responsive"/>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Box p={3} className="border--grey">
                          <Image src={WorkSafe} alt="Work safe" layout="responsive"/>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Box p={3} className="border--grey">
                          <Image src={Technical} alt="Technical" layout="responsive"/>
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
                  <BrandDetails title='Get the best York products servicing at relative ease' list={true} ListArray={ListArray} />
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
              <Box>
                <SectionalHeading simpletext="Looking for repairing of York furnaces and air conditioners?" variant="h2" />
                <Typography className='para'>For Trane furnaces and air conditioners, Teressen&apos;s HVAC services work the best. We help you with the best installation, repair, and maintenance services. Also, our specialists have a lot of expertise working with various brands. So, you get the best of everything with us.</Typography>
              </Box>
              <Box>
              <SectionalHeading simpletext="Need a York Furnace and AC repair company with certification?" variant="h2" />
              <Typography className='para'> If you are looking for a professional to repair your York furnace, then give us a call. We will give you the best services at affordable pricing. We know, when your furnace breaks out, especially in winter, you need someone with expert knowledge. So, it would help if you got in touch with our HVAC experts now.</Typography>
              <Typography className='para'>We have a solid track record of offering you professional HVAC services. We will also offer you individualized attention and help you in fixing your heating system the first time.</Typography>
              </Box>
            <Box>
           
          </Box>
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
            <SectionalHeading simpletext="Repairing of York furnace needs a licensed expert" variant="h2" />
            <Typography className='para'> Are you looking for York furnace repair in my area? Then you can rely on our HVAC services to fix your heating system.</Typography>
            <Typography className='para'>If the outside temperature is low, then there might be a chance that your furnace will stop working. Like other household appliances, furnaces need repair. So, find a qualified repair agency that will inspect the appliance and recommend the best line of action for you.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
    <section className='bg--grey'>
      <Container maxWidth="xxl">
        <Grid container>
          <Grid item xs={12} md={10} className="mx-auto">
            <Box p={3}>
              <SectionalHeading simpletext="What makes us unique?" variant="h2" />
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
    <FeaturedHeatingServices />
    <PopularService color='red' />
    <FeaturedCoolingServices />
    <HighlySkilled />
    <Testimonial testimonialArr={testimonial} />
    <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quot" formVariant="h2" formtitleAlign="center" />
  </main>
    </>
  )
}

export default YorkBrand
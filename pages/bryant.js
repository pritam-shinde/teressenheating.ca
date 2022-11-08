import { Box, Container, Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import BoilerMaintainanceBanner from '../public/boilerMaintanance/maintainencebg.webp'
import Image from 'next/image'
import BrandLogo from '../public/brand-page/Layer-103.webp'
import BlueLogo from '../public/logo/blue-logo.svg'
import BBB from '../public/certification/cer1.webp'
import Technical from '../public/certification/cer3.webp'
import WorkSafe from '../public/certification/cer2.webp'
import { CheckCircleOutline } from '@mui/icons-material'
import { BrandDetails, FeaturedCoolingServices, Testimonial, PopularService, FaqAndForm, HighlySkilled, FeaturedHeatingServices } from '../sections/sections'

const Brynt = () => {
  const [hydration,setHydration] = useState(false)
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  useEffect(()=>{
    if(typeof window !== undefined){
      setHydration(true)
    }else{
      setHydration(false)
    }
  },[])

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

  const brandDetailparagraph = [

    { id: 'branddetail-1', text: 'If your Bryant furnace breaks down and you do not want to go through the cold without heat, then you must have a dependable Bryant furnace repair system.' },
    { id: 'branddetail-2', text: 'Furnaces are made by Bryant Heating and cooling systems which are considered to be resilient, high-quality, and dependable.' },
    { id: 'branddetail-3', text: 'Bryant furnaces might stop due to various reasons. An efficient furnace helps you to save a lot of money. So, if you get in touch with a specialist to troubleshoot any problems with your Bryant furnace issues, then that is the best thing you will be doing.' }
  ]
  return (
    <>
      {
        hydration ? <><Head>
        <title>Bryant Furnace Services at Teressenheating by Professional Technician</title>
        <meta name="description" content="Bryant Furnace Services at Teressenheating by Professional Technicians provides you with quality heating services. Contact us Today to Book an Appointment." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/bryant/" />
      </Head>
      <main>
        <CommonBanner bg={BoilerMaintainanceBanner} title="Brynt" color="#fff" variant="h2" />
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
                              <Image layout='responsive' src={BrandLogo} alt="Bryant Logo" title='Bryant Logo' />
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
                              <Image layout='responsive' src={WorkSafe} alt="Work Safe BC Logo" title='Work Safe BC Logo'/>
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
                      <BrandDetails title='Certified Bryant HVAC repairing services only at Teressen&apos;s heating ltd' brandDetaillArr={brandDetailparagraph} />
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
                <SectionalHeading simpletext="Are you looking for your 'near me' Bryant furnace repair" variant="h2" />
                <Typography className='para'>Times when your Bryant furnace is not working properly, you need an expert who will help you to the fullest. And yes, we would not deny the fact that the market is flooded with companies who do the repairing work. But finding an ideal one, who will help you get through all your problems can be challenging and daunting.</Typography>
                <Typography className='para'>Some homeowners choose inexpensive services to save money. But they do not deliver the desired results. Also, some furnace repair services can be costly and can be out of your budget.</Typography>
                <Typography className='para'>So, it is advisable to conduct research and look for an expert who will provide quality services at reasonable prices when you look for the top Bryant furnace repair services in your location.</Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='mt-md-4 mt-3'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <SectionalHeading simpletext="The process of installation of a Bryant Furnace" variant="h2" />
                <Typography className='para'>Bryant furnace installation affects longevity, effectiveness, and even comfort in addition to quality. Hence, you need to pick the best firm for your furnace installation due to this reason.</Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline className='text--blue' />
                    </ListItemIcon>
                    <ListItemText primary={<strong>Choosing the Bryant model</strong>} secondary="It is mandatory to select which Bryant furnace is best suited for your home and business before installing it. Then based on the capacity and associated components, it is crucial to decide the kind of Bryant furnace model. At Teressen, we select the best equipment to guarantee improved efficiency and consistent comfort levels." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline className='text--blue' />
                    </ListItemIcon>
                    <ListItemText primary={<strong>Looking at the ductwork settings</strong>} secondary={<><p>The installation process is the crucial step in choosing a suitable unit. The HVAC contractor will assess the ductwork to check the breaches, openings, and loose connections. The duct system will then undergo a sizing test, which will impair the furnace&apos;s performance and air delivery.</p><p>And then the contractor will look to remove the old furnace and install the new Bryant furnace.</p></>} />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Container>
        </section>
        <FeaturedCoolingServices />
        <PopularService color='red' />
        <FeaturedHeatingServices />
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
      </main></> : "Loading"
      }
    </>
  )
}

export default Brynt
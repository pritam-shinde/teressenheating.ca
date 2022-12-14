import { Box, Container, Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { BrandDetails, FeaturedCoolingServices, Testimonial, PopularService, FaqAndForm, HighlySkilled, FeaturedHeatingServices } from '../sections/sections'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import { CommonBanner, SectionalHeading } from '../components/components'
import Image from 'next/image'
import BrandLogo from '../public/brand-page/Layer-108.webp'
import BlueLogo from '../public/logo/blue-logo.svg'
import BBB from '../public/certification/cer1.webp'
import Technical from '../public/certification/cer3.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Link from 'next/link'


const Lennox = () => {
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

  const brandDetailparagraph = [
    { id: 'branddetail-1', text: 'Our Lennox furnace experienced technicians are available 24*7*365 days. We are experts in furnace repairs and installation services. We also fix all types of commercial and residential furnaces for you.' },
  ]

  return (
    <>
      <Head>
        <title>Lennox Air Conditioning Repairs Service Provider | Teressenheating</title>
        <meta name="description" content="Teressen's heating Air Conditoning repair, installation and maintenance services are the best. So, call us whenever you face any uncertainties with Lennox products ." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/lennox/" />
      </Head>
      <script type="application/ld+json">
      {
        `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "How do you maintain a heating and cooling system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Looking after your heating pump: Always schedule a tune-up before winter because there are chances that your heat pump might have got some damage during the last cooling season.
        Knowing your heating system's thermostat settings: Make sure that you always know three major thermostat settings-heating, cooling, and emergency heating.
        Cleaning the ducts: It is always recommended to check your heating system ducts every year. Duct cleaning is required in cases like pets, water damage, smoking, or reconstruction of your property."
            }
          },{
            "@type": "Question",
            "name": "can you combine heating and cooling system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can combine a cooling and heating system. Through this, you can save a lot of money and space with one unit. However, if you have existing systems, then you will be able to replace them with a new setup."
            }
          },{
            "@type": "Question",
            "name": "Should I leave my heat pump on all the time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Heat pumps are an effective way to use electricity to heat your home during the winter. So, leaving them running day and night is not an economically feasible option. You should always switch off your heat pumps when you do not need them."
            }
          },{
            "@type": "Question",
            "name": "can you use the same ducts for heating and cooling?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can always use an add-on refrigerated cooling system as an add-on component to your ducted gas heating system. This allows you to run refrigerated air conditioning with the help of the same ducting and outlet systems."
            }
          },{
            "@type": "Question",
            "name": "How does geothermal heating and cooling works",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Geothermal heating works by moving temperature-conducting fluid through an underground loop of pipes beneath. This allows the fluid to collect the thermal energy which is deposited in the earth from the sun."
            }
          },{
            "@type": "Question",
            "name": "How does ductless heating and cooling works?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It works by using heat exchanger coils to move warm air from one location to another. During winter, the heat pump draws warm air from outside your home to increase temperatures inside. During the summer, the heat pump reverses the process, passing out warm air from your home."
            }
          },{
            "@type": "Question",
            "name": "How much Does HVAC installation Cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost to replace an HVAC system varies from $5,000 to $10,000, which comes to around $25 to $60 per square foot of coverage, depending on the brand and size. For a new installation, you might have to pay $1,500 to $12,500."
            }
          },{
            "@type": "Question",
            "name": "How long Does HVAC Installation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually, it takes three to five days for installation."
            }
          },{
            "@type": "Question",
            "name": "What kind of warranties come with my New HVAC installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It has the following warranties:
        
        HVAC Manufacturer Warranty.
        HVAC Extended Warranty.
        Homeowners Insurance.
        Home Warranty"
            }
          }]
        }`
      }
    </script>
      <CommonBanner bg={BoilerMaintainanceBanner} title="Lennox" color="#fff" variant="h2" />
      <main>
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
                              <Image layout='responsive' src={BrandLogo} alt="Lennox Logo" title='Lennox Logo' />
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
                      <BrandDetails title='Teressen&apos;s Lennox AC repair services' brandDetaillArr={brandDetailparagraph} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='mt-md-4 mt-3'>
          <Container maxWidth="xxl" className="px-md-0">
            <Grid container>
              <Grid item xs={12} md={10} className='mx-auto'>
                <Box>
                  <SectionalHeading variant="h2" simpletext='Common Lennox furnace issues people face' />
                  <Typography className='para'>Problems with the Lennox furnace indicate that it is not running as smoothly as it should be. The mechanism for debugging the difficulties should be considered immediately. Making amends for individual errors that have contributed to the subsequent issues should be helpful. Also, sometimes the Lennox furnace is dusty and or one that would not light if the circuit breaker has tripped. Sometimes its filters are dirty which prevents hot air from passing. Also, water leakage problems too are common. It is due to the condensation line break. So, to solve this issue, you need an expert who knows the inside out of the Lennox brand.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section>
          <Container maxWidth="xxl" className="px-md-0">
            <Grid container>
              <Grid item xs={12} md={10} className='mx-auto'>
                <Box>
                  <SectionalHeading variant="h2" simpletext='Searching your nearby Lennox furnace expert' />
                  <Typography className='para'>Your search for <Link href="/lennox-hvac/">"Lennox furnace repair near me"</Link> stops on us. We are the right choice for all your reapiring and maintenance issues.</Typography>
                  <Typography className='para'>Also, we understand that furnace malfunctions might occur at any time. So, you need a furnace repair nearby for safety reasons. The repair should be flexible enough to take care of you in an emergency call situation that needs a quick reaction. Your furnace needs a tune-up at least twice a year. Teressen&apos;s HVAC services will help you with the <Link href="/furnace-inspection/">best furnace repairs</Link> and upkeep.</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='mt-md-3 mt-2 bg--grey'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className='mx-auto'>
                <Box p={3}>
                  <Box>
                    <SectionalHeading simpletext="Reasons to call us" variant="h2" align={width > 600 ? 'left' : 'center'} />
                    <List>
                      {
                        ["We have Lennox furnace-trained professionals.", "We provide professional services in your budget.", " We are licensed and insured."].map(item => <ListItem key={item}>
                          <ListItemIcon>
                            <CheckCircleOutline className='text--blue' />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>)
                      }
                    </List>
                    <Typography className='para'>Teressen&apos;s heating installation, repair, and maintenance services are the best. So, call us whenever you face any uncertainties with Lennox products.
                    </Typography>
                  </Box>
                  <Box mt={3}>
                    <SectionalHeading variant="h2" simpletext='Repairing and installation of Lennox Air conditioners' />
                    <Typography className='para'>Lennox air conditioning repairs are necessary if your room has poor air ventilation. Also, your air conditioner is prone to breakdowns at times. So, it needs regular maintenance. Insufficient ventilation, unfavorable temperatures, warm air, and strange noises are all signs of an inoperable air conditioner.</Typography>
                    <Typography className='para'>Also, poor installation causes your air conditioner to malfunction. Hence, it is necessary to obtain installation guidance and repairs from an expert air conditioning repair firm.
                    </Typography>
                    <Typography className='para'>Hiring Teressen&apos;s <Link href="/commercial-hvac/">HVAC services</Link> for high-quality installation and maintenance for Lennox air conditioners is the best thing you can do. For a long time, we have been providing installations that would satisfy our customers. We have imparted modern technological development systems that would enhance effectiveness.
                    </Typography>
                  </Box>

                </Box>
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

      </main>
    </>
  )
}

export default Lennox
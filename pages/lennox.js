import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import BrandLogo from '../public/brand-page/Layer-108.webp'
import BBB from '../public/certification/cer1.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Technical from '../public/certification/cer3.webp'
import BlueLogo from '../public/logo/airlinx-logo2.png'
import { BrandDetails, FaqAndForm, FeaturedCoolingServices, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const Lennox = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Why choose Lennox heating and cooling systems for my Burnaby home?", ans: "Lennox systems are known for their energy efficiency, reliable performance, and advanced comfort features, making them an excellent choice for homeowners and businesses throughout Burnaby.", list: null },
    { id: "faq-2", que: "Do you install new Lennox HVAC systems?", ans: "Yes, our certified technicians install a wide range of Lennox furnaces, air conditioners, heat pumps, and complete HVAC systems tailored to your property's heating and cooling needs.", list: null },
    { id: "faq-3", que: "Can you repair and maintain Lennox equipment?", ans: "Absolutely. We provide professional maintenance and repair services for Lennox heating and cooling systems to help improve efficiency, prevent breakdowns, and extend equipment life.", list: null },
    { id: "faq-4", que: "How do I know which Lennox system is right for my property?", ans: "Our team will assess your home's size, comfort requirements, and budget before recommending a Lennox solution that delivers reliable performance and long-term energy savings.", list: null },
    { id: "faq-5", que: "Why should I choose Airlinx for Lennox products in Burnaby?", ans: "As a trusted local HVAC company, we provide expert Lennox installations, dependable repairs, and ongoing maintenance with a focus on quality workmanship and exceptional customer service across Burnaby and the surrounding areas.", list: null },
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
        <title>Lennox Air Conditioning Repairs Service Provider - Airlinx</title>
        <meta name="description" content="Discover Lennox heating and cooling solutions from Airlinx Heating. We provide expert Lennox services to keep your home comfortable year-round." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/lennox/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>

      <CommonBanner bg={BoilerMaintainanceBanner} title="Lennox" color="#fff" variant="h1" />
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
                              <Image
                                src={BlueLogo}
                                alt="Airlinxheating Logo"
                                title='Airlinxheating Logo'
                                sizes="100vw"
                                style={{
                                  width: "100%",
                                  height: "auto"
                                }} />
                            </Box>
                          </Grid>
                          <Grid item xs={6} className="d-flex align-items-center">
                            <Box p={3}>
                              <Image
                                src={BrandLogo}
                                alt="Lennox Logo"
                                title='Lennox Logo'
                                sizes="100vw"
                                style={{
                                  width: "100%",
                                  height: "auto"
                                }} />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image
                                src={BBB}
                                alt="Accredited Business Logo"
                                title='Accredited Business Logo'
                                sizes="100vw"
                                style={{
                                  width: "100%",
                                  height: "auto"
                                }} />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image
                                src={WorkSafe}
                                alt="Work Safe BC Logo"
                                title='Work Safe BC Logo'
                                sizes="100vw"
                                style={{
                                  width: "100%",
                                  height: "auto"
                                }} />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image
                                src={Technical}
                                alt="Technical Safety BC Logo"
                                title='Technical Safety BC Logo'
                                sizes="100vw"
                                style={{
                                  width: "100%",
                                  height: "auto"
                                }} />
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
                      <BrandDetails title='Airlinx&apos;s Lennox AC repair services' brandDetaillArr={brandDetailparagraph} />
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
                  <Typography className='para'>Your search for <a href="/lennox-hvac/">"Lennox furnace repair near me"</a> stops on us. We are the right choice for all your reapiring and maintenance issues.</Typography>
                  <Typography className='para'>Also, we understand that furnace malfunctions might occur at any time. So, you need a furnace repair nearby for safety reasons. The repair should be flexible enough to take care of you in an emergency call situation that needs a quick reaction. Your furnace needs a tune-up at least twice a year. <a href="/commercial-hvac/">Airlinx&apos;s HVAC services</a> will help you with the <a href="/furnace/">best furnace repairs</a> and upkeep.</Typography>
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
                    <Typography className='para'>Airlinx&apos;s heating installation, repair, and maintenance services are the best. So, call us whenever you face any uncertainties with Lennox products.
                    </Typography>
                  </Box>
                  <Box mt={3}>
                    <SectionalHeading variant="h2" simpletext='Repairing and installation of Lennox Air conditioners' />
                    <Typography className='para'>Lennox air conditioning repairs are necessary if your room has poor air ventilation. Also, your air conditioner is prone to breakdowns at times. So, it needs regular maintenance. Insufficient ventilation, unfavorable temperatures, warm air, and strange noises are all signs of an inoperable air conditioner.</Typography>
                    <Typography className='para'>Also, poor installation causes your air conditioner to malfunction. Hence, it is necessary to obtain installation guidance and repairs from an expert air conditioning repair firm.
                    </Typography>
                    <Typography className='para'>Hiring Airlinx&apos;s <Link href="/commercial-hvac/">HVAC services</Link> for high-quality installation and maintenance for Lennox air conditioners is the best thing you can do. For a long time, we have been providing installations that would satisfy our customers. We have imparted modern technological development systems that would enhance effectiveness.
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
  );
}

export default Lennox
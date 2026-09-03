import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/furnace-inspection/banner.webp'
import HomeFurnace from '../public/furnace-inspection/Ductwork-and-Ventilation.webp'
import Furnace from '../public/furnace-inspection/furnace.webp'
import { BrandSlider, FaqAndForm, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const FurnaceInspection = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Why should I schedule a furnace inspection every year?", ans: "An annual furnace inspection helps identify potential issues early, improves efficiency, and ensures your system is operating safely before the colder months. It also supports regular furnace maintenance service.", list: null },
    { id: "faq-2", que: "What does a furnace inspection include?", ans: "Our inspection includes checking key components, testing system performance, inspecting safety controls, and recommending any necessary furnace repair and service to keep your heating system running reliably.", list: null },
    { id: "faq-3", que: "Can a furnace inspection help prevent emergency repairs?", ans: "Yes, routine inspections can detect worn or damaged parts before they fail, reducing the need for emergency furnace service and unexpected heating breakdowns.", list: null },
    { id: "faq-4", que: "Do you inspect all types of furnaces in Burnaby?", ans: "Yes, we provide furnace service Burnaby for gas and high-efficiency furnaces from most major brands, including inspections, furnace cleaning service, and maintenance.", list: null },
    { id: "faq-5", que: "What happens if you find a problem during the inspection?", ans: "If we discover an issue, we'll explain the recommended solution and, if needed, provide prompt furnace repair services or Burnaby emergency furnace repair services to restore your heating system safely and efficiently.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  return (
    <>
      <Head>
        <title>24/7 Trusted Furnace Services in Burnaby - Airlinx</title>
        <meta name="description" content="Don't let a faulty heating system ruin your winter. Trust Airlinx Heating for top-tier furnace services, detailed inspections, and efficient upgrades." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/furnace/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>

      <main>
        <CommonBanner bg={Banner} title="The best furnace repair and installation services in Canada" color="#fff" variant="h1" />
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
                              <Image layout='responsive' src={Furnace} alt="Furnace service" title='Furnace service' />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <SectionalHeading blacktext="Furnace" blueText="service and repair" variant="h2" />
                              <Typography className='para'>Airlinx heating ltd provides one of the best furnace installation and repair services in Canada. We have been working continuously in <Link href="/commercial-hvac/">HVAC services</Link> and have played a crucial role in the Canadian fire safety association. We take care of installation, repair, and furnace maintenance work for years with love,</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} className="m-0 pt-0">
                            <Box>
                              <Typography className='para'> dedication, and concern. So, if your furnace system gets a breakdown, do not panic. Just give us a call and we will serve you with the best of everything. Our organization provides 24*7 furnace repair services in Canada and also takes care of your safety.</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="So, why choose Airlinx's furnace inspection services" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>It is because we have never failed to follow all the annual fire safety inspection guidelines. We strictly adhere to all the norms and make sure that we help you with the best of everything. So, here are the things that make us different from the crowd:</Typography>
                          <List>
                            {
                              ["Years of work experience", "Licensed and insured HVAC services", "Following annual fire safety inspection guidelines", "24*7 emergency furnace repairs", "We have certified technicians", "We provide safety inspection for each service", "We have free estimates for installation"].map(item => <ListItem key={item}>
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
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Residential Heating services" variant="h2" align="center" />
                        <Box mt={3}>
                          <Grid container>
                            <Grid item xs={12} md={6}>
                              <Typography className='para'><Link href="/">Airlinx heating ltd</Link> understands the importance of emergency HVAC services which are needed for residential heating. It is difficult to live without cooling and heating systems these days. So, we make sure that we help you with the best residential heating and home HVAC services which includes system repairing, furnace installation and repair, rooftop unit repair, and central heating system maintenance services.</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Image layout='responsive' src={HomeFurnace} alt="Residential Furnace" />
                            </Grid>
                            <Grid item xs={12} className="m-0 py-0">
                              <Typography className='para'>So, if your <Link href="/heating-services/">heating system</Link> is not being tuned up once a year, if it has some mechanical issues and if it has a faulty error sign, then simply give us a call. Our annual fire safety inspection services will leave you stress-free and happy. Also, people who have been working with us, have been trained and certified with the best. So, we will always help you to deal with problems like unexpected breakdowns, higher-than-usual heating bills, and carbon monoxide poisoning.</Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2'>
                      <Container maxWidth="xxl">
                        <Box>
                          <SectionalHeading simpletext="Airlinx's services that make us different from the crowd" variant="h2" />
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>HVAC services</strong>} secondary="We provide same day service, with on-time and reliable technicians. We have a no-hidden charges policy and help you with free estimates of installation services." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>24*7 Emergency services</strong>} secondary="We deal in providing a wide range of services all over the Canadian region for a long time. For all kinds of HVAC work, please feel free to call us anytime, without keeping any doubt in mind." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Our service for all brands</strong>} secondary="We do services for all brands like Rheem, Goodman, Carrier, Lennox, and Trane." />
                            </ListItem>
                          </List>
                          <Typography className='para'>Airlinx professional furnace installation services are fast and affordable. You can call us 24*7 to service all your major brands. We are a one-stop destination for your <a href="/furnace/">professional furnace installation services</a> that take care of everything without any hidden charges. All our technicians and installers are well-groomed and provide you with the best competitor price match guarantee.</Typography>
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
        <PopularService color="red" />
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  )
}

export default FurnaceInspection

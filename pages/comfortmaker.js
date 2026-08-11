import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import BrandLogo from '../public/brand-page/Layer-125.webp'
import BBB from '../public/certification/cer1.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Technical from '../public/certification/cer3.webp'
import BlueLogo from '../public/logo/airlinx-logo2.png'
import { BrandDetails, FaqAndForm, FeaturedCoolingServices, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const Comfortmaker = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  const arrayFaq = [
    { id: "faq-1", que: "Do you install Comfortmaker HVAC systems in Burnaby?", ans: "Yes, we install Comfortmaker furnaces, air conditioners, and heat pumps for homeowners and commercial clients throughout Burnaby.", list: null },
    { id: "faq-2", que: "What are common signs that a Comfortmaker system needs repair?", ans: "Uneven room temperatures, unusual grinding or squeaking sounds, weak airflow, or unexplainable jumps in energy bills indicate your system needs professional diagnosis.", list: null },
    { id: "faq-3", que: "Can you maintain older Comfortmaker heating and cooling units?", ans: "Yes, we service Comfortmaker units of all ages. Regular maintenance helps extend system life and improve energy efficiency.", list: null },
    { id: "faq-4", que: "How often should I schedule service for my Comfortmaker system?", ans: "We recommend scheduling maintenance once a year for heating equipment (in autumn) and once a year for cooling equipment (in spring).", list: null },
    { id: "faq-5", que: "Why choose Airlinx for Comfortmaker HVAC services in Burnaby?", ans: "Our technicians provide knowledgeable, dependable service with transparent pricing, accurate diagnostics, and quality workmanship for all Comfortmaker products.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const ListArray = ["We have trained Comfortmaker HVAC experienced professionals.", "Our technicians are well-trained and skilled.", "We are the best Comfortmaker heating and installation service provider.", "Airlinx's Heating and Air conditioning services has been providing heating services proudly in the world."]
  return (
    <>
      <Head>
        <title>Comfortmaker Heating Pump Installation Services - Airlinx</title>
        <meta name="description" content="The Airlinx Heating Company installs Comfortmaker heating pumps and provides their customers with the most up-to-date installation in Burnaby." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/comfortmaker/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <main>
        <CommonBanner bg={BoilerMaintainanceBanner} title="Comfortmaker" color="#fff" variant="h1" />
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
                              <Image src={BlueLogo} alt="Airlinx heating" layout="responsive" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} className="d-flex align-items-center">
                            <Box p={3}>
                              <Image src={BrandLogo} alt="carrier" layout="responsive" />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image src={BBB} alt="Airlinx heating" layout="responsive" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image src={WorkSafe} alt="Work safe" layout="responsive" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image src={Technical} alt="Technical" layout="responsive" />
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
                      <BrandDetails title='Airlinx&apos;s comfortmaker products servicing works the best' list={true} ListArray={ListArray} />
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
                    <SectionalHeading simpletext="Why choose Comfortmaker Products?" variant="h2" />
                    <Typography className='para'> So, when you choose Comfortmaker heating and cooling equipment, you are selecting sophisticated, quality-driven and comfort over everything. We are proud to help you with the best and latest technology with smart and efficient products with smooth operations.</Typography>
                  </Box>
                  <Box>
                    <SectionalHeading simpletext="Selecting a Heating and cooling system that's absolutely right for you" variant="h2" />
                    <Typography className='para'>If you are not sure which product is right for you, then you can give us a call and explore the different options that suits your requirement.
                    </Typography>
                  </Box>
                  <Box>
                    <SectionalHeading simpletext="Are you looking for a saving option?" variant="h2" />
                    <Typography className='para'>{`If yes, then we offer many ultra-high efficiency products which exceeds the minimum qualifications of our "ENERGY STAR" program. We have products that are ENERGY STAR certified.`}</Typography>
                  </Box>
                  <Box>
                    <SectionalHeading simpletext="Let us help you take care of everything" variant="h2" />
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutline className='text--blue' />
                        </ListItemIcon>
                        <ListItemText primary='Furnaces repair, maintenance, and installation.' />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutline className='text--blue' />
                        </ListItemIcon>
                        <ListItemText primary='Heat pump maintenance, installation, and repair.' />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutline className='text--blue' />
                        </ListItemIcon>
                        <ListItemText primary={<span>Boiler installation, installation, and <Link href="/boilers-repair/">repair</Link>.</span>} />
                      </ListItem>
                    </List>
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
                  <SectionalHeading simpletext="We have skilled and certified mechanics" variant="h2" />
                  <Typography className='para'> We have 24*7 servicing and repairs. With more than 20 years of work experience, we serve you with our quality and affordable services. So, call us today!
                  </Typography>
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
                  <SectionalHeading simpletext="What makes us special?" variant="h2" />
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
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
      </main>
    </>
  )
}

export default Comfortmaker
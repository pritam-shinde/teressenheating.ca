import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import BrandLogo from '../public/brand-page/Layer-122.webp'
import BBB from '../public/certification/cer1.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Technical from '../public/certification/cer3.webp'
import BlueLogo from '../public/logo/airlinx-logo2.png'
import { BrandDetails, FaqAndForm, FeaturedCoolingServices, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'
import JsonLd from '../components/JsonLd'

const Arcoaire = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you install Arcoaire heating and cooling systems in Burnaby?", ans: "Yes, we provide professional installation of Arcoaire furnaces, air conditioners, and heat pumps for homeowners and businesses throughout Burnaby.", list: null },
    { id: "faq-2", que: "What are the signs that my Arcoaire system needs repair?", ans: "Common signs include uneven temperatures, unusual noises, weak airflow, frequent cycling, or higher utility bills. Our technicians can diagnose and repair Arcoaire systems quickly.", list: null },
    { id: "faq-3", que: "Can you maintain older Arcoaire HVAC equipment?", ans: "Absolutely. We service both newer and older Arcoaire systems, providing inspections, cleaning, and tune-ups to help improve performance and extend equipment life.", list: null },
    { id: "faq-4", que: "How do I choose the right Arcoaire replacement system?", ans: "We assess your property's size, comfort needs, and energy goals before recommending an Arcoaire system that delivers efficient heating and cooling for your Burnaby home or business.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for Arcoaire HVAC services in Burnaby?", ans: "Our local team offers expert Arcoaire installation, repair, and maintenance with quality workmanship, honest recommendations, and dependable customer support across Burnaby and surrounding areas.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const ListArray = [" We have the best Arcoaire HVAC technicians that help you with the best.", " We provide professional services at an affordable rates.", "Find the best Arcoaire HVAC heating installation services near you."]
  return (
    <>
      <Head>
        <title>HVAC Services for Arcoaire Heating Systems Burnaby - Airlinx</title>
        <meta name="description" content="AC and heating installation, service, repair for Arcoaire furnaces by Airlinx heating. We help you get the most from your investment. Contact us Now." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/arcoaire/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <main>
        <CommonBanner bg={BoilerMaintainanceBanner} title="Arcoaire" color="#fff" variant="h1" />
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
                      <BrandDetails title='Arcoaire HVAC products need the best servicing' list={true} ListArray={ListArray} />
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
                    <SectionalHeading simpletext="Why choose Arcoaire Products?" variant="h2" />
                    <Typography className='para'> So, when you choose Arcoaire heating and cooling equipment, you are selecting sophisticated, quality-driven and comfort over everything. We are proud to help you with the best and latest technology with smart and efficient products with smooth operations.
                    </Typography>
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
                        <ListItemText primary={<span><a href="/heat-pump/">Heat pump maintenance, installation, and repair</a>.</span>} />
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
                  <Typography className='para'>We have 24*7 servicing and repairs. With more than 20 years of work experience, we serve you with our quality and affordable services. So, call us today!</Typography>
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
                  <SectionalHeading simpletext="What makes us special?  " variant="h2" />
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
                      <ListItemText primary={<strong>Installation Day </strong>} secondary="We remove old equipment from your home and install new equipment. Once done, we take care of everything." />
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

export default Arcoaire
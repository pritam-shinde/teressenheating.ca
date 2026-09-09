import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import JsonLd from '../components/JsonLd'
import Repair from '../public/boilerMaintanance/image.webp'
import BoilerMaintainanceBanner from '../public/boilerMaintanance/maintainencebg.webp'
import { BrandSlider, FaqAndForm, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const BoilerMaintainance = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "How often should I schedule boiler maintenance in Burnaby?", ans: "We recommend annual boiler maintenance to keep your heating system operating efficiently, reduce the risk of breakdowns, and extend its lifespan.", list: null },
    { id: "faq-2", que: "What is included in your boiler maintenance services?", ans: "Our boiler maintenance services include a full system inspection, cleaning, safety checks, performance testing, and recommendations to keep your boiler running reliably.", list: null },
    { id: "faq-3", que: "Do you provide boiler maintenance for older systems?", ans: "Yes, we service both newer and older boilers. Our boiler maintenance Burnaby appointments are tailored to your system's condition and manufacturer recommendations.", list: null },
    { id: "faq-4", que: "Can regular maintenance help prevent boiler repairs?", ans: "Absolutely. Routine boiler repair and maintenance Burnaby services can identify small issues early, helping you avoid expensive repairs and unexpected heating failures.", list: null },
    { id: "faq-5", que: "Why choose your team for boiler maintenance in Burnaby?", ans: "Our experienced technicians provide professional boiler maintenance services with thorough inspections, quality workmanship, and dependable service for homeowners and businesses throughout Burnaby.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  return (
    <>
      <Head>
        <title>Boiler Maintenance Services in Burnaby - Airlinx</title>
        <meta name="description" content="Give your heating system a care it deserves. Airlinx Heating delivers expert boiler maintenance services in Burnaby to prevent expensive emergency fixes." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/boilers-maintenance/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>

      <CommonBanner bg={BoilerMaintainanceBanner} title="Quality, trust, and affordable boiler maintenance services" color="#fff" variant="h1" />
      <main>
        <Container maxWidth="xxl" className='px-0'>
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Image
                                  src={Repair}
                                  alt="Repair"
                                  title='Repair'
                                  sizes="100vw"
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    maxWidth: "100%",
                                    height: "auto"
                                  }} />
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography className='para'> Are you looking for a trusted and affordable boiler maintenance service in Canada? Then you are at the right place. Our technical experts work 24*7 to give you the best boiler maintenance and repair services. We are always here to help you so you do not hesitate to call us at any time. Airlinx is the perfect name for all your boiler maintenance problems in Canada. </Typography>
                                <Typography className='para'>Our team of experienced professionals makes sure that we take care of everything, right from inspecting your units to repairing any damage. </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} className="m-0 pt-0">
                              <Box>
                                <Typography className='para'>We understand how crucial is your boiler in maintaining your home&apos;s cooling and heating system. People living in Canada know this all too well, hence they rely on us for the best services around. Our team of experts comes right away and fixes everything for you. So, just call them today and tell them about your boiler maintenance issues.</Typography>
                                <Typography className='para'>Our clients who have experienced boiler maintenance issues know how inconvenient it gets to deal with all the problems alone. Hence, we are your savior and we make sure that everything goes well. Our team of experts takes the plunge and makes sure that you are back up in no time. Our technicians are trained for any problem which you face with your boiler. So, never hesitate to call us if anything comes up with your repair or maintenance issues at home.
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth='xxl'>
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <box>
                                <SectionalHeading variant='h2' simpletext='No need to worry, because Airlinx is your savior:' />
                                <Typography className=''> When it comes to us, we are one of the most experienced companies in Canada. We have years of expertise in all things related to house heating problems. We offer our clients affordably-priced options for any model they might be looking at. We are always there to guide your decision-making process so that whatever choice suits you, you go with the best. So, next time when you have boiler services near you, you can count on us. We are the most trusted boiler repair partner who takes care of everything. </Typography>
                              </box>
                            </Grid>
                          </Grid>
                        </Box>

                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Why choose our boiler maintenance services?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>As a leading <Link href="/commercial-hvac/">HVAC services expert</Link>, we offer one complete and cost-effective solution for boiler maintenance and repair. The reasons, why you must choose us are as follows:
                          </Typography>
                          <List>
                            {
                              ["All boiler maintenance work is done by using the latest technology.", "There are shorter lead times.", "We have certified rebuild technicians", "We give inspection reports.", "There is a warranty included."].map(item => <ListItem key={item}>
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

                    <section className='mt-md-3 mt-2'>
                      <Container maxWidth="xxl">
                        <Box>
                          <SectionalHeading simpletext="Long-term benefits of Airlinx's boiler maintenance and repair services:" variant="h2" />
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText>Having an authorized boiler maintenance and repair expert evaluates your equipment. You may avoid explosions, hot flue gas leaks, and  <Link href='https://airlinxheating.ca/boilers-service/'>the boiler</Link> explosion. </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary='Annual maintenance through a good boiler repair and maintenance expert can help keep your boiler functioning effectively for a longer time. Also, a well-trained technician can prevent a boiler from generating excessive waste and reduce your energy bills.' />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary='Frequent boiler maintenance keeps your system running well for a longer period. ' />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary='Continued operation of a unit results in hefty repair billing. So, you can avoid that with our regular boiler maintenance services.' />
                            </ListItem>
                          </List>

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
        <PopularService color='red' />
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  );
}

export default BoilerMaintainance

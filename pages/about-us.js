import React from 'react'
import Head from 'next/head'
import { BlueFilledBtn, CommonBanner, SectionalHeading } from '../components/components'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Banner from '../public/about/tb-compressed.webp'
import Work from '../public/about/work.webp'
import Styles from '../styles/About.module.css';
import { CheckCircle } from '@mui/icons-material'
import { FaqAndForm, BrandSlider, Locations } from '../sections/sections'
import Image from 'next/legacy/image'

const AboutUs = () => {
  const arrayFaq = [
    { id: "faq-1", que: "How do you maintain a heating and cooling system?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.", list: null },
    { id: "faq-2", que: "Can you combine heating and coling system?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.", list: null },
    { id: "faq-3", que: "Should I leave my heat pump on all the time?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.", list: null },
    { id: "faq-4", que: "Can you use the same ducts for heating and cooling?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.", list: null },
    { id: "faq-5", que: "How does geothermal heating and cooling work?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.", list: null },
    { id: "faq-6", que: "How Long Does HVAC Installation take?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.", list: null },
    { id: "faq-7", que: "What Kinds of Warranties Come with My New HVAC Installation?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.", list: null }
  ]

  return (
    <>
      <Head>
        <title>About - teressenheating.ca</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/about-us/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title="Who We Are" color="#fff" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Image src={Work} alt="work" layout='responsive' />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Box>
                          <SectionalHeading simpletext="Teressen Is The Best Company To Work With" variant="h2" align="left" />
                          <Typography className='para'>We are committed to maintaining quality through our efficient working style. We are the only handful GAF certified HVACR contractors in Vancouver who serves you to the fullest. We offer a wide range of heating and cooling services that will keep you safe from high utility bills. So, you can spend more time sitting at home and relaxing for hours. Our experts have been specially trained to keep your family comfortable year-round with our wide range of services. So, you do not have to worry about your home's heating or air conditioning services ever again.</Typography>
                        </Box>
                        <Box mt={3}>
                          <SectionalHeading simpletext="Call us: Your HVAC installation service provider is just a call away!" variant="h2" align="left" />
                          <Typography className='para'>We install central air conditioning systems which are designed to keep your home comfortable no matter what time of year it would be. Our team is outfitted with the best tools to provide the best services possible throughout the year. Our team is skilled to handle everything right from installation to maintenance so that you do not have to worry about any issues related to the HVAC system again.</Typography>
                          <Box mt={3}>
                            <BlueFilledBtn btnTitle="Call Now" btnlink="tel:604-363-6622" anchor={true} />
                          </Box>
                        </Box>
                      </Box>
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
                  <SectionalHeading simpletext="Teressen: A name that stands for affordability, quality, and trust!" variant="h2" />
                  <Typography className='para'>We are the leading HVAC contractors in Vancouver since 2012. We provide boilers, air conditioners, heat pumps, hot water tanks, and duct cleaning services with relative ease.
                    Our clients chose us because of our quality, fast and friendly services. We are an organization that is locally operated in Vancouver BC. We are licensed, and insured and provide expert guidance on matters related to our HVAC services. We always make sure that our clients get the best of everything. Hence, your satisfaction is our priority. So, leave all your HVAC worries to us, and rest assured that we will serve you to the fullest. Also, our HVAC standard services are ideal for business and residential environments. So, you can immediately give us a call whenever you need our quick HVAC services.
                  </Typography>
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
                  <SectionalHeading simpletext="Teressen will always be an expert you can count upon" variant="h2" />
                  <Typography className='para'>We do furnace repairs and replacements, no matter what size of service you need. And if you need a new water heater or HVAC tune-up, then we have got you covered.
                    We are fully licensed and equipped with all the professional services. Our trained technicians provide reliable services on-site and are well acquainted with all brands like boilers, furnaces, heat pumps, and yet more. We also deal in safety inspection, hot water tanks, air ducts, heating maintenance, and repair services.
                  </Typography>
                  <Typography className='para'>Our clients can expect our services right from the moment they give us a call. We are reliable, efficient, and friendly. We provide support and quality services from start to end. So, book an appointment now!</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className={Styles.WhyChoose}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container>
                    <Grid item xs={12} md={5} className="ms-md-auto">
                      <Box>
                        <SectionalHeading blacktext="Why" blueText="Choose Us" variant="h2" />
                        <Box>
                          <List>
                            <ListItem className='ps-0'>
                              <ListItemIcon>
                                <CheckCircle />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Because we are reliable, affordable, and trustworthy</strong>} secondary="You can always count on our services for anything. Our premium HVAC services will always solve your purpose." />
                            </ListItem>
                            <ListItem className='ps-0'>
                              <ListItemIcon>
                                <CheckCircle />
                              </ListItemIcon>
                              <ListItemText primary={<strong>We have trained technicians who do the honors</strong>} secondary="We are always ready on our toes to guide you with the best. Our work starts from the day you call us and end on the day when everything is made perfect." />
                            </ListItem>
                            <ListItem className='ps-0'>
                              <ListItemIcon>
                                <CheckCircle />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Your satisfaction is our priority</strong>} secondary="LWe understand your problem and provide our expert guidance accordingly. Also, our team of experts will always provide you with the best." />
                            </ListItem>
                          </List>
                        </Box>
                        <Box mt={3}>
                          <BlueFilledBtn btnTitle="Make An Appointment" btnlink="/contact-us/" navlink={true} />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <BrandSlider />
        <Locations />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
      </main>
    </>
  )
}

export default AboutUs
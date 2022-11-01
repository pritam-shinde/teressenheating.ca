import React from 'react'
import Head from 'next/head'
import { CommonBanner, SectionalHeading } from '../components/components'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Banner from '../public/about/tb-compressed.jpg'
import Work from '../public/about/work.png'
import Styles from '../styles/About.module.css';
import { CheckCircle } from '@mui/icons-material'
import { FaqAndForm, BrandSlider } from '../sections/sections'

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
                        <img src={Work.src} alt="work" className='img-fluid' />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <SectionalHeading simpletext="Lorem ipsum dolor sit amet" variant="h2" align="left" />
                        <Box>
                          <Typography className='para'>Teressen Heating and Air Conditioning is a HVAC repair and installation company servicing Metro Vancouver since 2010. We service furnaces, boilers, fireplaces, air conditioners, heat pumps, hot water tanks, air duct cleaning, and more.</Typography>
                          <Typography className='para'>Everyday more and more people are choosing us for our fast, friendly and quality service. We are a locally operated company in Vancouver BC and fully licensed and insured for your complete protection and peace of mind. Whether you need a minor or a major service, you can expect us to provide the highest quality and professional service. We are bonded, Insured, licensed and professionally trained in the industry and in the individual services we provide to make sure you are fully satisfied. Your satisfaction is our policy.</Typography>
                          <Typography className='para'>You can rest assured that we are an experienced company with expert knowledge in heating & cooling systems. Our HVAC industry standard service is ideal for your residential and business environments. We strictly adhere to the manufacturer’s recommendations and guidelines.</Typography>
                          <Typography className='para'>You can depend on us to respond quickly to your needs and provide you with complete information before proceeding with any work.</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
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
                              <ListItemText primary={<strong>Lorenm ipsum dolor sit amet, consectetur adipiscing</strong>} secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla ipsum a lacinia posuere. Nam sit amet orci mauris. Nullam a dolor eget leo mattis euismod. suspendisse molestie ultrices augue et Nunc cursus felis ut eros pharetra egestas." />
                            </ListItem>
                            <ListItem className='ps-0'>
                              <ListItemIcon>
                                <CheckCircle />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Lorenm ipsum dolor sit amet, consectetur adipiscing</strong>} secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla ipsum a lacinia posuere. Nam sit amet orci mauris. Nullam a dolor eget leo mattis euismod. suspendisse molestie ultrices augue et Nunc cursus felis ut eros pharetra egestas." />
                            </ListItem>
                            <ListItem className='ps-0'>
                              <ListItemIcon>
                                <CheckCircle />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Lorenm ipsum dolor sit amet, consectetur adipiscing</strong>} secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla ipsum a lacinia posuere. Nam sit amet orci mauris. Nullam a dolor eget leo mattis euismod. suspendisse molestie ultrices augue et Nunc cursus felis ut eros pharetra egestas." />
                            </ListItem>
                          </List>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quot" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  )
}

export default AboutUs
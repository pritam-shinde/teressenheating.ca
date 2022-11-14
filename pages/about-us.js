import React from 'react'
import Head from 'next/head'
import { CommonBanner, SectionalHeading } from '../components/components'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Banner from '../public/about/tb-compressed.webp'
import Work from '../public/about/work.webp'
import Styles from '../styles/About.module.css';
import { CheckCircle } from '@mui/icons-material'
import { FaqAndForm, BrandSlider } from '../sections/sections'
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
                        <SectionalHeading simpletext="Lorem ipsum dolor sit amet" variant="h2" align="left" />
                        <Box>
                          <Typography className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id sem eget purus viverra blandit eget gravida dolor. Sed tristique faucibus neque at mollis. Fusce convallis lacus nisl, ac cursus sapien placerat eget.</Typography>
                          <Typography className='para'>Varius sed id ligula. suspendisse volutpat fringilla mi et dapibus. Duis tellus sem, vestibulum dignissim congue congue, viverra vel nulla. Nullanm tellus dolor, aliquam id turpis vitae, finibus ullamcorper orci. Vestibulum non fringilla dolor. Integer vitae turpis pellentesque, porttitor ipsum vitae, fringilla arcu. In aliquam purus sit amet libero pharetra consequat.</Typography>
                          <Typography className='para'>varius sed id ligula. Suspendisse volutpat fringilla mi et dapibus. Duis tellus sem, vestibulum dignissim congue congue, viverra vel nulla. Nullanm tellus dolor, aliquam id turpis vitae, finibus ullamcorper orci. Vestibulum non fringilla dolor. Integer vitae turpis pellentesque, porttitor ipsum viverra nulla. Nullam tellus dolor, aliquam id turpis vitae, finibus ullamcorper</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={3}>
                  <SectionalHeading simpletext="Lorem ipsum dolor sit amet, consectetur adipiscing elit" variant="h2" />
                  <Typography className='para'>Lorem ipSum dolor sit amet, consectetur adipisCing elit. Nunc id sem eget purus viverra Lorem ipSum dolor sit amet, consectetur adipisCing elit. Nunc id sem eget purus viverra blandit eget gravida dolor. sed tristique faucibus neque at mollis. Fusce convallis lacus nisl, ac cursus sapien placerat eget. varius sed id ligula. Suspendisse volutpat fringilla mi et dapibus. Duis tellus sem, vestibulum dignissim congue congue, viverra vel nulla. Nullam tellus dolor, aliquam id turpis vitae, finibus ullamcorper orci. Vestibulum non fringilla dolor. Integer vitae turpis pellentesque, porttitor ipsum vitae, fringilla arcu. In aliquam purus sit amet libero pharetra consequat.blandit eget gravida dolor. sed tristique faucibus neque at mollis. Fusce convallis lacus nisl, ac cursus sapien placerat eget. varius sed id ligula. Suspendisse volutpat fringilla mi et dapibus. Duis tellus sem, vestibulum dignissim congue congue, viverra vel nulla. Nullam tellus dolor, aliquam id turpis vitae, finibus ullamcorper orci. Vestibulum non fringilla dolor. Integer vitae turpis pellentesque, porttitor ipsum vitae, fringilla arcu. In aliquam purus sit amet libero pharetra consequat.</Typography>
                </Box>
                <Box mb={3}>
                  <SectionalHeading simpletext="Lorem ipsum dolor sit amet, consectetur adipiscing elit" variant="h2" />
                  <Typography className='para'>Lorem ipSum dolor sit amet, consectetur adipisCing elit. Nunc id sem eget purus viverra Lorem ipSum dolor sit amet, consectetur adipisCing elit. Nunc id sem eget purus viverra blandit eget gravida dolor. sed tristique faucibus neque at mollis. Fusce convallis lacus nisl, ac cursus sapien placerat eget. varius sed id ligula. Suspendisse volutpat fringilla mi et dapibus. Duis tellus sem, vestibulum dignissim congue congue, viverra vel nulla. Nullam tellus dolor, aliquam id turpis vitae, finibus ullamcorper orci. Vestibulum non fringilla dolor. Integer vitae turpis pellentesque, porttitor ipsum vitae, fringilla arcu. In aliquam purus sit amet libero pharetra consequat.blandit eget gravida dolor. sed tristique faucibus neque at mollis. Fusce convallis lacus nisl, ac cursus sapien placerat eget. varius sed id ligula. Suspendisse volutpat fringilla mi et dapibus. Duis tellus sem, vestibulum dignissim congue congue, viverra vel nulla. Nullam tellus dolor, aliquam id turpis vitae, finibus ullamcorper orci. Vestibulum non fringilla dolor. Integer vitae turpis pellentesque, porttitor ipsum vitae, fringilla arcu. In aliquam purus sit amet libero pharetra consequat.</Typography>
                </Box>
                <Box mb={3}>
                  <SectionalHeading simpletext="Lorem ipsum dolor sit amet, consectetur adipiscing elit" variant="h2" />
                  <Typography className='para'>Lorem ipSum dolor sit amet, consectetur adipisCing elit. Nunc id sem eget purus viverra Lorem ipSum dolor sit amet, consectetur adipisCing elit. Nunc id sem eget purus viverra blandit eget gravida dolor. sed tristique faucibus neque at mollis. Fusce convallis lacus nisl, ac cursus sapien placerat eget. varius sed id ligula. Suspendisse volutpat fringilla mi et dapibus. Duis tellus sem, vestibulum dignissim congue congue, viverra vel nulla. Nullam tellus dolor, aliquam id turpis vitae, finibus ullamcorper orci. Vestibulum non fringilla dolor. Integer vitae turpis pellentesque, porttitor ipsum vitae, fringilla arcu. In aliquam purus sit amet libero pharetra consequat.blandit eget gravida dolor. sed tristique faucibus neque at mollis. Fusce convallis lacus nisl, ac cursus sapien placerat eget. varius sed id ligula. Suspendisse volutpat fringilla mi et dapibus. Duis tellus sem, vestibulum dignissim congue congue, viverra vel nulla. Nullam tellus dolor, aliquam id turpis vitae, finibus ullamcorper orci. Vestibulum non fringilla dolor. Integer vitae turpis pellentesque, porttitor ipsum vitae, fringilla arcu. In aliquam purus sit amet libero pharetra consequat.</Typography>
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
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  )
}

export default AboutUs
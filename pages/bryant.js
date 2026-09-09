import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import BrandLogo from '../public/brand-page/Layer-103.webp'
import BBB from '../public/certification/cer1.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Technical from '../public/certification/cer3.webp'
import BlueLogo from '../public/logo/airlinx-logo2.png'
import { BrandDetails, FaqAndForm, FeaturedCoolingServices, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const Brynt = () => {
  const [hydration, setHydration] = useState(false)
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  useEffect(() => {
    if (typeof window !== undefined) {
      setHydration(true)
    } else {
      setHydration(false)
    }
  }, [])

  const arrayFaq = [
    { id: "faq-1", que: "Do you install Bryant heating and cooling systems in Burnaby?", ans: "Yes, we provide professional installation of Bryant furnaces, heat pumps, and air conditioning systems for residential and commercial properties throughout Burnaby.", list: null },
    { id: "faq-2", que: "Can you repair and service Bryant HVAC equipment?", ans: "Absolutely. Our technicians are experienced in diagnosing, repairing, and maintaining Bryant heating and cooling systems to keep them operating efficiently year-round.", list: null },
    { id: "faq-3", que: "Why should I choose a Bryant HVAC system?", ans: "Bryant systems are known for their energy efficiency, dependable performance, and advanced comfort features, making them a great choice for Burnaby's climate.", list: null },
    { id: "faq-4", que: "How often should a Bryant HVAC system be serviced?", ans: "We recommend scheduling professional maintenance once a year to improve efficiency, reduce the risk of unexpected breakdowns, and extend the lifespan of your Bryant equipment.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for Bryant HVAC services in Burnaby?", ans: "As a trusted local HVAC company, we provide expert Bryant installations, repairs, and maintenance with experienced technicians, quality workmanship, and reliable customer service across Burnaby and nearby communities.", list: null },
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
  ];

  return (
    <>
      <Head>
        <title>Professional Bryant Furnace Services - Airlinx Heating</title>
        <meta name="description" content="Bryant Furnace Services at Airlinx Heating by Professional Technicians provides you with quality heating services. Contact today to Book an Appointment." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/bryant/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>

      <main>
        <CommonBanner bg={BoilerMaintainanceBanner} title="Bryant" color="#fff" variant="h1" />
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
                                alt="Bryant Logo"
                                title='Bryant Logo'
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
                      <BrandDetails title='Certified Bryant HVAC repairing services only at Airlinx&apos;s heating ltd' brandDetaillArr={brandDetailparagraph} />
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
                <Typography className='para'>Some homeowners choose <Link href="/financing-option/">inexpensive services</Link> to save money. But they do not deliver the desired results. Also, some furnace repair services can be costly and can be out of your budget.</Typography>
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
                <Typography className='para'>Bryant furnace installation affects longevity, effectiveness, and even comfort in addition to quality. Hence, you need to pick the best firm for your <Link href="/furnace/">furnace installation</Link> due to this reason.</Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline className='text--blue' />
                    </ListItemIcon>
                    <ListItemText primary={<strong>Choosing the Bryant model</strong>} secondary="It is mandatory to select which Bryant furnace is best suited for your home and business before installing it. Then based on the capacity and associated components, it is crucial to decide the kind of Bryant furnace model. At Airlinx, we select the best equipment to guarantee improved efficiency and consistent comfort levels." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutline className='text--blue' />
                    </ListItemIcon>
                    <ListItemText primary={<strong>Looking at the ductwork settings</strong>} secondary={<><p>The installation process is the crucial step in choosing a suitable unit. The <a href="/">HVAC contractor</a> will assess the ductwork to check the breaches, openings, and loose connections. The duct system will then undergo a sizing test, which will impair the furnace&apos;s performance and air delivery.</p><p>And then the contractor will look to remove the old furnace and install the new Bryant furnace.</p></>} />
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
      </main>

    </>
  );
}

export default Brynt
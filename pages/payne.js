import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from "next/image"
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import BrandLogo from '../public/brand-page/Layer-113.webp'
import BBB from '../public/certification/cer1.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Technical from '../public/certification/cer3.webp'
import BlueLogo from '../public/logo/airlinx-logo2.png'
import { BrandDetails, FaqAndForm, FeaturedCoolingServices, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

import Link from 'next/link'

const Payne = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you install Payne heating and cooling systems in Burnaby?", ans: "Yes, we provide professional installation of Payne furnaces, heat pumps, and air conditioners for homeowners and businesses throughout Burnaby.", list: null },
    { id: "faq-2", que: "What should I do if my Payne furnace is blowing cold air?", ans: "Cold air can indicate thermostat misconfigurations, dirty air filters, flame sensor issues, or pilot light faults. Our technicians can inspect and repair your Payne furnace quickly.", list: null },
    { id: "faq-3", que: "Can you service older Payne HVAC units?", ans: "Yes, we maintain and repair Payne heating and cooling systems of all ages to keep them running smoothly and extend their operating life.", list: null },
    { id: "faq-4", que: "Why is annual maintenance important for Payne HVAC systems?", ans: "Annual tune-ups help keep your Payne system operating efficiently, prevent unexpected failures, and ensure reliable indoor comfort throughout the year.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for Payne HVAC services in Burnaby?", ans: "Our experienced Burnaby HVAC team offers expert installation, diagnostic, and repair services with transparent communication, quality workmanship, and dependable local support.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const ListArray = ["We are the pioneers in Payne products servicing.", "We provide professional Payne installation, repair, and maintenance services.", "Airlinx Heating and air conditioning services are providing timely heating and cooling services for you.", "We have the best cooling and heating technicians for your assistance."]
  return (
    <>
      <Head>
        <title>Payne Heating and Cooling Repair Services - Airlinx</title>
        <meta name="description" content="Airlinx Heating and Cooling Repairs can help with Payne's heating or cooling emergency. We're always on call to help you when you need us most." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/payne/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <main>
        <CommonBanner bg={BoilerMaintainanceBanner} title="Payne" color="#fff" variant="h1" />
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
                                alt="Payne Logo"
                                title='Payne Logo'
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
                      <BrandDetails title='Airlinx’s heating and cooling services only to serve you the best' list={true} ListArray={ListArray} />
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
                  <SectionalHeading simpletext="Get the best Payne products servicing at relative ease" variant="h2" />
                  <Box mt={1}>
                    <SectionalHeading simpletext="Our Payne" variant="h3" />
                    <Box mt={2}>
                      <SectionalHeading simpletext="Our certified Payne HVAC repair service is the best" variant="h4" />
                      <Typography className='para'>If you need Payne furnace repair for your commercial building or resident, Airlinx's <Link href="/commercial-hvac/">HVAC</Link> is your go-to person. The installation of a furnace increases the comfort level of your home and makes your family happy. At times, when your Payne furnace gets malfunctions, we are at your assistance.</Typography>
                      <Typography className='para'>Like many homeowners, you might face some issues in fixing an AC or furnace. So, if you do, then we might solve your problem. A competent <a href="/">HVAC contractor</a> like us will get your issue resolved.</Typography>
                    </Box>
                    <Box mt={2}>
                      <SectionalHeading simpletext="Near Me Payne Furnace repairing services" variant="h4" />
                      <Typography className='para'>When your heating system breaks down, you need a Payne furnace repair near me. You can get your heating system up and running again by finding the best repair services.</Typography>
                      <Typography className='para'>In the market, Airlinx HVAC has a steadfast reputation for offering <Link href="/furnace/">top-notched furnace repair services</Link>. Our team of experts will get in touch with you and will make sure that you are served well.</Typography>
                    </Box>
                    <Box mt={2}>
                      <SectionalHeading simpletext="Putting up a Payne furnace is the mandatory thing" variant="h4" />
                      <Typography className='para'>If you do not want to cope with an outdated and broken heating system, then Payne furnace installation is mandatory. Fortunately, Airlinx's HVAC services have been in business for a long and can ensure you that the professional installation of Payne furnaces will happen correctly at your place.</Typography>
                    </Box>
                    <Box mt={2}>
                      <SectionalHeading simpletext="Payne Furnace issues" variant="h4" />
                      <Typography className='para'>Leaks in your condensation drain might cause your Payne furnace to leak. In this case, you should first inspect your furnace's condensation drain or tube. You might also need an HVAC expert who will help you with the issue if it gets clogged.</Typography>
                    </Box>
                    <Box mt={2}>
                      <SectionalHeading simpletext="The furnace at Payne is not heating up" variant="h4" />
                      <Typography className='para'>This is another problem. If your Payne Furnace is not heating properly then verify your thermostat. Check if it is on and set it to the heating setting. Also, try resetting your circuit breaker. If you do not, then give us a call immediately.</Typography>
                    </Box>
                    <Box mt={2}>
                      <SectionalHeading simpletext="Payne Furnace turns off" variant="h4" />
                      <Typography className='para'>Another problem which you might face is the Payne furnace constantly turning off. This can be due to insufficient furnace airflow. If the air filter is damaged, then you can check it and replace it.</Typography>
                    </Box>
                  </Box>
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
  );
}

export default Payne
import { CheckCircleOutline, Circle } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/financing-opt/financing-bg.webp'
import { BrandSlider, FaqAndForm, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const FinancingOption = () => {

  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you offer financing for HVAC installations in Burnaby?", ans: "Yes, we provide flexible financing options for eligible heating, cooling, and HVAC system installations, making it easier for Burnaby homeowners to upgrade their home comfort without paying the full cost upfront.", list: null },
    { id: "faq-2", que: "What HVAC systems can be financed?", ans: "Financing is available for a variety of heating and cooling solutions, including furnaces, heat pumps, boilers, and air conditioning systems, subject to approval.", list: null },
    { id: "faq-3", que: "Can I apply for financing before my HVAC installation?", ans: "Yes. Our team can guide you through the financing process before your installation, helping you understand the available payment options and choose a plan that fits your budget.", list: null },
    { id: "faq-4", que: "Is financing available for emergency HVAC replacements?", ans: "Yes, financing can help make unexpected heating or cooling system replacements more manageable, allowing you to restore comfort without delaying essential repairs or installations.", list: null },
    { id: "faq-5", que: "Why choose Airlinx Heating for HVAC financing in Burnaby?", ans: "We combine quality HVAC solutions with flexible financing options, expert installation, and reliable customer service to help Burnaby homeowners invest in energy-efficient comfort with confidence.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  return (
    <>
      <Head>
        <title>Affordable Heating & Cooling Financing Options - Airlinx</title>
        <meta name="description" content="Upgrade your home comfort today and pay over time. Explore easy HVAC financing solutions from Airlinx Heating for new furnace, AC, or boiler installs." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/financing-option/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>

      <CommonBanner bg={Banner} title="Airlinx's easy financing option that will leave you stressed-free" color="#fff" variant="h1" />
      <main>
        <Container maxWidth="xxl" className='px-0'>
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl">
                        <Typography className='para'>We understand how important it is when comfort comes at a cost. It makes us easier to cover the costs which are associated with installing, servicing, and replacing your HVAC systems. Our relationship with <Link href="/">Airlinx</Link> makes it possible for our clients to finance these expenses so that they do not have to deal with any delays</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Our financing options" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>With our financial option you will enjoy the following benefits:</Typography>
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="Up to 100% financing for all your home comfort needs" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="No down payment is needed." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>We have a variety of financing offerings which includes</strong>} />
                            </ListItem>
                            <List className='ps-md-4 ps-3'>
                              <ListItem>
                                <ListItemIcon>
                                  <Circle />
                                </ListItemIcon>
                                <ListItemText primary="Deferral programs, with no payment and no interest during the deferral period." />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <Circle />
                                </ListItemIcon>
                                <ListItemText primary="We have low monthly payment programs which are of everyone's interest." />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <Circle />
                                </ListItemIcon>
                                <ListItemText primary="We have equal payment programs with no interest" />
                              </ListItem>
                            </List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<><strong>Providing open load-</strong><span> You can pay off the entire loan at any time without penalties</span></>} />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="We have an easy set-up direct transfer facility from your bank account for payment." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="We take up to 10 years to pay" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="We make sure that this is personal and confidential" />
                            </ListItem>
                          </List>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="What to expect from Airlinx?" variant="h2" align="left" />
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>Scheduling an in-home appointment:</strong>} secondary="You can call us for a free in-home estimate which is easy. An expert will come to your home and discuss all your comfort needs." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>Consulting and choosing an option:</strong>} secondary="You can call us for a free in-home appointment with an expert who will come to your home and discuss your needs." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>Installation Day:</strong>} secondary="We remove your old furnace and prepare and install the new devices. Once finished, we make sure that everything is working properly." />
                          </ListItem>
                        </List>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Investing in your comfort is easy and quick" variant="h2" />
                        <Typography className='para'>Your comfort is something that matters to us. So, we make it easy to invest in our <a href="/boilers-service/">installation, repair, and replacement services</a>. We know how important it is to protect your home from extreme heat damage and cold. Also, we know that <Link href="/commercial-hvac/">HVAC repairs</Link> and the need to replace systems are rarely planned expenses. So, we believe that you should not have to wait to gather the funds which are required to restore your HVAC systems to serviceable conditions.</Typography>
                        <Typography className='para'>When unexpected expenses arise that negatively impact your safety and comfort, we would recommend you look for solutions that will restore your comfort easily and conveniently.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2'>
                      <Container maxWidth="xxl">
                        <Box>
                          <SectionalHeading simpletext="Why choose us?" variant="h2" />
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
                              <ListItemText primary={<strong>Our service for all brands</strong>} secondary={<>We do services for all brands like Rheem, <a href="/goodman/">Goodman</a>, Carrier, Lennox, and Trane.</>} />
                            </ListItem>
                          </List>
                          <Typography className='para'>Airlinx <a href="/furnace/">professional furnace installation services</a> are fast and affordable. You can call us 24*7 to service all your major brands. We are a one-stop destination for your <Link href="/furnace/">professional furnace installation services</Link> that take care of everything without any hidden charges. All our technicians and installers are well-groomed and provide you with the best competitor price match guarantee.</Typography>
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

export default FinancingOption

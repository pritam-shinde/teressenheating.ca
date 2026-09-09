import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import JsonLd from '../components/JsonLd'
import boiler from '../public/boiler/worker-repairing-water-heater.webp'
import Banner from '../public/lennox-hvac/lennox.webp'
import { BrandSlider, FaqAndForm, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const BoilerRepair = () => {

  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "What boiler problems can you repair?", ans: "Our boiler repair services cover issues such as no heat, leaking boilers, unusual noises, low pressure, pilot light problems, and poor heating performance.", list: null },
    { id: "faq-2", que: "Do you provide boiler repair in Burnaby?", ans: "Yes, we offer fast and dependable boiler repair in Burnaby for residential and commercial properties, helping restore your heating system as quickly as possible.", list: null },
    { id: "faq-3", que: "When should I call for boiler repair service?", ans: "If your boiler is making unusual sounds, failing to heat properly, leaking, or showing error codes, it's best to schedule a boiler repair service before the problem worsens.", list: null },
    { id: "faq-4", que: "Do you offer boiler servicing as well as repairs?", ans: "Yes, our boiler service and repair includes inspections, troubleshooting, maintenance, and repairs to keep your heating system operating safely and efficiently.", list: null },
    { id: "faq-5", que: "Why choose your team for boiler repair in Burnaby?", ans: "Our experienced technicians provide reliable boiler repair Burnaby services with accurate diagnostics, quality repairs, and prompt response to help minimize heating disruptions.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  return (
    <>
      <Head>
        <title>24/7 Boiler Repair Services in Burnaby - Airlinx Heating</title>
        <meta name="description" content="Is your boiler making strange noises or leaking? Airlinx Heating delivers fast 24/7 boiler repair in Burnaby services. Call our technicians now!" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/boilers-repair/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>

      <main>
        <CommonBanner bg={Banner} title="Airlinx boiler repair service is one of the best boiler repairing services in Canada" color="#fff" variant="h1" />
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
                            <Image
                              src={boiler}
                              alt="boiler service"
                              sizes="100vw"
                              style={{
                                width: "100%",
                                height: "auto",
                                maxWidth: "100%",
                                height: "auto"
                              }} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>Airlinx has been providing expert boiler installation, boiler repair, and boiler installation services in Canada for years now. As an experienced leader in the home heating industry, we must provide our customers with a wide variety of <Link href="/boilers-maintenance/">boiler maintenance</Link> and boiler repair services at affordable prices.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="What are boilers?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>{`Boilers heat water is used to produce 'wet heat'. It is then channeled through a network of pipes to provide comfortable and efficient warmth through a business. The average boiler comes in a wide range of sizes to suit any application in efficiency from as low as 81% to high-efficiency which can surpass 90%.`}</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Boiler repairing system" variant="h2" align="left" />
                        <Typography className='para'>To keep your boiler in good working condition; it is mandatory to provide boiler repairing services at relative ease. As one of the most qualified, respected, and experienced names in the industry and Canada, you can always trust Airlinx to provide you with the best residential boiler repairing services 24*7.</Typography>
                        <Typography className='para'>An improper boiler repair can be a bit dangerous process resulting in serious injury. It must be performed by a highly-trained and certified professional. All Airlinx technicians are qualified with knowledge and their ability to perform a professional analysis of the home will win your heart.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3 bg-grey'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="We keep your boilers running for long" variant="h2" align="left" />
                        <Typography className='para'>Repairing is one of the primary specialties of <Link href="/">Airlinx heating ltd</Link>. Our field staff is available 24*7 and has a combined history of literally hundreds of years of service and experience. We can meet the needs of the most complex boiler systems. We also repair or rebuild boilers that exceed OEM standards in less time. Easy access to critical parts allows our boiler repairs to swiftly remedy issues from minor refractory repairs to emergency generator tube bank replacements. And this makes us one of the best boiler repairing industries in the world.</Typography>
                        <Typography className='para'>We have a true understanding of, downtime loss of production and approach repair projects with a sense of urgency. Our on-call boiler repair groups are available 24*7 and can be on-site within hours of your initial call. Our trucks act as rolling boiler parts departments and include the best operational services immediately.</Typography>
                        <Typography className='para'>If your boiler is forced to be down for an extended period, then we also arrange for rental boilers. This helps you to relax and count on us.</Typography>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Why consider us?" variant="h2" align="left" />
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="We have got years of work experience" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="There are no hidden charges" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="We have fully trained experts" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="We guarantee comfort" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="We have exceptional reviews." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="Trained and certified technicians." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="24*7 services." />
                          </ListItem>
                        </List>
                        <Typography className='para'>We understand that it is not an easy task to find a reliable company in providing thebest boiler repair services. So, when you are looking for a home <Link href="/boilers-service/">boiler company</Link> in Canada, it is important to do your market research and then, find the best option that suits your requirement.</Typography>
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
  );
}

export default BoilerRepair

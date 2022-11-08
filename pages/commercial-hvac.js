import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head';
import Image from 'next/legacy/image'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/commercialHVAC/commercial-2.webp';
import { CheckCircleOutline } from '@mui/icons-material';
import HVAC from '../public/commercialHVAC/hvac.webp'


const CommercialHVAC = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "How do you maintain a heating and cooling system?", ans: "Here are a few tips on how you can maintain your home heating systems:.", list: ["Looking after your heating pump: Always schedule a tune-up before winter because there are chances that your heat pump might have got some damage during the last cooling season.", "Knowing your heating system's thermostat settings: Make sure that you always know three major thermostat settings-heating, cooling, and emergency heating.", "Cleaning the ducts: It is always recommended to check your heating system ducts every year. Duct cleaning is required in cases like pets, water damage, smoking, or reconstruction of your property."] },
    { id: "faq-2", que: "Can you combine heating and cooling system?", ans: "Yes, you can combine a cooling and heating system. Through this, you can save a lot of money and space with one unit. However, if you have existing systems, then you will be able to replace them with a new setup.", list: null },
    { id: "faq-3", que: "Should I leave my heat pump on all the time?", ans: "Heat pumps are an effective way to use electricity to heat your home during the winter. So, leaving them running day and night is not an economically feasible option. You should always switch off your heat pumps when you do not need them.", list: null },
    { id: "faq-4", que: "Can you use the same ducts for heating and cooling?", ans: "Yes, you can always use an add-on refrigerated cooling system as an add-on component to your ducted gas heating system. This allows you to run refrigerated air conditioning with the help of the same ducting and outlet systems.", list: null },
    { id: "faq-5", que: "How does geothermal heating and cooling work?", ans: "Geothermal heating works by moving temperature-conducting fluid through an underground loop of pipes beneath. This allows the fluid to collect the thermal energy which is deposited in the earth from the sun.", list: null },
    { id: "faq-6", que: "How does ductless heating and cooling work?", ans: "It works by using heat exchanger coils to move warm air from one location to another. During winter, the heat pump draws warm air from outside your home to increase temperatures inside. During the summer, the heat pump reverses the process, passing out warm air from your home.", list: null },
    { id: "faq-7", que: "How Much Does HVAC Installation Cost?", ans: "The cost to replace an HVAC system varies from $5,000 to $10,000, which comes to around $25 to $60 per square foot of coverage, depending on the brand and size. For a new installation, you might have to pay $1,500 to $12,500.", list: null },
    { id: "faq-8", que: "How Long Does HVAC Installation take?", ans: "Usually, it takes three to five days for installation.", list: null },
    { id: "faq-9", que: "	What Kinds of Warranties Come with My New HVAC Installation?", ans: "It has the following warranties:", list: ["HVAC Manufacturer Warranty.", "HVAC Extended Warranty.", "Homeowners Insurance.", "Home Warranty"] },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  return (
    <>
      <Head>
        <title>Commercial HVAC Repair Services in Canada | Teressenheating</title>
        <meta name="description" content="At Teressenheating we offer commercial HVAC repair services to meet the needs of your building & installation. Contact the experts Mechanices for a professional repair." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/commercial-hvac/" />
      </Head>
      <CommonBanner bg={Banner} title="Commercial HVAC Services" color="#fff" variant="h1" />
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
                                <Image layout='responsive' src={HVAC} alt="Commercial HVAC Services" title='HVAC' />
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <SectionalHeading simpletext='Teressen commercial HVAC services assuring the quality of life:' variant="h2" />
                                <Typography className='para'> Teressen commercial HVAC services is a name for the best commercial HVAC repair services in Canada. We regularly provide commercial HVAC services like boiler, furnace services, and commercial air conditioner services.</Typography>
                                <Typography className='para'>We specialize in commercial air conditioning, repairs, maintenance, and installation services. This is done for buildings of all sizes and businesses. So, whether you have a low-rise commercial building or a massive office, we are always there for your assistance.</Typography>

                              </Box>
                            </Grid>
                            <Grid item xs={12}>
                              <Box>
                                <Typography className='para'>Also, when it comes to commercial air conditioners, commercial boilers, and commercial furnace repair, our technicians are highly skilled. They will provide you with the best services and quality repairs. </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext=" Teressen commercial heating and AC services is a one-stop destination for you:" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>Three things that make us your favorite are: Quality, trust, and affordability. So, at Teressen we provide you with a wide variety of commercial HVAC services at relative ease. With over years of experience, we have been helping businesses with all our commercial HVAC repairs, maintenance, and replacement services at affordable costs.
                          </Typography>
                          <Typography className='para'>Our expert HVAC services have the required knowledge and skills to work on different types of commercial HVAC systems. Also, here are a few HVAC components we have worked upon:
                          </Typography>
                          <List>
                            {
                              ["Rooftop HVAC services", "Exhaust fans", "Commercial boilers", "Ducting units", "HVAC controls", "Split systems", "Cooling towers", " Commercial chillers", "Commercial boilers", "HVAC controls"].map(item => <ListItem key={item}>
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
                          <SectionalHeading simpletext="What makes us different?" variant="h2" />
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Round-the-clock availability for you:</strong>} secondary="No matter the time, we are always available for your assistance." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>100% Customer satisfaction is assured:</strong>} secondary="We make sure that our materials, labor, and craftsmanship give you a positive outcome. That is what we crave." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Straightforward pricing guaranteed:</strong>} secondary="Before we commence our work, we make sure that we discuss our quotation with us. There are no hidden fees associated when we work." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>We are always on time:</strong>} secondary="We understand how precious your time is. So, we promise to arrive at your doorstep within the stipulated time frame which you select." />
                            </ListItem>
                          </List>
                          <SectionalHeading simpletext="Reliable and responsive HVAC services when you need them the most:" variant='h2' />
                          <Typography className='para'>Teressen commercial heating services in Canada is one of the fastest HVAC services experts with a positive approach. We provide our clients with one-stop quality services so they can count on us for everything. We aim to provide security and reliability through the best HVAC services. There are no hidden fees associated with our quality services. So, do not waste a second and just call us, we are here for you.
                          </Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2'>
                      <Container maxWidth="xxl">
                        <Box>
                          <SectionalHeading simpletext="How to get started?" variant="h2" />
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary='You simply have to select the right HVAC contractor.' />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary='Call us and ask us for a free quotation. We will come out and review your requirements and provide you with the best possible quotation.' />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary='If you need a repair, then we take care of that on the spot and get you back up and running in no time.' />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary='If you need a new HVAC system, then we schedule the best time to complete your job.' />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary='Then on the day of the repair: just sit back and relax and leave all your worries to us. We will take care of everything.' />
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
        <PopularService color='red'/>
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  )
}

export default CommercialHVAC
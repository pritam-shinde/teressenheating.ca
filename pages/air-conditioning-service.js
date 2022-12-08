import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedCoolingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Image from 'next/legacy/image'
import { CheckCircleOutline } from '@mui/icons-material'
import airConditioner from '../public/cooling/cooling-service.webp';
import Cooling from '../public/cooling/cooling.webp';
import Air from '../public/cooling/ac.webp'
import Link from 'next/link'

const AirConditioningService = () => {

  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "how often does air conditioning need to be serviced?", ans: "You should service your HVAC system once a year. If you have standard central AC, then these units should be maintained, each year." ,list: null},
    { id: "faq-2", que: "how much does air conditioning service cost?", ans: "Regular air conditioner maintenance servicing costs around $75 to $200 for simple tune-ups. When we talk about extended service contracts, it is between $150 to $500 but includes the entire HVAC system.", list: null },
    { id: "faq-3", que: "what does air conditioning service include?", ans: "", list: ["Air filter and fin cleaning.", "AC condenser and evaporator coil cleaning.", "AC condenser and evaporator fan cleaning.", "Drain cleaning and leakage check.", "Coolant level check in air conditioner.", " Overall inspection of the AC unit" ]},
    { id: "faq-4", que: "what are the benefits of servicing air conditioning system?", ans: "The benefits of AC repair include reduced humidity inside your house. While the air is moving through the cooling and filtration system, the excess water is also being drawn out of it. Humidity inside a home is a problem because it can cause issues like mold.", list: null }

    ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]
  return (
    <>
    <Head>
        <title>Air Conditioning Maintenance Services in Canada | Teressenheating</title>
        <meta name="description" content="Teressen Heating is a home comfort company that provides AC Maintenance and repairs in Canada. We are committed to provide you with quality service and expert advice." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/air-conditioning-service/" />
      </Head>
      <script type="application/ld+json">
      {
        `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "How often does air conditioning need to be serviced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should service your HVAC system once a year. If you have standard central AC, then these units should be maintained, each year."
            }
          },{
            "@type": "Question",
            "name": "How much does air conditioning service cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Regular air conditioner maintenance servicing costs around $75 to $200 for simple tune-ups. When we talk about extended service contracts, it is between $150 to $500 but includes the entire HVAC system."
            }
          },{
            "@type": "Question",
            "name": "what does air conditioning service include ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Air filter and fin cleaning.
        AC condenser and evaporator coil cleaning.
        AC condenser and evaporator fan cleaning.
        Drain cleaning and leakage check.
        Coolant level check in air conditioner.
        Overall inspection of the AC unit"
            }
          },{
            "@type": "Question",
            "name": "What are the benefits of servicing air conditioning system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The benefits of AC repair include reduced humidity inside your house. While the air is moving through the cooling and filtration system, the excess water is also being drawn out of it. Humidity inside a home is a problem because it can cause issues like mold."
            }
          }]
        }`
      }

      </script>
      <CommonBanner bg={airConditioner} title="Air Conditioning Service" color="#fff" variant="h1" />
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
                                <Image src={Cooling} alt="Air Conditioning Services by TeressenTechnician" title='Air Conditioning Services by TeressenTechnician' layout='responsive' />
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography className='para'>Your AC has an important job to do: to keep you and your family comfortable indoors. So, when your air conditioning breaks down, it is very frustrating. This is when we play a major role in taking your frustration away and helping you with the best possible installation, repair, and maintenance services.
                                </Typography>
                                <Typography className='para'>Our Air conditioning services include:</Typography>
                                <List>
                            {
                              [
                                { id:"service_1", text:"AC installation and replacement services.", link:"/ac-installation/"},
                                { id:"service_2", text:"AC maintenance services", link:"/ac-maintainance/"},
                                { id:"service_3", text:"AC repairing services", link:"/ac-repair/"},
                                { id:"service_4", text:"Thermostat units."}
                              ].map(item => <ListItem key={item}>
                                <ListItemIcon>
                                  <CheckCircleOutline className='text--blue' />
                                </ListItemIcon>
                                <ListItemText primary={item.link ? <Link href={item.link}>{item.text}</Link> : item.text} />
                              </ListItem>)
                            }
                          </List>
                              </Box>
                            </Grid>
                            <Grid item xs={12} className="m-0 pt-0">
                              <Box>
                                <Typography className='para'> Teressen heating and air conditioning location is independently owned and operated. So, you can trust us as your local expert. We will arrive at your home on time and work with your needs, budget, and preferences to make sure that you are satisfied with our work. We also value your time. So, if we do not arrive at your home when you expect, we will pay you back. With us, there is no more waiting around all day for getting the best HVAC technician at home.</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                 
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Teressen Heating LTD: We provide superior air conditioning services" variant="h2"/>
                        <Box mt={3}>
                          <Grid container>
                            <Grid item xs={12} md={6}>
                              <Typography className='para'>Our experts provide reliable and fast repairs of air conditioning services. We service all brands of heat pumps, central A/C, and all types of air conditioning systems.</Typography>
                               <Typography className='para'>We have been providing air conditioning services for years to our clients. We are always available 24*7 for your quick assistance service. We meet your needs for routine air conditioning maintenance, air conditioning system replacement, and emergency air conditioning repairs. We also sell and install a wide range of high-efficiency air conditioning system that saves you money.</Typography>
                              </Grid>
                            <Grid item xs={12} md={6}>
                              <Image src={Air} alt="Air Conditioning Service" title='Air Conditioning Service' layout='responsive' />
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2'>
                      <Container maxWidth="xxl">
                        <Box>
                          <SectionalHeading simpletext="Teressen air conditioning repairs:" variant="h2" />                   
                          <Typography className='para'>When it is hot and humid, everyone loves the sanctuary of a comfortable place. So, if your air cooler isnt functioning well, then call Teressen air conditioning repair service. Whether it is heat pumps, Air conditioning systems, or thermostats, we fix everything. Our air conditioning experts are certified and have expert knowledge of home air conditioning services.</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2'>
                    <Container maxWidth="xxl">
                      <Box>
                        <SectionalHeading simpletext=" Our air conditioning maintenance service is for everyone:" variant="h2" />                   
                        <Typography className='para'>Our air conditioning maintenance service has been proven to reduce equipment failure and ensures safe operation. We also have different types of machinery that provide a quick fix for all your <Link href="/heating-services/">heating problems</Link>.
                        </Typography>
                      </Box>
                    </Container>
                  </section>
                  <section className='mt-md-3 mt-2'>
                  <Container maxWidth="xxl">
                    <Box>
                      <SectionalHeading simpletext="When you need reliability, count on us:" variant="h2" />                   
                      <Typography className='para'>At Teressen heating ltd, we have built our entire business around the idea that our clients deserve the best treatment, starting with our trustworthy experts. In many circumstances, Teressen heating ltd is owned by experts who have been serving and building trust with their local community for years.
                      </Typography>
                      <Typography className='para'>Our experts are licensed and qualified and receive regular training to stay updated with the latest developments and products. We want you to be happy and leave all your worries to us. This way, you can also be certain that we are accountable for providing you with high-level services on our visit.
                      </Typography>
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
        <FeaturedCoolingServices />
        <PopularService color='blue'/>
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  )
}

export default AirConditioningService
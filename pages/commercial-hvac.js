import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head';
import Image from 'next/legacy/image'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/commercialHVAC/commercial-2.webp';
import { CheckCircleOutline } from '@mui/icons-material';
import HVAC from '../public/commercialHVAC/hvac.webp'
import Link from 'next/link'


const CommercialHVAC = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "how do commercial hvac systems work?", ans: "Commercial HVAC systems in buildings have interconnected systems. They provide ventilation, heating, and cooling to individual floors within the structure. Talking about commercial HVAC systems, usually include heat pumps that extract heat from the air for heating purposes. They work as follows:", list: ["Usually, water source heat pumps contain pipes. It carries water throughout the building. ", "The rooftop units are on the roof of the building. ", "Then tend to put the conditioned air into the building. ", "Some chillers generate cool water. It is distributed by pipes to air-cooling coils.","Heaters within commercial HVAC systems are of two types: Radiant heaters and furnaces."] },
    { id: "faq-2", que: "how often should commercial hvac filters be changed?", ans: "It should be changed every quarter, or within three months.", list: null },
    { id: "faq-3", que: "how long do commercial hvac systems last?", ans: "The average life expectancy of commercial HVAC systems is 15 to 20 years.", list: null }
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
      <script type="application/ld+json">
      {
        `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "How do commercial hvac system work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Commercial HVAC systems in buildings have interconnected systems. They provide ventilation, heating, and cooling to individual floors within the structure."
            }
          },{
            "@type": "Question",
            "name": "How often should commercial hvac filters be changed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It should be changed every quarter, or within three months."
            }
          },{
            "@type": "Question",
            "name": "How long do commercia hvac systems last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The average life expectancy of commercial HVAC systems is 15 to 20 years."
            }
          }]
        }`
      }

      </script>
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
                                <Typography className='para'>Also, when it comes to commercial <Link href="/air-conditioning-service/">air conditioners</Link>, commercial boilers, and commercial furnace repair, our technicians are highly skilled. They will provide you with the best services and quality repairs. </Typography>
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
                          <Typography className='para'>Teressen <Link href="/heating-services/">commercial heating services</Link> in Canada is one of the fastest HVAC services experts with a positive approach. We provide our clients with one-stop quality services so they can count on us for everything. We aim to provide security and reliability through the best HVAC services. There are no hidden fees associated with our quality services. So, do not waste a second and just call us, we are here for you.
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
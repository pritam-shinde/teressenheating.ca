import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import JsonLd from '../components/JsonLd'
import hvacLennox from '../public/lennox-hvac/dlsc-family-new.webp'
import Banner from '../public/lennox-hvac/lennox.webp'
import { BrandSlider, FaqAndForm, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const LennoxHVAC = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you provide Lennox HVAC service in Burnaby?", ans: "Yes, we offer professional Lennox HVAC service for residential and commercial systems, including repairs, maintenance, inspections, and new installations throughout Burnaby.", list: null },
    { id: "faq-2", que: "Are you a Lennox HVAC dealer?", ans: "We supply and install high-quality Lennox heating and cooling systems. Contact us to learn more about our Lennox HVAC dealers services and available product options.", list: null },
    { id: "faq-3", que: "Can you repair existing Lennox heating and cooling systems?", ans: "Absolutely. Our technicians are experienced in diagnosing and repairing Lennox furnaces, air conditioners, heat pumps, and other HVAC equipment to restore reliable performance.", list: null },
    { id: "faq-4", que: "Do you provide genuine Lennox replacement parts?", ans: "As a trusted Lennox HVAC distributor, we use quality replacement parts whenever possible to help maintain the performance and efficiency of your Lennox system.", list: null },
    { id: "faq-5", que: "How often should a Lennox HVAC system be serviced?", ans: "We recommend scheduling Lennox HVAC service at least once a year to improve energy efficiency, reduce the risk of breakdowns, and extend the lifespan of your heating and cooling equipment.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  return (
    <>
      <Head>
        <title>Lennox HVAC Repair & Installation Burnaby - Airlinx</title>
        <meta name="description" content="Looking for trusted Lennox HVAC services in Burnaby? Airlinx Heating provides expert repair, installation, and maintenance for Lennox heating and AC." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/lennox-hvac/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <script type="application/ld+json">
        {
          `{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Lennox HVAC ",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Airlinx Heating & Air Conditioning",
          "image": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fdlsc-family-new.821e9b16.webp&w=1920&q=75",
          "@id": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fdlsc-family-new.821e9b16.webp&w=1920&q=75",
          "url": "https://airlinxheating.ca/lennox-hvac/",
          "telephone": "+1-604-363-6622",
          "priceRange": "$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "201-3701 Hastings St",
            "addressLocality": "Burnaby",
            "addressRegion": "British Columbia",
            "postalCode": "V5C 2H6",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.265842,
            "longitude": -123.0035841
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.facebook.com/profile.php?id=100088431184715",
            "https://twitter.com/BaymanShawqi",
            "https://www.pinterest.com.au/airlinxheating/"    
          ]
          }
        }`
        }

      </script>
      <main>
        <CommonBanner bg={Banner} title="Airlinx your Lennox HVAC systems have certified technicians" color="#fff" variant="h1" />
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
                            <Box>
                              <Image
                                src={hvacLennox}
                                alt="Lennox HVAC Systems"
                                title='Lennox HVAC Systems'
                                sizes="100vw"
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  maxWidth: "100%",
                                  height: "auto"
                                }} />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'>We help you with the best quality Lennox furnaces in the industry. It is one of the most trusted brands in heating equipment because it is very easy to install, operate and maintain too.</Typography>
                              <Typography className='para'>We are the <a href="/lennox/">Lennox dealer</a> in your area. We have experienced technicians who ensure that your furnace is running smoothing. If something goes wrong, then we are here to make sure that everything is smooth and easygoing.</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Airlinx is one of the top-rated companies that specialize in Lennox products installation and services" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>So, when you are looking for someone who has <a href="/commercial-hvac/">HVAC experience</a>, it is crucial to find the one who will work hard until your satisfaction is assured. With the right experts available, we make sure that there are no delays in your work. We are here to <Link href="/emergency/">assist you 24*7</Link> to ensure you with optimal indoor air quality by helping you with equipment that is maintained regularly as per the manufacturer&apos;s recommendations. Also, these systems help you ensure protection from potential malfunctions resulting due to dirt buildup. This leads to not only increasing energy bills but also safety hazards such as carbon monoxide poisoning if left just like that.</Typography>
                          <Typography className='para'>Now, installing a new heating and <a href="/air-conditioning-service/">cooling system</a> is one of the biggest decisions you will make. Our certified experts understand that each home is different and they need different solutions. We work closely with homeowners like you to assure stress-free free living. So, whatever installation problems you are facing, just make sure that you give us a call today.</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="We have Lennox HVAC dealers who will take care of everything personally" variant="h2" align="left" />
                        <Typography className='para'>You can count on us for our expert guidance and we will look after everything. Right from oil changing to fixing your furnace, we look after everything. We are available in your area and ensure that your work is done safely, efficiently, and smoothly.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2'>
                      <Container maxWidth="xxl">
                        <Box>
                          <SectionalHeading simpletext="Why us?" variant="h2" />
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Cost-effective solutions</strong>} secondary="We work to provide your home with the best Lennox HVAC products which are efficient, cost-effective, and safe. We have competitive prices for all our services which make us extremely affordable and easy." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Offering quality services</strong>} secondary="We offer furnace installation and maintenance services to all our clients. We also make sure that we find the solutions which best suit your requirements." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Flexible scheduling and convenient hours</strong>} secondary="We offer flexible appointment times to make sure that everything goes well." />
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
        <PopularService color="red" />
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  );
}

export default LennoxHVAC
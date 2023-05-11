import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/lennox-hvac/lennox.webp'
import Image from 'next/legacy/image'
import waterheater from '../public/tankless-water-heater/water-heater.webp'
import Link from 'next/link'

const TanklesWaterHeater = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "how to install service valves for tankless water heater?", ans: "", list: null },
    { id: "faq-2", que: "how often service tankless water heater?", ans: "Tankless water heaters need to be flushed once per year.", list: null },
    { id: "faq-3", que: "What kind of maintenance needs to be done on a tankless water heater?", ans: "", list: ["Clean or replace the water line filter. Many tankless water heater models have a water line filter that protects against hard water, scale, and sediment.", "Clean the air filter.", "Descaling and flushing the system."] },
    { id: "faq-4", que: "What is the most common problems with tankless water heaters?", ans: "Here are six of the most common problems and maintenance concerns for tankless water heaters:", list: ["Mineral Buildup.", "System Overload.", "Cold Water Sandwich.", "Air Supply or Exhaust Blockage.", "Ignition Failure.","Flame Failure."] },
    { id: "faq-5", que: "Can you run out of hot water with a tankless water heater?", ans: "Although a tankless system can't run out of hot water, it can still be overwhelmed by demand.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]
  return (
    <>
      <Head>
        <title>Tankless Water Heaters Service in Canada | Teressenheating</title>
        <meta name="description" content="We at Teressen Heating Canada offer high quality installation, maintenance and repair for residential and commercial tankless water heaters services." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/tankless-water-heaters/" />
      </Head>
      <script type="application/ld+json">
      {
        ` {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "how to install service valves for tankless water heater?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": ".."
            }
          },{
            "@type": "Question",
            "name": "how often service tankless water heater?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tankless water heaters need to be flushed once per year."
            }
          },{
            "@type": "Question",
            "name": "What kind of maintenance needs to be done on a tankless water heater?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Clean or replace the water line filter. Many tankless water heater models have a water line filter that protects against hard water, scale, and sediment.
        Clean the air filter.
        Descaling and flushing the system."
            }
          },{
            "@type": "Question",
            "name": "What is the most common problems with tankless water heaters?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Here are six of the most common problems and maintenance concerns for tankless water heaters:
        
        Mineral Buildup.
        System Overload.
        Cold Water Sandwich.
        Air Supply or Exhaust Blockage.
        Ignition Failure.
        Flame Failure."
            }
          },{
            "@type": "Question",
            "name": "Can you run out of hot water with a tankless water heater?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Although a tankless system can't run out of hot water, it can still be overwhelmed by demand."
            }
          }]
        }`
      }     
      </script>

      <script type="application/ld+json">
      {
        `{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Tankless Water Heater Maintenance Service",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Teressen Heating & Air Conditioning",
          "image": "https://teressenheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwater-heater.775d958c.webp&w=1920&q=75",
          "@id": "https://teressenheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwater-heater.775d958c.webp&w=1920&q=75",
          "url": "https://teressenheating.ca/tankless-water-heaters/",
          "telephone": "+1-604-363-6622",
          "priceRange": "$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2025 Willingdon Ave unit 900",
            "addressLocality": "Burnaby",
            "addressRegion": "British Columbia",
            "postalCode": "V5C 0J3",
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
            "https://www.pinterest.com.au/teressenheating/"    
          ]
          }
        }
        `
      }
      </script>
      <main>
        <CommonBanner bg={Banner} title="Teressen tankless water heater maintenance service" color="#fff" variant="h1" />
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
                              <Image layout='responsive' src={waterheater} alt="tankless water heater" title='tankless water heater' />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'>Tankless water heaters are epic for people who want energy efficiency and hot water. These are small in size and are one of the best possible choices for water heaters in residential and businesses. But it is also necessary to check that your tankless water heaters should be operational.</Typography>
                              <Typography className='para'>Hence, you need an expert service who would serve you with the best/ Also, if you are living in an area where you have hard water, then, tankless <Link href="/boilers-maintenance/">water heater maintenance</Link> should be done twice a year. This helps you ensure that all your components are working properly and efficiently.</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Water flushing" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>Hot water should be flushed, at least once a year. During this year, minerals are collected inside the water heater. So, if you have hard water flowing, then mineral build-ups can damage the heat exchanger in your unit. Due to this, the efficiency of the tank could fail, and you could end up with a higher energy bill every month. Also, by not flushing your tankless water heater, the life expectancy of your heater will get shortened.</Typography>
                          <Typography className='para'>All these assimilated minerals can be removed, with the help of flushing. For flushing the water, you need a professional plumber to do the honors.</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Teressen tankless water heaters: Quality, trust, and affordability at their best!" variant="h2" align="left" />
                        <Typography className='para'>Tankless water heaters are the best possible options, to provide <Link href="/tankless-water-heaters/">hot water service</Link> to your home. It saves your money and space by producing hot water on demand. The lack of a tank saves your energy and makes your work easy.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <Box>
                            <SectionalHeading simpletext="Do you need hot water?" variant="h2" />
                            <Typography className='para'>Traditional tank-style water heaters do not deliver what is required. They can take up lots of space in your home and uses more energy. Tankless water heaters produce hot water on demand and save more energy.</Typography>
                          </Box>
                          <Box mt={3}>
                            <SectionalHeading simpletext="Quality is our only aim" variant="h2" />
                            <Typography className='para'>We are committed to providing high-quality products at relative ease. We are an expert in Canada with a certified BPI (Bureau of portable water) for exceeding the strictest industry standards for cleanliness and safety.</Typography>
                          </Box>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Saving money with an instant hot water heater service" variant="h2" align="left" />
                        <Typography className='para'>Tankless hot water heaters produce more hot water on demand to save energy. They take less space than traditional hot water heaters.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Teressen’s  inline water heater services save your money" variant="h2" align="left" />
                        <Typography className='para'>The cost of heating your home&apos;s water increases exponentially when it comes to a tank-type heater. Tankless models have more fuel-efficient methods of heating your home&apos;s water so that you can conserve natural resources for years.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Cleaning your tank regularly" variant="h2" align="left" />
                        <Typography className='para'>It is always a good idea to wipe down the outside of the tank to ensure no dust settled upon it. Cut the power supply and water supply before you start cleaning. Also, routine tankless water heater maintenance will help your machine&apos;s functionality. When you do your maintenance, just look at all the other aspects of the heater.</Typography>
                        <Typography className='para'>Also, if you find any issues with your tankless hot water, we are just a call away. We have years of experience with tankless hot water heaters and, ensure you that your water heater maintenance service is done efficiently.</Typography>
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

export default TanklesWaterHeater

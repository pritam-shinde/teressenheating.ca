import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/lennox-hvac/lennox.webp'
import waterheater from '../public/tankless-water-heater/water-heater.webp'
import { BrandSlider, FaqAndForm, FeaturedHeatingServices, FortisBCRebate, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const TanklesWaterHeater = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "What tankless water heater services do you provide?", ans: "We offer complete tankless water heater services, including installation, repairs, maintenance, replacements, and system inspections for homes and businesses in Burnaby.", list: null },
    { id: "faq-2", que: "Do you install new tankless water heaters?", ans: "Yes, our tankless water heater installation service includes helping you choose the right unit and ensuring it is installed safely for reliable, energy-efficient hot water.", list: null },
    { id: "faq-3", que: "Can you repair an existing tankless water heater?", ans: "Absolutely. Our tankless water heater repairs and installations services cover common issues such as inconsistent hot water, ignition problems, leaks, and system error codes.", list: null },
    { id: "faq-4", que: "What are the benefits of a tankless water heater?", ans: "Tankless systems provide hot water on demand, use less energy than traditional tanks, take up less space, and can deliver long-lasting performance with proper maintenance.", list: null },
    { id: "faq-5", que: "How do I know if I should repair or replace my tankless water heater?", ans: "Our technicians will inspect your system and recommend the most cost-effective solution. If repairs are no longer practical, we can provide a professional tankless water heater installation service to restore reliable hot water.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tankless Water Heater Maintenance Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Airlinx Heating & Air Conditioning",
      "image": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwater-heater.775d958c.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwater-heater.775d958c.webp&w=1920&q=75",
      "url": "https://airlinxheating.ca/tankless-water-heaters/",
      "telephone": "+1-604-363-6622",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "201-3701 Hastings St",
        "addressLocality": "Burnaby",
        "addressRegion": "British Columbia",
        "postalCode": "V5C 2H6",
        "addressCountry": "Canada"
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
  };

  return (
    <>
      <Head>
        <title>Tankless Water Heater Services & Repair - Airlinx</title>
        <meta name="description" content="From emergency repairs and annual flush maintenance to efficient replacements, Airlinx Heating provides the tankless water heater services you need." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/tankless-water-heaters/" />
      </Head>

      <JsonLd faqArr={arrayFaq} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <main>
        <CommonBanner bg={Banner} title="Airlinx tankless water heater maintenance service" color="#fff" variant="h1" />

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
                        <SectionalHeading simpletext="Airlinx tankless water heaters: Quality, trust, and affordability at their best!" variant="h2" align="left" />
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
                        <SectionalHeading simpletext="Airlinx’s  inline water heater services save your money" variant="h2" align="left" />
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
        <FortisBCRebate />
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

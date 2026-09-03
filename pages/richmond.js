import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/areas/area2.webp'
import RichmondLoc from '../public/richmond/richmond.webp'
import { CertificationSlider, Different, FaqAndForm, Locations } from '../sections/sections'

const Richmond = () => {
  const makeDiff = ["We assure 24*7*365 days of service.", "We have years of experience", "We have a certified team of experts.", "We service all major brands.", "We assure you of the best competitor price match."]

  const arrayFaq = [
    { id: "faq-1", que: "What HVAC services do you offer in Richmond?", ans: "We provide complete HVAC services Richmond, including heating, cooling, heat pumps, furnaces, boilers, air conditioning, and preventative maintenance for homes and businesses.", list: null },
    { id: "faq-2", que: "Do you provide heating and cooling repairs in Richmond?", ans: "Yes, our technicians offer prompt heating and cooling Richmond repair services, diagnosing and fixing HVAC issues to restore comfort as quickly as possible.", list: null },
    { id: "faq-3", que: "Do you service and repair boilers in Richmond?", ans: "Absolutely. Our boiler service Richmond includes inspections, repairs, maintenance, and replacements to keep your heating system operating safely and efficiently.", list: null },
    { id: "faq-4", que: "How often should I schedule HVAC maintenance in Richmond?", ans: "We recommend professional HVAC maintenance at least once a year to improve energy efficiency, reduce the risk of unexpected breakdowns, and extend the lifespan of your heating and cooling system.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for HVAC services in Richmond?", ans: "Our experienced technicians provide reliable HVAC services Richmond with quality workmanship, prompt response times, and customized heating and cooling solutions for residential and commercial customers.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Richmond Air Conditioning Installation Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Airlinx Heating & Air Conditioning",
      "image": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Frichmond.ac03b7af.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Frichmond.ac03b7af.webp&w=1920&q=75",
      "url": "https://airlinxheating.ca/richmond/",
      "telephone": "+1-604-363-6622",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "201-3701 Hastings St",
        "addressLocality": "Burnaby",
        "addressRegion": "BC",
        "postalCode": "V5C 2H6",
        "addressCountry": "CA"
      },
      "areaServed": {
        "@type": "City",
        "name": "Richmond"
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
        <title>Fast Solutions for Heating And Cooling Richmond - Airlinx</title>
        <meta name="description" content="Get your home climate system fixed fast. Airlinx Heating provides rapid heating and cooling Richmond solutions for broken furnaces, boilers, and ACs." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/richmond/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <main>
        <CommonBanner bg={Banner} title="Richmond Air Conditioning Installation Services" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Image layout='responsive' src={RichmondLoc} alt="Richmond Area" title='Richmond Area' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h2'>Airlinx&apos;s Quality, Affordability, And Trust-Worthy Air Conditioning Installation Services In Richmond</Typography>
                      <Typography className='para'>A brand&apos;s unique identity is its people. We have a troop of certified and experienced technicians who make sure that everything goes well. We also make sure that our heating and <a href="/air-conditioning-service/">air conditioning services</a> in Richmond are one of the best services our people can get. <a href="/furnace/">Right from tune-ups to furnace installation</a>, everything is done to guarantee an easy-breeze life for all our clients. We understand your concerns and also look into the fact that you are assured of our quality services. We believe in resolving issues and coming up with expert solutions. Hence, people believe in us and help us with their reviews. </Typography>
                      <Box mt={3}>
                        <BlueFilledBtn btnlink="/contact-us/" btnTitle="Book An Appointment" navlink={true} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <Different title="Why Airlinx's heating and cooling services are the best?" titleVariant="h2" titleAlign="center" list={makeDiff} />
        <CertificationSlider />
        <Locations />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Typography className='para'>So, whenever you have any issues related to installation, maintenance, and repair, you always need an expert solution for this. Do not forget, we are just a call away for expert guidance.</Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
      </main>
    </>
  )
}

export default Richmond
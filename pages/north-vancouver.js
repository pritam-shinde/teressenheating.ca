import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/areas/area2.webp'
import NorthVancouverLoc from '../public/north-vancouver/North-Vancouver.webp'
import { CertificationSlider, Different, FaqAndForm, Locations } from '../sections/sections'

const NorthVancouver = () => {
  const makeDiff = ["We assure 24*7*365 days of service.", "We have years of experience", "We have a certified team of experts.", "We service all major brands.", "We assure you of the best competitor price match."]

  const arrayFaq = [
    { id: "faq-1", que: "What HVAC services do you provide in North Vancouver?", ans: "We offer complete heating and cooling services North Vancouver, including furnace repairs, heat pump installations, air conditioning, maintenance, and system replacements for residential and commercial properties.", list: null },
    { id: "faq-2", que: "Do you provide heating repair in North Vancouver?", ans: "Yes, our technicians offer fast and reliable heating repair North Vancouver services to diagnose and fix furnace, boiler, and heat pump issues to restore your home's comfort.", list: null },
    { id: "faq-3", que: "Can you install a new heat pump in North Vancouver?", ans: "Absolutely. We provide professional heat pump installation North Vancouver, helping you choose an energy-efficient system that's properly sized for your property.", list: null },
    { id: "faq-4", que: "Do you offer HVAC maintenance for commercial buildings?", ans: "Yes, we provide commercial HVAC maintenance North Vancouver to help businesses improve system efficiency, reduce downtime, and extend the lifespan of their HVAC equipment.", list: null },
    { id: "faq-5", que: "Why choose Airlinx as your HVAC contractor in North Vancouver?", ans: "As a trusted HVAC contractor North Vancouver, we deliver dependable HVAC North Vancouver services with experienced technicians, quality workmanship, and customized heating and cooling solutions for homes and businesses.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Heating And Air Conditioning North Vancouver",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Airlinx Heating & Air Conditioning",
      "image": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FNorth-Vancouver.47b39ff8.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FNorth-Vancouver.47b39ff8.webp&w=1920&q=75",
      "url": "https://airlinxheating.ca/north-vancouver/",
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
        "name": "North Vancouver"
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
        <title>HVAC North Vancouver - Heating & Furnace - Airlinx</title>
        <meta name="description" content="Looking for trusted HVAC North Vancouver services? Airlinx Heating delivers professional furnace repairs, boiler maintenance, and heat pump installs." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/north-vancouver/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <main>
        <CommonBanner bg={Banner} title="Heating and air conditioning North Vancouver" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Image
                        src={NorthVancouverLoc}
                        alt="North Vancouver Mountains"
                        title='North Vancouver Mountains'
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "100%",
                          height: "auto"
                        }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h2'>Airlinx&apos;s heating and air conditioning services are now in North Vancouver</Typography>
                      <Typography className='para'>To find the best installation and replacement services in North Vancouver, you need expert guidance. Airlinx&apos;s best heating and air conditioning services, repairs, and tune-ups in North Vancouver are indeed one of the best services. We have certified experts who look after everything. They also make sure that you live a stress-free life. So, when you have <Link href="/boilers-service/">installation, repair, and maintenance</Link> related issues, we are just a call away. We will serve you with the best installation, maintenance, and repairing services. Our clients have also reviewed us as one of the <Link href="/air-conditioning-service/">best air conditioning services</Link> in North Vancouver.</Typography>
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
                <Typography className='para'> So, whenever you have any issues related to installation, maintenance, and repair, you always need an expert solution for this. Do not forget, we are just a call away for expert guidance.</Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
      </main>
    </>
  );
}

export default NorthVancouver
import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import { BlueFilledBtn, CommonBanner } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/areas/area2.webp'
import MapleRidgeLoc from '../public/maple-ridge/maple-ridge.webp'
import { CertificationSlider, Different, FaqAndForm, Locations } from '../sections/sections'

const MapleRidge = () => {
  const makeDiff = ["We assure 24*7*365 days of service.", "We have years of experience", "We have a certified team of experts.", "We service all major brands.", "We assure you of the best competitor price match."]

  const arrayFaq = [
    { id: "faq-1", que: "What HVAC services do you offer in Maple Ridge?", ans: "We provide complete Maple Ridge heating & cooling services, including furnace repairs, heat pump installations, air conditioning, water heaters, and preventative maintenance for residential and commercial properties.", list: null },
    { id: "faq-2", que: "Do you provide furnace and water heater repairs in Maple Ridge?", ans: "Yes, we offer prompt furnace repair Maple Ridge and water heater repair Maple Ridge services to restore reliable heating and hot water as quickly as possible.", list: null },
    { id: "faq-3", que: "Can you install a new heat pump in Maple Ridge?", ans: "Absolutely. Our heat pump installation Maple Ridge service includes helping you select an energy-efficient system and ensuring a professional installation for long-term performance.", list: null },
    { id: "faq-4", que: "Do you provide commercial HVAC repair services?", ans: "Yes, we specialize in commercial HVAC repair Maple Ridge, helping businesses minimize downtime with fast diagnostics, quality repairs, and ongoing maintenance solutions.", list: null },
    { id: "faq-5", que: "Why choose Airlinx as your HVAC company in Maple Ridge?", ans: "As a trusted HVAC company Maple Ridge, we deliver dependable HVAC Maple Ridge services with experienced technicians, quality workmanship, and customized heating and cooling solutions for homes and businesses.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Maple Ridge Furnace Heating & Air Conditioning Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Airlinx Heating & Air Conditioning",
      "image": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fmaple-ridge.a55c4d0d.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fmaple-ridge.a55c4d0d.webp&w=1920&q=75",
      "url": "https://airlinxheating.ca/maple-ridge/",
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
        "name": "Maple Ridge"
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
        <title>HVAC service and Furnace Repair Maple Ridge - Airlinx</title>
        <meta name="description" content="Airlinx Heating provides HVAC, heating, cooling and expert furnace repair Maple Ridge solutions to get your home warm, safe, and comfortable tonight." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/maple-ridge/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <main>
        <CommonBanner bg={Banner} title="Maple Ridge Furnace Heating & Air Conditioning Services" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Image layout='responsive' src={MapleRidgeLoc} alt="City of Maple Ridge" title='City of Maple Ridge' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h2'>Airlinx&apos;s Heating And Air Conditioning Services At Maple Ridge</Typography>
                      <Typography className='para'>Airlinx&apos;s air conditioning services at Maple Ridge are one of the best services you can get. We have professional furnace installation services from <a href="/commercial-hvac/">certified HVAC</a> technicians near you. Our Technicians and installers are licensed professionals who look after everything. We are just a call away when you need those <a href="/furnace/">professional maple furnace heating</a> and air conditioning services. Our certified experts will reach you as soon as possible. We understand your problem and, help you with the best possible solutions.</Typography>
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

export default MapleRidge
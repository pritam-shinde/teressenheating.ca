import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/areas/area2.webp'
import BurnabyLoc from '../public/burnaby/burnaby.webp'
import { CertificationSlider, Different, FaqAndForm, Locations } from '../sections/sections'

const Burnaby = () => {
  const makeDiff = ["Licensed technicians.", "We give competitor price match guarantee", "We service all major brands and areas.", "We give you 24*7*365 days of assistance", "We have over 2 decades of work experience.", "We assure comfort."]

  const arrayFaq = [
    { id: "faq-1", que: "What HVAC services do you offer in Burnaby?", ans: "We provide complete Burnaby heating & cooling services, including HVAC installation Burnaby, repairs, maintenance, heat pump servicing, and air conditioning solutions for residential and commercial properties.", list: null },
    { id: "faq-2", que: "Do you offer HVAC repair services in Burnaby?", ans: "Yes, our technicians provide fast and reliable HVAC repair Burnaby and Burnaby HVAC repairs for furnaces, heat pumps, air conditioners, and other HVAC systems.", list: null },
    { id: "faq-3", que: "Can you maintain my HVAC system throughout the year?", ans: "Absolutely. Our HVAC maintenance Burnaby plans include seasonal inspections, cleaning, and tune-ups to improve efficiency and reduce unexpected breakdowns. We also provide reliable HVAC maintenance services in Burnaby for homes and businesses.", list: null },
    { id: "faq-4", que: "Do you repair air conditioning systems in Burnaby?", ans: "Yes, we offer air conditioning service Burnaby, including diagnostics, maintenance, and air conditioning repair service Burnaby for all major AC brands. We also provide air condition repair service Burnaby for urgent cooling issues.", list: null },
    { id: "faq-5", que: "Do you provide commercial and industrial HVAC services in Burnaby?", ans: "Yes, we work with commercial and industrial properties, offering installations, maintenance, and Burnaby industrial HVAC repairs to keep business heating and cooling systems operating efficiently.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "HAVC Burnaby",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Airlinx Heating & Air Conditioning",
      "image": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fburnaby.072a801f.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fburnaby.072a801f.webp&w=1920&q=75",
      "url": "https://airlinxheating.ca/burnaby/",
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
        "name": "Burnaby"
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
        <title>HVAC Repair Burnaby - Emergency Heating & Cooling - Airlinx</title>
        <meta name="description" content="Fast, licensed HVAC repair Burnaby solutions. Airlinx Heating services furnaces, boilers, heat pumps, and gas fireplaces. Call today for a local pro team." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/burnaby/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <main>
        <CommonBanner bg={Banner} title="HAVC Burnaby - Furnace Installer Services" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Image
                        src={BurnabyLoc}
                        alt="Choklit Park"
                        title='Choklit Park'
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "100%",
                          height: "auto"
                        }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h2'>Airlinx&apos;s furnace installer services in Burnaby are altogether a different experience</Typography>
                      <Typography className='para'>Airlinx&apos;s heating and <a href="/air-conditioning-service/">air conditioning services</a> in Burnaby are probably one of the best services you will get here. Installation and replacement for central <a href="/heating-services/">home heating systems</a>, installation, repairs, and tune-ups are one of the best things that can happen to our clients.</Typography>
                      <Typography className='para'>We provide professional furnace installation from certified HVAC technicians near you, 24*7. We are the only <a href="/commercial-hvac/">HVAC suppliers</a> in Burnaby you can easily count on. With great services, quick assistance, and timely help you can always lead a happy life.</Typography>
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
        <Different title="What makes Airlinx different?" titleVariant="h2" titleAlign="center" list={makeDiff} />
        <CertificationSlider />
        <Locations />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
      </main>
    </>
  );
}

export default Burnaby
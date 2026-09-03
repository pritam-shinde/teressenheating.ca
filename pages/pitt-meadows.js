import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/areas/area2.webp'
import PittMeadowsLoc from '../public/pitt-meadows/pitt-meadows.webp'
import { CertificationSlider, Different, FaqAndForm, Locations } from '../sections/sections'

const PittMeadows = () => {
  const makeDiff = ["We assure 24*7*365 days of service.", "We have years of experience", "We have a certified team of experts.", "We service all major brands.", "We assure you of the best competitor price match."]

  const arrayFaq = [
    { id: "faq-1", que: "What HVAC services do you offer in Pitt Meadows?", ans: "We provide complete HVAC service Pitt Meadows, including furnace repairs, heat pump servicing, air conditioning, system installations, and preventative maintenance for residential and commercial properties.", list: null },
    { id: "faq-2", que: "Do you provide furnace repair and installation in Pitt Meadows?", ans: "Yes, we offer professional furnace repair Pitt Meadows and furnace installation Pitt Meadows services to keep your home warm, efficient, and comfortable throughout the year.", list: null },
    { id: "faq-3", que: "Can you service and repair heat pumps?", ans: "Absolutely. Our heat pump service Pitt Meadows includes inspections, maintenance, diagnostics, and repairs to help your system operate efficiently in every season.", list: null },
    { id: "faq-4", que: "Do you provide air conditioning services in Pitt Meadows?", ans: "Yes, we offer reliable AC service Pitt Meadows, including air conditioner repairs, maintenance, and new installations to keep your home cool during the summer months.", list: null },
    { id: "faq-5", que: "Why choose Airlinx as your HVAC company in Pitt Meadows?", ans: "As a trusted HVAC company Pitt Meadows, we provide experienced technicians, quality workmanship, prompt service, and customized heating and cooling solutions for homes and businesses.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pitt Meadows Heating Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Airlinx Heating & Air Conditioning",
      "image": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpitt-meadows.90609843.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpitt-meadows.90609843.webp&w=1920&q=75",
      "url": "https://airlinxheating.ca/pitt-meadows/",
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
        "name": "Pitt Meadows"
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
        <title>HVAC Service Pitt Meadows - Heating & Repair - Airlinx</title>
        <meta name="description" content="Keep your home comfortable year-round. Trust Airlinx Heating for premium HVAC service Pitt Meadows, including fast emergency repairs and installs." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/pitt-meadows/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <main>
        <CommonBanner bg={Banner} title="Pitt Meadows Heating Services" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Image layout='responsive' src={PittMeadowsLoc} alt="Pitt Meadows Area" title='Pitt Meadows Area' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h2'>Airlinx Is One Of The Best Heating Services In Pitt Meadows That Takes Care Of Everything</Typography>
                      <Typography className='para'>These days, many people are facing issues with furnace installation, maintenance, and repair services. And we understand your worries and concerns. So, whenever you have any issues related to <Link href="/furnace/">furnace installation, maintenance, and repair</Link>, we are a name. We make sure that everything is done on time so that you live a stress-free life. Our certified technicians are always there for you to look after everything. Our clients have always relied on us because they know that we will serve them with the best. You can also read our client reviews to know more about our services. At Pitt Meadows, we are one of the most renowned <Link href="/heating-services/">heating service providers</Link> who will never leave you disappointed.</Typography>
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

export default PittMeadows
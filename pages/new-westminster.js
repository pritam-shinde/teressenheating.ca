import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/areas/area2.webp'
import NewWestminsterLoc from '../public/new-westminster/new-westminster.webp'
import { CertificationSlider, Different, FaqAndForm, Locations } from '../sections/sections'

const NewWestminar = () => {
  const makeDiff = ["We assure 24*7*365 days of service.", "We have years of experience", "We have a certified team of experts.", "We service all major brands.", "We assure you of the best competitor price match."]

  const arrayFaq = [
    { id: "faq-1", que: "What HVAC services do you provide in New Westminster?", ans: "We offer complete HVAC services in New Westminster, including heating, cooling, furnace repairs, heat pumps, air conditioning, installations, and preventative maintenance for residential and commercial properties.", list: null },
    { id: "faq-2", que: "Do you provide furnace repair in New Westminster?", ans: "Yes, our technicians offer prompt furnace repair New Westminster services to diagnose and fix heating issues, helping restore comfort and efficiency as quickly as possible.", list: null },
    { id: "faq-3", que: "When should I consider replacing my HVAC system?", ans: "If your system requires frequent repairs, struggles to maintain indoor temperatures, or has become inefficient, our HVAC replacement New Westminster service can help you upgrade to a more reliable and energy-efficient system.", list: null },
    { id: "faq-4", que: "Do you provide commercial HVAC services in New Westminster?", ans: "Absolutely. We offer commercial HVAC New Westminster solutions, including installations, repairs, and maintenance to keep business heating and cooling systems operating efficiently.", list: null },
    { id: "faq-5", que: "Why choose Airlinx as your HVAC contractor in New Westminster?", ans: "As a trusted HVAC contractor in New Westminster, we provide reliable heating services New Westminster and cooling services New Westminster with experienced technicians, quality workmanship, and responsive customer support.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "New Westminster Furnace Repair And Air Conditioning Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Airlinx Heating & Air Conditioning",
      "image": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fnew-westminster.e2af1906.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fnew-westminster.e2af1906.webp&w=1920&q=75",
      "url": "https://airlinxheating.ca/new-westminster/",
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
        "name": "New Westminster"
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
        <title>HVAC Services In New Westminster - Airlinx Heating</title>
        <meta name="description" content="Make your home feel comfortable year-round. Airlinx Heating offers expert HVAC services in New Westminster, including professional repairs & installation" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/new-westminster/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <main>
        <CommonBanner bg={Banner} title="New Westminster Furnace Repair and Air Conditioning Services" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Image
                        src={NewWestminsterLoc}
                        alt="The City of New Westminster"
                        title='The City of New Westminster'
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "100%",
                          height: "auto"
                        }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h2'>Airlinx’s Furnace Repair Services At New Westminster</Typography>
                      <Typography className='para'>A good thing about being the best service provider is that we get to connect with people. We solve your problems and make sure that everything works the best. Our <Link href="/air-conditioning-service/">air conditioning services</Link> at New Westminster will solve all your concerns and make you live a stress-free life. We also make sure to serve you to the fullest. Call us when you face any issue, and our certified technicians will reach you as soon as possible.</Typography>
                      <Typography className='para'> With a group of trained and certified professionals, we are always <Link href="/emergency/">available 24*7*365 days</Link> and personally look after everything. We understand your problems and make sure that we lead you throughout the process of <Link href="/boilers-service/">installation, repair, and maintenance</Link>.</Typography>
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
  );
}

export default NewWestminar
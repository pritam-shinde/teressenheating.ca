import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/areas/area2.webp'
import PortMoodyLoc from '../public/port-moody/port-moody.webp'
import { CertificationSlider, Different, FaqAndForm, Locations } from '../sections/sections'

const PortMoody = () => {
  const makeDiff = ["We assure 24*7*365 days of service.", "We have years of experience", "We have a certified team of experts.", "We service all major brands.", "We assure you of the best competitor price match."]

  const arrayFaq = [
    { id: "faq-1", que: "What HVAC services do you provide in Port Moody?", ans: "We offer complete heating and cooling Port Moody services, including furnace repairs, air conditioning, heat pumps, water heaters, HVAC installations, and preventative maintenance for residential and commercial properties.", list: null },
    { id: "faq-2", que: "Do you repair and install water heaters in Port Moody?", ans: "Yes, we provide water heater repair Port Moody for traditional and tankless systems, along with tankless hot water heater installation Port Moody for homeowners looking to upgrade to an energy-efficient solution.", list: null },
    { id: "faq-3", que: "Do you offer commercial HVAC maintenance in Port Moody?", ans: "Absolutely. Our commercial HVAC maintenance Port Moody services help businesses improve system efficiency, reduce downtime, and extend the lifespan of their heating and cooling equipment.", list: null },
    { id: "faq-4", que: "Can your HVAC contractors help with new system installations?", ans: "Yes, our experienced HVAC contractors Port Moody install furnaces, heat pumps, air conditioners, and complete HVAC systems designed to meet your property's heating and cooling needs.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for HVAC services in Port Moody?", ans: "Our team delivers dependable heating and cooling Port Moody solutions with expert workmanship, timely service, and customized HVAC options for both residential and commercial customers.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Port Moody Air Conditioning And Heating Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Airlinx Heating & Air Conditioning",
      "image": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fport-moody.75a6b7b0.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fport-moody.75a6b7b0.webp&w=1920&q=75",
      "url": "https://airlinxheating.ca/port-moody/",
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
        "name": "Port Moody"
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
        <title>Commercial HVAC Maintenance Port Moody - Airlinx</title>
        <meta name="description" content="Airlinx Heating provides professional commercial HVAC maintenance Port Moody solutions to protect your facility. Keep your business running smoothly." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/port-moody/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <main>
        <CommonBanner bg={Banner} title="Port Moody Air Conditioning and Heating Services" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Image layout='responsive' src={PortMoodyLoc} alt="Port Moody Marina" title='Port Moody Marina' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h2'>Airlinx’s Air Conditioning Services At Port Moody Will Make Your Mood</Typography>
                      <Typography className='para'>We understand that air conditioning and <Link href="/heating-services/">heating issues</Link> are big problems. And calling an expert who understands your problem solves half your matter. Hence, we are available <Link href="/emergency/">24*7*365 days</Link> to personally understand your problems and provide expert help. We are spontaneous with solutions and make sure that things are done as the top priority. So, call us whenever you need expert guidance and we promise to be there for you through all thick and thins.</Typography>
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

export default PortMoody
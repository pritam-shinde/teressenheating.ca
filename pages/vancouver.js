import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/areas/area2.webp'
import VancouverLoc from '../public/vancouver/vancouver.webp'
import { CertificationSlider, Different, FaqAndForm, Locations } from '../sections/sections'

const Vancouver = () => {

  const makeDiff = ["Licensed technicians.", "We give competitor price match guarantee", "We service all major brands and areas.", "We give you 24*7*365 days of assistance", "We have over 2 decades of work experience.", "We assure comfort."]

  const arrayFaq = [
    { id: "faq-1", que: "What HVAC services do you provide in Vancouver?", ans: "We offer complete Vancouver HVAC services, including heating, cooling, heat pumps, water heaters, system installations, repairs, and preventative maintenance for residential and commercial properties.", list: null },
    { id: "faq-2", que: "Do you provide emergency heating and air conditioning services in Vancouver?", ans: "Yes, our team offers prompt heating service Vancouver and air conditioning service Vancouver to restore comfort quickly when your HVAC system breaks down.", list: null },
    { id: "faq-3", que: "Do you service heat pumps in Vancouver?", ans: "Absolutely. We provide heat pump service Vancouver, including seasonal maintenance, diagnostics, and heat pump repair services Vancouver to keep your system operating efficiently year-round.", list: null },
    { id: "faq-4", que: "Can you repair and maintain water heaters in Vancouver?", ans: "Yes, we provide Vancouver water heater repair service, water heater service Vancouver, and tankless water heater service Vancouver for reliable hot water in homes and businesses.", list: null },
    { id: "faq-5", que: "Do you offer HVAC installation for homes and businesses in Vancouver?", ans: "Yes, we provide HVAC installation and services Vancouver, including heating, cooling, and commercial HVAC maintenance services Vancouver. We also serve nearby communities with heating and cooling services North Vancouver.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Heating Services Vancouver",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Airlinx Heating & Air Conditioning",
      "image": "https://heating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fvancouver.80604495.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fvancouver.80604495.webp&w=1920&q=75",
      "url": "https://airlinxheating.ca/vancouver/",
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
        "name": "Vancouver"
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
        <title>Reliable HVAC Service Vancouver - Airlinx Heating</title>
        <meta name="description" content="Fully certified heating, cooling and HVAC Service Vancouver. Enjoy transparent upfront pricing on all maintenance & repair work for homes & businesses." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/vancouver/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />

      <main>
        <CommonBanner bg={Banner} title="24*7 Heating Services Vancouver" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Image layout='responsive' src={VancouverLoc} alt="vancouver science world" title='vancouver science world' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h2'>Airlinx&apos;s 24*7 heating services in Vancouver offer you a stress-free living</Typography>
                      <Typography className='para'>Airlinx&apos;s heating and <a href="/blog/what-to-know-before-hiring-a-company-for-air-conditioning-maintenance-services-in-canada/">air conditioning services in Vancouver</a> are probably one of the best services you will get in the Vancouver area. Installation and replacement for central <Link href="/heating-services/">home heating systems</Link>, installation, repairs, and tune-ups are one of the best things that can happen to our clients.</Typography>
                      <Typography className='para'>We provide <a href="/furnace/">professional furnace installation</a> from certified HVAC technicians near you, 24*7. We are the only <a href="/commercial-hvac/">HVAC suppliers in Vancouver</a> you can easily count on. Our heating services in Vancouver are undoubtedly the best. With great services, quick assistance, and timely help you can always lead a happy life.</Typography>
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
  )
}

export default Vancouver
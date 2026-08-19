import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/areas/area2.webp'
import WestVancouverLoc from '../public/west-vancouver/west-vancouver.webp'
import { CertificationSlider, Different, FaqAndForm, Locations } from '../sections/sections'

const WestVancouver = () => {
  const makeDiff = ["We assure 24*7*365 days of service.", "We have years of experience", "We have a certified team of experts.", "We service all major brands.", "We assure you of the best competitor price match."]

  const arrayFaq = [
    { id: "faq-1", que: "What HVAC services do you provide in West Vancouver?", ans: "We offer complete heating and cooling services West Vancouver, including furnace repairs, air conditioning, heat pumps, water heaters, system installations, and preventative maintenance.", list: null },
    { id: "faq-2", que: "Do you provide commercial HVAC services in West Vancouver?", ans: "Yes, we specialize in commercial HVAC West Vancouver, offering installation, repairs, inspections, and commercial HVAC maintenance West Vancouver for offices, retail spaces, and other commercial properties.", list: null },
    { id: "faq-3", que: "Can you install a new water heater in West Vancouver?", ans: "Absolutely. We provide professional water heater installation in West Vancouver, helping homeowners and businesses choose and install energy-efficient water heating systems.", list: null },
    { id: "faq-4", que: "Do you offer HVAC maintenance for homes in West Vancouver?", ans: "Yes, our West Vancouver HVAC maintenance services include seasonal inspections, cleaning, and tune-ups to keep your heating and cooling systems running efficiently throughout the year.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for HVAC services in West Vancouver?", ans: "Our experienced team delivers reliable HVAC West Vancouver services with quality workmanship, prompt response times, and customized heating and cooling solutions for residential and commercial customers.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "West Vancouver Heating And Cooling Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Airlinx Heating & Air Conditioning",
      "image": "https://heating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwest-vancouver.d9d04a35.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwest-vancouver.d9d04a35.webp&w=1920&q=75",
      "url": "https://airlinxheating.ca/west-vancouver/",
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
        "name": "West Vancouver"
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
        <title>Best Heating And Cooling Services West Vancouver - Airlinx</title>
        <meta name="description" content="Need premium comfort solutions? Airlinx offers complete heating and cooling services West Vancouver homes trust for reliable repairs and installations." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/west-vancouver/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <main>
        <CommonBanner bg={Banner} title="West Vancouver Heating and Cooling Services" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Image layout='responsive' src={WestVancouverLoc} alt="West Vancouver Hills" title='West Vancouver Hills' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h2'>Airlinx&apos;s heating and air conditioning services in West Vancouver</Typography>
                      <Typography className='para'>Now get the best installation, tune-ups, repair, and replacement services for your Central <Link href="/heating-services/">home heating systems</Link> in West Vancouver and its nearby areas. </Typography>
                      <Typography className='para'>We provide <a href="/furnace/">professional furnace installation services</a> from the certified HVAC technicians available near you. Airlinx&apos;s technicians and installers are licensed professionals who take care of everything. We have experts who assure comfort and happy living for you and your loved ones.</Typography>
                      <Typography className='para'>We are one of the <Link href="/">best heating and cooling service experts</Link> in West Vancouver. So, if you are facing any issues with heating and cooling problems, you already know whom to call, right?</Typography>
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
                <Typography className='para'>Airlinx&apos;s fast and affordable heating and cooling services are one of the reasons why people choose us. </Typography>
                <Typography className='para'>Also, we provide installation, maintenance, and repairs of all models, furnaces, boilers, and heat pumps.</Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
      </main>
    </>
  )
}

export default WestVancouver
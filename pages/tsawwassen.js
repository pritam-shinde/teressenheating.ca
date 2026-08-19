import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/areas/area2.webp'
import TsawwassenLoc from '../public/tsawwassen/tsawwassen.webp'
import { CertificationSlider, Different, FaqAndForm, Locations } from '../sections/sections'

const Tsawwasses = () => {
  const makeDiff = ["We assure 24*7*365 days of service.", "We have years of experience", "We have a certified team of experts.", "We service all major brands.", "We assure you of the best competitor price match."]

  const arrayFaq = [
    { id: "faq-1", que: "What heating services do you offer in Tsawwassen?", ans: "We provide professional heating solutions, including furnace service Tsawwassen, furnace repairs, heating maintenance, heat pump servicing, and new system installations for homes and businesses.", list: null },
    { id: "faq-2", que: "Do you repair water heaters in Tsawwassen?", ans: "Yes, we offer reliable water heater repair Tsawwassen for both traditional and tankless water heaters, helping restore your hot water quickly and efficiently.", list: null },
    { id: "faq-3", que: "How often should I schedule furnace maintenance?", ans: "We recommend having your furnace professionally serviced once a year to improve energy efficiency, reduce the risk of unexpected breakdowns, and extend the life of your heating system.", list: null },
    { id: "faq-4", que: "Can you help if my furnace stops working suddenly?", ans: "Absolutely. Our technicians diagnose and repair furnace issues promptly, providing dependable furnace service Tsawwassen to restore heat as quickly as possible.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for heating and water heater services in Tsawwassen?", ans: "Homeowners and businesses trust us for quality workmanship, prompt response times, and reliable solutions, whether they need furnace service Tsawwassen or water heater repair Tsawwassen.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tsawwassen Water Heater And Air Conditioning Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Airlinx Heating & Air Conditioning",
      "image": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ftsawwassen.2f87babe.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ftsawwassen.2f87babe.webp&w=1920&q=75",
      "url": "https://airlinxheating.ca/tsawwassen/",
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
        "name": "Tsawwassen"
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
        <title>Top-Rated HVAC and Furnace Service Tsawwassen - Airlinx</title>
        <meta name="description" content="Book your comprehensive furnace service Tsawwassen with certified technicians, clear pricing, and dependable results. Contact Airlinx Heating today." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/tsawwassen/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <main>
        <CommonBanner bg={Banner} title="Tsawwassen Water Heater and Air Conditioning Services" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Image layout='responsive' src={TsawwassenLoc} alt="Tsawwassen Mills" title='Tsawwassen Mills' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h2'>Airlinx&apos;s water heater repair services in Tsawaassen will never leave you disappointed</Typography>
                      <Typography className='para'>We are a name for reliability, affordability, and quality. We have been considered one of the <Link href="/air-conditioning-service/">best air conditioning installation, maintenance, and repair service</Link> providers in Tsawwassen. We have a team of certified experts who look into the tune-up matters and also make sure that you are served with the best. We understand all your concerns and give you expert advice. We start addressing your concerns right from your first call till things are resolved in later stages. You simply have to leave all your worries on us and we will get it done as soon as possible.</Typography>
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

export default Tsawwasses
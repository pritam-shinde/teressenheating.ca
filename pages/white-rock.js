import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/areas/area2.webp'
import WhiteRockLoc from '../public/white-rock/white-rock.webp'
import { CertificationSlider, Different, FaqAndForm, Locations } from '../sections/sections'

const WhiteRock = () => {
  const makeDiff = ["We assure 24*7*365 days of service.", "We have years of experience", "We have a certified team of experts.", "We service all major brands.", "We assure you of the best competitor price match."]

  const arrayFaq = [
    { id: "faq-1", que: "What heating services do you provide in White Rock?", ans: "We offer complete heating service White Rock, including furnace repairs, heat pump servicing, boiler maintenance, and heating system installations for residential and commercial properties.", list: null },
    { id: "faq-2", que: "Do you provide furnace repair in White Rock?", ans: "Yes, our technicians offer prompt furnace repair White Rock services, diagnosing and repairing heating issues to restore warmth and comfort as quickly as possible.", list: null },
    { id: "faq-3", que: "Do you install and service tankless water heaters?", ans: "Absolutely. We provide tankless water heater services White Rock, including installations, repairs, maintenance, and replacements for reliable, energy-efficient hot water.", list: null },
    { id: "faq-4", que: "How often should I schedule furnace maintenance?", ans: "We recommend annual heating maintenance services in White Rock to improve furnace efficiency, reduce the risk of unexpected breakdowns, and extend the life of your heating system.", list: null },
    { id: "faq-5", que: "What is included in your furnace service?", ans: "Our furnace service White Rock includes a complete system inspection, cleaning, safety checks, performance testing, and recommendations to keep your furnace running safely and efficiently.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Heating Installation Services White Rock",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Airlinx Heating & Air Conditioning",
      "image": "https://heating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-rock.865e518f.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-rock.865e518f.webp&w=1920&q=75",
      "url": "https://airlinxheating.ca/white-rock/",
      "telephone": "+1-604-363-6622",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2025 Willingdon Ave unit 900",
        "addressLocality": "Burnaby",
        "addressRegion": "BC",
        "postalCode": "V5C 0J3",
        "addressCountry": "CA"
      },
      "areaServed": {
        "@type": "City",
        "name": "White Rock"
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
        <title>Boiler and Furnace Repair White Rock - Airlinx Heating</title>
        <meta name="description" content="Don't get left in the cold. Airlinx Heating provides fast boiler and furnace repair White Rock homeowners trust to bring back warm, safe comfort tonight." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/white-rock/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <main>
        <CommonBanner bg={Banner} title="Heating Installation Services White Rock" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Image layout='responsive' src={WhiteRockLoc} alt="White Rock Pier" title='White Rock Pier' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h2'>Airlinx&apos;s Furnace Installation, And Tune-Up Services In White-Rock Rocks</Typography>
                      <Typography className='para'>We get appreciated for our <a href="/boilers-installation/">heating installation services</a> in White-rock for the amount of work we do for all clients. No matter what, we always consider our clients as our kings. Hence, we provide quality <a href="/heating-services/">heating services</a> in White rock that makes you worry less and smile more. Also, we make sure that our <a href="/boilers/">installation, repair, and maintenance services</a> should suit your budget too. So, once you give us a call, we make sure that your work is done very easily. We would also like you to rate our services so that there is always a scope for improvement for us.</Typography>
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

export default WhiteRock
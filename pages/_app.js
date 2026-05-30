
import { ArrowCircleUp } from "@mui/icons-material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Button, Container, Grid } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import "swiper/css/bundle";
import { Footer, Header } from '../components/components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

export function reportWebVitals(metric) {
  console.log(metric)
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "LocalBusiness",
    "name": "Airlinx Furnace Heating & AC HVAC Ltd.",
    "url": "https://airlinxheating.ca/",
    "description": "Airlinx Heating & Cooling provides professional heating, cooling, furnace, air conditioning, and HVAC services for residential and commercial properties across British Columbia region in Canada. The company focuses on reliable service, energy-efficient solutions, and customer satisfaction.",
    "telephone": "(604)363-6622",
    "logo": "https://airlinxheating.ca/_next/static/media/airlink_logo.c49b5469.jpg",
    "@id": "https://airlinxheating.ca/contact-us/",
    "image": "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fabout.d6de81cd.jpg&w=1920&q=75",
    "identifier": ["https://www.google.com/search?q=Airlinx+Furnace+Heating+%26+AC+HVAC+Ltd.+Canada&sca_esv=6240a4551174a4e8&biw=1366&bih=641&sxsrf=ANbL-n4mSFo3uJjGNZJ5rlqOAz9ut9zL4Q%3A1778480295210&ei=p3QBapbMDN-x2roPmdK18A8&ved=0ahUKEwjWu_Gxy7CUAxXfmFYBHRlpDf4Q4dUDCBE&uact=5&oq=Airlinx+Furnace+Heating+%26+AC+HVAC+Ltd.+Canada&gs_lp=Egxnd3Mtd2l6LXNlcnAiLUFpcmxpbnggRnVybmFjZSBIZWF0aW5nICYgQUMgSFZBQyBMdGQuIENhbmFkYTIFECEYoAEyBRAhGKABSPIdUIoHWNcccAF4AJABAJgBjgKgAeEKqgEFMC41LjK4AQPIAQD4AQGYAgigAscLwgIOEAAYgAQYigUYhgMYsAPCAggQABjvBRiwA8ICCxAAGIAEGKIEGLADwgIEECMYJ8ICBRAAGO8FwgIIEAAYgAQYogSYAwCIBgGQBgmSBwUxLjMuNKAHzRuyBwUwLjMuNLgHvAvCBwUyLTUuM8gHOYAIAQ&sclient=gws-wiz-serp"],
    "alternateName":
      [
        "Heating and Cooling Services",
        "Heating Service Burnaby",
        "Burnaby Heating & Cooling Services",
        "Service Heating and Cooling",
        "Service Experts Heating and Cooling",
        "Emergency Heating and Cooling Service",
        "Commercial Heating and Cooling Services",
        "AC Installation Services",
        "AC Service & Installation"
      ],
    "hasMap": "https://maps.app.goo.gl/E7QUzbgThkiaxwTr5",
    "currenciesAccepted": "CAD",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2025 Willingdon Ave unit 900",
      "addressLocality": "Burnaby",
      "addressRegion": "British Columbia (BC)",
      "postalCode": "V5C 0J3",
      "addressCountry": "Canada"
    },
    "openingHours": ["Mon 00:00-23:59", "Tus 00:00-23:59", "Wed 00:00-23:59", "Thurs 00:00-23:59", "Fri 00:00-23:59", "Sat 00:00-23:59", "Sun 00:00-23:59"],
    "disambiguatingDescription": "Airlinx Heating & Cooling offers trusted HVAC services, including furnace repair, air conditioning installation, heating maintenance, and indoor comfort solutions for homes and businesses. The company is committed to quality workmanship, fast response times, and dependable customer service in Vancouver and Nearby areas",
    "mainEntityOfPage": "https://airlinxheating.ca/",
    "sameAs": [
      "https://www.instagram.com/airlinx.heating/",
      "https://maps.app.goo.gl/E7QUzbgThkiaxwTr5"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.2803767,
      "longitude": -123.0098237
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "28"
    },
    "areaServed": ["CA", "BC", "Burnaby", "Vancouver", "West Vancouver", "North Vancouver", "Coquitlam", "Richmond", "White Rock", "Tsawwassen", "Port Moody", "Pitt Meadows", "New Westminster", "Maple Ridge"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Heating and Cooling Services, Burnaby",
      "@id": "https://airlinxheating.ca/contact-us/",
      "additionalType": "Heating and Cooling Services",
      "url": "https://airlinxheating.ca/services/",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": [
            {
              "@type": "Service",
              "name": "Heating Services",
              "@id": "https://airlinxheating.ca/heating-services/",
              "url": "https://airlinxheating.ca/heating-services/",
              "description": "Airlinx Heating Services provides professional heating repair, installation, and maintenance services in Vancouver and nearby region in  Canada. Our experienced team helps keep homes and businesses warm, comfortable, and energy-efficient throughout the year."
            },
            {
              "@type": "Service",
              "name": "Air Conditioning Service",
              "@id": "https://airlinxheating.ca/air-conditioning-service/",
              "url": "https://airlinxheating.ca/air-conditioning-service/",
              "description": "Air Conditioning Services offers reliable AC installation, repair, and maintenance services in Vancouver and nearby areas across British Columbia."
            },
            {
              "@type": "Service",
              "name": "Commercial HVAC Services",
              "@id": "https://airlinxheating.ca/commercial-hvac/",
              "url": "https://airlinxheating.ca/commercial-hvac/",
              "description": "Expert commercial HVAC installation and maintenance services focused on improving comfort, air quality, and energy efficiency for businesses."
            },
            {
              "@type": "Service",
              "name": "Boiler Services",
              "@id": "https://airlinxheating.ca/boilers/",
              "url": "https://airlinxheating.ca/boilers/",
              "description": "Reliable boiler services for residential and commercial properties, helping maintain efficient and consistent heating year-round."
            },
            {
              "@type": "Service",
              "name": "Airlinx tankless water heater maintenance service",
              "@id": "https://airlinxheating.ca/tankless-water-heaters/",
              "url": "https://airlinxheating.ca/tankless-water-heaters/",
              "description": "Professional tankless water heater solutions designed to provide reliable hot water while improving energy efficiency for homes and businesses by Airlinx"
            },
            {
              "@type": "Service",
              "name": "Airlinx's emergency services",
              "@id": "https://airlinxheating.ca/emergency/",
              "url": "https://airlinxheating.ca/emergency/",
              "description": "Emergency HVAC Services by Airlinx provides fast and reliable emergency heating and cooling services 24/7 for homes and businesses across Vancouver and nearby areas in British Columbia."
            },
            {
              "@type": "Service",
              "name": "Lennox HVAC systems",
              "@id": "https://airlinxheating.ca/lennox-hvac/",
              "url": "https://airlinxheating.ca/lennox-hvac/",
              "description": "Lennox HVAC Services offers professional Lennox heating and cooling installation, repair, and maintenance services for residential and commercial properties across Vancouver and nearby BC areas."
            },
            {
              "@type": "Service",
              "name": "furnace repair and installation",
              "@id": "https://airlinxheating.ca/furnace-inspection/",
              "url": "https://airlinxheating.ca/furnace-inspection/",
              "description": "Furnace Inspection Services provides professional furnace inspection and safety checks to help improve heating performance, energy efficiency, and home comfort across Vancouver and nearby BC areas."
            },
            {
              "@type": "Service",
              "name": "boiler repair and maintenance service",
              "@id": "https://airlinxheating.ca/boilers-service/",
              "url": "https://airlinxheating.ca/boilers-service/",
              "description": "Boiler Repair Services provides professional boiler repair, maintenance, and heating solutions for homes and businesses across Vancouver and nearby areas in British Columbia."
            },
            {
              "@type": "WebSite",
              "publisher": {
                "@id": "https://maps.app.goo.gl/E7QUzbgThkiaxwTr5"
              },
              "name": "Airlinx Furnace Heating & AC HVAC Ltd.",
              "@id": "https://airlinxheating.ca/",
              "url": "https://airlinxheating.ca/",
              "keywords": [
                "Reliable HVAC Maintenance Services in Burnaby",
                "HVAC Services",
                "Commercial HVAC",
                "Air Conditioning Service",
                "Boiler Repair",
                "Tankless Water Heaters",
                "Heating and Cooling Service in Vancouver",
                "Boiler Installation",
                "Air Conditioning Services",
                "Heating and Cooling Services",
                "Heating Services",
                "Commercial HVAC Services",
                "Air Conditioning and Heating",
                "Heating and Air Conditioning Services",
                "Boiler Services",
                "Heating Maintenance Services",
                "Boiler Service in Burnaby",
                "Boiler Repair Service",
                "Furnace Installation Services",
                "Boiler Maintenance Services",
                "Boiler Repair Services",
                "Boiler Installation Services",
                "Rebates And Promotions",
                "Heating and Cooling Rebates"
              ]
            }
          ]
        }]
    }
  }]
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [width, setWidth] = useState(601);
  const [scrollHeight, setScrollHeight] = useState()
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  useEffect(() => {
    window.myInfo = () => {
      const developer = [
        {
          Developer: "Aditya Nitin Burse (Jain)",
          Designation: "Front-End Developer",
          Employer: "Nonstop Corporation"
        },
        {
          Developer: "Ankit Shahu",
          Designation: "Full Stack Developer",
          Employer: "Nonstop Corporation"
        }

      ]
      console.log(developer)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);


  const handleGoTOTop = () => {
    window.scrollTo(0, 0)
  }
  return (<>
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="EyzpH-lXbXN8fg7XPxUm_lfNy29_AIRYbcgFqJbJ8Kw" />
      </Head>

      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Script
        id="hs-script-loader"
        src="https://js-eu1.hs-scripts.com/26996663.js"
        strategy="afterInteractive"
      />

      <Header />
      <Component {...pageProps} />
      {
        scrollHeight > 100 ? <Box className='d-flex justify-content-center align-items-center rounded-circle' style={{ height: "3rem", width: "3rem", backgroundColor: "var(--red)", position: "fixed", left: "1%", bottom: "2%", zIndex: 2 }}>
          <button className='btn border-0 outline-none' onClick={handleGoTOTop}><ArrowCircleUp className='text-white' style={{ fontSize: "2rem !important" }} /></button>
        </Box> : null
      }
      <section className='fixedButtons' style={{ backgroundColor: 'var(--navy)' }}>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box p={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={10} className="mx-auto">
                    <Box>
                      <Grid container justifyContent='center' spacing={4}>
                        <Grid item xs={router.pathname != '/contact-us' ? 4 : 0}>
                          <Box>
                            {
                              router.pathname != '/contact-us' ? <Button p={3} variant="contained" fullWidth disableElevation size="large" startIcon={<CalendarMonthIcon />} style={{ backgroundColor: '#02599a', margin: '0.3rem' }}>
                                <Link href="/contact-us/" legacyBehavior><a className='hoverPoint text-white'>{width > 600 ? 'BOOK AN APPOINTMENT' : 'BOOK'}</a></Link>
                              </Button> : null
                            }
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box>
                            <Button variant="contained" fullWidth disableElevation size="large" startIcon={<PhoneIcon />} style={{ backgroundColor: '#D92C18', margin: '0.3rem' }}>
                              <a href="tel:604-363-6622" className='hoverPoint text-white'> {width > 600 ? '604-363-6622 ' : 'CALL'}</a>
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>

                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </>

  </>)
}

export default MyApp

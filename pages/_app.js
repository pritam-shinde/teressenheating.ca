import { useEffect, useState } from 'react';
import Head from 'next/head';
import "swiper/css/bundle";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Footer, Header } from '../components/components';
import { ArrowCircleUp } from "@mui/icons-material"
import '../styles/globals.css'
import Script from 'next/script'
import { Grid, Container, Box, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Link from 'next/link';
import { useRouter } from 'next/router'

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [hydaration, setHydration] = useState(false)
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
  })

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollHeight(window.scrollY)
    })
  }, [scrollHeight])

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  }, [width]);


  const handleGoTOTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      setHydration(true)
    } else {
      setHydration(false)
    }
  })

  return (<>
    {hydaration ? <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="EyzpH-lXbXN8fg7XPxUm_lfNy29_AIRYbcgFqJbJ8Kw" />
      </Head>
      <Script>
        {
          `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TFB5PTT');`
        }
      </Script>

      <script type="application/ld+json">{
        `{    "@context": "https://schema.org",
        "@graph": [{
                   "@type":"LocalBusiness",
                    "name":"Teressen Heating & Air Conditioning",
               "identifier":["https://www.google.com/search?q=Teressen+Heating+%26+Air+Conditioning&stick=H4sIAAAAAAAA_-NgU1I1qDA1sTAzNzdLtEiytExONDC1MqgwTzUwSLZIMrVIsjAyNUqxXMSqHJJalFpcnJqn4JGaWJKZl66gpuCYWaTgnJ-XklmSmZ8HFAIAJZfkV08AAAA&hl=en&mat=Cao9GZRel2hTElYB8pgkaEjwjlWWDSrxG8bo-3SoCjFHcKP8mlRS6ZjTTbvHc9b_IrYS7wPY4wCT6z9LQkWtuc9YYw_quPAy2klgTGEIYMlwOAdP1QhJ-Gsl2nD_AWSbvg&authuser=1"],
               "alternateName":["Heating Service in Canada","Air Conditioning Service in Canada","HVAC Repair Services in Canada","Boiler Repair Services in Canada "],
                   "description":["We are committed to maintaining quality through our efficient working style. We are the only handful GAF certified HVACR contractors in Burnaby who serves you to the fullest. We offer a wide range of heating and cooling services that will keep you safe from high utility bills."],
          "image":"https://teressenheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fabout.ce62280d.webp&w=1920&q=75",
                   "telephone":"+1 604-363-6622",
                   "url":"https://teressenheating.ca/",
                   "logo":"https://teressenheating.ca/_next/static/media/blue-logo.6b27c1ae.svg",
                   "hasMap":"https://goo.gl/maps/1k1JGpfupd4SMp1YA",
                   "currenciesAccepted":"CAD",
                   "priceRange":"C$",
             "address":{
             "@type":"PostalAddress",
             "streetAddress":"2025 Willingdon Ave unit 900",
             "addressLocality":"British Columbia",
             "addressRegion":"Burnaby",
             "addressCountry":"Canada"
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
          "mainEntityOfPage":"https://torontoshinecleaning.ca/",
          "sameAs": [
           "https://www.facebook.com/profile.php?id=100088431184715",
           "https://goo.gl/maps/1k1JGpfupd4SMp1YA",
           "https://twitter.com/BaymanShawqi",
           "https://www.pinterest.com.au/teressenheating/"],
           
           "foundingLocation":[
             {
                "@type":"Place",
                "geo":{
                   "@type":"GeoCoordinates",
                   "latitude":"49.265842",
                   "longitude":"-123.0035841"
                },
                "name":"Teressen Heating & Air Conditioning"
             }
          ],
          "actionableFeedbackPolicy":"https://teressenheating.ca/privacy-policy/",
          "areaServed":["Vancouver","Burnaby", "West Vancouver", "North Vancouver", "Coquitlam", "Richmond", "White Rock", "Tsawwassen", "Port Moody", "Pitt Meadows", "New Westminster", "Maple Ridge"
          ],
      
           "hasOfferCatalog": {
           "@type": "OfferCatalog",
           "name": "Teressen Heating & Air Conditioning",
           "url": "https://teressenheating.ca/services/",
           "itemListElement": [
             {
             "@type": "Offer",
               "itemOffered": [
               {
                 "@type": "Service",
                 "name": "Heating Services",
                 "@id": "https://teressenheating.ca/heating-services/#Service",
                 "url": "https://teressenheating.ca/heating-services/",
                 "description": "Teressen heating services has been providing expert heating services in Canada for years. Our clients call us every day to meet their needs for emergency heating maintenance services, heating repairs, and cooling and heating system installation services."
                  },
               {          
                 "@type": "Service",
                 "name": "Air Conditioning Service",
                 "@id": "https://teressenheating.ca/air-conditioning-service/#Service",
                 "url": "https://teressenheating.ca/air-conditioning-service/",
                 "description": "Teressen heating and air conditioning location is independently owned and operated. So, you can trust us as your local expert. We will arrive at your home on time and work with your needs, budget, and preferences to make sure that you are satisfied with our work. We also value your time."
               },
               {
                 "@type": "Service",
                 "name": "Commercial HVAC Services",
                 "@id": "https://teressenheating.ca/commercial-hvac/#Service",
                 "url": "https://teressenheating.ca/commercial-hvac/",
                 "description": "Teressen commercial HVAC services is a name for the best commercial HVAC repair services in Canada. We regularly provide commercial HVAC services like boiler, furnace services, and commercial air conditioner services."
               },
               {
               "@type": "Service",
                 "name": "Boiler Services",
                 "@id": "https://teressenheating.ca/boilers/#Service",
                 "url": "https://teressenheating.ca/boilers/",
                 "description": "Teressen Boiler repairing services in Canada can help with any problems that arise with your boiler; whether you need boiler replacement or some guidance for boiler installation."
               },
               {
                 "@type": "Service",
                 "name": "Tankless Water Heater Maintenance Service",
                 "@id": "https://teressenheating.ca/tankless-water-heaters/#Service",
                 "url": "https://teressenheating.ca/tankless-water-heaters/",
                 "description": "Tankless water heaters are epic for people who want energy efficiency and hot water. These are small in size and are one of the best possible choices for water heaters in residential and businesses."
               },
               {
                 "@type": "Service",
                 "name": "Rebates And Promotions",
                 "@id": "https://teressenheating.ca/rebates-and-promotions/#Service",
                 "url": "https://teressenheating.ca/rebates-and-promotions/",
                 "description": "To encourage the most comfortable means of heating and cooling your space, Teressen services offer heating and cooling rebates. So, when you choose to install a furnace system with our team, you get an experienced dealer, products, and expert heating and cooling services."
               },
               {
                 "@type": "Service",
                 "name": "Emergency Services",
                 "@id": "https://teressenheating.ca/emergency/#Service",
                 "url": "https://teressenheating.ca/emergency/",
                 "description": "In the winter season, we need our furnace to keep our home cozy. But what if your furnace breaks down? In that case, you need an instant solution that is fast and reliable too. That is why the experts at Teressen offer superior HVAC emergency water heater repair services to meet your everyday needs. No matter the time, we are always there for your assistance."
               },
               {
                 "@type": "Service",
                 "name": "Lennox HVAC",
                 "@id": "https://teressenheating.ca/lennox-hvac/#Service",
                 "url": "https://teressenheating.ca/lennox-hvac/",
                 "description": "We help you with the best quality Lennox furnaces in the industry. It is one of the most trusted brands in heating equipment because it is very easy to install, operate and maintain too."
               },
               {
                 "@type": "Service",
                 "name": "Financing Option",
                 "@id": "https://teressenheating.ca/financing-option/#Service",
                 "url": "https://teressenheating.ca/financing-option/",
                 "description": "We understand how important it is when comfort comes at a cost. It makes us easier to cover the costs which are associated with installing, servicing, and replacing your HVAC systems. Our relationship with Teressen makes it possible for our clients to finance these expenses so that they do not have to deal with any delays"
               },
               {
                 "@type": "Service",
                 "name": "Furnace Inspection",
                 "@id": "https://teressenheating.ca/furnace-inspection/#Service",
                 "url": "https://teressenheating.ca/furnace-inspection/",
                 "description": "Teressen heating ltd provides one of the best furnace installation and repair services in Canada. We have been working continuously in HVAC services and have played a crucial role in the Canadian fire safety association."
               }
                     
        ]
       }]
       }}]}`
      }</script>
      <Script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/26996663.js"></Script>

      <Header />
      <Component {...pageProps} />
      {
        scrollHeight > 100 ? <Box className='d-flex justify-content-center align-items-center rounded-circle' style={{ height: "3rem", width: "3rem", backgroundColor: "var(--red)", position: "fixed", left: "1%", bottom: "2%", zIndex: 2 }}>
          <button className='btn border-0 outline-none' onClick={handleGoTOTop}><ArrowCircleUp className='text-white' style={{ fontSize: "2rem !important" }} /></button>
        </Box> : null
      }

      <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/26996663.js"></script>
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
      <Footer /> </> : ""}

  </>)
}

export default MyApp

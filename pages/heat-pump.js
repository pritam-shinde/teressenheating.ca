import { Autorenew, Build, CheckCircleOutline, FlashOn, Handyman, Tune } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/heat-pump/banner.webp'
import HeatPump from '../public/heat-pump/heat-pump.webp'
import { FaqAndForm, FeaturedHeatingServices, Locations, Testimonial } from '../sections/sections'
import HighlySkilledStyles from '../styles/HighlySkilled.module.css'
import PopularServiceStyles from '../styles/PopularService.module.css'

const HeatPumpPage = () => {
  const arrayFaq = [
    {
      id: "faq-1",
      que: "How much does heat pump installation cost in Burnaby?",
      ans: "It varies a lot from house to house, so we won't throw out a number over the phone. A small ductless unit for one room costs far less than a ducted system for a whole house. Once we've seen your place, you get a written quote with everything in it. Ask us about rebates too, because they can take a good chunk off.",
      list: null
    },
    {
      id: "faq-2",
      que: "Do heat pumps work in Burnaby winters?",
      ans: "Yes. Our winters are wet and mild, not brutal, so it's about the easiest climate there is for a heat pump. Cold-climate models keep heating well below freezing. If you want a safety net, we can pair one with your existing furnace.",
      list: null
    },
    {
      id: "faq-3",
      que: "How long does heat pump installation take?",
      ans: "Usually one to three days. A single ductless unit is often done in a day. A ducted system, or one where we have to change the ductwork, takes longer. We'll tell you which one you're looking at when we quote.",
      list: null
    },
    {
      id: "faq-4",
      que: "How often should I get my heat pump serviced?",
      ans: "Once a year. Your heat pump works in winter and summer, so it gets more wear than a furnace or AC alone. Fall is a good time, before the cold hits. Keep the receipt, because some manufacturers want proof of servicing for warranty claims.",
      list: null
    },
    {
      id: "faq-5",
      que: "Should I leave my heat pump on all the time?",
      ans: "Mostly, yes. Heat pumps like a steady temperature. Turning it off and then cranking it up makes it work harder. If you're away for a few days, drop the setting a few degrees instead of switching it off.",
      list: null
    },
    {
      id: "faq-6",
      que: "Should I repair or replace my heat pump?",
      ans: "If it's under 10 or 12 years old and one part has failed, repair usually makes sense. If it's 15 years or older, or you've paid for repairs twice already, replacement is often the better call. If the repair quote is close to half the cost of a new unit, think hard about replacing it. We'll tell you straight which way we'd go.",
      list: null
    },
    {
      id: "faq-7",
      que: "Do you do emergency heat pump repair?",
      ans: "Yes, any time, including nights, weekends, and holidays. Call 604-363-6622.",
      list: null
    },
    {
      id: "faq-8",
      que: "What's the difference between a heat pump and a furnace?",
      ans: "A furnace makes heat by burning gas. A heat pump moves heat from the outside air into your house, and in summer it runs backwards and cools the place. It also replaces your air conditioner, so you only need one system.",
      list: null
    },
    {
      id: "faq-9",
      que: "What heat pump brands do you work on?",
      ans: "Most of the common ones, including Lennox, Carrier, Trane, Daikin, Bryant, Goodman, American Standard, Keeprite, and York. If yours isn't on that list, call and ask.",
      list: null
    },
    {
      id: "faq-10",
      que: "Do I need a permit to install a heat pump?",
      ans: "Usually there's at least an electrical permit involved. We take care of it, so you don't have to chase the city.",
      list: null
    }
  ]

  const testimonial = [
    {
      id: "testimonial-1",
      text: "They carried out a challenging replacement of our failing AC system in the middle of a horrible heat wave. They are courteous and very knowledgeable about their job. Highly recommend them.",
      customerName: "Michael Brown"
    },
    {
      id: "testimonial-2",
      text: "The entire Airlinx Heating & Air Conditioning team has been great to work with. They protected our floors and working area throughout the day, provided a clear understanding of the work, and left the job site in the same way as they started (very clean!). We have been happy to be a customer of Airlinx.",
      customerName: "Catherine M."
    },
    {
      id: "testimonial-3",
      text: "Wilson and his team did an outstanding job installing our heat pump in Burnaby. Fast, professional, and explained the rebate process completely. The house has never been more comfortable.",
      customerName: "David K."
    }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Heat Pump Installation, Repair & Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Airlinx Heating & Air Conditioning",
      image: "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fheat-pump.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/heat-pump/",
      url: "https://airlinxheating.ca/heat-pump/",
      telephone: "+1-604-363-6622",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201-3701 Hastings St",
        addressLocality: "Burnaby",
        addressRegion: "British Columbia",
        postalCode: "V5C 2H6",
        addressCountry: "CA"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.265842,
        longitude: -123.0035841
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=100088431184715",
        "https://twitter.com/BaymanShawqi",
        "https://www.pinterest.com.au/airlinxheating/"
      ]
    }
  }

  const servicesList = [
    {
      title: "Heat Pump Installation",
      desc: "Free assessment, correct sizing, clean installation, full testing, and a walkthrough. Choose ducted, ductless mini-split, cold-climate, or hybrid (heat pump plus furnace) systems.",
      Icon: Build,
      isEmergency: false,
      gridSm: 6,
      gridMd: 6
    },
    {
      title: "Heat Pump Replacement",
      desc: "Burnaby Heat pumps typically last 15 to 20 years. If yours is aging, noisy, icing up, using R-22 refrigerant, or costing more to repair every year, we'll give you an honest repair-or-replace recommendation. If replacement is the better value, we remove your old unit and install a high-efficiency one, often within a day or two.",
      Icon: Autorenew,
      isEmergency: false,
      gridSm: 6,
      gridMd: 6
    },
    {
      title: "Heat Pump Repair Service",
      desc: "We diagnose and fix every major brand: no heat or cold air in heating mode, iced-up outdoor units, grinding or squealing noises, refrigerant leaks, compressor and capacitor faults, short cycling, tripped breakers, and water leaks. You approve the price before we start.",
      Icon: Handyman,
      isEmergency: false,
      gridSm: 6,
      gridMd: 4
    },
    {
      title: "Emergency Heat Pump Repair",
      desc: (
        <>
          No heat on a cold night can&apos;t wait. Our{" "}
          <Link href="/emergency/">emergency heat pump repair</Link> is available 24 hours a day, 7 days a week, 365 days a year. Call 604-363-6622.
        </>
      ),
      Icon: FlashOn,
      isEmergency: true,
      gridSm: 6,
      gridMd: 4
    },
    {
      title: "Heat Pump Service and Maintenance",
      desc: "An annual tune-up keeps your system efficient, prevents cold-weather breakdowns, and protects your warranty. We clean coils, check refrigerant and electrical components, test the defrost cycle and thermostat, clear drain lines, and give you a written report.",
      Icon: Tune,
      isEmergency: false,
      gridSm: 12,
      gridMd: 4
    }
  ]

  return (
    <>
      <Head>
        <title>Heat Pump Installation Burnaby | Repair & Service | Airlinx</title>
        <meta name="description" content="Heat pump installation in Burnaby plus repair, replacement & 24/7 emergency service by Airlinx Heating. Licensed heating contractor, 20+ years. Call now." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://airlinxheating.ca/heat-pump/" />
      </Head>

      <JsonLd faqArr={arrayFaq} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />

      <main>
        {/* H1 HERO BANNER */}
        <CommonBanner bg={Banner} title="Heat Pump Installation in Burnaby for Efficient Heating & Cooling" color="#fff" variant="h1" />

        {/* SECTION 1: Expert Heat Pump Installation, Service & Repair */}
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mt={5}>
                  <SectionalHeading simpletext="Expert Heat Pump Installation, Service & Repair from a Local Heating Contractor" variant="h2" />
                  <Typography className='para'>
                    Need heat pump installation in Burnaby? That's what we do every day. Airlinx Heating is a licensed heating contractor in Burnaby, and for more than 20 years we've been installing, fixing, and replacing heat pumps for homeowners and businesses all over Vancouver. If you quit on a cold night, we'll get someone out to you fast.
                  </Typography>
                  <Typography className='para'>
                    Most people call us when something's already wrong. The house is cold, the outdoor unit is iced over, or the repair bills keep coming. We handle heat pump service in Burnaby of every kind, from a basic yearly check to a full heat pump replacement. Before we touch anything, you will know what it costs, and you'll hear straight from us if fixing the old one doesn't make sense.
                  </Typography>
                  <Box mt={3} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Get a Free Quote" />
                    <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 2: Heat Pump Service in Burnaby by Certified Experts */}
        <section className='mt-md-4 mt-3 py-md-5 py-4'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <SectionalHeading simpletext="Heat Pump Service in Burnaby by Certified Experts" variant="h2" />
                  <Typography className='para'>
                    When you call about a heat pump installation, we come out and look at your house first. We check how big it is, how well it's insulated, what the windows are like, and whether your ducts can handle it. Then we work out the size of the unit you need. It's the step most people skip, and it's why some heat pumps never feel quite right.
                  </Typography>
                  <Typography className='para'>
                    We put in ducted, ductless, and cold-climate systems, and we'll tell you honestly if a hybrid setup with your furnace makes more sense. After it's installed, we're the ones you call for heat pump service and maintenance, a heat pump repair service visit, or emergency heat pump repair at 2 a.m. when it quits.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 3: Our Heat Pump Services in Burnaby */}
        <section className='my-5 py-md-5 py-4' style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box textAlign="center" mb={{ xs: 3.5, md: 5 }}>
                  <SectionalHeading simpletext="Our Heat Pump Services in Burnaby" variant="h2" align="center" />
                </Box>

                <Grid container spacing={3} alignItems="stretch">
                  {servicesList.map((service, index) => (
                    <Grid item xs={12} sm={service.gridSm} md={service.gridMd} key={index}>
                      <Box
                        sx={{
                          height: '100%',
                          p: { xs: 3, md: 3.5 },
                          backgroundColor: '#ffffff',
                          borderRadius: '16px',
                          border: '1px solid #e5eaf2',
                          borderTop: '4px solid var(--blue)',
                          boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
                          display: 'flex',
                          flexDirection: 'column',
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 12px 28px rgba(19, 148, 205, 0.12)',
                            borderColor: 'var(--blue)'
                          }
                        }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(19, 148, 205, 0.08)',
                            color: 'var(--blue)',
                            mb: 2.2
                          }}
                        >
                          <service.Icon sx={{ fontSize: 26 }} />
                        </Box>

                        <Typography
                          component="h3"
                          variant="h3"
                          sx={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'var(--navy)',
                            mb: 1.5,
                            lineHeight: 1.35
                          }}
                        >
                          {service.title}
                        </Typography>

                        <Typography
                          className='para'
                          sx={{
                            color: '#555',
                            fontSize: '0.94rem !important',
                            lineHeight: 1.7,
                            m: 0,
                            '& a': {
                              color: 'var(--blue)',
                              textDecoration: 'underline !important',
                              fontWeight: 500,
                              '&:hover': {
                                color: 'var(--navy)'
                              }
                            }
                          }}
                        >
                          {service.desc}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Box
                  mt={{ xs: 4, md: 5 }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 2
                  }}
                >
                  <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book a Heat Pump Service" />
                  <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>


        {/* SECTION: Why Choose Airlinx */}
        <section className='mt-md-4 mt-3'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Image
                          src={HeatPump}
                          alt="heat pump installation burnaby"
                          title="heat pump installation burnaby"
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                            maxWidth: "100%",
                            borderRadius: '8px'
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <SectionalHeading simpletext="Why Choose Airlinx as Your Burnaby Heating Contractor?" variant="h2" />
                        <List className="mt-2">
                          {[
                            "Licensed and insured, with work that meets local codes",
                            "20+ years of heating and cooling experience in Metro Vancouver",
                            "Certified technicians trained on all major heat pump brands",
                            "24/7/365 emergency heat pump repair",
                            "Upfront, written pricing with no surprises",
                            "Price match offered on comparable written quotes",
                            "Comfort guaranteed, with a clean, respectful crew"
                          ].map((text, idx) => (
                            <ListItem key={idx} sx={{ px: 0, py: 0.75 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={text} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* NEW SECTION: EMERGENCY BANNER (Right after "Why us?") */}
        <section className={`${PopularServiceStyles.PopularService} mt-4`}>
          <Container maxWidth="xxl" style={{ height: "inherit" }}>
            <Grid container style={{ height: "inherit" }}>
              <Grid item xs={12} md={10} className="mx-auto" style={{ height: "inherit" }}>
                <Box style={{ height: "inherit" }}>
                  <Grid container style={{ height: "inherit" }}>
                    <Grid item xs={12} sm={11} md={9} className="me-start d-flex align-items-center" style={{ height: "inherit" }}>
                      <Box py={5}>
                        <Typography component="h2" variant="h2" className={PopularServiceStyles.head}>
                          Heat Pump Not Working? <span className="text--blue">Emergency Heat Pump Repair, 24/7</span>
                        </Typography>
                        <Typography className='para mt-2' style={{ fontSize: '1.25rem', color: '#333' }}>
                          Nights, weekends, and holidays. If your heat is out, we answer.
                        </Typography>
                        <Box mt={3} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                          <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book a Heat Pump Service" />
                          <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION: Heat Pump Service Areas */}
        <Locations
          title="Heat Pump Service Areas: Burnaby & Metro Vancouver"
          description="Based in Burnaby, we provide heat pump installation, repair, and replacement across Metrotown, Brentwood, Edmonds, Burnaby Heights, Capitol Hill, Lougheed, and the wider Lower Mainland."
        />

        {/* SECTION: More Heating Services from Airlinx */}
        <FeaturedHeatingServices
          title="More Heating Services from Airlinx"
          subTitle="Furnace, Boiler, Heat Pump & Fireplace Installation, Maintenance and Repair"
          bannerText="Need Heat Pump Installation or Repair in Burnaby? Talk to a Specialist Today."
          btnTitle="Book Heat Pump Service"
          btnLink="/contact-us/"
          balancedLogos={true}
        />

        {/* SECTION: Highly Skilled Heat Pump Technicians */}
        <section className={`${HighlySkilledStyles.HighlySkilled} mt-3`}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} sm={10} md={9} lg={8} className="mx-auto">
                <Box py={5}>
                  <SectionalHeading simpletext="Highly Skilled Heat Pump Technicians" variant="h2" align="center" />
                  <Box mt={3}>
                    <Typography align='center' className='para'>
                      Heat pump blowing cold air? Outdoor unit covered in ice? Running all day and the house still isn't warm? Call us. We do heat pump repair service on most brands, and we'll look at it and give you a price before we start. Sometimes it's a ten-minute fix. Sometimes the unit is just done, and we'll say so.
                    </Typography>
                    <Typography align='center' className='para'>
                      Around Burnaby, the usual culprits are a clogged coil, a weak fan motor, or a low refrigerant charge. Rain, leaves, and moss don't help the outdoor unit either. A yearly heat pump service and maintenance visit catches most of this. We clean it, check the charge and wiring, and test that it defrosts properly. Keep the receipt too. Some manufacturers ask for it if you ever make a warranty claim.
                    </Typography>
                    <Typography align='center' className='para'>
                      We have been a heating contractor in Burnaby for over 20 years. If your heat pump dies at night or on a weekend, call 604-363-6622.
                    </Typography>
                  </Box>
                  <Box mt={4} className="d-flex justify-content-center">
                    <BlueFilledBtn navlink={true} btnTitle="Learn More About Us" btnlink="/about-us/" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION: What Our Burnaby Customers Say */}
        <Testimonial
          title="What Our Burnaby Customers Say"
          testimonialArr={testimonial}
        />

        {/* SECTION: Heat Pump FAQs and Form */}
        <FaqAndForm
          faq={true}
          faqSimpleTitle="Heat Pump FAQs"
          faqVariant="h2"
          faqtitleAlign="center"
          faqArr={arrayFaq}
          form={true}
          formBlackTitle="Get a Free"
          formBlueTitle="Quote"
          formVariant="h2"
          formtitleAlign="center"
        />
      </main>
    </>
  )
}

export default HeatPumpPage
import {
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/boiler/boiler-service-banner.jpg'
import boilerServiceImg from '../public/boiler/boiler-service.webp'
import {
  BrandSlider,
  FaqAndForm,
  FeaturedHeatingServices,
  FortisBCRebate,
  Testimonial
} from '../sections/sections'
import HighlySkilledStyles from '../styles/HighlySkilled.module.css'

const BoilerServicePage = () => {
  const arrayFaq = [
    {
      id: "faq-1",
      que: "What boiler services do you offer in Burnaby?",
      ans: "Repair, gas boiler repair, new boiler installation, yearly maintenance and emergency calls, for homes and small buildings in Burnaby and across Metro Vancouver.",
      list: null
    },
    {
      id: "faq-2",
      que: "How much does boiler repair cost in Burnaby?",
      ans: "It depends on what has failed. A flame sensor or a pressure valve is a small job, and a pump, a heat exchanger or a control board costs more. We diagnose first and quote before we start, so you decide with a real number.",
      list: null
    },
    {
      id: "faq-3",
      que: "How much does a new boiler installation cost?",
      ans: "It depends on the type of boiler, its size, how much pipework needs changing, and the venting and gas work involved. We visit, then send a written quote with everything in it. Ask about rebates and financing as well.",
      list: null
    },
    {
      id: "faq-4",
      que: "How often should I have my boiler serviced, and what's included?",
      ans: "Once a year, ideally in the fall. We check the burner, heat exchanger, safety controls, pressure, expansion tank, venting, condensate drain and pump, and we look for leaks. A visit usually takes an hour or two. Many manufacturers want service records for warranty claims.",
      list: null
    },
    {
      id: "faq-5",
      que: "Why does my boiler keep losing pressure?",
      ans: "There's usually a small leak somewhere, a tired expansion tank or a faulty relief valve. Topping it up only hides the problem. If you're doing it more than once in a while, have it checked.",
      list: null
    },
    {
      id: "faq-6",
      que: "Why is my boiler making noise?",
      ans: "Banging, rumbling or whistling is often kettling, which comes from scale or sludge in the heat exchanger or poor water flow. It's not dangerous right away, but it wears the boiler out, so book a service.",
      list: null
    },
    {
      id: "faq-7",
      que: "Should I repair or replace my boiler?",
      ans: "If it's under about 12 years old and a single part has failed, repair makes sense. At 15 to 20 years, with repeated breakdowns or a leaking heat exchanger, replacement is usually the better choice. We'll tell you which way we'd go.",
      list: null
    },
    {
      id: "faq-8",
      que: "How long does a new boiler installation take?",
      ans: "Usually a few days, depending on the job. A straight swap can be quicker. Moving the boiler, changing pipework or upgrading venting takes longer. We'll tell you when we quote.",
      list: null
    },
    {
      id: "faq-9",
      que: "Does a boiler installer need a licence in BC?",
      ans: "Yes. Gas work needs a licensed gas fitter and a permit. Always ask any installer for their licence before you hire them. Ours is covered on every job.",
      list: null
    },
    {
      id: "faq-10",
      que: "Do you offer 24 hour boiler repair?",
      ans: "Yes. We take emergency calls at any hour, weekends and holidays included. Call 604-363-6622.",
      list: null
    }
  ]

  const testimonial = [
    {
      id: "testimonial-1",
      text: "The entire Airlinx Heating & Air Conditioning team has been great to work with. They protected our floors and working area throughout the day, provided a clear understanding of the work, and left the job site in the same way as they started (very clean!). We have been happy to be a customer of Airlinx.",
      customerName: "Catherine M., Customer"
    },
    {
      id: "testimonial-2",
      text: "I've always found their technicians are very tentative, they let me know if they see any issues or concerns about the unit. It was perfect! They were on time, very genuine & professional!",
      customerName: "Ben Hartman, Customer"
    },
    {
      id: "testimonial-3",
      text: "I want to thank you for your excellent service. They answered all my questions and was very professional. He gave me peace of mind and complete comfort. I know I am in good hands with your company.",
      customerName: "Sara, Customer"
    }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Boiler Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Airlinx Heating & Air Conditioning",
      image: "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fboiler-service.49ebdc9e.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/boilers-service/",
      url: "https://airlinxheating.ca/boilers-service/",
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

  const emergencyCallReasons = [
    "You have no heat or no hot water",
    "Water is leaking from the boiler or the pipes",
    "The boiler is making loud banging or whistling noises",
    "It keeps shutting off and won't restart",
    "The pressure gauge has dropped to zero"
  ]

  const gasBoilerSystems = [
    "Gas boilers, both high-efficiency condensing models and older conventional ones",
    "Combi boilers that heat your home and your hot water",
    "Hot water radiators and baseboards",
    "In-floor radiant heating systems"
  ]

  const commonGasBoilerCalls = [
    {
      title: "Won't ignite or keeps locking out",
      desc: "Often a dirty flame sensor, a worn igniter or a gas supply problem."
    },
    {
      title: "Pressure keeps dropping",
      desc: "Usually a small leak, a tired expansion tank or a faulty pressure relief valve."
    },
    {
      title: "Kettling or banging",
      desc: "Scale or sludge in the heat exchanger, or poor water flow."
    },
    {
      title: "Radiators cold at the top or half-warm",
      desc: "Trapped air or a circulator pump on its way out."
    },
    {
      title: "Condensate drain blocked",
      desc: "Common on high-efficiency models, and it shuts the boiler down."
    },
    {
      title: "Error codes",
      desc: "Every brand reports faults differently. We read them, find the cause and fix that, not just the code."
    }
  ]

  const installProcessSteps = [
    "We visit your home. We look at the old boiler, the pipes, the radiators or floor loops, the venting and the gas line.",
    "We size the new boiler to the house, so it isn't too big or too small.",
    "We give you a written quote and go over the options, such as a condensing boiler or a combi.",
    "We remove the old boiler and flush the system. Old sludge shortens the life of a new boiler.",
    "We install, vent and connect it. The gas work is done by a licensed gas fitter, with the permit.",
    "We commission and test it, and show you the controls and what to watch for."
  ]

  const whyChoosePoints = [
    "Licensed and insured",
    "Gas work done by licensed gas fitters, with permits handled",
    "10 years of heating work across Metro Vancouver",
    "Repairs, installations and yearly service from one company",
    "24 hour boiler repair, every day of the year",
    "Price match if you bring us a comparable written quote",
    "We guarantee your comfort"
  ]

  const warningSigns = [
    {
      title: "No heat, or uneven heat",
      desc: "Cold radiators, lukewarm floors or a house that never quite warms up. Air in the system, a failing pump or a clogged heat exchanger are the usual causes."
    },
    {
      title: "Water leaks",
      desc: "A drip at a valve or joint can look minor but it often means corrosion or a failing seal. Don't wait for a leak. It tends to get worse and damage floors and walls."
    },
    {
      title: "Odd smells",
      desc: "A musty or burning smell is worth a call. The smell of gas is an emergency. Leave the home and phone 911 and your gas utility first."
    },
    {
      title: "Banging, whistling or kettling",
      desc: "Usually scale or sludge. It makes the boiler work harder and wears it out faster."
    },
    {
      title: "Pressure that keeps dropping",
      desc: "If you're topping it up every few weeks, there's a leak somewhere."
    },
    {
      title: "A yellow or orange flame",
      desc: "A healthy gas flame is blue. A yellow one needs checking soon, because it can mean incomplete combustion."
    },
    {
      title: "Higher heating bills",
      desc: "If the bill is creeping up and you haven't changed anything, the boiler is probably losing efficiency."
    }
  ]

  return (
    <>
      <Head>
        <title>Boiler Services in Burnaby | 24/7 Help | Airlinx Heating</title>
        <meta
          name="description"
          content="Boiler services by Airlinx Heating. Contact for gas boiler repair, new boiler installation and maintenance. Get 24 hour help in Burnaby & nearby areas."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://airlinxheating.ca/boilers-service/" />
      </Head>

      <JsonLd faqArr={arrayFaq} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />

      <main>
        {/* H1 BANNER */}
        <CommonBanner
          bg={Banner}
          overlay={true}
          bgPosition={{ xs: '75% center', md: 'center top' }}
          title={
            <Box
              component="span"
              sx={{
                display: 'block',
                maxWidth: { xs: '100%', md: '700px', lg: '1100px' },
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.7)'
              }}
            >
              Boiler Services for Every Home in Burnaby and nearby areas
            </Box>
          }
          color="#fff"
          variant="h1"
        />

        {/* SECTION 1: Boiler Services in Burnaby: Repair, Installation and Maintenance */}
        <section className="py-md-5 py-4" style={{ backgroundColor: '#ffffff' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <SectionalHeading
                    simpletext="Boiler Services in Burnaby: Repair, Installation and Maintenance"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 2, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Boiler stopped, or the radiators and in-floor heat have gone cold? Airlinx provides boiler services in Burnaby and across Metro Vancouver: repair, new installation, yearly servicing and 24 hour boiler repair for the days it can&apos;t wait. We work on gas boilers in houses, townhomes and small buildings, and we&apos;ve been doing it for 10 years.
                  </Typography>
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Here&apos;s how we handle boiler service in Burnaby. A technician finds out what&apos;s actually wrong, tells you, quotes the job and then fixes it. If the boiler is too far gone, we say that too and talk you through a replacement. One phone number, <strong>604-363-6622</strong>, covers all of it.
                  </Typography>
                  <Box mt={3.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book Boiler Service" />
                    <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 2: Our Boiler Services in Burnaby (3 Cards per row desktop, 4 main services) */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 3, md: 4 }}>
                  <SectionalHeading
                    simpletext="Our Boiler Services in Burnaby"
                    variant="h2"
                  />
                </Box>

                <Grid container spacing={3.5}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ p: 3.5, backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', borderTop: '4px solid var(--blue)', height: '100%', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
                      <Typography component="h3" variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', mb: 1.5 }}>
                        Boiler Repair
                      </Typography>
                      <Typography className="para" sx={{ fontSize: '0.98rem !important', lineHeight: 1.75, m: 0 }}>
                        <Link href="/boilers-repair/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>Boiler repair</Link> is most of what we do from October to March. No heat, no hot water, leaks, noises, pressure that keeps dropping, error codes, pumps and zone valves that have quit. We find the fault, quote it and fix it.
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box sx={{ p: 3.5, backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', borderTop: '4px solid var(--blue)', height: '100%', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
                      <Typography component="h3" variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', mb: 1.5 }}>
                        Emergency Boiler Repair
                      </Typography>
                      <Typography className="para" sx={{ fontSize: '0.98rem !important', lineHeight: 1.75, m: 0 }}>
                        Boilers have a habit of failing on the coldest night of the year. Call <strong>604-363-6622</strong> and a technician will get to you as fast as they can. Details on 24 hour boiler repair are below.
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box sx={{ p: 3.5, backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', borderTop: '4px solid var(--blue)', height: '100%', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
                      <Typography component="h3" variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', mb: 1.5 }}>
                        New Boiler Installation
                      </Typography>
                      <Typography className="para" sx={{ fontSize: '0.98rem !important', lineHeight: 1.75, m: 0 }}>
                        Replacing an old boiler, or putting a new one into a renovation. We size the system to your house, handle the permit and the gas work, and test everything before we go. See our <Link href="/boilers-installation/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>boiler installation</Link> page.
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box sx={{ p: 3.5, backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', borderTop: '4px solid var(--blue)', height: '100%', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
                      <Typography component="h3" variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', mb: 1.5 }}>
                        Boiler Maintenance
                      </Typography>
                      <Typography className="para" sx={{ fontSize: '0.98rem !important', lineHeight: 1.75, m: 0 }}>
                        A yearly service is the cheapest way to avoid a winter breakdown. We clean, test and adjust, and give you a short report on what we found. See our <Link href="/boilers-maintenance/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>boiler maintenance</Link> page.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Box mt={4} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book a Boiler Service" />
                  <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 3: Boiler Service in Burnaby: Yearly Maintenance (Callout Style) */}
        <section className="my-md-5 my-4">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box sx={{ p: { xs: 3, md: 4.5 }, backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', borderLeft: '6px solid var(--blue)', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
                  <SectionalHeading
                    simpletext="Boiler Service in Burnaby: Yearly Maintenance"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 2, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    A boiler that&apos;s serviced once a year is far less likely to quit in January. Fall is the best time, before you need it every day, and before our schedule fills up.
                  </Typography>
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    During a service we check the burner and flame, clean the heat exchanger, test the safety controls, check system pressure and the expansion tank, look over the venting and condensate drain, test the circulator pump and thermostats, and make sure there are no leaks. Many manufacturers also want proof of regular servicing if you ever make a warranty claim, so keep your invoices.
                  </Typography>
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Gas work on a boiler has to be done by a licensed gas fitter. It isn&apos;t a DIY job, and the repairs that go wrong tend to be the ones someone tried first.
                  </Typography>
                  <Box mt={3}>
                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book Your Yearly Boiler Service" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 4: Emergency Boiler Repair and 24 Hour Boiler Repair in Burnaby */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <SectionalHeading
                    simpletext="Emergency Boiler Repair and 24 Hour Boiler Repair in Burnaby"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 2, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Heat doesn&apos;t wait for business hours, so we don&apos;t either. Our 24 hour boiler repair line is open every day of the year, nights, weekends and holidays included. Call if:
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, my: 2.5 }}>
                    {emergencyCallReasons.map((reason, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1.5
                        }}
                      >
                        <CheckCircleOutlineIcon sx={{ color: 'var(--blue)', fontSize: '1.35rem', mt: '3px', flexShrink: 0 }} />
                        <Typography sx={{ fontSize: '0.98rem', color: '#444', lineHeight: 1.6, m: 0 }}>
                          {reason}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      mt: 3,
                      p: 2,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(19, 148, 205, 0.08)',
                      borderLeft: '4px solid var(--blue)'
                    }}
                  >
                    <Typography sx={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.96rem', m: 0 }}>
                      If you smell gas, or your carbon monoxide alarm goes off, get everyone outside and call 911 and your gas utility&apos;s emergency line first. Then call us.
                    </Typography>
                  </Box>

                  <Box mt={3.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book Online" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 5: Gas Boiler Repair and the Systems We Work On */}
        <section className="my-md-5 my-4">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <SectionalHeading
                    simpletext="Gas Boiler Repair and the Systems We Work On"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 2, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Most boilers in the homes we visit run on natural gas and heat water that moves through radiators, baseboard heaters or in-floor loops. We repair and service:
                  </Typography>

                  <Box component="ul" sx={{ pl: 0, my: 2.5, listStyleType: 'none' }}>
                    {gasBoilerSystems.map((sys, idx) => (
                      <Box
                        component="li"
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1.5,
                          mb: 1.5
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: 'var(--blue)',
                            mt: '9px',
                            flexShrink: 0
                          }}
                        />
                        <Typography sx={{ fontSize: '1rem', color: '#444', lineHeight: 1.7, m: 0 }}>
                          {sys}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Typography sx={{ mt: 3.5, mb: 2, fontWeight: 700, color: 'var(--navy)', fontSize: '1.15rem' }}>
                    Common gas boiler repair calls
                  </Typography>

                  <Grid container spacing={2.5}>
                    {commonGasBoilerCalls.map((item, idx) => (
                      <Grid item xs={12} sm={6} key={idx}>
                        <Box
                          sx={{
                            p: 2.5,
                            backgroundColor: '#f8fafc',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0',
                            height: '100%'
                          }}
                        >
                          <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', mb: 1 }}>
                            {item.title}
                          </Typography>
                          <Typography sx={{ fontSize: '0.94rem', color: '#555', lineHeight: 1.6, m: 0 }}>
                            {item.desc}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Box mt={3.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book Gas Boiler Repair" />
                    <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 6: New Boiler Installation: What to Expect from a Boiler Installer (Image + Checklist) */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Grid container spacing={{ xs: 4, lg: 5 }} alignItems="center">
                  <Grid item xs={12} lg={5}>
                    <Box
                      sx={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                        maxWidth: { xs: '100%', md: '500px', lg: '100%' },
                        mx: { xs: 'auto', lg: 0 },
                        backgroundColor: '#ffffff',
                        p: 2
                      }}
                    >
                      <Image
                        src={boilerServiceImg}
                        alt="New Boiler Installation in Burnaby"
                        title="New Boiler Installation in Burnaby"
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                          display: 'block'
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={7}>
                    <Box>
                      <SectionalHeading
                        simpletext="New Boiler Installation: What to Expect from a Boiler Installer"
                        variant="h2"
                      />
                      <Typography className="para" sx={{ mt: 2, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                        <strong>Is it time to replace?</strong> Think about replacing your boiler if it&apos;s 15 to 20 years old, keeps breaking down, has a leaking heat exchanger, or its parts are hard to find. If a repair estimate is getting close to the price of a new boiler, it&apos;s worth pricing both.
                      </Typography>

                      <Typography sx={{ mt: 2.5, mb: 1.5, fontWeight: 700, color: 'var(--navy)', fontSize: '1.05rem' }}>
                        How a new boiler installation goes with us:
                      </Typography>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, my: 2 }}>
                        {installProcessSteps.map((step, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 1.5
                            }}
                          >
                            <CheckCircleOutlineIcon sx={{ color: 'var(--blue)', fontSize: '1.35rem', mt: '3px', flexShrink: 0 }} />
                            <Typography sx={{ fontSize: '0.96rem', color: '#444', lineHeight: 1.6, m: 0 }}>
                              {step}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      <Typography className="para" sx={{ mt: 2.5, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                        A boiler installer should leave you with a system that works and a clear idea of how to look after it. We&apos;ll answer the questions you have before we start.
                      </Typography>

                      <Box mt={3}>
                        <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Get a Free New Boiler Quote" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 7: Why Choose Airlinx for Boiler Services? */}
        <section className="my-md-5 my-4">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box
                  sx={{
                    p: { xs: 3.5, md: 5 },
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                  }}
                >
                  <SectionalHeading
                    simpletext="Why Choose Airlinx for Boiler Services?"
                    variant="h2"
                  />
                  <Grid container spacing={2} sx={{ mt: 2.5 }}>
                    {whyChoosePoints.map((point, idx) => (
                      <Grid item xs={12} sm={6} key={idx}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            p: 2,
                            backgroundColor: '#f8fafc',
                            borderRadius: '12px',
                            border: '1px solid #edf2f7',
                            height: '100%',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              borderColor: 'var(--blue)',
                              backgroundColor: '#ffffff',
                              boxShadow: '0 4px 16px rgba(19, 148, 205, 0.08)'
                            }
                          }}
                        >
                          <CheckCircleOutlineIcon sx={{ color: 'var(--blue)', fontSize: '1.35rem', flexShrink: 0 }} />
                          <Typography sx={{ fontSize: '0.96rem', color: 'var(--navy)', lineHeight: 1.5, m: 0, fontWeight: 600 }}>
                            {point}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 8: Signs Your Boiler Needs Servicing */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <SectionalHeading
                    simpletext="Signs Your Boiler Needs Servicing"
                    variant="h2"
                  />

                  <Grid container spacing={2.5} sx={{ mt: 2 }}>
                    {warningSigns.map((sign, idx) => (
                      <Grid item xs={12} sm={6} key={idx}>
                        <Box
                          sx={{
                            p: 2.5,
                            backgroundColor: '#ffffff',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0',
                            height: '100%',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                          }}
                        >
                          <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', mb: 1 }}>
                            {sign.title}
                          </Typography>
                          <Typography sx={{ fontSize: '0.94rem', color: '#555', lineHeight: 1.6, m: 0 }}>
                            {sign.desc}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Typography className="para" sx={{ mt: 3, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                    Spotted one of these? <strong>Book a Boiler Service</strong> or call <strong>604-363-6622</strong>.
                  </Typography>

                  <Box mt={2.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book a Boiler Service" />
                    <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION: FortisBC Furnace Maintenance Rebate (Keep as it is) */}
        <FortisBCRebate />

        {/* SECTION: Other Heating Services We Offer */}
        <FeaturedHeatingServices
          title="Other Heating Services We Offer"
          subTitle="Furnace, Boiler, Heat Pump and Fireplace: Installation, Maintenance and Repair"
          bannerText="Need Boiler Repair or a New Boiler? Talk to a Specialist Today."
          btnTitle="Book Boiler Service"
          btnLink="/contact-us/"
          balancedLogos={true}
        />

        {/* SECTION: Boiler Technicians Who Fix the Cause */}
        <section className={`${HighlySkilledStyles.HighlySkilled} mt-3`}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} sm={10} md={9} lg={8} className="mx-auto">
                <Box py={5}>
                  <SectionalHeading
                    simpletext="Boiler Technicians Who Fix the Cause"
                    variant="h2"
                    align="center"
                  />
                  <Box mt={3}>
                    <Typography align="center" className="para">
                      When a boiler stops, the quick answer isn&apos;t always the right one. Resetting it might bring the heat back for a day, and then it locks out again. Our technicians check the pressure, the flame, the pump, the controls and the venting to find the real reason, and they explain what they found before you decide anything.
                    </Typography>
                    <Typography align="center" className="para">
                      A boiler running on gas carries real risk when something&apos;s wrong: gas leaks, blocked flues and carbon monoxide. That&apos;s why the gas side of every job is handled by a licensed gas fitter. We&apos;d also ask you to keep a working carbon monoxide alarm near your bedrooms and check its battery in the fall.
                    </Typography>
                    <Typography align="center" className="para">
                      We&apos;ve worked on heating systems around Metro Vancouver for 10 years, and our{" "}
                      <Link href="/emergency/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
                        emergency line
                      </Link>{" "}
                      is staffed all year. If your boiler is giving you trouble, call <strong>604-363-6622</strong>.
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

        {/* SECTION: What Our Customers Say (Testimonials) */}
        <Testimonial
          title="What Our Customers Say"
          testimonialArr={testimonial}
        />

        {/* Google Reviews CTA (Separately Below Testimonials Section) */}
        <Box sx={{ py: { xs: 3, md: 4 }, display: 'flex', justifyContent: 'center', backgroundColor: '#ffffff' }}>
          <BlueFilledBtn
            anchor={true}
            btnlink="https://g.page/r/CdlSgou1yAB-EB0/review"
            btnTitle="Read our Google reviews"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Box>

        {/* SECTION: Boiler Services FAQs and Free Quote Form */}
        <FaqAndForm
          faq={true}
          faqSimpleTitle="Boiler Services FAQs"
          faqVariant="h2"
          faqtitleAlign="center"
          faqArr={arrayFaq}
          form={true}
          formBlackTitle="Get a Free"
          formBlueTitle="Quote"
          formVariant="h2"
          formtitleAlign="center"
        />

        <BrandSlider />
      </main>
    </>
  )
}

export default BoilerServicePage

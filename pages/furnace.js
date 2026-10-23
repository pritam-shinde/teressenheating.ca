import {
  Autorenew,
  Build,
  CheckCircle,
  CleaningServices,
  Description,
  FlashOn,
  Handyman,
  Lock,
  PhoneInTalk,
  StarRate,
  Tune,
  Visibility
} from '@mui/icons-material'
import {
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material'
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/furnace/furnace-bg.webp'
import Furnace from '../public/furnace/furnace.webp'
import { FaqAndForm, FeaturedHeatingServices, FortisBCRebate, Locations, Testimonial } from '../sections/sections'
import HighlySkilledStyles from '../styles/HighlySkilled.module.css'
import PopularServiceStyles from '../styles/PopularService.module.css'

const FurnacePage = () => {
  const arrayFaq = [
    {
      id: "faq-1",
      que: "How much does furnace repair cost in Burnaby?",
      ans: "It depends on what failed. A new flame sensor or capacitor is a small repair. A blower motor or control board costs more. We diagnose first and quote in writing, so you decide with real numbers in front of you.",
      list: null
    },
    {
      id: "faq-2",
      que: "Why is my furnace blowing cold air?",
      ans: "First, check that your thermostat is set to Auto, not On, and that your filter isn't clogged. A blocked filter can make the furnace overheat and shut the burners off. If both are fine, the cause is often a dirty flame sensor, an igniter problem, or a tripped limit switch. At that point, call us, because some of these need a technician.",
      list: null
    },
    {
      id: "faq-3",
      que: "When should I book a furnace service?",
      ans: "Once a year, and the fall is the best time, before you start running the furnace daily. A checkup catches worn parts before they fail in January, and it's how a cracked heat exchanger gets found before it becomes a safety problem.",
      list: null
    },
    {
      id: "faq-4",
      que: "How long does a furnace last?",
      ans: "A gas furnace that gets a yearly checkup commonly runs somewhere between 15 and 20 years. Past that, it can keep going, but efficiency drops and the repairs start to stack up.",
      list: null
    },
    {
      id: "faq-5",
      que: "Is my old furnace worth repairing?",
      ans: "Look at two things: its age and the quote. A furnace under ten years old with one bad part is almost always worth fixing. One that's pushing 18 or 20, or has a cracked heat exchanger, usually isn't, because the next failure is probably close behind. And when a repair estimate gets near what a new furnace would cost, ask us to price both before you decide.",
      list: null
    },
    {
      id: "faq-6",
      que: "How long does furnace installation take?",
      ans: "Most furnace installations take about a day. Jobs that need ductwork or venting changes can take longer. We'll tell you what to expect when we quote.",
      list: null
    },
    {
      id: "faq-7",
      que: "Are there rebates on furnace repair or installation?",
      ans: "Programs from FortisBC and the province change often, so we don't promise amounts on this page. Check our rebates and promotions page and ask us when you book. We'll point out anything your home may qualify for.",
      list: null
    },
    {
      id: "faq-8",
      que: "Is a furnace better than a heat pump?",
      ans: "It depends on your house. A heat pump is very efficient and also cools in summer. A gas furnace gives strong heat on the coldest days. Plenty of homes use both. If you're weighing the two, we'll go over it honestly. See our heat pump page for more.",
      list: null
    },
    {
      id: "faq-9",
      que: "What should I do if I smell gas or my carbon monoxide alarm goes off?",
      ans: "Get everyone, pets included, outside right away. Call 911 and your gas utility's emergency line. Don't turn lights or switches on or off. Don't go back in until it's all-clear. Once it's safe, call us, and we'll inspect the furnace.",
      list: null
    },
    {
      id: "faq-10",
      que: "Do you offer emergency furnace repair?",
      ans: "Yes. We take emergency calls at any hour, weekends and holidays included. Call 604-363-6622, and we'll book the earliest visit we have.",
      list: null
    }
  ]

  const testimonial = [
    {
      id: "testimonial-1",
      text: "Our furnace stopped blowing warm air at 8:30 PM on one of the coldest nights in December. Airlinx had a technician at our Burnaby home within an hour. He quickly diagnosed a dirty flame sensor and weak igniter, had replacement parts in his truck, and got our heat back running before bedtime. Extremely polite and honest pricing.",
      customerName: "Robert M., Burnaby Heights"
    },
    {
      id: "testimonial-2",
      text: "Airlinx replaced our 20-year-old gas furnace with a new high-efficiency modulating unit. The crew arrived right on time, laid down protective drop cloths through our hallways, and finished the installation in one day. They even walked us through the FortisBC rebate application. Our home is warmer and our gas bills dropped noticeably.",
      customerName: "Jennifer & Mark T., Brentwood"
    },
    {
      id: "testimonial-3",
      text: "We have used Airlinx for annual furnace maintenance for three years. Wilson is always punctual, thoroughly checks the heat exchanger for cracks, tests for carbon monoxide, and gives us peace of mind every winter. Honest, licensed contractors are hard to find—Airlinx is the real deal.",
      customerName: "Gurpreet S., Metrotown"
    }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Furnace Repair, Installation & Maintenance",
    provider: {
      "@type": "LocalBusiness",
      name: "Airlinx Heating & Air Conditioning",
      image: "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffurnace.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/furnace/",
      url: "https://airlinxheating.ca/furnace/",
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
      title: "Furnace Repair Service",
      desc: "No heat, weak heat, a furnace that clicks but never lights, a blower that won't shut off, a burning smell, a bang when it starts up. Most of these trace back to a short list of parts: the igniter, flame sensor, blower motor, capacitor, pressure switch, thermostat, or a clogged filter. Our furnace repair service covers all of them on most brands. You'll hear what failed and what it costs before anyone starts the work.",
      Icon: Handyman,
      isEmergency: false,
      gridSm: 12,
      gridMd: 6
    },
    {
      title: "Emergency Furnace Repair",
      desc: (
        <>
          Furnaces seem to fail on the coldest night of the year. Call{" "}
          <a href="tel:604-363-6622" style={{ color: "var(--blue)", fontWeight: 700, textDecoration: "underline" }}>
            604-363-6622
          </a>{" "}
          at any hour, and we&apos;ll book the earliest visit we have, weekend or not.
        </>
      ),
      Icon: FlashOn,
      isEmergency: true,
      gridSm: 12,
      gridMd: 6
    },
    {
      title: "Furnace Installation",
      desc: "A new furnace should be picked for your house, not just for its price tag. We look at the size of your home, the ductwork, the venting, and how many people live there, then talk through single-stage, two-stage, and modulating models. Most new gas furnaces today are high-efficiency models, and we'll go over what that means for your gas bill. We also install and service all the major brands.",
      Icon: Build,
      isEmergency: false,
      gridSm: 12,
      gridMd: 4
    },
    {
      title: "Furnace Replacement",
      desc: (
        <>
          A furnace that&apos;s been looked after can run for a couple of decades, but not forever. If yours is getting old, needs a fix every winter, or has a cracked heat exchanger, replacement is often the sensible move. We&apos;ll tell you straight whether we&apos;d repair it or replace it if it were our own house. Financing is available (see our{" "}
          <Link href="/financing-option/" style={{ color: "var(--blue)", textDecoration: "underline", fontWeight: 600 }}>
            financing options
          </Link>
          ), and our{" "}
          <Link href="/rebates-and-promotions/" style={{ color: "var(--blue)", textDecoration: "underline", fontWeight: 600 }}>
            rebates page
          </Link>{" "}
          lists current offers.
        </>
      ),
      Icon: Autorenew,
      isEmergency: false,
      gridSm: 12,
      gridMd: 4
    },
    {
      title: "Furnace Maintenance and Service",
      desc: (
        <>
          A yearly furnace service, ideally in the fall before the cold starts, catches the things that cause most winter breakdowns. We check the burners and flame sensor, clean what needs cleaning, inspect the heat exchanger, and test for carbon monoxide leaks. It&apos;s a short visit and often costs far less than one emergency call. Thinking about adding a heat pump alongside your furnace? See our{" "}
          <Link href="/heat-pump/" style={{ color: "var(--blue)", textDecoration: "underline", fontWeight: 600 }}>
            heat pump services
          </Link>
          .
        </>
      ),
      Icon: Tune,
      isEmergency: false,
      gridSm: 12,
      gridMd: 4
    }
  ]

  const whyChooseItems = [
    "Licensed and insured",
    "Background-checked technicians",
    "20+ years working on furnaces across Metro Vancouver",
    "We work on the big furnace brands, such as Lennox, Carrier, Trane, and Goodman",
    "Emergency furnace repair, 24/7, all year",
    "Price match if you bring us a comparable written quote",
    "We guarantee your comfort"
  ]

  const expectationItems = [
    {
      icon: PhoneInTalk,
      text: "A real person answers, and you get the earliest appointment we have"
    },
    {
      icon: Description,
      text: "A free estimate in writing"
    },
    {
      icon: Lock,
      text: "No hidden charges: the price you approve is the price you pay"
    },
    {
      icon: Visibility,
      text: "A technician who explains what failed and shows you the part"
    },
    {
      icon: CleaningServices,
      text: "Floors protected and the work area left clean"
    },
    {
      icon: StarRate,
      text: "Google reviews you can read before you decide"
    }
  ]

  return (
    <>
      <Head>
        <title>Furnace Repair Burnaby | Installation & Service | Airlinx</title>
        <meta
          name="description"
          content="Furnace repair in Burnaby, 24/7. Airlinx provides furnace installation, replacement, and maintenance by licensed technicians. Get free quotes; call us now."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://airlinxheating.ca/furnace/" />
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
        <CommonBanner bg={Banner} title="Furnace Repair Burnaby" color="#fff" variant="h1" />

        {/* SECTION 1: Furnace Repair, Installation and Replacement from Local Technicians */}
        <section className="py-md-5 py-4" style={{ backgroundColor: '#ffffff' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <SectionalHeading
                    simpletext="Furnace Repair, Installation and Replacement from Local Technicians"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 2, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Furnace quit on you? Airlinx handles furnace repair in Burnaby every day of the year, and yes, that includes the middle of a January night. We&apos;re a licensed, insured heating contractor, and for more than 20 years we&apos;ve been fixing, installing, and replacing furnaces across Metro Vancouver.
                  </Typography>
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Every technician who comes to your door has passed a background check and works on gas furnaces for a living. You get the price before we start. If your furnace can be saved, we&apos;ll fix it. If it can&apos;t, we&apos;ll show you why and talk through a furnace replacement, with no pressure to decide on the spot.
                  </Typography>
                  <Box mt={3.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Get a Free Quote" />
                    <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* FORTISBC REBATE BLOCK */}
        <FortisBCRebate
          title="FortisBC Furnace Maintenance Rebate"
          description="If you heat your home with gas through FortisBC, you may be able to get a rebate for having your furnace serviced. The rules and amounts change from time to time, so check current eligibility on FortisBC's site below. When you book a furnace service visit with us, ask what paperwork to keep."
          btnTitle="FortisBC Appliance Maintenance Program"
          btnlink="https://www.fortisbc.com/rebates/detail/appliance-maintenance-program/"
        />

        {/* SECTION 2: Our Furnace Services in Burnaby */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box textAlign="center" mb={{ xs: 3.5, md: 5 }}>
                  <SectionalHeading simpletext="Our Furnace Services in Burnaby" variant="h2" align="center" />
                </Box>

                <Grid container spacing={3} alignItems="stretch">
                  {servicesList.map((service, index) => (
                    <Grid item xs={12} sm={service.gridSm} md={service.gridMd} key={index}>
                      <Box
                        sx={{
                          height: '100%',
                          p: { xs: 3, md: 3.8 },
                          backgroundColor: '#ffffff',
                          borderRadius: '18px',
                          border: '1px solid #e2e8f0',
                          borderTop: '4px solid var(--blue)',
                          boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
                          display: 'flex',
                          flexDirection: 'column',
                          position: 'relative',
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 12px 30px rgba(19, 148, 205, 0.15)',
                            borderColor: 'var(--blue)'
                          }
                        }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(19, 148, 205, 0.08)',
                            color: 'var(--blue)',
                            mb: 2.2
                          }}
                        >
                          <service.Icon sx={{ fontSize: 28 }} />
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
                          className="para"
                          sx={{
                            color: '#555',
                            fontSize: '0.94rem !important',
                            lineHeight: 1.75,
                            m: 0
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
                  <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book a Furnace Service" />
                  <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 3: Why Choose Airlinx */}
        <section className="my-md-5 my-4">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  {/* Heading visible on screens smaller than lg */}
                  <Box sx={{ display: { xs: 'block', lg: 'none' }, mb: 3 }}>
                    <SectionalHeading
                      simpletext="Why Choose Airlinx as Your Furnace Repair Technician in Burnaby?"
                      variant="h2"
                    />
                  </Box>

                  <Grid container spacing={{ xs: 4, lg: 5 }} alignItems="center">
                    <Grid item xs={12} lg={5}>
                      <Box
                        sx={{
                          borderRadius: '16px',
                          overflow: 'hidden',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                          maxWidth: { xs: '100%', md: '550px', lg: '100%' },
                          mx: { xs: 'auto', lg: 0 }
                        }}
                      >
                        <Image
                          src={Furnace}
                          alt="Furnace Repair Burnaby"
                          title="Furnace Repair Burnaby"
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
                        {/* Heading visible on large screens */}
                        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                          <SectionalHeading
                            simpletext="Why Choose Airlinx as Your Furnace Repair Technician in Burnaby?"
                            variant="h2"
                          />
                        </Box>
                        <Grid container spacing={2} sx={{ mt: { xs: 0, lg: 2.5 } }}>
                          {whyChooseItems.map((text, idx) => (
                            <Grid item xs={12} sm={6} key={idx}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: 1.5,
                                  p: 2,
                                  backgroundColor: '#f8fafc',
                                  borderRadius: '12px',
                                  border: '1px solid #e2e8f0',
                                  height: '100%',
                                  transition: 'all 0.2s ease',
                                  '&:hover': {
                                    borderColor: 'var(--blue)',
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 4px 16px rgba(19, 148, 205, 0.08)'
                                  }
                                }}
                              >
                                <CheckCircle sx={{ color: 'var(--blue)', fontSize: 22, mt: 0.2, flexShrink: 0 }} />
                                <Typography sx={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.45 }}>
                                  {text}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 4: What You Can Expect When You Call (INTERACTIVE CONNECTED STEP TIMELINE) */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} lg={11} xl={10} className="mx-auto">
                <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
                  <SectionalHeading simpletext="What You Can Expect When You Call" variant="h2" align="center" />
                </Box>

                {/* Desktop Connected Journey (Row) */}
                <Box sx={{ position: 'relative' }}>
                  {/* Subtle Connecting Line across all steps on desktop */}
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      position: 'absolute',
                      top: '28px',
                      left: '8%',
                      right: '8%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #e2e8f0 0%, var(--blue) 50%, #e2e8f0 100%)',
                      zIndex: 0
                    }}
                  />

                  <Grid container spacing={{ xs: 2, md: 1.5, lg: 2 }} alignItems="stretch">
                    {expectationItems.map((item, idx) => (
                      <Grid item xs={12} sm={4} md={2} key={idx}>
                        <Box
                          sx={{
                            height: '100%',
                            position: 'relative',
                            zIndex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                          }}
                        >
                          {/* Numbered Step Node / Badge */}
                          <Box
                            sx={{
                              width: 56,
                              height: 56,
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
                              border: '2px solid var(--blue)',
                              boxShadow: '0 4px 14px rgba(19, 148, 205, 0.25)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--blue)',
                              mb: 2,
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              cursor: 'pointer',
                              '&:hover': {
                                transform: 'scale(1.15)',
                                background: 'linear-gradient(135deg, var(--blue) 0%, #0d6efd 100%)',
                                color: '#ffffff',
                                boxShadow: '0 8px 24px rgba(19, 148, 205, 0.45)'
                              }
                            }}
                          >
                            <item.icon sx={{ fontSize: 26 }} />
                          </Box>

                          {/* Step Pill */}
                          <Box
                            sx={{
                              px: 1.5,
                              py: 0.3,
                              borderRadius: '20px',
                              backgroundColor: 'rgba(19, 148, 205, 0.08)',
                              color: 'var(--blue)',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              letterSpacing: 0.8,
                              textTransform: 'uppercase',
                              mb: 1.5
                            }}
                          >
                            Step 0{idx + 1}
                          </Box>

                          {/* Content Card */}
                          <Box
                            sx={{
                              width: '100%',
                              flexGrow: 1,
                              p: { xs: 2.5, md: 1.8, lg: 2.2 },
                              borderRadius: '16px',
                              background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
                              border: '1px solid #e2e8f0',
                              borderTop: '3px solid var(--blue)',
                              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-4px)',
                                borderColor: 'var(--blue)',
                                boxShadow: '0 10px 25px rgba(19, 148, 205, 0.12)',
                                background: '#ffffff'
                              }
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight: 600,
                                fontSize: { xs: '0.92rem', md: '0.82rem', lg: '0.86rem' },
                                color: 'var(--navy)',
                                lineHeight: 1.45,
                                m: 0
                              }}
                            >
                              {item.text}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 5: EMERGENCY BANNER */}
        <section className={`${PopularServiceStyles.PopularService} mt-4`}>
          <Container maxWidth="xxl" style={{ height: "inherit" }}>
            <Grid container style={{ height: "inherit" }}>
              <Grid item xs={12} md={10} className="mx-auto" style={{ height: "inherit" }}>
                <Box style={{ height: "inherit" }}>
                  <Grid container style={{ height: "inherit" }}>
                    <Grid item xs={12} sm={11} md={9} className="me-start d-flex align-items-center" style={{ height: "inherit" }}>
                      <Box py={5}>
                        <Typography component="h2" variant="h2" className={PopularServiceStyles.head}>
                          No heat? <span className="text--blue">Call for Emergency Furnace Repair, 24/7</span>
                        </Typography>
                        <Typography className="para mt-2" style={{ fontSize: '1.25rem', color: '#333' }}>
                          Cold house, strange noise or smell, furnace won&apos;t start. We&apos;re a phone call away, nights and weekends included.
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

        {/* SECTION 6: Furnace Repair and Installation Across Metro Vancouver */}
        <Locations
          title="Furnace Repair and Installation Across Metro Vancouver"
          description="We're based in Burnaby, so furnace repair in Burnaby is our home turf, from Metrotown and Edmonds to Brentwood, Burnaby Heights, and Lougheed. We also travel to:"
        />

        {/* SECTION 7: Other Heating Services We Offer */}
        <FeaturedHeatingServices
          title="Other Heating Services We Offer"
          subTitle="Furnace, Boiler, Heat Pump & Fireplace Installation, Maintenance and Repair"
          bannerText="Need Furnace Repair or a New Furnace? Get a Free Estimate."
          btnTitle="Book Furnace Service"
          btnLink="/contact-us/"
          balancedLogos={true}
        />

        {/* SECTION 8: Furnace Repair Technicians You Can Trust in Your Home */}
        <section className={`${HighlySkilledStyles.HighlySkilled} mt-3`}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} sm={10} md={9} lg={8} className="mx-auto">
                <Box py={5}>
                  <SectionalHeading simpletext="Furnace Repair Technicians You Can Trust in Your Home" variant="h2" align="center" />
                  <Box mt={3}>
                    <Typography align="center" className="para">
                      When your furnace stops working, you want someone who finds the real problem, not someone who swaps parts until the heat comes back. Our furnace repair technicians test the system step by step, explain what they find in plain language, and quote the repair before starting. If a repair isn't worth it, we'll say so.
                    </Typography>
                    <Typography align="center" className="para">
                      The most serious thing we look for during a furnace tune-up is a cracked heat exchanger, because it can let carbon monoxide into your home and often gives no warning. We also check the burners, flame sensor, blower, filter, venting, and safety switches. If you can, put a working carbon monoxide alarm near the bedrooms too. Regular furnace maintenance also keeps a lot of manufacturer warranties valid, so keep your service receipts.
                    </Typography>
                    <Typography align="center" className="para">
                      After more than two decades in this trade, our emergency line is still answered around the clock. If your furnace is acting up, call 604-363-6622.
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

        {/* SECTION 9: What Our Burnaby Customers Say */}
        <Testimonial
          title="What Our Burnaby Customers Say"
          testimonialArr={testimonial}
        />

        {/* SECTION 10: Furnace FAQs and Free Quote Form */}
        <FaqAndForm
          faq={true}
          faqSimpleTitle="Furnace FAQs"
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

export default FurnacePage
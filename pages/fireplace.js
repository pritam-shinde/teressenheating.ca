import {
  Build,
  CheckCircle,
  CleaningServices,
  Description,
  Handyman,
  Lock,
  PhoneInTalk,
  StarRate
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
import Banner from '../public/fireplace/fireplace-heat.webp'
import Fireplace from '../public/fireplace/fireplace.webp'
import fpGallery1 from '../public/fireplace/gas-fireplace-insert-stone.jpg'
import fpGallery2 from '../public/fireplace/gas-fireplace-insert-installation.jpg'
import fpGallery3 from '../public/fireplace/outdoor-gas-fire-pit.jpg'
import fpGallery4 from '../public/fireplace/gas-log-set-open-hearth.jpg'
import fpGallery5 from '../public/fireplace/modern-gas-fireplace-wall.jpg'
import fpGallery6 from '../public/fireplace/gas-log-fire-embers.jpg'
import {
  FaqAndForm,
  FeaturedHeatingServices,
  Locations,
  Testimonial
} from '../sections/sections'
import HighlySkilledStyles from '../styles/HighlySkilled.module.css'

const FireplacePage = () => {
  const arrayFaq = [
    {
      id: "faq-1",
      que: "How much does gas fireplace service cost in Burnaby?",
      ans: "A routine service visit costs far less than a repair, and a repair costs far less than a new unit. The final price depends on what your fireplace needs, so we look first and quote in writing. Installations are priced after a visit, since the gas line and venting vary a lot from house to house.",
      list: null
    },
    {
      id: "faq-2",
      que: "How often should a gas fireplace be serviced?",
      ans: "Once a year. The fall is best, before you start using it every evening. A yearly visit catches worn parts and blocked venting before they cause a problem.",
      list: null
    },
    {
      id: "faq-3",
      que: "Why won't my gas fireplace stay lit?",
      ans: "The usual causes are a dirty pilot, a worn thermocouple or thermopile, a draft, or a gas supply problem. A reset might work for a day. Don't take the unit apart yourself, because it's gas. Call us, and we'll find the cause.",
      list: null
    },
    {
      id: "faq-4",
      que: "Why is the glass on my gas fireplace cloudy?",
      ans: "A film builds up on the glass from the burning gas, and sometimes from the media or the logs. It needs cleaning with the right cleaner while the unit is cold. We clean it as part of a service visit and check why it's building up.",
      list: null
    },
    {
      id: "faq-5",
      que: "What's the difference between a gas insert, gas logs and a freestanding gas fireplace?",
      ans: "A gas insert fits into an old wood fireplace and heats the room. Gas logs sit in an existing fireplace and mostly give flame. A freestanding gas fireplace stands in the room with its own vent and doesn't need a chimney. We can look at your space and tell you which suits it.",
      list: null
    },
    {
      id: "faq-6",
      que: "Can I put a gas insert in my old wood-burning fireplace?",
      ans: "Often, yes. The chimney has to be in good shape, and an insert usually needs a venting liner and a gas line. We inspect it first. If the chimney isn't suitable, we'll tell you before you spend anything.",
      list: null
    },
    {
      id: "faq-7",
      que: "How long does gas fireplace insert installation take?",
      ans: "Often about a day. It can take longer if we need to run a new gas line or fit a liner. We'll give you a realistic timeline in the quote.",
      list: null
    },
    {
      id: "faq-8",
      que: "Do I need a permit to install a gas fireplace?",
      ans: "Yes. Gas installations in BC need a permit and a licensed gas fitter. We take care of both. Always ask any installer for their licence.",
      list: null
    },
    {
      id: "faq-9",
      que: "Do you install gas outside fireplaces and fire pits?",
      ans: "Yes. We install and service outdoor gas fireplaces and gas fire pits. They need a gas line, natural gas or propane, and the right clearances. We also check the rules in your city.",
      list: null
    },
    {
      id: "faq-10",
      que: "Do you service wood-burning or electric fireplaces?",
      ans: "We focus on gas fireplaces: freestanding units, inserts, log sets, and outdoor fireplaces. If you have a wood fireplace you're tired of, that's where a gas insert or log set comes in.",
      list: null
    },
    {
      id: "faq-11",
      que: "Do you offer emergency gas fireplace service?",
      ans: "Yes, every day of the year. If you smell gas, leave the home and call 911 and your gas utility's emergency line first, then call us at 604-363-6622.",
      list: null
    }
  ]

  const testimonial = [
    {
      id: "testimonial-1",
      text: "The entire Airlinx Heating & Air Conditioning team has been great to work with. They protected our floors and working area throughout the day, provided a clear understanding of the work, and left the job site in the same way as they started (very clean!). We have been happy to be a customer of Airlinx.",
      customerName: "Catherine M."
    },
    {
      id: "testimonial-2",
      text: "Airlinx is the most honest and helpful company I've ever had do work for me. They showed up early and immediately got to work, finding several problems that our previous service provider had missed. Fair pricing and wonderful customer service!",
      customerName: "Ben Hartman"
    },
    {
      id: "testimonial-3",
      text: "We’ve had great experiences with Airlinx. They are prompt, reasonably priced, professional, and explain everything clearly. It's a huge relief to have a heating company we can trust.",
      customerName: "Sara"
    }
  ]

  const fireplaceServices = [
    {
      title: "Gas Fireplace Service and Maintenance",
      description: "Yearly cleaning, safety checks, and gas leak testing. Best booked in the fall, before the first cold snap."
    },
    {
      title: "Gas Fireplace Repair",
      description: "The pilot won’t stay lit, glass cloudy, remote not working, fan noisy, flames weak. We find the cause and fix it."
    },
    {
      title: "Gas Fireplace Installation",
      description: "Freestanding units, gas inserts, log sets, and outdoor fireplaces, installed by licensed gas fitters with the permit."
    },
    {
      title: "Emergency Gas Fireplace Service",
      description: "Smell gas? Leave the home first, then call us. Our emergency line is staffed every day of the year."
    }
  ]

  const fireplaceTypes = [
    {
      title: "Freestanding Gas Fireplace",
      description: "A freestanding gas fireplace sits in a room like a stove, with its own vent, and doesn't need an existing chimney. It's popular in basement suites, additions, and rooms that never had a fireplace. We install them, service them, and repair them."
    },
    {
      title: "Gas Fireplace Insert (Gas Insert Fireplaces)",
      description: "A gas insert slides into the opening of an old wood-burning fireplace, so you keep the look of the original and lose the soot, ash, and drafts. If you're searching for gas inserts for fireplace upgrades, this is the most common route. We repair, service, and install them."
    },
    {
      title: "Gas Log Fireplace Insert and Log Sets",
      description: "Gas logs sit inside an existing fireplace and burn with a realistic flame, with no wood to haul. Some are installed in the fireplace as it is, and others use a full gas log fireplace insert with a sealed front. We'll recommend what suits your fireplace."
    },
    {
      title: "Gas Outside Fireplaces and Fire Pits",
      description: "We install and service outdoor gas fireplaces and gas fire pits for patios and decks. Outdoor units need a gas line, either natural gas or propane, plus the right clearance from the house, fences, and overhangs. Cities set their own rules for outdoor fire features, and we check what applies in your area."
    }
  ]

  const insertInstallSteps = [
    "We visit and measure the opening, the chimney, and the gas supply.",
    "We recommend an insert that fits the opening and heats the room well.",
    "We quote it in writing, with the gas line and venting work included.",
    "We install the liner, the insert, and the gas connection, and take out the old logs or grate.",
    "We pull the gas permit and test the unit.",
    "We show you the controls, the remote, and how to look after the glass."
  ]

  const whyChooseItems = [
    "Licensed and insured",
    "Gas fireplace work by licensed, background-checked technicians",
    "More than 10 years in the heating trade across Metro Vancouver",
    "Freestanding units, inserts, log sets, and outdoor fireplaces",
    "Emergency service every day of the year",
    "Price match if you bring us a comparable written quote",
    "We guarantee your comfort"
  ]

  const expectationItems = [
    {
      icon: PhoneInTalk,
      text: "A real person answers the phone"
    },
    {
      icon: Description,
      text: "A free estimate"
    },
    {
      icon: Lock,
      text: "No hidden charges"
    },
    {
      icon: Handyman,
      text: "A technician who explains what's wrong and what it costs"
    },
    {
      icon: CleaningServices,
      text: "Floors protected and the work area left tidy"
    },
    {
      icon: StarRate,
      text: "Google reviews and photos you can look at before you decide"
    }
  ]

  const galleryImages = [
    { src: fpGallery1, alt: "Gas fireplace insert in Burnaby home" },
    { src: fpGallery2, alt: "Gas fireplace insert installation in Greater Vancouver" },
    { src: fpGallery3, alt: "Outdoor gas fire pit installation" },
    { src: fpGallery4, alt: "Gas log set installation in Burnaby" },
    { src: fpGallery5, alt: "Modern wall-mounted gas fireplace" },
    { src: fpGallery6, alt: "Gas fireplace flame and glowing ember bed" }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Gas Fireplace Service, Repair & Installation",
    provider: {
      "@type": "LocalBusiness",
      name: "Airlinx Heating & Air Conditioning",
      image: "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffireplace.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/fireplace/",
      url: "https://airlinxheating.ca/fireplace/",
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

  return (
    <>
      <Head>
        <title>Gas Fireplace Service Burnaby &amp; Nearby | Airlinx</title>
        <meta
          name="description"
          content="Gas fireplace service, repair, and installation in Burnaby and Vancouver by Airlinx Heating. Freestanding units, gas inserts, log sets and outdoor fireplaces."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://airlinxheating.ca/fireplace/" />
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
                maxWidth: { xs: '100%', md: '750px', lg: '1100px' },
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.7)'
              }}
            >
              Gas Fireplace Service in Burnaby & Vancouver
            </Box>
          }
          color="#fff"
          variant="h1"
        />

        {/* SECTION 1: Professional Gas Fireplace Repair, Installation & Maintenance Across Greater Vancouver */}
        <section className="py-md-5 py-4" style={{ backgroundColor: '#ffffff' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <SectionalHeading
                    simpletext="Professional Gas Fireplace Repair, Installation & Maintenance Across Greater Vancouver"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 2, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Won&apos;t the pilot stay lit? Glass gone cloudy? Thinking about a new gas fireplace for your home? Airlinx provides professional gas fireplace service, maintenance, repair and installation in Burnaby, Vancouver, the Lower Mainland and North Shore.
                  </Typography>
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    From freestanding units and gas inserts to log sets and outdoor fireplaces, our licensed technicians serve homeowners throughout the region. Based in <Link href="/burnaby/">Burnaby</Link>, we&apos;ve worked on heating equipment across Metro Vancouver for more than 10 years.
                  </Typography>
                  <Box mt={3.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book Fireplace Service" />
                    <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 2: Our Gas Fireplace Services in Burnaby & Vancouver */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 3, md: 4 }}>
                  <SectionalHeading
                    simpletext="Our Gas Fireplace Services in Burnaby & Vancouver"
                    variant="h2"
                  />
                </Box>

                <Grid container spacing={3.5}>
                  {fireplaceServices.map((card, idx) => (
                    <Grid item xs={12} sm={6} lg={3} key={idx}>
                      <Box
                        sx={{
                          p: 3.5,
                          backgroundColor: '#ffffff',
                          borderRadius: '14px',
                          border: '1px solid #e2e8f0',
                          borderTop: '4px solid var(--blue)',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 10px 24px rgba(19, 148, 205, 0.12)',
                            borderColor: 'var(--blue)'
                          }
                        }}
                      >
                        <Typography
                          component="h3"
                          variant="h3"
                          sx={{
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            color: 'var(--navy)',
                            mb: 1.5,
                            lineHeight: 1.35
                          }}
                        >
                          {card.title}
                        </Typography>
                        <Typography
                          className="para"
                          sx={{
                            fontSize: '0.96rem !important',
                            lineHeight: 1.7,
                            m: 0,
                            flexGrow: 1
                          }}
                        >
                          {card.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Box mt={4} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book a Gas Fireplace Service" />
                  <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 3: Gas Fireplaces We Service and Install */}
        <section className="my-md-5 my-4">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 3, md: 4 }}>
                  <SectionalHeading
                    simpletext="Gas Fireplaces We Service and Install"
                    variant="h2"
                  />
                </Box>

                <Grid container spacing={3.5}>
                  {fireplaceTypes.map((type, idx) => (
                    <Grid item xs={12} md={6} key={idx}>
                      <Box
                        sx={{
                          p: { xs: 3, md: 4 },
                          backgroundColor: '#ffffff',
                          borderRadius: '16px',
                          border: '1px solid #e2e8f0',
                          borderLeft: '5px solid var(--blue)',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: '0 8px 24px rgba(19, 148, 205, 0.1)',
                            borderColor: 'var(--blue)'
                          }
                        }}
                      >
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
                          {type.title}
                        </Typography>
                        <Typography
                          className="para"
                          sx={{
                            fontSize: '0.98rem !important',
                            lineHeight: 1.75,
                            m: 0,
                            flexGrow: 1
                          }}
                        >
                          {type.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Box mt={4} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Get a Free Fireplace Quote" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 4: Gas Fireplace Insert Installation and Replacement */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 3, md: 4 }}>
                  <SectionalHeading
                    simpletext="Gas Fireplace Insert Installation and Replacement"
                    variant="h2"
                  />
                </Box>

                {/* Sub-block 1: New gas fireplace insert installation */}
                <Box
                  sx={{
                    p: { xs: 3, md: 4.5 },
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    mb: 4
                  }}
                >
                  <Typography
                    component="h3"
                    variant="h3"
                    sx={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      mb: 2
                    }}
                  >
                    New gas fireplace insert installation
                  </Typography>
                  <Typography className="para" sx={{ fontSize: '1.02rem !important', lineHeight: 1.8, mb: 3 }}>
                    Putting a gas insert into a wood-burning fireplace takes more than sliding it in. The chimney needs a look, the insert usually needs its own venting liner, and a gas line has to reach it. For gas fireplace insert installation, here&apos;s what we do:
                  </Typography>

                  <Grid container spacing={2}>
                    {insertInstallSteps.map((step, idx) => (
                      <Grid item xs={12} md={6} key={idx}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 1.5,
                            p: 2,
                            backgroundColor: '#f8fafc',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0',
                            height: '100%'
                          }}
                        >
                          <Box
                            sx={{
                              width: 28,
                              height: 28,
                              borderRadius: '50%',
                              backgroundColor: 'var(--blue)',
                              color: '#fff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.85rem',
                              fontWeight: 700,
                              flexShrink: 0,
                              mt: 0.2
                            }}
                          >
                            {idx + 1}
                          </Box>
                          <Typography
                            sx={{
                              fontSize: '0.95rem',
                              color: 'var(--navy)',
                              lineHeight: 1.5,
                              fontWeight: 500
                            }}
                          >
                            {step}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Sub-block 2: Gas fireplace insert replacement */}
                <Box
                  sx={{
                    p: { xs: 3, md: 4.5 },
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    borderLeft: '5px solid var(--blue)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                  }}
                >
                  <Typography
                    component="h3"
                    variant="h3"
                    sx={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      mb: 2
                    }}
                  >
                    Gas fireplace insert replacement
                  </Typography>
                  <Typography className="para" sx={{ fontSize: '1.02rem !important', lineHeight: 1.8, mb: 1.5 }}>
                    If your existing gas insert is 15 to 20 years old, stops working, or has parts nobody makes anymore, replacing it is often better than another repair. Gas fireplace insert replacement is usually quicker than a first-time install, because the gas line and venting are often already there. We check that they&apos;re still in good shape, size the new one to the opening, and fit it.
                  </Typography>
                  <Typography className="para" sx={{ fontSize: '1.02rem !important', lineHeight: 1.8, fontWeight: 600, color: 'var(--navy)' }}>
                    Not sure whether to repair or replace? Call us. We&apos;ll tell you plainly which one makes sense.
                  </Typography>
                </Box>

                <Box mt={4} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Request an Insert Quote" />
                  <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 5: Why Choose Airlinx for Gas Fireplace Service? */}
        <section className="my-md-5 my-4">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  {/* Mobile Heading */}
                  <Box sx={{ display: { xs: 'block', lg: 'none' }, mb: 3 }}>
                    <SectionalHeading
                      simpletext="Why Choose Airlinx for Gas Fireplace Service?"
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
                          src={Fireplace}
                          alt="Airlinx technician servicing a gas fireplace in a Burnaby home"
                          title="Airlinx technician servicing a gas fireplace in a Burnaby home"
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
                        {/* Desktop Heading */}
                        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                          <SectionalHeading
                            simpletext="Why Choose Airlinx for Gas Fireplace Service?"
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

        {/* SECTION 6: Areas We Serve */}
        <Locations
          title="Gas Fireplace Service Across Burnaby, Vancouver, Lower Mainland & North Shore"
          description={
            <>
              We&apos;re based in Burnaby, so a gas fireplace in Burnaby is right in our backyard. We also serve gas fireplace owners in <Link href="/vancouver/" style={{ color: "var(--blue)", textDecoration: "underline" }}>Vancouver</Link> and across the Lower Mainland, including:
            </>
          }
        />

        {/* SECTION 7: What You Can Expect When You Call */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} lg={11} xl={10} className="mx-auto">
                <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
                  <SectionalHeading simpletext="What You Can Expect When You Call" variant="h2" align="center" />
                </Box>

                <Box sx={{ position: 'relative' }}>
                  {/* Subtle Connecting Line on desktop */}
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

        {/* SECTION 8: Featured Heating Services */}
        <FeaturedHeatingServices
          title="Other Heating Services We Offer"
          subTitle="Furnace, Boiler, Heat Pump and Fireplace: Installation, Maintenance and Repair"
          bannerText="Gas Fireplace Not Working, or Planning a New One? Get a Free Estimate."
          btnTitle="Book Fireplace Service"
          btnLink="/contact-us/"
          balancedLogos={true}
        />

        {/* SECTION 9: Gas Fireplace Technicians You Can Trust in Your Home */}
        <section className={`${HighlySkilledStyles.HighlySkilled} mt-3`}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} sm={10} md={9} lg={8} className="mx-auto">
                <Box py={5}>
                  <SectionalHeading
                    simpletext="Gas Fireplace Technicians You Can Trust in Your Home"
                    variant="h2"
                    align="center"
                  />
                  <Box mt={3}>
                    <Typography align="center" className="para">
                      A gas fireplace looks simple. Behind the glass, there&apos;s a gas valve, a pilot or igniter, a sensor, a fan, and a vent, and they all have to work together. Our technicians test each part and tell you what&apos;s wrong in plain words. Plenty of calls turn out to be a dirty pilot or flat batteries in the remote, and those are quick fixes.
                    </Typography>
                    <Typography align="center" className="para" sx={{ mt: 1.5 }}>
                      Gas work has to be done by someone licensed, so installs and gas connections are handled by licensed gas fitters, with the permit. Please also keep a carbon monoxide alarm on every level of the home, near the bedrooms especially, and test it in the fall.
                    </Typography>
                    <Typography align="center" className="para" sx={{ mt: 1.5 }}>
                      We&apos;ve been fixing and installing gas appliances in Metro Vancouver for over twenty years, and our{" "}
                      <Link href="/emergency/" style={{ color: "var(--blue)", textDecoration: "underline" }}>
                        emergency
                      </Link>{" "}
                      line answers at any hour. If your gas fireplace needs attention, call 604-363-6622.
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

        {/* SECTION: Recent Fireplace Installations in Burnaby & Vancouver (Images Only Gallery) */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box textAlign="center" mb={{ xs: 3, md: 5 }}>
                  <SectionalHeading
                    simpletext="Recent Fireplace Installations in Burnaby & Vancouver"
                    variant="h2"
                    align="center"
                  />
                </Box>

                <Grid container spacing={3}>
                  {galleryImages.map((img, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                      <Box
                        sx={{
                          position: 'relative',
                          width: '100%',
                          pt: '75%', // 4:3 clean aspect ratio
                          borderRadius: '16px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
                          border: '1px solid #e2e8f0',
                          backgroundColor: '#ffffff',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 12px 28px rgba(19, 148, 205, 0.15)',
                            borderColor: 'var(--blue)'
                          }
                        }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          title={img.alt}
                          fill
                          sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                          style={{
                            objectFit: 'cover'
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Box mt={{ xs: 4, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <BlueFilledBtn
                    navlink={true}
                    btnlink="/contact-us/"
                    btnTitle="Get a Free Quote on Your Fireplace"
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 10: What Our Customers Say */}
        <Testimonial
          title="What Our Customers Say"
          testimonialArr={testimonial}
        />

        {/* Google Reviews CTA (Dedicated Clean Section Matching Other Pages) */}
        <Box sx={{ py: { xs: 3, md: 4 }, display: 'flex', justifyContent: 'center', backgroundColor: '#ffffff' }}>
          <BlueFilledBtn
            anchor={true}
            btnlink="https://g.page/r/CdlSgou1yAB-EB0/review"
            btnTitle="Read our Google reviews"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Box>

        {/* SECTION 11: Gas Fireplace FAQs and Free Quote Form */}
        <FaqAndForm
          faq={true}
          faqSimpleTitle="Gas Fireplace FAQs"
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

export default FireplacePage

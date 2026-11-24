import {
  CheckCircleOutline,
  PhoneInTalk
} from '@mui/icons-material'
import {
  Box,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import Banner from '../public/boiler/boiler-service-banner.jpg'
import BoilerRepairImg from '../public/boiler/worker-repairing-water-heater.webp'
import {
  BrandSlider,
  FaqAndForm,
  FeaturedHeatingServices,
  Testimonial
} from '../sections/sections'
import HighlySkilledStyles from '../styles/HighlySkilled.module.css'

const BoilerRepairPage = () => {
  const arrayFaq = [
    {
      id: "faq-1",
      que: "How much does boiler repair cost in Vancouver and Burnaby?",
      ans: "It depends on what has failed. A flame sensor or a pressure valve is a small job. A pump, a heat exchanger, or a control board costs more. We can't price a boiler over the phone, so a technician diagnoses it and gives you the cost in writing before the repair starts.",
      list: null
    },
    {
      id: "faq-2",
      que: "Do you offer emergency boiler repair?",
      ans: "Yes, at any hour, including nights, weekends, and holidays. Call 604-363-6622. If you smell gas, leave the home and call 911 and your gas utility first.",
      list: null
    },
    {
      id: "faq-3",
      que: "Do you repair boilers on the North Shore and across the Lower Mainland?",
      ans: "Yes. We repair boilers in Vancouver, Burnaby, North Vancouver, West Vancouver, New Westminster, Coquitlam, Port Moody, Richmond, Tsawwassen, White Rock, Maple Ridge and Pitt Meadows, and the areas around them. Our office is in Burnaby.",
      list: null
    },
    {
      id: "faq-4",
      que: "What does a boiler repair service include?",
      ans: "A diagnosis, the repair itself, a test run with a pressure, flame, and safety check, and a plain-language summary of what we found. You approve the price before the work begins.",
      list: null
    },
    {
      id: "faq-5",
      que: "Why has my boiler stopped heating?",
      ans: "Common causes are a tripped safety control, a failed igniter or flame sensor, a dead pump, low pressure, or a power or gas supply problem. Check the thermostat, the breaker, and the pressure gauge, note any error code, then call us. Please don't open the boiler.",
      list: null
    },
    {
      id: "faq-6",
      que: "What should I do if my boiler is leaking?",
      ans: "Switch the boiler off at its switch, put something under the drip, and shut the water supply to the boiler if you know where the valve is. Keep clear of any pooled water near electrics. Then call us. A small leak at a joint is a straightforward repair. A leaking heat exchanger usually means replacement.",
      list: null
    },
    {
      id: "faq-7",
      que: "How long does a boiler repair take?",
      ans: "Many repairs are finished in one visit of a few hours. If a part has to be ordered, it takes longer, and we'll tell you how long.",
      list: null
    },
    {
      id: "faq-8",
      que: "Do you repair all makes and models of boilers?",
      ans: "We repair most major brands, including Viessmann and Navien. Call with your model number, and we'll tell you.",
      list: null
    },
    {
      id: "faq-9",
      que: "What's the difference between boiler service and repair?",
      ans: "Service is preventive: a yearly check to find problems early. Repair fixes something that has already failed. A repair visit often includes some service checks, and a service visit may turn up a repair. See our boiler maintenance page.",
      list: null
    },
    {
      id: "faq-10",
      que: "Do I need a licensed technician to repair a boiler?",
      ans: "For anything touching the gas side, yes. In BC, gas work must be done by a licensed gas fitter. We recommend checking a technician's licence number before you agree to any boiler repair.",
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
      text: "Prompt, honest, and high-quality service from Airlinx Heating & Air Conditioning. The technician arrived on time, diagnosed the issue quickly, and had our system running smoothly in no time. Highly recommend them for any heating or cooling needs!",
      customerName: "Ben Hartman, Customer"
    },
    {
      id: "testimonial-3",
      text: "Great experience with Airlinx Heating & Air Conditioning. The technician was polite, efficient, and took the time to explain everything clearly. Transparent pricing and exceptional customer care. Will definitely use them again!",
      customerName: "Sara, Customer"
    }
  ]

  const boilerProblems = [
    {
      notice: "No heat, no hot water",
      usually: "Ignition fault, tripped safety control, failed pump, power or gas supply problem",
      action: "Run through the start-up sequence, find where it stops, and fix that part"
    },
    {
      notice: "Radiators cold or only warm",
      usually: "Air in the system, a weak circulator pump, a stuck zone valve",
      action: "Purge the air and test the pump and valves"
    },
    {
      notice: "Pressure keeps dropping",
      usually: "A slow leak, a worn expansion tank, or a faulty relief valve",
      action: "Pressure-test the system, find the leak, and replace the part"
    },
    {
      notice: "Banging, rumbling or whistling",
      usually: "Scale or sludge in the heat exchanger, poor water flow",
      action: "Clean or flush the exchanger and check flow"
    },
    {
      notice: "Water around the boiler",
      usually: "A failed seal or valve, or a cracked heat exchanger",
      action: "Trace the source. This is boiler leak repair, and a cracked exchanger usually means replacement"
    },
    {
      notice: "Lockout or an error code",
      usually: "Dirty flame sensor, blocked condensate drain, venting problem, low gas pressure",
      action: "Read the code, find the cause, and clear it for good"
    },
    {
      notice: "Yellow or lazy flame, soot",
      usually: "Dirty burner or poor combustion",
      action: "Combustion test and clean"
    },
    {
      notice: "Cycles on and off",
      usually: "Thermostat or sensor fault, low water flow",
      action: "Diagnose and adjust"
    }
  ]

  const safeChecks = [
    {
      title: "Thermostat",
      desc: "Is it set to heat, a few degrees above room temperature, with fresh batteries?"
    },
    {
      title: "Power",
      desc: "Is the boiler's switch on, and is its breaker still on?"
    },
    {
      title: "Pressure gauge",
      desc: "Note the reading. If it sits at zero or in the red zone, tell us."
    },
    {
      title: "Display",
      desc: "Write down any error code or flashing light."
    },
    {
      title: "Outside vent",
      desc: "Make sure nothing is blocking it, such as leaves or snow."
    }
  ]

  const repairSteps = [
    {
      step: "01",
      title: "You call or send the form",
      desc: "Tell us what's happening, and the make and age of the boiler if you know them."
    },
    {
      step: "02",
      title: "We ask a few questions",
      desc: "Often we can narrow the cause before we arrive, so the technician comes prepared."
    },
    {
      step: "03",
      title: "A technician diagnoses it on site",
      desc: "Testing, not guessing."
    },
    {
      step: "04",
      title: "You get the price in writing",
      desc: "You approve it before any repair work starts."
    },
    {
      step: "05",
      title: "We fix it and test it",
      desc: "We run the boiler through a full cycle and check pressure, flame, and safety controls."
    },
    {
      step: "06",
      title: "Plain-language summary",
      desc: "You get a plain-language summary of what failed and whether anything else needs attention."
    }
  ]

  const emergencyAreas = [
    {
      area: "Vancouver",
      hoods: "Marpole, Fairview, Hastings-Sunrise, Commercial Drive, South Granville, the West End",
      link: (
        <Link href="/vancouver/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
          Vancouver
        </Link>
      )
    },
    {
      area: "Burnaby and New Westminster",
      hoods: "Metrotown, Brentwood, Edmonds, Burnaby Heights, Lougheed, Queen's Park",
      link: (
        <>
          <Link href="/burnaby/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
            Burnaby
          </Link>
          {", "}
          <Link href="/new-westminster/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
            New Westminster
          </Link>
        </>
      )
    },
    {
      area: "North Shore",
      hoods: "Lonsdale, Lynn Valley, Edgemont, Ambleside, Dundarave, Horseshoe Bay",
      link: (
        <>
          <Link href="/north-vancouver/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
            North Vancouver
          </Link>
          {", "}
          <Link href="/west-vancouver/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
            West Vancouver
          </Link>
        </>
      )
    },
    {
      area: "Tri-Cities",
      hoods: "Coquitlam, Port Moody",
      link: (
        <>
          <Link href="/coquitlam/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
            Coquitlam
          </Link>
          {", "}
          <Link href="/port-moody/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
            Port Moody
          </Link>
        </>
      )
    },
    {
      area: "Richmond and Delta",
      hoods: "Richmond, Tsawwassen",
      link: (
        <>
          <Link href="/richmond/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
            Richmond
          </Link>
          {", "}
          <Link href="/tsawwassen/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
            Tsawwassen
          </Link>
        </>
      )
    },
    {
      area: "South of the Fraser",
      hoods: "White Rock and nearby",
      link: (
        <Link href="/white-rock/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
          White Rock
        </Link>
      )
    },
    {
      area: "Ridge Meadows",
      hoods: "Maple Ridge, Pitt Meadows",
      link: (
        <>
          <Link href="/maple-ridge/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
            Maple Ridge
          </Link>
          {", "}
          <Link href="/pitt-meadows/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
            Pitt Meadows
          </Link>
        </>
      )
    }
  ]

  const repairVsReplace = [
    {
      repair: "It's under about 10 to 12 years old",
      replace: "It's 15 years or older"
    },
    {
      repair: "One part has failed, and the rest is sound",
      replace: "It's had two or three repairs in the last couple of years"
    },
    {
      repair: "The fix costs well under half of a new boiler",
      replace: "The repair quote nears half the cost of a new one"
    },
    {
      repair: "The heat exchanger is intact",
      replace: "The heat exchanger is cracked or leaking"
    },
    {
      repair: "Parts are easy to get",
      replace: "Parts are hard to find or discontinued"
    }
  ]

  const whyChooseUs = [
    "Licensed and insured",
    "Licensed gas fitters on every gas repair",
    "Emergency boiler repair every day of the year",
    "A written price before any work starts, with no hidden charges",
    "Technicians who explain the fault and show you the part",
    "20+ years working on heating systems across Metro Vancouver",
    "We guarantee your comfort"
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Boiler Repair & Emergency Boiler Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Airlinx Heating & Air Conditioning",
      image: "https://airlinxheating.ca/boiler/boiler-service-banner.jpg",
      telephone: "604-363-6622",
      priceRange: "$$",
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
        latitude: 49.2803767,
        longitude: -123.0098237
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
        <title>Boiler Repair Vancouver & Burnaby | 24/7 Emergency Service</title>
        <meta
          name="description"
          content="Boiler repair in Vancouver, Burnaby and the North Shore by Airlinx Heating. Emergency boiler repair, licensed gas fitters. Contact us now on 604-363-6622."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://airlinxheating.ca/boiler-repair/" />
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
          bgPosition={{ xs: '75% center', md: 'right top' }}
          desktopBgPosition="right top"
          mobileOverlay="linear-gradient(rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52))"
          desktopOverlay="linear-gradient(to right, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0.56) 45%, rgba(0, 0, 0, 0.15) 85%)"
          title={
            <Box
              component="span"
              sx={{
                display: 'block',
                maxWidth: { xs: '100%', md: '800px', lg: '1100px' },
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.85)'
              }}
            >
              Boiler Repair in Vancouver, Burnaby &amp; the North Shore
            </Box>
          }
          color="#fff"
          variant="h1"
        />

        {/* SECTION 1: Boiler Repair Service for Homes Across Metro Vancouver */}
        <section className="py-md-5 py-4" style={{ backgroundColor: '#ffffff' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">
                  <Grid item xs={12} lg={6}>
                    <Box>
                      <SectionalHeading
                        simpletext="Boiler Repair Service for Homes Across Metro Vancouver"
                        variant="h2"
                      />
                      <Typography className="para" sx={{ mt: 2.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                        Boiler gone cold in the middle of winter? We provide boiler repair across Vancouver, Burnaby, the North Shore, and the rest of the Lower Mainland, and we answer emergency calls day and night. Our office is in Burnaby, in the middle of Metro Vancouver, which keeps most of the region within reach.
                      </Typography>
                      <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                        If you need to repair a boiler, here&apos;s how it goes. A technician comes out, finds the actual fault, tells you what it is and what the fix costs, and you decide. We don&apos;t swap parts until the heat comes back. If the boiler is past saving, we&apos;ll say so, and the same team handles boiler repair and installation in Burnaby and Vancouver when it&apos;s time for a new one.
                      </Typography>
                      <Box mt={3.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                        <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book Boiler Repair" />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <Box sx={{ position: 'relative', width: '100%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
                      <Image
                        src={BoilerRepairImg}
                        alt="Airlinx technician doing a boiler repair in a Vancouver-area home"
                        priority
                        style={{
                          width: "100%",
                          height: "auto",
                          display: 'block',
                          borderRadius: '10px'
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 2: HOW A BOILER WORKS: How Your Boiler Works, and Where It Usually Fails */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box
                  sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                  }}
                >
                  <SectionalHeading
                    simpletext="How Your Boiler Works, and Where It Usually Fails"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 2.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Most homes here use a hot water boiler. It burns gas to heat water, a pump pushes that water through pipes to your radiators, baseboards, or in-floor loops, and a thermostat tells it when to stop and start.
                  </Typography>
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    That&apos;s a lot of moving parts, and a few of them cause most of the breakdowns: the igniter and flame sensor, the circulator pump, the pressure and expansion system, and the heat exchanger. Knowing that helps. When we tell you which part has failed and why, it should make sense to you.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 3: NEW SECTION: Boiler Problems We Repair */}
        <section className="my-md-5 my-4">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 2.5, md: 3 }}>
                  <SectionalHeading
                    simpletext="Boiler Problems We Repair"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Our boiler repair services in Burnaby and nearby cover hot water boiler repair, central heating boiler repair, and in-floor heating systems. Here&apos;s what we see most, and what&apos;s usually behind it:
                  </Typography>
                </Box>

                {/* Problems Table - Fully Responsive & Scrollable on Mobile */}
                <TableContainer
                  component={Paper}
                  elevation={0}
                  sx={{
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                    overflowX: 'auto',
                    maxWidth: '100%',
                    WebkitOverflowScrolling: 'touch',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    '&::-webkit-scrollbar': {
                      height: '8px'
                    },
                    '&::-webkit-scrollbar-track': {
                      backgroundColor: '#f1f5f9',
                      borderRadius: '4px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#94a3b8',
                      borderRadius: '4px'
                    }
                  }}
                >
                  <Table
                    sx={{
                      width: '100%',
                      minWidth: { xs: '640px', md: '100%' },
                      tableLayout: 'auto'
                    }}
                    aria-label="boiler problems we repair"
                  >
                    <TableHead sx={{ backgroundColor: 'var(--navy)' }}>
                      <TableRow>
                        <TableCell
                          sx={{
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: { xs: '0.92rem', sm: '1.05rem' },
                            py: { xs: 1.5, sm: 2 },
                            px: { xs: 1.5, sm: 2.5 },
                            width: { xs: '30%', sm: '25%', md: '24%' }
                          }}
                        >
                          What you notice
                        </TableCell>
                        <TableCell
                          sx={{
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: { xs: '0.92rem', sm: '1.05rem' },
                            py: { xs: 1.5, sm: 2 },
                            px: { xs: 1.5, sm: 2.5 },
                            width: { xs: '35%', sm: '38%', md: '38%' }
                          }}
                        >
                          What it usually is
                        </TableCell>
                        <TableCell
                          sx={{
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: { xs: '0.92rem', sm: '1.05rem' },
                            py: { xs: 1.5, sm: 2 },
                            px: { xs: 1.5, sm: 2.5 },
                            width: { xs: '35%', sm: '37%', md: '38%' }
                          }}
                        >
                          What we do
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {boilerProblems.map((row, idx) => (
                        <TableRow
                          key={idx}
                          sx={{
                            backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                            '&:last-child td, &:last-child th': { border: 0 },
                            '&:hover': { backgroundColor: 'rgba(19, 148, 205, 0.04)' }
                          }}
                        >
                          <TableCell
                            sx={{
                              color: 'var(--navy)',
                              fontWeight: 600,
                              fontSize: { xs: '0.86rem', sm: '0.98rem' },
                              py: { xs: 1.5, sm: 2 },
                              px: { xs: 1.5, sm: 2.5 },
                              lineHeight: 1.55,
                              wordBreak: 'break-word',
                              whiteSpace: 'normal'
                            }}
                          >
                            {row.notice}
                          </TableCell>
                          <TableCell
                            sx={{
                              color: '#333',
                              fontSize: { xs: '0.86rem', sm: '0.98rem' },
                              py: { xs: 1.5, sm: 2 },
                              px: { xs: 1.5, sm: 2.5 },
                              lineHeight: 1.55,
                              wordBreak: 'break-word',
                              whiteSpace: 'normal'
                            }}
                          >
                            {row.usually}
                          </TableCell>
                          <TableCell
                            sx={{
                              color: '#555',
                              fontSize: { xs: '0.86rem', sm: '0.98rem' },
                              py: { xs: 1.5, sm: 2 },
                              px: { xs: 1.5, sm: 2.5 },
                              lineHeight: 1.55,
                              wordBreak: 'break-word',
                              whiteSpace: 'normal'
                            }}
                          >
                            {row.action}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Typography className="para" sx={{ mt: 3, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                  That&apos;s the basic boiler troubleshooting we do on every visit. If your boiler&apos;s doing something that isn&apos;t on the list, call us and describe it.
                </Typography>

                {/* Before You Call: Five Safe Checks */}
                <Box
                  mt={4}
                  p={{ xs: 3, md: 4 }}
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.25rem', md: '1.45rem' },
                      fontWeight: 700,
                      color: 'var(--navy)',
                      mb: 2.5
                    }}
                  >
                    Before you call: five safe checks
                  </Typography>

                  <Grid container spacing={2}>
                    {safeChecks.map((item, idx) => (
                      <Grid item xs={12} sm={6} md={12} key={idx}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                          <CheckCircleOutline sx={{ color: 'var(--blue)', fontSize: '1.35rem', mt: '3px', flexShrink: 0 }} />
                          <Typography className="para" sx={{ fontSize: '0.98rem !important', lineHeight: 1.65, m: 0 }}>
                            <strong>{item.title}.</strong> {item.desc}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Typography className="para" sx={{ mt: 3, fontStyle: 'italic', color: '#64748b', fontSize: '0.96rem !important' }}>
                    Please don&apos;t open the boiler cover, try to relight a pilot you&apos;re unsure about, or keep topping up the pressure over and over.
                  </Typography>

                  {/* Safety Alert Callout */}
                  <Box
                    mt={3}
                    p={{ xs: 2.5, sm: 3 }}
                    sx={{
                      backgroundColor: '#fff1f2',
                      borderRadius: '12px',
                      borderLeft: '5px solid #e11d48'
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#9f1239',
                        fontWeight: 600,
                        fontSize: { xs: '0.95rem', md: '1.02rem' },
                        lineHeight: 1.65,
                        m: 0
                      }}
                    >
                      If you smell gas, or a carbon monoxide alarm goes off, get everyone outside and call 911 and your gas utility&apos;s emergency line first. Then call us.
                    </Typography>
                  </Box>
                </Box>

                <Box mt={3.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book a Boiler Repair" />
                  <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 4: HOW THE REPAIR SERVICE WORKS: How Our Boiler Repair Service Works */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 3, md: 4 }}>
                  <SectionalHeading
                    simpletext="How Our Boiler Repair Service Works"
                    variant="h2"
                  />
                </Box>

                <Grid container spacing={{ xs: 2.5, sm: 3, md: 3.5 }}>
                  {repairSteps.map((step, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                      <Box
                        sx={{
                          height: '100%',
                          p: { xs: 2.5, md: 3 },
                          backgroundColor: '#ffffff',
                          borderRadius: '14px',
                          border: '1px solid #e2e8f0',
                          transition: 'all 0.25s ease-in-out',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 10px 24px rgba(19, 148, 205, 0.1)',
                            borderColor: 'var(--blue)'
                          }
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: '2.2rem', sm: '2.5rem', md: '2.75rem' },
                            fontWeight: 800,
                            color: 'var(--blue)',
                            mb: 1.5,
                            lineHeight: 1,
                            letterSpacing: '-0.02em'
                          }}
                        >
                          {step.step}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            fontSize: { xs: '1.05rem', md: '1.15rem' },
                            fontWeight: 700,
                            color: 'var(--navy)',
                            mb: 1.25,
                            lineHeight: 1.35
                          }}
                        >
                          {step.title}
                        </Typography>
                        <Typography
                          className="para"
                          sx={{
                            fontSize: '0.94rem !important',
                            lineHeight: 1.65,
                            color: '#555',
                            m: 0
                          }}
                        >
                          {step.desc}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 5: NEW SECTION: Emergency Boiler Repair Across Vancouver, the Lower Mainland and the North Shore */}
        <section className="my-md-5 my-4">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 2.5, md: 3 }}>
                  <SectionalHeading
                    simpletext="Emergency Boiler Repair Across Vancouver, the Lower Mainland and the North Shore"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 2, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Boilers don&apos;t fail at convenient times. Our <Link href="/emergency/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>emergency boiler repair</Link> line is open every day of the year, nights, weekends, and holidays included. Call right away if you have no heat in cold weather, a leak, a boiler that keeps locking out, or any gas or burning smell.
                  </Typography>
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                    If you&apos;ve been searching for a boiler repairman near you, here&apos;s where our technicians work:
                  </Typography>
                </Box>

                {/* Coverage Table - Fully Responsive & Scrollable on Mobile */}
                <TableContainer
                  component={Paper}
                  elevation={0}
                  sx={{
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                    overflowX: 'auto',
                    maxWidth: '100%',
                    WebkitOverflowScrolling: 'touch',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    '&::-webkit-scrollbar': {
                      height: '8px'
                    },
                    '&::-webkit-scrollbar-track': {
                      backgroundColor: '#f1f5f9',
                      borderRadius: '4px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#94a3b8',
                      borderRadius: '4px'
                    }
                  }}
                >
                  <Table
                    sx={{
                      width: '100%',
                      minWidth: { xs: '580px', md: '100%' },
                      tableLayout: 'auto'
                    }}
                    aria-label="emergency boiler repair areas"
                  >
                    <TableHead sx={{ backgroundColor: 'var(--navy)' }}>
                      <TableRow>
                        <TableCell
                          sx={{
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: { xs: '0.92rem', sm: '1.05rem' },
                            py: { xs: 1.5, sm: 2 },
                            px: { xs: 1.5, sm: 2.5 },
                            width: { xs: '150px', sm: '28%', md: '26%' },
                            minWidth: { xs: '130px', sm: 'auto' },
                            whiteSpace: 'nowrap'
                          }}
                        >
                          Area
                        </TableCell>
                        <TableCell
                          sx={{
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: { xs: '0.92rem', sm: '1.05rem' },
                            py: { xs: 1.5, sm: 2 },
                            px: { xs: 1.5, sm: 2.5 },
                            width: { xs: '290px', sm: '50%', md: '52%' },
                            minWidth: { xs: '260px', sm: 'auto' }
                          }}
                        >
                          Neighbourhoods and cities
                        </TableCell>
                        <TableCell
                          sx={{
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: { xs: '0.92rem', sm: '1.05rem' },
                            py: { xs: 1.5, sm: 2 },
                            px: { xs: 1.5, sm: 2.5 },
                            width: { xs: '140px', sm: '22%', md: '22%' },
                            minWidth: { xs: '130px', sm: 'auto' },
                            whiteSpace: 'nowrap'
                          }}
                        >
                          Page
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {emergencyAreas.map((row, idx) => (
                        <TableRow
                          key={idx}
                          sx={{
                            backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                            '&:last-child td, &:last-child th': { border: 0 },
                            '&:hover': { backgroundColor: 'rgba(19, 148, 205, 0.04)' }
                          }}
                        >
                          <TableCell
                            sx={{
                              color: 'var(--navy)',
                              fontWeight: 600,
                              fontSize: { xs: '0.86rem', sm: '0.98rem' },
                              py: { xs: 1.5, sm: 2 },
                              px: { xs: 1.5, sm: 2.5 },
                              lineHeight: 1.55,
                              minWidth: { xs: '130px', sm: 'auto' },
                              whiteSpace: { xs: 'normal', sm: 'nowrap' }
                            }}
                          >
                            {row.area}
                          </TableCell>
                          <TableCell
                            sx={{
                              color: '#333',
                              fontSize: { xs: '0.86rem', sm: '0.98rem' },
                              py: { xs: 1.5, sm: 2 },
                              px: { xs: 1.5, sm: 2.5 },
                              lineHeight: 1.55,
                              minWidth: { xs: '260px', sm: 'auto' },
                              wordBreak: 'break-word',
                              whiteSpace: 'normal'
                            }}
                          >
                            {row.hoods}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontSize: { xs: '0.86rem', sm: '0.98rem' },
                              py: { xs: 1.5, sm: 2 },
                              px: { xs: 1.5, sm: 2.5 },
                              lineHeight: 1.55,
                              minWidth: { xs: '130px', sm: 'auto' },
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {row.link}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Typography className="para" sx={{ mt: 3, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                  Boiler repair in Burnaby, BC is where we started, and we now cover the whole region. Not on the list? Call and ask.
                </Typography>

                <Box mt={3} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622 Now" />
                  <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book Online" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 6: SERVICE AND REPAIR IN ONE VISIT: Boiler Service and Repair in One Visit */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box
                  sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                  }}
                >
                  <SectionalHeading
                    simpletext="Boiler Service and Repair in One Visit"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 2.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    A repair visit puts a technician in front of your boiler anyway, so we use it. While we&apos;re there, we look at the safety controls, the venting, the system pressure, and the burner. That&apos;s how boiler service and repair becomes one call instead of two.
                  </Typography>
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    If a full yearly service is due, we&apos;ll tell you, and you can book it through our <Link href="/boilers-maintenance/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>boiler maintenance page</Link>. For homeowners looking for a boiler repair company that fixes the cause, not just the symptom, that&apos;s the aim: repairing boilers properly, so you don&apos;t call us again for the same fault. Our pricing is affordable and clear, and you see it before we start.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 7: NEW SECTION: Repair a Boiler or Replace It? */}
        <section className="my-md-5 my-4">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 2.5, md: 3 }}>
                  <SectionalHeading
                    simpletext="Repair a Boiler or Replace It?"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Plenty of boilers are worth repairing. Some aren&apos;t. Here&apos;s how we think about it:
                  </Typography>
                </Box>

                {/* Repair vs Replace Table - Fully Responsive & Scrollable on Mobile */}
                <TableContainer
                  component={Paper}
                  elevation={0}
                  sx={{
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                    overflowX: 'auto',
                    maxWidth: '100%',
                    WebkitOverflowScrolling: 'touch',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    '&::-webkit-scrollbar': {
                      height: '8px'
                    },
                    '&::-webkit-scrollbar-track': {
                      backgroundColor: '#f1f5f9',
                      borderRadius: '4px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#94a3b8',
                      borderRadius: '4px'
                    }
                  }}
                >
                  <Table
                    sx={{
                      width: '100%',
                      minWidth: { xs: '520px', sm: '100%' },
                      tableLayout: 'auto'
                    }}
                    aria-label="repair vs replace boiler comparison"
                  >
                    <TableHead sx={{ backgroundColor: 'var(--navy)' }}>
                      <TableRow>
                        <TableCell
                          sx={{
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: { xs: '0.92rem', sm: '1.05rem' },
                            py: { xs: 1.5, sm: 2 },
                            px: { xs: 1.5, sm: 2.5 },
                            width: '50%'
                          }}
                        >
                          Repair it when…
                        </TableCell>
                        <TableCell
                          sx={{
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: { xs: '0.92rem', sm: '1.05rem' },
                            py: { xs: 1.5, sm: 2 },
                            px: { xs: 1.5, sm: 2.5 },
                            width: '50%'
                          }}
                        >
                          Replace it when…
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {repairVsReplace.map((row, idx) => (
                        <TableRow
                          key={idx}
                          sx={{
                            backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                            '&:last-child td, &:last-child th': { border: 0 },
                            '&:hover': { backgroundColor: 'rgba(19, 148, 205, 0.04)' }
                          }}
                        >
                          <TableCell
                            sx={{
                              color: '#333',
                              fontSize: { xs: '0.86rem', sm: '0.98rem' },
                              py: { xs: 1.5, sm: 2 },
                              px: { xs: 1.5, sm: 2.5 },
                              lineHeight: 1.55,
                              wordBreak: 'break-word',
                              whiteSpace: 'normal'
                            }}
                          >
                            {row.repair}
                          </TableCell>
                          <TableCell
                            sx={{
                              color: '#333',
                              fontSize: { xs: '0.86rem', sm: '0.98rem' },
                              py: { xs: 1.5, sm: 2 },
                              px: { xs: 1.5, sm: 2.5 },
                              lineHeight: 1.55,
                              wordBreak: 'break-word',
                              whiteSpace: 'normal'
                            }}
                          >
                            {row.replace}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Box mt={3.5}>
                  <Typography className="para" sx={{ fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                    A newer high-efficiency boiler can also cut your gas bill, which can change the maths on an old one. We&apos;ll give you both numbers and tell you what we&apos;d do. Looking at a new unit? See our <Link href="/boilers-installation/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>boiler installation page</Link>.
                  </Typography>
                  <Box mt={3}>
                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Get an Honest Opinion: Book a Visit" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 8: WHY CONSIDER US: Why Call Airlinx for Burnaby Boiler Repair Services */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 3, md: 4 }}>
                  <SectionalHeading
                    simpletext="Why Call Airlinx for Burnaby Boiler Repair Services"
                    variant="h2"
                  />
                </Box>

                <Grid container spacing={2.5}>
                  {whyChooseUs.map((item, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          p: { xs: 2, sm: 2.5 },
                          backgroundColor: '#ffffff',
                          borderRadius: '12px',
                          border: '1px solid #e2e8f0',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            borderColor: 'var(--blue)',
                            boxShadow: '0 4px 12px rgba(19, 148, 205, 0.08)'
                          }
                        }}
                      >
                        <CheckCircleOutline sx={{ color: 'var(--blue)', fontSize: '1.4rem', flexShrink: 0 }} />
                        <Typography
                          className="para"
                          sx={{
                            fontWeight: 600,
                            color: 'var(--navy)',
                            fontSize: '0.98rem !important',
                            lineHeight: 1.5,
                            m: 0
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 9: FEATURED HEATING SERVICES */}
        <FeaturedHeatingServices
          title="Heating, Cooling and Hot Water from Airlinx"
          subTitle="Furnace, Boiler, Heat Pump and Fireplace Repair and Service"
          bannerText="Boiler Down? Call Now for Emergency Boiler Repair."
          btnTitle="Book Boiler Repair"
          btnLink="/contact-us/"
          balancedLogos={true}
        />

        {/* SECTION 10: Boiler Repair Technicians Who Find the Real Fault */}
        <section className={`${HighlySkilledStyles.HighlySkilled} mt-3`}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} sm={10} md={9} lg={8} className="mx-auto">
                <Box py={5}>
                  <SectionalHeading
                    simpletext="Boiler Repair Technicians Who Find the Real Fault"
                    variant="h2"
                    align="center"
                  />
                  <Box mt={3}>
                    <Typography align="center" className="para">
                      Fixing the symptom is how the same fault comes back in a week. Our technicians trace each problem to its cause, whether that&apos;s a failed sensor, a blocked condensate drain, a tired pump, or a leak at a joint, and they show you what they found before suggesting anything.
                    </Typography>
                    <Typography align="center" className="para" sx={{ mt: 1.5 }}>
                      Boilers burn gas, so the gas side isn&apos;t a job for amateurs. Licensed gas fitters handle the gas repairs, and any work that needs a permit gets one. If you ever see a yellow flame, smell gas, or hear your carbon monoxide alarm, don&apos;t wait. Get outside and call 911 and your gas utility.
                    </Typography>
                    <Typography align="center" className="para" sx={{ mt: 1.5 }}>
                      After more than two decades working around Metro Vancouver, our emergency line is still answered every day. When the repair&apos;s done, our yearly boiler maintenance keeps it from happening again. Call 604-363-6622.
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

        {/* SECTION 11: Customer Reviews from Across Metro Vancouver */}
        <Testimonial
          title="What Boiler and Heating Customers Say"
          testimonialArr={testimonial}
        />

        {/* Google Reviews CTA */}
        <Box sx={{ py: { xs: 3, md: 4 }, display: 'flex', justifyContent: 'center', backgroundColor: '#ffffff' }}>
          <BlueFilledBtn
            anchor={true}
            btnlink="https://g.page/r/CdlSgou1yAB-EB0/review"
            btnTitle="Read our Google reviews"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Box>

        {/* SECTION 12: Boiler Repair FAQs and Free Quote Form */}
        <FaqAndForm
          faq={true}
          faqSimpleTitle="Boiler Repair FAQs"
          faqVariant="h2"
          faqtitleAlign="center"
          faqArr={arrayFaq}
          form={true}
          formBlackTitle="Get a Free"
          formBlueTitle="Quote"
          formVariant="h2"
          formtitleAlign="center"
        />

        {/* SECTION 13: Brand Slider */}
        <BrandSlider />
      </main>
    </>
  )
}

export default BoilerRepairPage

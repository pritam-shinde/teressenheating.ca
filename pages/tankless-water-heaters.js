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
import Banner from '../public/lennox-hvac/lennox.webp'
import waterheater from '../public/tankless-water-heater/water-heater.webp'
import {
  BrandSlider,
  FaqAndForm,
  FeaturedHeatingServices,
  FortisBCRebate,
  Testimonial
} from '../sections/sections'
import HighlySkilledStyles from '../styles/HighlySkilled.module.css'

const TanklessWaterHeaterPage = () => {
  const arrayFaq = [
    {
      id: "faq-1",
      que: "What tankless water heater services do you provide?",
      ans: "Repair, installation, replacement, yearly servicing and flushing, and emergency calls, for homes and businesses in Burnaby and across Metro Vancouver.",
      list: null
    },
    {
      id: "faq-2",
      que: "How much does tankless water heater installation cost in Burnaby?",
      ans: "It depends on the unit you choose, whether it's gas or electric, and what your home needs: gas line size, venting, drainage and where it's mounted. We visit first and give you a written quote, so you know the full cost before you commit. Ask us about rebates and financing too.",
      list: null
    },
    {
      id: "faq-3",
      que: "How often should a tankless water heater be serviced?",
      ans: "Once a year is the usual advice. If you're on well water, or your unit shows error codes often, it may need more. The yearly visit is much cheaper than an emergency repair in the middle of winter.",
      list: null
    },
    {
      id: "faq-4",
      que: "Does my tankless water heater need flushing if Burnaby's water is soft?",
      ans: "Scale builds up more slowly with soft water, but the unit still needs a yearly flush and filter clean. Manufacturers still ask for it, and sediment still clogs the inlet filter.",
      list: null
    },
    {
      id: "faq-5",
      que: "Why is my tankless water heater giving lukewarm water?",
      ans: "Common causes are a clogged inlet filter, scale on the heat exchanger, low water flow, a blocked vent, or an igniter or sensor on its way out. Check the display for an error code and call us with it. That usually points us to the problem before we arrive.",
      list: null
    },
    {
      id: "faq-6",
      que: "Should I repair or replace my tankless water heater?",
      ans: "If it's a few years old with one failed part, repair is usually worth it. If it's near 20 years old, keeps throwing codes, or has a leaking heat exchanger, replacement often makes more sense. We'll tell you which way we'd go.",
      list: null
    },
    {
      id: "faq-7",
      que: "How long does tankless water heater installation take?",
      ans: "Often about a day. Jobs that need a bigger gas line, new venting or a drain change can take longer. We'll tell you when we quote.",
      list: null
    },
    {
      id: "faq-8",
      que: "Do I need a permit to install a tankless water heater?",
      ans: "Gas installations in BC need a permit and a licensed gas fitter. We handle both.",
      list: null
    },
    {
      id: "faq-9",
      que: "How long do tankless water heaters last?",
      ans: "With yearly servicing, often 20 years or more. Without it, they tend to give out much sooner.",
      list: null
    },
    {
      id: "faq-10",
      que: "Do you offer emergency tankless water heater repair?",
      ans: "Yes. We take emergency calls at any hour, including weekends and holidays. Call 604-363-6622.",
      list: null
    }
  ]

  const testimonial = [
    {
      id: "testimonial-1",
      text: "Our tankless unit stopped producing hot water on a Sunday morning in January. Airlinx answered our emergency call right away and had a licensed technician at our Burnaby home within two hours. He descaled the heat exchanger, cleaned out a clogged inlet filter, and had endless hot water flowing again before lunch.",
      customerName: "David K., Burnaby Heights"
    },
    {
      id: "testimonial-2",
      text: "We switched from an old 50-gallon hot water tank to a wall-mounted Navien tankless system. Airlinx handled the gas line sizing, venting, and BC gas permits seamlessly. Our utility bills have dropped and we freed up half of our laundry room floor space.",
      customerName: "Sarah & Mike L., Brentwood"
    },
    {
      id: "testimonial-3",
      text: "Airlinx does the yearly maintenance and flushing on our tankless water heater. Always transparent with written quotes, punctual, and respectful of our home. It gives us total peace of mind knowing our system is protected under manufacturer warranty.",
      customerName: "Pritam G., Metrotown"
    }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Tankless Water Heater Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Airlinx Heating & Air Conditioning",
      image: "https://airlinxheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwater-heater.775d958c.webp&w=1920&q=75",
      "@id": "https://airlinxheating.ca/tankless-water-heaters/",
      url: "https://airlinxheating.ca/tankless-water-heaters/",
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

  const installSteps = [
    "Visit your home and look at the gas line, venting, water supply and wall space",
    "Size the unit for how many showers and taps you run at once",
    "Give you a written quote",
    "Install the unit, vent, gas, water and drain connections",
    "Test it, set the temperature, explain the controls and show you the filter"
  ]

  const warningSigns = [
    "Hot water that goes lukewarm, then hot, then lukewarm again",
    "Water that takes a long time to turn hot",
    "An error code on the display, or a flashing light",
    "Noise, like popping, rumbling or a kettle-like whistle",
    "A drop in hot water pressure",
    "Water or moisture around the unit",
    "A pilot or burner that won't light, or a smell of gas",
    "Your gas or electricity bill creeping up with no change in how you use hot water",
    "It's been more than a year since the last service"
  ]

  const serviceVisitSteps = [
    "We ask what you've noticed. Lukewarm water, noises, error codes, anything that's changed.",
    "We check the unit's history and read any error codes it has stored.",
    "We isolate and flush the heat exchanger with a descaling solution.",
    "We clean the inlet water filter and check for sediment.",
    "We inspect the burner, igniter and flame sensor on gas models, or the heating elements on electric ones.",
    "We check venting, condensate drain and gas connections for blockages and leaks.",
    "We test water flow, pressure and temperature at the unit and at a tap.",
    "We give you a short written summary of what we found and what, if anything, needs doing."
  ]

  const simpleCareHabits = [
    "Keep the area around the unit clear. No storage, no cleaning products, no lint or dust nearby.",
    "Wipe the outside with a dry or lightly damp cloth, with the unit switched off.",
    "Check the vent outside for leaves, nests or snow after bad weather.",
    "Don't ignore error codes. Note the code and call us.",
    "Book your yearly service before something goes wrong.",
    "Don't open the unit up or flush a gas unit yourself. That's what we're here for."
  ]

  return (
    <>
      <Head>
        <title>Tankless Water Heater Service Burnaby | Repair & Install</title>
        <meta
          name="description"
          content="Tankless water heater service in Burnaby: repair, installation, flushing and maintenance. Airlinx offers Licensed technicians, 24/7 emergency. Contact now."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://airlinxheating.ca/tankless-water-heaters/" />
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
          title={
            <Box component="span" sx={{ display: 'block', maxWidth: { xs: '100%', md: '650px', lg: '900px' } }}>
              Tankless Water Heater Service for Burnaby Homes
            </Box>
          }
          color="#fff"
          variant="h1"
        />

        {/* SECTION 1: Tankless Water Heater Repair, Installation & Maintenance in Burnaby */}
        <section className="py-md-5 py-4" style={{ backgroundColor: '#ffffff' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <SectionalHeading
                    simpletext="Tankless Water Heater Repair, Installation & Maintenance in Burnaby"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 2, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    No hot water, or hot water that keeps turning lukewarm? You&apos;ve come to the right place for tankless water heater service in Burnaby. Airlinx Heating repairs, services and installs tankless water heaters for homes and businesses across Metro Vancouver, and we take emergency calls any hour of the day.
                  </Typography>
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Tankless units are small, efficient and last a long time, but only if someone looks after them. A yearly checkup is what keeps a tankless water heater running like new. Whether yours needs tankless water heater repair, a tune-up or a replacement, you&apos;ll get a clear price before we start and a straight answer on what&apos;s worth doing.
                  </Typography>
                  <Box mt={3.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book a Service" />
                    <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 2: Our Tankless Water Heater Services in Burnaby (Service Cards) */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 3, md: 4 }}>
                  <SectionalHeading
                    simpletext="Our Tankless Water Heater Services in Burnaby"
                    variant="h2"
                  />
                </Box>

                <Grid container spacing={3.5}>
                    <Grid item xs={12} md={6} lg={4}>
                      <Box sx={{ p: 3.5, backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', borderTop: '4px solid var(--blue)', height: '100%', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
                        <Typography component="h3" variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', mb: 1.5 }}>
                          Tankless Water Heater Servicing
                        </Typography>
                        <Typography className="para" sx={{ fontSize: '0.98rem !important', lineHeight: 1.75, m: 0 }}>
                          This is the visit that prevents most of the calls we get. We flush and descale the heat exchanger, clean the inlet filter, test the burner and venting, check the water and gas pressure and read the unit&apos;s error history.
                        </Typography>
                      </Box>
                    </Grid>

                      <Grid item xs={12} md={6} lg={4}>
                        <Box sx={{ p: 3.5, backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', borderTop: '4px solid var(--blue)', height: '100%', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
                          <Typography component="h3" variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', mb: 1.5 }}>
                            Tankless Water Heater Maintenance
                          </Typography>
                          <Typography className="para" sx={{ fontSize: '0.98rem !important', lineHeight: 1.75, m: 0 }}>
                            Our tankless hot water heater maintenance services are done once a year for most homes. Brand-specific steps vary, so we follow what the manufacturer calls for.
                          </Typography>
                        </Box>
                      </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                          <Box sx={{ p: 3.5, backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', borderTop: '4px solid var(--blue)', height: '100%', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
                            <Typography component="h3" variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', mb: 1.5 }}>
                              Tankless Water Heater Repair
                            </Typography>
                            <Typography className="para" sx={{ fontSize: '0.98rem !important', lineHeight: 1.75, m: 0 }}>
                              No hot water, lukewarm water, a unit that cuts out mid-shower, error codes on the display, leaks, strange noises, or a unit that won&apos;t ignite. We repair tankless water heaters on the common brands, find the actual fault and quote it before we start. If the unit isn&apos;t worth fixing, we&apos;ll tell you.
                            </Typography>
                          </Box>
                        </Grid>

                          <Grid item xs={12} md={6} lg={4}>
                            <Box sx={{ p: 3.5, backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', borderTop: '4px solid var(--blue)', height: '100%', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
                              <Typography component="h3" variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', mb: 1.5 }}>
                                Service for Tankless Water Heater
                              </Typography>
                              <Typography className="para" sx={{ fontSize: '0.98rem !important', lineHeight: 1.75, m: 0 }}>
                                Issues of Every Kind Not sure what&apos;s wrong? Call us with what you&apos;re seeing, and we&apos;ll tell you whether it&apos;s a quick fix, a service visit or something bigger. Sometimes a clogged filter on the inlet is the whole problem, and that&apos;s a short visit.
                              </Typography>
                            </Box>
                          </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                              <Box sx={{ p: 3.5, backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', borderTop: '4px solid var(--blue)', height: '100%', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
                                <Typography component="h3" variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', mb: 1.5 }}>
                                  Tankless Water Heater Installation
                                </Typography>
                                <Typography className="para" sx={{ fontSize: '0.98rem !important', lineHeight: 1.75, m: 0 }}>
                                  New build, switching from a tank, or replacing an old tankless unit. We size it to your home, check gas, venting and drainage, and handle the install from start to finish. See the full details further down this page.
                                </Typography>
                              </Box>
                            </Grid>

                              <Grid item xs={12} md={6} lg={4}>
                                <Box sx={{ p: 3.5, backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', borderTop: '4px solid var(--blue)', height: '100%', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
                                  <Typography component="h3" variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', mb: 1.5 }}>
                                    Emergency Tankless Water Heater Repair
                                  </Typography>
                                  <Typography className="para" sx={{ fontSize: '0.98rem !important', lineHeight: 1.75, m: 0 }}>
                                    Cold showers in the middle of winter are no joke. Call 604-363-6622 at any hour and we&apos;ll book the earliest visit we have.
                                  </Typography>
                                </Box>
                              </Grid>
                            </Grid>

                            <Box mt={4} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                              <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book Tankless Service" />
                              <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>

                    {/* SECTION 3: Tankless Water Heater Flushing and Descaling (Callout Style) */}
                    <section className="my-md-5 my-4">
                      <Container maxWidth="xxl">
                        <Grid container>
                          <Grid item xs={12} md={10} className="mx-auto">
                            <Box sx={{ p: { xs: 3, md: 4.5 }, backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', borderLeft: '6px solid var(--blue)', boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
                              <SectionalHeading
                                simpletext="Tankless Water Heater Flushing and Descaling"
                                variant="h2"
                              />
                              <Typography className="para" sx={{ mt: 2, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                                Minerals in the water slowly coat the inside of a tankless water heater&apos;s heat exchanger. The coating acts like insulation, so the unit works harder to heat the same water, wastes gas or power, and eventually shows an error code or fails.
                              </Typography>
                              <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                                Metro Vancouver&apos;s water is very soft, so scale builds up more slowly here than in hard-water cities. That doesn&apos;t mean you can skip it. Manufacturers still call for a yearly flush, and the inlet filter still clogs with sediment. If you&apos;re on a well, or your building&apos;s supply is different, the build-up can be much faster. Ask us and we&apos;ll check what your unit is actually showing.
                              </Typography>
                              <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                                Flushing is done with a descaling solution and a small pump, and the unit has to be isolated properly first, so it&apos;s not a great DIY job on a gas unit. We do it as part of every service visit.
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>

                    {/* SECTION 4: Tankless Water Heater Installation in Burnaby (Image + Stepped List) */}
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
                                    src={waterheater}
                                    alt="Tankless Water Heater Installation Burnaby"
                                    title="Tankless Water Heater Installation Burnaby"
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
                                    simpletext="Tankless Water Heater Installation in Burnaby"
                                    variant="h2"
                                  />
                                  <Typography className="para" sx={{ mt: 2, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                                    A good tankless water heater installation starts with a few checks. Is the gas line big enough? A tankless unit pulls more gas at once than a tank does, so older homes sometimes need a larger line. Where will it vent? Is there a drain for the condensate? Does it fit the spot you have in mind? Getting those right is the difference between a unit that runs for 20 years and one that gives trouble in the first one.
                                  </Typography>

                                  <Typography sx={{ mt: 2.5, mb: 1.5, fontWeight: 700, color: 'var(--navy)', fontSize: '1.05rem' }}>
                                    Here&apos;s what we do on a tankless water heater installation in Burnaby:
                                  </Typography>

                                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, my: 2 }}>
                                    {installSteps.map((step, idx) => (
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
                                    Gas work in BC needs a permit and a licensed gas fitter. We take care of that so you don&apos;t have to deal with the paperwork.
                                  </Typography>

                                  <Box mt={3}>
                                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Get a Free Installation Quote" />
                                  </Box>
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Container >
                    </section >

                    {/* SECTION 5: Signs Your Tankless Water Heater Needs Service (Numbered 2-Column Grid) */}
                    <section className="my-md-5 my-4">
                      <Container maxWidth="xxl">
                        <Grid container>
                          <Grid item xs={12} md={10} className="mx-auto">
                            <Box>
                              <SectionalHeading
                                simpletext="Signs Your Tankless Water Heater Needs Service"
                                variant="h2"
                              />
                              <Typography className="para" sx={{ mt: 2, mb: 3, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                                Most tankless problems give you a warning first. Call us if you notice any of these:
                              </Typography>

                              <Grid container spacing={2}>
                                {warningSigns.map((sign, idx) => (
                                  <Grid item xs={12} sm={6} key={idx}>
                                    <Box
                                      sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        p: 2,
                                        backgroundColor: '#f8fafc',
                                        borderRadius: '10px',
                                        border: '1px solid #e2e8f0',
                                        height: '100%'
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: 28,
                                          height: 28,
                                          borderRadius: '6px',
                                          backgroundColor: 'rgba(19, 148, 205, 0.12)',
                                          color: 'var(--blue)',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          fontWeight: 700,
                                          fontSize: '0.85rem',
                                          flexShrink: 0
                                        }}
                                      >
                                        {idx + 1}
                                      </Box>
                                      <Typography sx={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.45, m: 0 }}>
                                        {sign}
                                      </Typography>
                                    </Box>
                                  </Grid>
                                ))}
                              </Grid>

                              <Box
                                sx={{
                                  mt: 3.5,
                                  p: 2,
                                  borderRadius: '10px',
                                  backgroundColor: 'rgba(19, 148, 205, 0.08)',
                                  borderLeft: '4px solid var(--blue)'
                                }}
                              >
                                <Typography sx={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.96rem', m: 0 }}>
                                  If you smell gas, leave the home and call 911 and your gas utility&apos;s emergency line before you call us.
                                </Typography>
                              </Box>

                              <Box mt={3.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book a Tankless Repair" />
                                <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section >

                    {/* SECTION 6: Why Burnaby Homeowners Are Switching, Tank vs Tankless, What It Saves You */}
                    < section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
                      <Container maxWidth="xxl">
                        <Grid container>
                          <Grid item xs={12} md={10} className="mx-auto">
                            <Box mb={4}>
                              <SectionalHeading
                                simpletext="Why Burnaby Homeowners Are Switching to Tankless Water Heaters"
                                variant="h2"
                              />
                              <Typography className="para" sx={{ mt: 2, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                                A tankless water heater doesn&apos;t store hot water. It heats water as you use it, so you don&apos;t run out halfway through a shower and you aren&apos;t paying to keep a tank of water hot all day. A single wall-mounted unit takes a fraction of the floor space of a tank, which matters in a Burnaby condo, a townhouse or a basement suite.
                              </Typography>
                              <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                                With regular servicing, tankless units often run for 20 years or more, which is well beyond what a tank usually gives you. Those are the main reasons people choose tankless water heaters when it&apos;s time to replace them.
                              </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                              <Box sx={{ p: { xs: 3, md: 4 }, backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
                                <SectionalHeading
                                  simpletext="Tank or Tankless? Which One Fits Your Home"
                                  variant="h2"
                                />
                                <Typography className="para" sx={{ mt: 2, fontSize: '1rem !important', lineHeight: 1.8 }}>
                                  A tank heater is cheaper to buy and simple to replace. A tankless unit costs more up front but takes less space, never runs out and uses less energy over the years. Tankless tends to make the most sense for families, for homes with several bathrooms, and for anyone short on floor space.
                                </Typography>
                                <Typography className="para" sx={{ mt: 1.5, fontSize: '1rem !important', lineHeight: 1.8 }}>
                                  If you only use a little hot water, or you&apos;re planning to move soon, a tank may be the better value. We&apos;ll tell you which one we&apos;d choose in your place. If you want to compare, call us and we&apos;ll give you honest numbers for both.
                                </Typography>
                              </Box>

                              <Box sx={{ p: { xs: 3, md: 4 }, backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
                                <SectionalHeading
                                  simpletext="What a Tankless Water Heater Actually Saves You"
                                  variant="h2"
                                />
                                <Typography className="para" sx={{ mt: 2, fontSize: '1rem !important', lineHeight: 1.8 }}>
                                  You save on energy because there&apos;s no tank of hot water losing heat all day. You save on space. And with yearly tankless water heater servicing, you save on repairs, because the build-up and clogs that cause most breakdowns get cleared before they do damage.
                                </Typography>
                                <Typography className="para" sx={{ mt: 1.5, fontSize: '1rem !important', lineHeight: 1.8 }}>
                                  How much you save depends on your usage and your current heater, so we don&apos;t promise a figure. If you want to see what it might mean for your home, we&apos;ll go through it with you during a free quote.
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section >

                    {/* SECTION 7: What's Included in a Tankless Water Heater Service Visit (Clean 2-Column Checklist) */}
                    <section className="my-md-5 my-4">
                      <Container maxWidth="xxl">
                        <Grid container>
                          <Grid item xs={12} md={10} className="mx-auto">
                            <Box>
                              <SectionalHeading
                                simpletext="What's Included in a Tankless Water Heater Service Visit"
                                variant="h2"
                              />
                              <Typography className="para" sx={{ mt: 2, mb: 3, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                                A typical visit takes about an hour or two. Here&apos;s what happens:
                              </Typography>

                              <Box component="ul" sx={{ pl: 0, my: 3, listStyleType: 'none' }}>
                                {serviceVisitSteps.map((step, idx) => (
                                  <Box
                                    component="li"
                                    key={idx}
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: 1.5,
                                      mb: 2
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
                                    <Typography sx={{ fontSize: '1rem', color: '#444', lineHeight: 1.75, m: 0 }}>
                                      {step}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>

                              <Box mt={3}>
                                <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book Your Annual Service" />
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section >

                    {/* SECTION 8: Licensed, Insured and Careful in Your Home */}
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
                                simpletext="Licensed, Insured and Careful in Your Home"
                                variant="h2"
                              />
                              <Typography className="para" sx={{ mt: 2, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                                Airlinx is a licensed, insured heating contractor with 20 years of experience in Metro Vancouver. Our technicians are background-checked, and we protect your floors and clean up when we&apos;re done. You get a written quote first, and you approve it before any work starts.
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>

                    {/* SECTION 9: Simple Care Between Service Visits */}
                    <section className="my-md-5 my-4">
                      <Container maxWidth="xxl">
                        <Grid container>
                          <Grid item xs={12} md={10} className="mx-auto">
                            <Box>
                              <SectionalHeading
                                simpletext="Simple Care Between Service Visits"
                                variant="h2"
                              />
                              <Typography className="para" sx={{ mt: 1.5, mb: 3, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                                You don&apos;t have to do much, but a few small habits help:
                              </Typography>

                              <Box sx={{ display: 'inline-flex', flexDirection: 'column', gap: 1.5, width: 'fit-content', maxWidth: '100%' }}>
                                {simpleCareHabits.map((habit, idx) => (
                                  <Box
                                    key={idx}
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: 1.5,
                                      py: 1.2,
                                      px: 2,
                                      backgroundColor: '#f8fafc',
                                      borderRadius: '10px',
                                      border: '1px solid #edf2f7',
                                      width: '100%'
                                    }}
                                  >
                                    <CheckCircleOutlineIcon sx={{ color: 'var(--blue)', fontSize: '1.25rem', flexShrink: 0 }} />
                                    <Typography sx={{ fontSize: '0.94rem', color: '#444', lineHeight: 1.5, m: 0 }}>
                                      {habit}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>

                    {/* SECTION: FortisBC Furnace Maintenance Rebate */}
                    < FortisBCRebate />

                    {/* SECTION: Other Heating Services We Offer */}
                    < FeaturedHeatingServices
                      title="Other Heating Services We Offer"
                      subTitle="Furnace, Boiler, Heat Pump and Fireplace: Installation, Maintenance and Repair"
                      bannerText="Need Tankless Water Heater Repair or a New Unit? Talk to a Specialist Today."
                      btnTitle="Book Tankless Service"
                      btnLink="/contact-us/"
                      balancedLogos={true}
                    />

                    {/* SECTION: Tankless Water Heater Technicians You Can Rely On */}
                    < section className={`${HighlySkilledStyles.HighlySkilled} mt-3`
                    }>
                      <Container maxWidth="xxl">
                        <Grid container>
                          <Grid item xs={12} sm={10} md={9} lg={8} className="mx-auto">
                            <Box py={5}>
                              <SectionalHeading
                                simpletext="Tankless Water Heater Technicians You Can Rely On"
                                variant="h2"
                                align="center"
                              />
                              <Box mt={3}>
                                <Typography align="center" className="para">
                                  When the hot water stops, you want the fault found, not guessed at. Our technicians read the unit&apos;s error codes, test flow and gas pressure, and trace the problem before recommending a fix. We quote the repair first, and if the unit isn&apos;t worth repairing, we&apos;ll say so.
                                </Typography>
                                <Typography align="center" className="para">
                                  We work on tankless water heaters from the major brands and we follow each manufacturer&apos;s service steps, so your warranty isn&apos;t put at risk. Most calls we get come down to scale, a clogged filter, a blocked vent or a worn part, and many of them can be avoided with a yearly service.
                                </Typography>
                                <Typography align="center" className="para">
                                  We&apos;ve been at this for 20 years and we answer{" "}
                                  <Link href="/emergency/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>
                                    emergency
                                  </Link>{" "}
                                  calls at any hour. If your tankless water heater is acting up, call 604-363-6622.
                                </Typography>
                              </Box>
                              <Box mt={4} className="d-flex justify-content-center">
                                <BlueFilledBtn navlink={true} btnTitle="Learn More About Us" btnlink="/about-us/" />
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section >

                    {/* SECTION: What Our Customers Say (Testimonials & Google Reviews CTA) */}
                    < Testimonial
                      title="What Our Customers Say"
                      testimonialArr={testimonial}
                    />
                    <Box sx={{ mt: -2, mb: 4, display: 'flex', justifyContent: 'center' }}>
                      <BlueFilledBtn
                        anchor={true}
                        btnlink="https://maps.app.goo.gl/iBqnUjAQ4A45VwBx6"
                        btnTitle="Read our Google reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    </Box>

                    {/* SECTION: Tankless Water Heater FAQs and Free Quote Form */}
                    <FaqAndForm
                      faq={true}
                      faqSimpleTitle="Tankless Water Heater FAQs"
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
                  </main >
                </>
                )
}

                export default TanklessWaterHeaterPage
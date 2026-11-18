import {
  CheckCircle,
  CheckCircleOutline
} from '@mui/icons-material'
import {
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BlueFilledBtn, CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import Repair from '../public/boilerMaintanance/image.webp'
import BoilerMaintainanceBanner from '../public/boilerMaintanance/maintainencebg.webp'
import {
  FaqAndForm,
  FeaturedHeatingServices,
  Testimonial
} from '../sections/sections'
import HighlySkilledStyles from '../styles/HighlySkilled.module.css'

const BoilerMaintenancePage = () => {
  const arrayFaq = [
    {
      id: "faq-1",
      que: "How Often Should I Schedule Boiler Maintenance in Burnaby and Vancouver?",
      ans: "Once a year, ideally in the fall. A yearly visit catches worn parts, blocked vents and small leaks before they turn into a winter breakdown.",
      list: null
    },
    {
      id: "faq-2",
      que: "What does a boiler maintenance service include?",
      ans: "A combustion and carbon monoxide test, burner and heat exchanger cleaning, gas and venting checks, safety controls, system pressure and expansion tank, pump and zone valves, thermostats, and a leak check. You get a short written report afterward.",
      list: null
    },
    {
      id: "faq-3",
      que: "How Much Does Boiler Maintenance Cost in Burnaby and the Lower Mainland?",
      ans: "It depends on the type and age of your boiler and how many zones it runs, so we don't quote a number without knowing your system. Call us with the make and age of your boiler and we'll give you a clear price for the visit.",
      list: null
    },
    {
      id: "faq-4",
      que: "How long does a boiler service take?",
      ans: "Usually an hour or two. Older boilers, or ones with several zones, can take longer.",
      list: null
    },
    {
      id: "faq-5",
      que: "Do you service older boilers?",
      ans: "Yes, both older conventional boilers and newer high-efficiency ones. We follow the manufacturer's steps for your model and tell you honestly about its condition.",
      list: null
    },
    {
      id: "faq-6",
      que: "Can regular maintenance prevent boiler repairs?",
      ans: "In most cases, yes. A yearly service finds the worn part or the slow leak while it's still a small job. It won't stop every failure, but it prevents many of the ones that happen in January.",
      list: null
    },
    {
      id: "faq-7",
      que: "What if my boiler has already stopped working?",
      ans: "Call 604-363-6622 or see our boiler repair page. If a service visit turns up a worn part, we'll quote the repair before doing anything.",
      list: null
    },
    {
      id: "faq-8",
      que: "Do you service in-floor heating and radiator systems?",
      ans: "Yes. We check the pump, zone valves, thermostats and pipework that feed your radiators, baseboards or in-floor loops, along with the boiler itself.",
      list: null
    },
    {
      id: "faq-9",
      que: "Do I need yearly maintenance to keep my boiler warranty?",
      ans: "Many manufacturers ask for proof of regular servicing if you make a warranty claim, so keep your invoices. Check your warranty paperwork, and ask us if you're unsure.",
      list: null
    },
    {
      id: "faq-10",
      que: "Do you offer emergency boiler repair?",
      ans: "Yes, every day of the year, including nights and weekends. Call 604-363-6622. If you smell gas, leave the home and call 911 and your gas utility first.",
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
      text: "I've always found their technicians are very attentive, they let me know if they see any issues or concerns about the unit. It was perfect! They were on time, very genuine & professional!",
      customerName: "Ben Hartman, Customer"
    },
    {
      id: "testimonial-3",
      text: "I want to thank you for your excellent service. They answered all my questions and were very professional. He gave me peace of mind and complete comfort. I know I am in good hands with your company.",
      customerName: "Sara, Customer"
    }
  ]

  const serviceCards = [
    {
      title: "Yearly Boiler Maintenance",
      desc: "A full yearly service: cleaning, safety checks, testing and a written report. This is the one that prevents winter breakdowns."
    },
    {
      title: "Heating System Maintenance",
      desc: "Radiators, baseboards, in-floor loops, circulator pumps, zone valves and thermostats checked along with the boiler."
    },
    {
      title: "Boilers Maintenance for Older Systems",
      desc: "Boilers maintenance for older units takes a bit more care. We service conventional and high-efficiency models, new and old."
    },
    {
      title: "Pre-Winter Boiler Tune-Up",
      desc: "Book in the fall, before you need the heat every day, and before our schedule fills up."
    }
  ]

  const safetyItems = [
    "Combustion and carbon monoxide test on the flue gases",
    "Gas supply and connections checked for leaks",
    "Venting checked for blockages and damage",
    "Safety controls and pressure relief valve tested"
  ]

  const efficiencyItems = [
    "Burner cleaned and flame checked",
    "Heat exchanger cleaned (this is the boiler cleaning that matters most)",
    "Condensate trap and drain cleared on high-efficiency models",
    "Gas pressure and settings adjusted to the manufacturer's numbers"
  ]

  const widerSystemItems = [
    "System pressure and expansion tank checked",
    "Circulator pump and zone valves tested",
    "Thermostats and controls checked",
    "Leaks looked for at joints, valves and radiators",
    "Boiler troubleshooting for any noises, error codes or cold spots you've noticed",
    "A short written report at the end, so you know the state of the boiler."
  ]

  const whyChoosePoints = [
    "Licensed and insured",
    "Licensed gas fitters on every gas job",
    "Background-checked technicians",
    "More than 10 years of heating work across Metro Vancouver",
    "A written report after every service",
    "Straight answers on what's worth doing and what isn't",
    "Emergency boiler repair available every day of the year"
  ]

  const signsList = [
    "Cold radiators or uneven heat. Air in the system or a tired pump.",
    "Banging, rumbling or kettling. Often scale or sludge in the heat exchanger.",
    "Pressure that keeps dropping. There's usually a small leak somewhere.",
    "Soot, a musty smell or rust marks around the boiler.",
    "It cycles on and off more than it used to.",
    "A yellow or orange flame. A healthy gas flame is blue.",
    "Bills climbing with no change in how you heat the house.",
    "It's been more than a year since the last service."
  ]

  const benefits = [
    {
      title: "Fewer winter breakdowns.",
      desc: "Most failures start as a small problem that a service would have caught."
    },
    {
      title: "Safer operation.",
      desc: "A gas boiler that isn't looked at can develop blocked vents, gas leaks or carbon monoxide risk. A yearly check is how those are found."
    },
    {
      title: "Lower running costs.",
      desc: "A clean burner and heat exchanger burn less gas for the same heat."
    },
    {
      title: "A longer-lasting boiler.",
      desc: "Many boilers run 15 to 20 years or more when they're serviced every year."
    },
    {
      title: "Warranty protection.",
      desc: "Many manufacturers want proof of regular servicing if you ever claim."
    }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Boiler Maintenance, Service & Inspection",
    provider: {
      "@type": "LocalBusiness",
      name: "Airlinx Heating & Air Conditioning",
      image: "https://airlinxheating.ca/boilerMaintanance/image.webp",
      telephone: "604-363-6622",
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
        <title>Boiler Maintenance Burnaby | Yearly Boiler Service | Airlinx</title>
        <meta
          name="description"
          content="Professional boiler maintenance in Burnaby, Vancouver, Lower Mainland and North Shore. Get yearly boiler servicing and safety checks by Airlinx Heating."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://airlinxheating.ca/boilers-maintenance/" />
      </Head>

      <JsonLd faqArr={arrayFaq} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />

      <main>
        {/* H1 BANNER - Responsive positioning shows character clearly on both desktop & mobile */}
        <CommonBanner
          bg={BoilerMaintainanceBanner}
          bgPosition={{ xs: '68% center', md: 'center top' }}
          mobileOverlay="linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42))"
          desktopOverlay="linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"
          title={
            <Box
              component="span"
              sx={{
                display: 'block',
                maxWidth: { xs: '100%', md: '750px', lg: '1100px' },
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.85)'
              }}
            >
              Boiler Maintenance in Burnaby
            </Box>
          }
          color="#fff"
          variant="h1"
        />

        {/* SECTION 1: Intro - Yearly Boiler Service, Cleaning and Safety Checks from Local Technicians */}
        <section className="py-md-5 py-4" style={{ backgroundColor: '#ffffff' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">
                  <Grid item xs={12} lg={6}>
                    <Box>
                      <SectionalHeading
                        simpletext="Yearly Boiler Service, Cleaning and Safety Checks from Local Technicians"
                        variant="h2"
                      />
                      <Typography className="para" sx={{ mt: 2.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                        A boiler that gets looked at once a year rarely quits on the coldest day. <Link href="/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>Airlinx</Link> provides professional boiler maintenance for homes and small buildings in Burnaby, Vancouver, throughout the Lower Mainland and across the North Shore. Our services include cleaning, testing, safety checks and the small adjustments that help keep your boiler running efficiently. If your boiler has already stopped, start with our <Link href="/boilers-repair/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>boiler repair page</Link>.
                      </Typography>
                      <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                        Our boiler maintenance service follows the manufacturer&apos;s steps for your model, and you get a short written report afterward that says what we found and what, if anything, needs doing. We&apos;ve worked on heating systems around Metro Vancouver for more than 10 years. Our technicians are licensed and background-checked.
                      </Typography>
                      <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                        Booking is simple. Call 604-363-6622 or use the form, tell us the make and age of your boiler, and we&apos;ll find a time that suits you. September and October fill up fast, so earlier is better.
                      </Typography>
                      <Box mt={3.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book Boiler Maintenance" />
                        <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <Box
                      sx={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                        width: '100%',
                        maxWidth: '560px',
                        mx: 'auto',
                        backgroundColor: '#ffffff',
                        p: 1.5,
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      <Image
                        src={Repair}
                        alt="Airlinx technician doing boiler maintenance in a Burnaby home"
                        title="Airlinx technician doing boiler maintenance in a Burnaby home"
                        sizes="(max-width: 900px) 100vw, 560px"
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

        {/* SECTION 2: NEW SECTION A: OUR BOILER MAINTENANCE SERVICES IN BURNABY */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 3, md: 5 }}>
                  <SectionalHeading
                    simpletext="Our Boiler Maintenance Services Across Burnaby, Vancouver & Surrounding Areas"
                    variant="h2"
                  />
                </Box>

                <Grid container spacing={3.5}>
                  {serviceCards.map((card, idx) => (
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
                          boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
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
                            fontSize: '0.94rem !important',
                            lineHeight: 1.65,
                            color: '#555',
                            m: 0
                          }}
                        >
                          {card.desc}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Box mt={{ xs: 4, md: 5 }}>
                  <Typography className="para" sx={{ fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                    Not sure what you need? Call <a href="tel:604-363-6622" style={{ color: 'var(--blue)', fontWeight: 700, textDecoration: 'underline' }}>604-363-6622</a> and describe what&apos;s happening.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 3: Boiler Maintenance Service You Can Count On */}
        <section className="my-md-5 my-4">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box
                  sx={{
                    p: { xs: 3.5, md: 5 },
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    borderLeft: '6px solid var(--blue)',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.03)'
                  }}
                >
                  <SectionalHeading
                    simpletext="Boiler Maintenance Service You Can Count On"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 2, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    If you&apos;re looking for a reliable boiler maintenance company in Burnaby, Vancouver, the Lower Mainland or North Shore, here&apos;s what we do differently: we look at the whole heating system, not just the boiler. The pump, pipework, radiators or floor loops and controls all affect how well your boiler works.
                  </Typography>
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    We serve Burnaby, Vancouver and communities throughout the Lower Mainland and North Shore, including New Westminster, North Vancouver, West Vancouver, <Link href="/coquitlam/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>Coquitlam</Link> and Richmond. If you&apos;ve been searching for boiler service near you, contact our team to arrange a visit. We&apos;ll tell you plainly what we find. If your boiler needs nothing, we&apos;ll say that too.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 4: What's Included in Our Boiler Maintenance Service */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 3, md: 4 }}>
                  <SectionalHeading
                    simpletext="What's Included in Our Boiler Maintenance Service"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                    A visit usually takes an hour or two. Here&apos;s the list:
                  </Typography>
                </Box>

                <Grid container spacing={3.5}>
                  {/* Safety */}
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        p: 3.5,
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        border: '1px solid #e2e8f0',
                        height: '100%',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                      }}
                    >
                      <Typography
                        component="h3"
                        variant="h3"
                        sx={{
                          fontSize: '1.3rem',
                          fontWeight: 700,
                          color: 'var(--navy)',
                          mb: 2.5
                        }}
                      >
                        Safety
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
                        {safetyItems.map((item, idx) => (
                          <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                            <CheckCircleOutline sx={{ color: 'var(--blue)', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: '0.94rem', color: '#444', lineHeight: 1.55 }}>
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Grid>

                  {/* Efficiency */}
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        p: 3.5,
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        border: '1px solid #e2e8f0',
                        height: '100%',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                      }}
                    >
                      <Typography
                        component="h3"
                        variant="h3"
                        sx={{
                          fontSize: '1.3rem',
                          fontWeight: 700,
                          color: 'var(--navy)',
                          mb: 2.5
                        }}
                      >
                        Efficiency
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
                        {efficiencyItems.map((item, idx) => (
                          <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                            <CheckCircleOutline sx={{ color: 'var(--blue)', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: '0.94rem', color: '#444', lineHeight: 1.55 }}>
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Grid>

                  {/* The wider system */}
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        p: 3.5,
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        border: '1px solid #e2e8f0',
                        height: '100%',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                      }}
                    >
                      <Typography
                        component="h3"
                        variant="h3"
                        sx={{
                          fontSize: '1.3rem',
                          fontWeight: 700,
                          color: 'var(--navy)',
                          mb: 2.5
                        }}
                      >
                        The wider system
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
                        {widerSystemItems.map((item, idx) => (
                          <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                            <CheckCircleOutline sx={{ color: 'var(--blue)', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: '0.94rem', color: '#444', lineHeight: 1.55 }}>
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                <Box mt={{ xs: 4, md: 5 }}>
                  <BlueFilledBtn
                    navlink={true}
                    btnlink="/contact-us/"
                    btnTitle="Book Your Boiler Maintenance"
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 5: Why Choose Airlinx for Boiler Maintenance? */}
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
                    simpletext="Why Choose Airlinx for Boiler Maintenance?"
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
                            height: '100%'
                          }}
                        >
                          <CheckCircle sx={{ color: 'var(--blue)', fontSize: 22, flexShrink: 0 }} />
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

        {/* SECTION 6: Signs Your Boiler Needs Maintenance */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <SectionalHeading
                    simpletext="Signs Your Boiler Needs Maintenance"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 1.5, mb: 3, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                    Book a service if you notice any of these:
                  </Typography>

                  <Grid container spacing={2}>
                    {signsList.map((sign, idx) => (
                      <Grid item xs={12} sm={6} key={idx}>
                        <Box
                          sx={{
                            p: 2,
                            backgroundColor: '#ffffff',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0',
                            height: '100%',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 1.25
                          }}
                        >
                          <CheckCircleOutline sx={{ color: 'var(--blue)', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                          <Typography sx={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, m: 0 }}>
                            {sign}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Typography className="para" sx={{ mt: 3, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                    If you smell gas, or a carbon monoxide alarm goes off, get everyone outside and call 911 and your gas utility&apos;s emergency line first. Then call us.
                  </Typography>

                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                    Boiler already stopped working? Our <Link href="/boilers-repair/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>boiler repair page</Link> is the place to start. If your boiler is near the end of its life, see <Link href="/boilers-installation/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>boiler installation</Link>.
                  </Typography>

                  <Box mt={3.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book a Boiler Service" />
                    <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 7: Why Yearly Boiler Maintenance Pays Off */}
        <section className="my-md-5 my-4">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <SectionalHeading
                    simpletext="Why Yearly Boiler Maintenance Pays Off"
                    variant="h2"
                  />
                  <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {benefits.map((b, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          p: 2.5,
                          backgroundColor: '#ffffff',
                          borderRadius: '12px',
                          border: '1px solid #e2e8f0',
                          borderLeft: '4px solid var(--blue)',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                        }}
                      >
                        <Typography sx={{ fontSize: '1rem', color: '#444', lineHeight: 1.6, m: 0 }}>
                          <strong style={{ color: 'var(--navy)' }}>{b.title}</strong> {b.desc}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 8: Featured Heating Services */}
        <FeaturedHeatingServices
          title="Other Heating Services We Offer"
          subTitle="Furnace, Boiler, Heat Pump and Fireplace: Installation, Maintenance and Repair"
          bannerText="Book Your Boiler Maintenance Before Winter. Talk to a Specialist Today."
          btnTitle="Book Boiler Maintenance"
          btnLink="/contact-us/"
          balancedLogos={true}
        />

        {/* SECTION 9: Boiler Maintenance Technicians Who Look at the Whole System */}
        <section className={`${HighlySkilledStyles.HighlySkilled} mt-3`}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} sm={10} md={9} lg={8} className="mx-auto">
                <Box py={5}>
                  <SectionalHeading
                    simpletext="Boiler Maintenance Technicians Who Look at the Whole System"
                    variant="h2"
                    align="center"
                  />
                  <Box mt={3}>
                    <Typography align="center" className="para">
                      A <Link href="/boiler-services/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>boiler service</Link> isn&apos;t a quick wipe and a glance. Our technicians run a combustion test, check the flame, clean the heat exchanger, test the pump and safety controls, and look at the pipework and radiators for leaks. If they find something, they&apos;ll show you and explain it before suggesting a fix.
                    </Typography>
                    <Typography align="center" className="para" sx={{ mt: 1.5 }}>
                      Gas appliances need to be handled by someone licensed, which is why the gas side of every job is done by a licensed gas fitter. We&apos;d also like you to keep a working carbon monoxide alarm near your bedrooms and test it in the fall.
                    </Typography>
                    <Typography align="center" className="para" sx={{ mt: 1.5 }}>
                      We&apos;ve serviced boilers throughout Burnaby, Vancouver, the Lower Mainland and North Shore for more than 10 years, and our emergency line is answered every day. If your boiler is due for a check, call 604-363-6622. For your furnace, see <Link href="/furnace/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>furnace maintenance</Link>.
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

        {/* SECTION 10: What Our Customers Say (Testimonials) */}
        <Testimonial
          title="What Our Customers Say"
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

        {/* SECTION 11: Boiler Maintenance FAQs and Free Quote Form */}
        <FaqAndForm
          faq={true}
          faqSimpleTitle="Boiler Maintenance FAQs"
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

export default BoilerMaintenancePage

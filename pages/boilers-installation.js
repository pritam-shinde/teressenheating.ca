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
import BoilerInstallationBanner from '../public/boilerInstallation/boiler-install-hero.webp'
import Installation from '../public/boiler/worker-repairing-water-heater.webp'
import {
  BrandSlider,
  FaqAndForm,
  FeaturedHeatingServices,
  Testimonial
} from '../sections/sections'
import HighlySkilledStyles from '../styles/HighlySkilled.module.css'

const BoilerInstallationPage = () => {
  const arrayFaq = [
    {
      id: "faq-1",
      que: "How long does it take to install a new boiler?",
      ans: "Usually one to three days. A straight swap in the same spot, with the venting and gas line in place, is often one to two days. Moving the boiler, changing pipework, or adding new venting takes longer. We'll give you a firm timeline in the quote.",
      list: null
    },
    {
      id: "faq-2",
      que: "How much does boiler installation cost?",
      ans: "It swings a lot, mostly on three things: the boiler you pick, how much pipe and venting has to change, and whether the gas line needs upgrading. A condo swap and a big old house are very different jobs, so we price after a visit and put the number in writing. Rebates and financing may help, so ask what's current.",
      list: null
    },
    {
      id: "faq-3",
      que: "Do you install boilers in Vancouver and on the North Shore?",
      ans: "Yes. We install boilers in Vancouver, Burnaby, North Vancouver, West Vancouver, New Westminster, Coquitlam, Port Moody, Richmond, Tsawwassen, White Rock, Maple Ridge and Pitt Meadows, and across the Lower Mainland. Our office is in Burnaby.",
      list: null
    },
    {
      id: "faq-4",
      que: "How do I know if I need a new boiler instead of a repair?",
      ans: "Age is the first clue. A boiler well past 15 years that needs a major part is rarely worth saving, and neither is one with a leaking heat exchanger or parts nobody makes anymore. Under ten years old with a single fault, fix it. When the repair quote nears the price of a new boiler, ask us to price both.",
      list: null
    },
    {
      id: "faq-5",
      que: "Which type of boiler is best for my home?",
      ans: "For most homes, it's a high-efficiency condensing boiler. If you also want to replace a water heater, a combi boiler can do both jobs, which suits smaller homes and condos. We'll recommend one after seeing your house.",
      list: null
    },
    {
      id: "faq-6",
      que: "Do I need a permit, and does the installer need a licence?",
      ans: "Yes. BC requires a licensed gas fitter and a permit for the gas hookup. Check the licence number before you sign anything. We take care of the permit.",
      list: null
    },
    {
      id: "faq-7",
      que: "What happens to my old boiler?",
      ans: "We drain it, take it out, and dispose of it. We then flush the heating system before the new boiler goes in, so old sludge doesn't shorten its life.",
      list: null
    },
    {
      id: "faq-8",
      que: "Will I be without heat during the installation?",
      ans: "For part of the job, yes. We'll tell you how long, and plan the work to keep that as short as possible. Ask us about timing if it's the middle of winter.",
      list: null
    },
    {
      id: "faq-9",
      que: "How long does a boiler last?",
      ans: "A well-installed boiler that gets looked after often runs for two decades. Skip the servicing, and it can fail years early. A yearly maintenance visit is the cheapest way to protect it.",
      list: null
    },
    {
      id: "faq-10",
      que: "Can you install a boiler for in-floor radiant heating?",
      ans: "Yes. A boiler can feed in-floor heating loops as well as radiators and baseboards. We check the pump, zones, and controls to make sure the system suits the boiler.",
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

  const installTimeline = [
    {
      job: "Swapping an old boiler for a new one in the same spot, with the gas line and venting already in place",
      time: "About 1 to 2 days"
    },
    {
      job: "Replacing it with a high-efficiency or combi boiler that needs new venting or a condensate drain",
      time: "About 2 to 3 days"
    },
    {
      job: "Moving the boiler, or changing pipework or zones",
      time: "3 to 5 days, sometimes longer"
    },
    {
      job: "A new system in a build or major renovation",
      time: "Scheduled around the other trades"
    }
  ]

  const serviceCovers = [
    "A home visit and heat loss check to size the new boiler",
    "Removal and disposal of the old boiler",
    "Flushing the heating system, so old sludge doesn't shorten the new boiler's life",
    "Gas hookup by a licensed gas fitter, permit included",
    "New venting and a condensate drain where needed",
    "Thermostats, zone controls, and pump setup",
    "Testing and a walkthrough, so you know how to use it"
  ]

  const serviceAreas = [
    {
      title: "Boiler installation Vancouver",
      desc: (
        <>
          We cover Kitsilano, Kerrisdale, Dunbar, Mount Pleasant, East Vancouver, and the West End. Plenty of the older houses there still run on radiators, which is why replacement jobs are common. See our <Link href="/vancouver/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>Vancouver page</Link>.
        </>
      )
    },
    {
      title: "Boiler installation in Burnaby and New Westminster",
      desc: (
        <>
          Burnaby is where we started: Metrotown, Brentwood, Edmonds, Burnaby Heights and Lougheed, plus <Link href="/new-westminster/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>New Westminster</Link>. See our <Link href="/service-areas/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>Burnaby page</Link>.
        </>
      )
    },
    {
      title: "Boiler installation on the North Shore",
      desc: (
        <>
          <Link href="/north-vancouver/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>North Vancouver</Link> and <Link href="/west-vancouver/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>West Vancouver</Link>, including Lonsdale, Lynn Valley, Deep Cove, Ambleside and Dundarave. Plenty of North Shore homes use in-floor radiant heating, which runs off a boiler.
        </>
      )
    },
    {
      title: "The Tri-Cities",
      desc: "Coquitlam and Port Moody."
    },
    {
      title: "Richmond and Delta",
      desc: (
        <>
          Richmond and <Link href="/tsawwassen/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>Tsawwassen</Link>.
        </>
      )
    },
    {
      title: "South of the Fraser",
      desc: (
        <>
          <Link href="/white-rock/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>White Rock</Link> and nearby communities.
        </>
      )
    },
    {
      title: "Ridge Meadows",
      desc: "Maple Ridge and Pitt Meadows."
    }
  ]

  const boilerTypes = [
    {
      title: "High-Efficiency Condensing Boiler",
      desc: "This is what most new installs are. It wrings more heat out of the gas, so it costs less to run, and it needs a condensate drain and plastic venting."
    },
    {
      title: "Combi Boiler",
      desc: "One appliance runs both the radiators and the taps, so the separate water heater can go. Suits smaller homes and condos. Combi boiler installation is a growing part of our work."
    },
    {
      title: "Conventional Boiler",
      desc: "Older style, still around in many homes. We replace them with a modern unit when the time comes."
    },
    {
      title: "Steam Boilers",
      desc: "Steam boilers are rare in newer homes in this area. If you have one, call us, and we'll talk through your options."
    }
  ]

  const installSteps = [
    {
      step: "01",
      title: "A walk-through at your place",
      desc: "We check the existing boiler, how it's piped, where it vents, and what size gas line feeds it."
    },
    {
      step: "02",
      title: "A heat loss calculation sets the size",
      desc: "An oversized boiler wastes fuel, and a small one runs flat out all winter."
    },
    {
      step: "03",
      title: "A written quote",
      desc: "It lists the boiler model, labour, venting, gas work, permit and warranty, with a lower-cost and a higher-spec option where both make sense."
    },
    {
      step: "04",
      title: "Install day",
      desc: "The old boiler is drained and removed, the system is flushed, and the new one is mounted, piped, vented, and connected."
    },
    {
      step: "05",
      title: "Start-up",
      desc: "We run a combustion test, check the safety shut-offs, bleed the air out of the system, and set the zones and thermostat."
    },
    {
      step: "06",
      title: "Handover",
      desc: "We show you the controls, leave the paperwork, and put your first yearly service on the calendar."
    }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Boiler Installation & Replacement",
    provider: {
      "@type": "LocalBusiness",
      name: "Airlinx Heating & Air Conditioning",
      image: "https://airlinxheating.ca/boilerInstallation/boilerInstallation.webp",
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
        <title>Boiler Installation Burnaby, Vancouver & North Shore</title>
        <meta
          name="description"
          content="Boiler installation by Airlinx Heating in Burnaby, Vancouver and the North Shore. Licensed gas fitters, free written quotes. Call 604-363-6622."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://airlinxheating.ca/boilers-installation/" />
      </Head>

      <JsonLd faqArr={arrayFaq} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />

      <main>
        {/* H1 BANNER - Clear, natural banner with no dark muddy overlay on desktop */}
        <CommonBanner
          bg={BoilerInstallationBanner}
          bgPosition={{ xs: '80% center', md: 'right center' }}
          mobileOverlay="linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
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
              Boiler Installation: Burnaby to the North Shore
            </Box>
          }
          color="#fff"
          variant="h1"
        />

        {/* SECTION 1: Boiler Installation Experts in Burnaby and Across the Lower Mainland */}
        <section className="py-md-5 py-4" style={{ backgroundColor: '#ffffff' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">
                  <Grid item xs={12} lg={6}>
                    <Box>
                      <SectionalHeading
                        simpletext="Boiler Installation Experts in Burnaby and Across the Lower Mainland"
                        variant="h2"
                      />
                      <Typography className="para" sx={{ mt: 2.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                        Replacing a boiler is a big job, and who does it matters. Airlinx handles boiler installation for houses, townhomes and condos across Burnaby, Vancouver, the North Shore and the rest of the Lower Mainland. Our head office is in Burnaby, in the middle of Metro Vancouver, so our crews reach Richmond, Coquitlam and <Link href="/west-vancouver/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>West Vancouver</Link> as easily as they reach the house next door.
                      </Typography>
                      <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                        We install new gas boilers, including high-efficiency condensing and combi models, and we replace old ones. A licensed gas fitter does the gas work, we pull the permit, and you get a written quote before anything starts. If you&apos;re looking for a licensed boiler installer in Burnaby, or an expert boiler installation company anywhere in the region, that&apos;s what we do.
                      </Typography>
                      <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                        From a quick boiler install in Burnaby to a full system change in a Vancouver character home, the first step is the same: a visit and a straight answer. Not sure whether yours needs replacing? Call 604-363-6622, and we&apos;ll tell you honestly. We&apos;d rather say &quot;fix it&quot; than sell you a boiler you don&apos;t need yet.
                      </Typography>
                      <Box mt={3.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Get a Free Boiler Quote" />
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
                        src={Installation}
                        alt="Airlinx technician installing a new gas boiler in a Metro Vancouver home"
                        title="Airlinx technician installing a new gas boiler in a Metro Vancouver home"
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

        {/* SECTION 2: NEW SECTION: How Long Does It Take to Install a New Boiler? */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 2.5, md: 3 }}>
                  <SectionalHeading
                    simpletext="How Long Does It Take to Install a New Boiler?"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    For most homes, a boiler installation takes one to three days. The biggest factor is how many changes there are besides the boiler itself.
                  </Typography>
                </Box>

                {/* Timeline Table - Fully Responsive */}
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
                      height: '6px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#cbd5e1',
                      borderRadius: '3px'
                    }
                  }}
                >
                  <Table
                    sx={{
                      width: '100%',
                      tableLayout: 'auto'
                    }}
                    aria-label="boiler installation timeline"
                  >
                    <TableHead sx={{ backgroundColor: 'var(--navy)' }}>
                      <TableRow>
                        <TableCell
                          sx={{
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: { xs: '0.92rem', sm: '1.05rem' },
                            py: { xs: 1.5, sm: 2 },
                            px: { xs: 1.5, sm: 2.5 }
                          }}
                        >
                          The job
                        </TableCell>
                        <TableCell
                          sx={{
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: { xs: '0.92rem', sm: '1.05rem' },
                            py: { xs: 1.5, sm: 2 },
                            px: { xs: 1.5, sm: 2.5 },
                            width: { xs: '38%', sm: '220px', md: '250px' },
                            minWidth: { xs: '110px', sm: '180px' }
                          }}
                        >
                          Typical time
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {installTimeline.map((row, idx) => (
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
                            {row.job}
                          </TableCell>
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
                            {row.time}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Box mt={3.5}>
                  <Typography className="para" sx={{ fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                    Three things add time: a new gas line or venting, pipework that needs replacing, and the permit inspection. We&apos;ll tell you how long you&apos;ll be without heat and plan the work to keep that short. You get a firm timeline in the quote, not a guess.
                  </Typography>
                  <Box mt={3}>
                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Get a Free Boiler Installation Quote" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 3: WHAT'S INCLUDED: What Our Boiler Installation Service Covers */}
        <section className="my-md-5 my-4">
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
                    simpletext="What Our Boiler Installation Service Covers"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                    Our boiler installation service covers the whole job, not just the box on the wall:
                  </Typography>

                  {/* Clean 2-Column Minimalist List with Centered Blue Dots */}
                  <Grid container spacing={{ xs: 0, sm: 4 }} sx={{ mt: { xs: 1.5, md: 2 } }}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        {serviceCovers.slice(0, 4).map((item, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              py: { xs: 1.5, md: 1.75 },
                              borderBottom: '1px solid #edf2f7'
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                backgroundColor: 'var(--blue)',
                                flexShrink: 0
                              }}
                            />
                            <Typography
                              component="span"
                              sx={{
                                fontSize: { xs: '0.96rem', md: '1.02rem' },
                                color: 'var(--navy)',
                                lineHeight: 1.5,
                                m: '0 !important',
                                mb: '0 !important',
                                p: 0,
                                fontWeight: 600
                              }}
                            >
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        {serviceCovers.slice(4).map((item, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              py: { xs: 1.5, md: 1.75 },
                              borderBottom: '1px solid #edf2f7'
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                backgroundColor: 'var(--blue)',
                                flexShrink: 0
                              }}
                            />
                            <Typography
                              component="span"
                              sx={{
                                fontSize: { xs: '0.96rem', md: '1.02rem' },
                                color: 'var(--navy)',
                                lineHeight: 1.5,
                                m: '0 !important',
                                mb: '0 !important',
                                p: 0,
                                fontWeight: 600
                              }}
                            >
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                  </Grid>

                  <Typography className="para" sx={{ mt: 3.5, fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                    If you need gas boiler installation in Burnaby or anywhere else in the region, this is what you get. Boiler installation services in Burnaby, Vancouver, and the North Shore all follow the same process, and a Burnaby boiler installation is no different from one in <Link href="/west-vancouver/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>West Vancouver</Link>.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 4: Boiler Installation Across Vancouver, the Lower Mainland and the North Shore */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 3, md: 4 }}>
                  <SectionalHeading
                    simpletext="Boiler Installation Across Vancouver, the Lower Mainland and the North Shore"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Our office is in Burnaby, but the work isn&apos;t limited to one city. If you&apos;ve been searching for boilers in Burnaby, or boiler installation in Vancouver or the North Shore, here&apos;s where we install:
                  </Typography>
                </Box>

                <Grid container spacing={2.5}>
                  {serviceAreas.map((area, idx) => (
                    <Grid item xs={12} md={6} key={idx}>
                      <Box
                        sx={{
                          p: 3,
                          backgroundColor: '#ffffff',
                          borderRadius: '12px',
                          border: '1px solid #e2e8f0',
                          borderLeft: '4px solid var(--blue)',
                          height: '100%',
                          boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                        }}
                      >
                        <Typography
                          component="h3"
                          variant="h3"
                          sx={{
                            fontSize: '1.12rem',
                            fontWeight: 700,
                            color: 'var(--navy)',
                            mb: 1
                          }}
                        >
                          {area.title}
                        </Typography>
                        <Typography
                          className="para"
                          sx={{
                            fontSize: '0.96rem !important',
                            lineHeight: 1.7,
                            color: '#555',
                            m: 0
                          }}
                        >
                          {area.desc}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Box mt={3.5}>
                  <Typography className="para" sx={{ fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                    Not on the list? Call us and ask. We work across the Lower Mainland.
                  </Typography>
                  <Box mt={3} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book Boiler Installation in Your Area" />
                    <BlueFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="Call 604-363-6622" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 5: Types of Boilers We Install */}
        <section className="my-md-5 my-4">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 3, md: 4 }}>
                  <SectionalHeading
                    simpletext="Types of Boilers We Install"
                    variant="h2"
                  />
                  <Typography className="para" sx={{ mt: 1.5, fontSize: '1.05rem !important', lineHeight: 1.8 }}>
                    Almost every home in this area uses a hot water boiler. It heats water and sends it through pipes to radiators, baseboards, or in-floor loops. Here are the choices:
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  {boilerTypes.map((type, idx) => (
                    <Grid item xs={12} sm={6} lg={3} key={idx}>
                      <Box
                        sx={{
                          p: 3,
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
                            fontSize: '1.15rem',
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
                            fontSize: '0.94rem !important',
                            lineHeight: 1.65,
                            color: '#555',
                            m: 0
                          }}
                        >
                          {type.desc}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Box mt={3.5}>
                  <Typography className="para" sx={{ fontSize: '1.02rem !important', lineHeight: 1.8 }}>
                    We can fit <Link href="/viessmann/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>Viessmann</Link>, Navien, and other major brands. We&apos;ll compare them with you on efficiency, noise, warranty, and price rather than push one.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 6: From Quote to Start-Up: How We Install a New Boiler */}
        <section className="my-md-5 my-4 py-md-5 py-4" style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box mb={{ xs: 3, md: 5 }}>
                  <SectionalHeading
                    simpletext="From Quote to Start-Up: How We Install a New Boiler"
                    variant="h2"
                  />
                </Box>

                <Grid container spacing={3}>
                  {installSteps.map((step, idx) => (
                    <Grid item xs={12} sm={6} lg={4} key={idx}>
                      <Box
                        sx={{
                          p: 3,
                          backgroundColor: '#ffffff',
                          borderRadius: '14px',
                          border: '1px solid #e2e8f0',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
                        }}
                      >
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: '8px',
                            backgroundColor: 'rgba(19, 148, 205, 0.1)',
                            color: 'var(--blue)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                            fontSize: '0.92rem',
                            mb: 2
                          }}
                        >
                          {step.step}
                        </Box>
                        <Typography
                          component="h3"
                          variant="h3"
                          sx={{
                            fontSize: '1.15rem',
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

                <Box mt={4}>
                  <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Start with a Free Quote" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* SECTION 7: FEATURED HEATING SERVICES */}
        <FeaturedHeatingServices
          title="Heating Work Beyond Boilers"
          subTitle="Furnace, Heat Pump and Fireplace Services Across Metro Vancouver"
          bannerText="Need a New Boiler? Get a Free Quote Anywhere in Metro Vancouver."
          btnTitle="Book Boiler Installation"
          btnLink="/contact-us/"
          balancedLogos={true}
        />

        {/* SECTION 8: Boiler Installers Who Get the Details Right */}
        <section className={`${HighlySkilledStyles.HighlySkilled} mt-3`}>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} sm={10} md={9} lg={8} className="mx-auto">
                <Box py={5}>
                  <SectionalHeading
                    simpletext="Boiler Installers Who Get the Details Right"
                    variant="h2"
                    align="center"
                  />
                  <Box mt={3}>
                    <Typography align="center" className="para">
                      A new boiler works well or badly depending on a handful of details: the size, the venting, the gas line, how the system&apos;s flushed, and how the controls are set. As a boiler installer in Burnaby and across the region, we deal with those on every job, and we explain each choice before we make it.
                    </Typography>
                    <Typography align="center" className="para" sx={{ mt: 1.5 }}>
                      The gas side is regulated for good reason. We use licensed gas fitters, pull the permit and book the inspection, and we&apos;d ask you to check any installer&apos;s licence number before agreeing to the work. Once the new boiler is running, put a carbon monoxide alarm outside the bedrooms.
                    </Typography>
                    <Typography align="center" className="para" sx={{ mt: 1.5 }}>
                      Airlinx has fitted heating equipment across Metro Vancouver for over two decades. Once your boiler is in, the same company does your <Link href="/boilers-maintenance/" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>yearly maintenance</Link> and repairs, and the emergency line is answered daily. Call 604-363-6622.
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

        {/* SECTION 9: Customer Reviews from Across Metro Vancouver */}
        <Testimonial
          title="Customer Reviews from Across Metro Vancouver"
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

        {/* SECTION 10: Boiler Installation FAQs and Free Quote Form */}
        <FaqAndForm
          faq={true}
          faqSimpleTitle="Boiler Installation FAQs"
          faqVariant="h2"
          faqtitleAlign="center"
          faqArr={arrayFaq}
          form={true}
          formBlackTitle="Get a Free"
          formBlueTitle="Quote"
          formVariant="h2"
          formtitleAlign="center"
        />

        {/* SECTION 11: Brand Slider */}
        <BrandSlider />
      </main>
    </>
  )
}

export default BoilerInstallationPage

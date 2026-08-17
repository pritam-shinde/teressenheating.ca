import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import { CommonBanner } from '../components/components'
import Banner from '../public/faq/faq.webp'
import { FaqAndForm } from '../sections/sections'

const FAQ = () => {
  const arrayFaq = [
    { id: "faq-1", que: "What HVAC services do you provide in Burnaby?", ans: "We offer complete HVAC services Burnaby, including heating, cooling, furnace repairs, heat pump installation, air conditioning, and regular maintenance for homes and businesses.", list: null },
    { id: "faq-2", que: "Are you a licensed HVAC contractor in Burnaby?", ans: "Yes, we are a trusted HVAC contractor in Burnaby, providing professional installation, repair, and maintenance services backed by experienced technicians.", list: null },
    { id: "faq-3", que: "Do you offer emergency heating and cooling services?", ans: "Yes, our emergency heating and cooling service is available to help restore your comfort quickly when your heating or cooling system breaks down.", list: null },
    { id: "faq-4", que: "Can you install a new air conditioning system?", ans: "Absolutely. As an experienced air conditioning contractor, we install energy-efficient AC systems that keep your home comfortable throughout the summer.", list: null },
    { id: "faq-5", que: "Why choose your HVAC company in Burnaby?", ans: "As a reliable HVAC company Burnaby residents trust, we focus on quality workmanship, honest pricing, and dependable customer service on every project.", list: null },
    { id: "faq-6", que: "Do you provide HVAC maintenance services?", ans: "Yes, our HVAC service includes routine inspections, cleaning, and tune-ups to improve efficiency, reduce breakdowns, and extend your system's lifespan.", list: null },
    { id: "faq-7", que: "What types of heating systems do you service?", ans: "Our HVAC services cover furnaces, heat pumps, boilers, and other residential heating systems from most major manufacturers.", list: null },
    { id: "faq-8", que: "How quickly can an HVAC technician visit my Burnaby property?", ans: "We strive to provide prompt appointments for all HVAC services Burnaby, with same-day availability offered whenever possible for urgent issues.", list: null },
    { id: "faq-9", que: "Do you serve areas outside Burnaby?", ans: "Yes, while we're a leading HVAC contractor Burnaby, we also provide professional HVAC services to nearby communities across the Metro Vancouver area.", list: null },
  ]

  return (
    <>
      <Head>
        <title>Common Questions About Heating & Cooling Service - Airlinx</title>
        <meta name="description" content="Find quick answers to common home comfort questions. Airlinx Heating answers your FAQs about heating, furnace, AC lifespans, boilers and other services." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/faq/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title="Frequently Asked Questions" color="#fff" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Typography variant='h2' align="center"><span className='text--red'>Heating</span> & <span className='text--blue'>Cooling</span> FAQ</Typography>
                  <Box>
                    <FaqAndForm faq={true} faqArr={arrayFaq} form={true} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default FAQ
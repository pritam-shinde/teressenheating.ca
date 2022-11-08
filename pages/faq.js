import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { CommonBanner } from '../components/components'
import Banner from '../public/faq/faq.webp'
import { FaqAndForm } from '../sections/sections'

const FAQ = () => {

  const arrayFaq = [
    { id: "faq-1", que: "How do you maintain a heating and cooling system?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.",list:null },
    { id: "faq-2", que: "Can you combine heating and coling system?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.",list:null  },
    { id: "faq-3", que: "Should I leave my heat pump on all the time?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.",list:null  },
    { id: "faq-4", que: "Can you use the same ducts for heating and cooling?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.",list:null  },
    { id: "faq-5", que: "How does geothermal heating and cooling work?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.",list:null  },
    { id: "faq-6", que: "How Long Does HVAC Installation take?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.",list:null  },
    { id: "faq-7", que: "What Kinds of Warranties Come with My New HVAC Installation?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability.",list:null  }
  ]

  return (
    <>
      <Head>
        <title>FAQ - teressenheating.ca</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/faq/" />
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
                    <FaqAndForm faq={true} faqArr={arrayFaq} />
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
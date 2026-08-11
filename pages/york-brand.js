import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import JsonLd from '../components/JsonLd'
import BoilerMaintainanceBanner from '../public/brand-page/brand.webp'
import BrandLogo from '../public/brand-page/Layer-117.webp'
import BBB from '../public/certification/cer1.webp'
import WorkSafe from '../public/certification/cer2.webp'
import Technical from '../public/certification/cer3.webp'
import BlueLogo from '../public/logo/airlinx-logo2.png'
import { BrandDetails, FaqAndForm, FeaturedCoolingServices, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const YorkBrand = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you install York heating and cooling systems in Burnaby?", ans: "Yes, we provide professional installation of York furnaces, air conditioners, and heat pumps for residential and commercial properties across Burnaby.", list: null },
    { id: "faq-2", que: "What are common signs that a York furnace needs repair?", ans: "Uneven heating, strange noises, frequent cycling, or unexpected increases in energy bills are common indicators that your York furnace requires professional servicing.", list: null },
    { id: "faq-3", que: "Can you maintain existing York HVAC equipment?", ans: "Yes. Our team performs routine maintenance, component inspections, and system cleanings to help keep your York equipment operating at peak efficiency.", list: null },
    { id: "faq-4", que: "How do I choose the right York HVAC model for my home?", ans: "We review your home's square footage, heating and cooling demands, and efficiency goals before recommending a York system tailored to your property.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for York HVAC services in Burnaby?", ans: "Our certified technicians bring extensive hands-on experience with York products, delivering reliable installation, repair, and maintenance supported by honest, local service.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  const ListArray = ["York heating/ AC experienced technicians make sure that you are served well.", "We have professional services at affordable pricing.", "All our experts are licensed experts.", "We provide the best heating, and air quality services for you."]
  return (
    <>
      <Head>
        <title>York Heating and Air Conditioning Service Expert - Airlinx</title>
        <meta name="description" content="Airlinx Heating and Air Conditioning Service provide experts for York heating & air conditioning installation, repair and maintenance services in Burnaby." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/york-brand/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>
      <main>
        <CommonBanner bg={BoilerMaintainanceBanner} title="York Brand" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl" className="px-0">
            <Grid container>
              <Grid item xs={12} md={6} className='bg--grey'>
                <Box p={3}>
                  <Grid container>
                    <Grid item xs={12} md={11} className="ms-auto">
                      <Box>
                        <Grid container>
                          <Grid item xs={6}>
                            <Box p={3}>
                              <Image src={BlueLogo} alt="Airlinx heating" layout="responsive" />
                            </Box>
                          </Grid>
                          <Grid item xs={6} className="d-flex align-items-center">
                            <Box p={3}>
                              <Image layout='responsive' src={BrandLogo} alt="carrier" />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image src={BBB} alt="Airlinx heating" layout="responsive" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image src={WorkSafe} alt="Work safe" layout="responsive" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} className="border--grey">
                              <Image src={Technical} alt="Technical" layout="responsive" />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} id="brandDetails">
                <Box p={3}>
                  <Grid container>
                    <Grid item xs={12} md={11}>
                      <BrandDetails title='Get the best York products servicing at relative ease' list={true} ListArray={ListArray} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='mt-md-4 mt-3'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <Box>
                    <SectionalHeading simpletext="Looking for repairing of York furnaces and air conditioners?" variant="h2" />
                    <Typography className='para'>For Trane furnaces and air conditioners, Airlinx&apos;s HVAC services work the best. We help you with the best installation, repair, and <Link href="/boilers-maintenance/">maintenance services</Link>. Also, our specialists have a lot of expertise working with various brands. So, you get the best of everything with us.</Typography>
                  </Box>
                  <Box>
                    <SectionalHeading simpletext="Need a York Furnace and AC repair company with certification?" variant="h2" />
                    <Typography className='para'> If you are looking for a professional to repair your York furnace, then give us a call. We will give you the best services at affordable pricing. We know, when your furnace breaks out, especially in winter, you need someone with expert knowledge. So, it would help if you got in touch with our HVAC experts now.</Typography>
                    <Typography className='para'>We have a solid track record of offering you <Link href="/commercial-hvac/">professional HVAC services</Link>. We will also offer you individualized attention and help you in fixing your heating system the first time.</Typography>
                  </Box>
                  <Box>

                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='mt-md-4 mt-3 bg--grey'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box p={3}>
                  <SectionalHeading simpletext="Repairing of York furnace needs a licensed expert" variant="h2" />
                  <Typography className='para'> Are you looking for York furnace repair in my area? Then you can rely on our <a href="/commercial-hvac/">HVAC services</a> to fix your heating system.</Typography>
                  <Typography className='para'>If the outside temperature is low, then there might be a chance that your furnace will stop working. Like other household appliances, furnaces need repair. So, find a qualified <Link href="/boilers-repair/">repair</Link> agency that will inspect the appliance and recommend the best line of action for you.</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='bg--grey'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box p={3}>
                  <SectionalHeading simpletext="What makes us unique?" variant="h2" />
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary={<strong>Scheduling an in-home appointment</strong>} secondary="Call us for a free in-home estimate. We will help you with an expert solution by coming to your home and discussing your comfort needs." />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary={<strong>Consulting and choosing an expert</strong>} secondary="Call us for a free in-home estimate. We will send our experienced and licensed technician to assist you." />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline className='text--blue' />
                      </ListItemIcon>
                      <ListItemText primary={<strong>Installation Day</strong>} secondary="We remove old equipment from your home and install new equipment. Once done, we take care of everything." />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <FeaturedHeatingServices />
        <PopularService color='red' />
        <FeaturedCoolingServices />
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quot" formVariant="h2" formtitleAlign="center" />
      </main>
    </>
  )
}

export default YorkBrand
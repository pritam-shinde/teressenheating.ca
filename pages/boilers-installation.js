import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import JsonLd from '../components/JsonLd'
import BoilerInstallationBanner from '../public/boilerInstallation/boilerInstallation.webp'
import Installation from '../public/boilerInstallation/image.webp'
import { BrandSlider, FaqAndForm, FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial } from '../sections/sections'

const BoilerInstallation = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "Do you provide boiler installation services in Burnaby?", ans: "Yes, we offer professional boiler installation services for residential and commercial properties. Our team ensures your new boiler is installed safely, efficiently, and in compliance with local codes.", list: null },
    { id: "faq-2", que: "How do I know if I need a new boiler instead of a repair?", ans: "If your boiler is frequently breaking down, has rising energy costs, or is nearing the end of its lifespan, we can assess whether boiler repair installation services or a full replacement is the most cost-effective option.", list: null },
    { id: "faq-3", que: "What types of boilers do you install?", ans: "We provide boiler installation in Burnaby for a range of high-efficiency gas boilers designed to meet the heating needs of homes and commercial properties.", list: null },
    { id: "faq-4", que: "How long does a boiler installation take?", ans: "Most boiler installation Burnaby projects are completed within a day, although larger or more complex installations may require additional time.", list: null },
    { id: "faq-5", que: "Why choose Airlinx for boiler installation in Burnaby?", ans: "Our experienced technicians deliver reliable boiler installation services, helping you choose the right system and ensuring quality workmanship for long-lasting heating performance.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  return (
    <>
      <Head>
        <title>Reliable Boiler Installation Burnaby, BC - Airlinx Heating</title>
        <meta name="description" content="Upgrade your home heating system today. Airlinx Heating provides expert boiler installation in Burnaby services with high-efficiency equipment choices." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/boilers-installation/" />
        <JsonLd faqArr={arrayFaq} />
      </Head>

      <CommonBanner bg={BoilerInstallationBanner} title="Airlinx boiler installation services" color="#fff" variant="h1" />
      <main>
        <Container maxWidth="xxl" className='px-0'>
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Image layout='responsive' src={Installation} alt="Boiler Installation" title='Boiler Installation' />
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <SectionalHeading simpletext='A name that symbolizes quality!' variant="h2" />
                                <Typography className='para'>Need a trustworthy boiler installation expert in Canada? Trust us, we are a name in giving the best boiler installation services. We specialize in boiler installation, repairs, and services for both commercial and residential properties. Our team of experienced professionals provides the best quality services in Canada. </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} className="m-0 pt-0">
                              <Box>
                                <Typography className='para'> So, if you are looking for a hassle-free solution to all your <Link href="/heating-services/">heating problems</Link>, contact Airlinx today! We take care of all the boiler heating systems and make sure that we provide a reliable service to all our patrons.</Typography>
                                <Typography className='para'>Airlinx boiler installation is perfect for those who are looking for an energy-efficient and reliable boiler. Our experts will help you choose the perfect boiler for your home and as per your requirements. With Airlinx boiler, you will enjoy years of reliable services at the best prices. </Typography>
                                <Typography className='para'>We know that as a homemaker, it is vital for you to find a skilled and experienced boiler installation expert who takes care of everything. To ensure that your new boiler setup provides you with the best heating system, we are always there for your quick assistance.</Typography>
                                <Typography className='para'>Also, in Canada, there are many boiler installation companies. But, we are the best! We make sure that we not only provide you with the best boiler installation services but also help you by giving you the <Link href="/boilers/">best boiler tips</Link> so that your work becomes easy. </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Airlinx heating ltd provides boiler installation services for:" variant="h2" align={width > 600 ? 'left' : 'center'} />

                          <List>
                            {
                              ["Complete boiler room installation", "Fuel, burner, and control installation", "Heat recovery installation", "Water treatment installation", "Removing old equipment"].map(item => <ListItem key={item}>
                                <ListItemIcon>
                                  <CheckCircleOutline className='text--blue' />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                              </ListItem>)
                            }
                          </List>
                          <Typography className='para'>So, now you know when you need a new boiler installation, you know whom to call.</Typography>
                        </Box>
                      </Container>
                    </section>

                    <section className='mt-md-3 mt-2'>
                      <Container maxWidth="xxl">
                        <Box>
                          <SectionalHeading simpletext="Steam and hot water boilers used at home:" variant="h2" />
                          <Typography className='para'>The two most common types of residential boilers are hot water boilers and steam boilers. Both boilers work with radiators to heat your space.
                          </Typography>
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>A hot water boiler:</strong>} secondary="It keeps a reserve of hot water in its tank. Once the heat is required, a series of pumps go on circulating the water with the help of pipes and to your radiator. Then the radiator uses the heat from the water to heat your home. " />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>A steam boiler: </strong>} secondary="This boils the water in its tank to produce steam. The steam is then pressurized so that it can fulfill your pipes and move to your radiator to provide heat." />
                            </ListItem>
                          </List>
                          <Typography className='para'>While both types of boilers are used, hot water boilers are used more because they are more efficient than steam boilers. So, at Airlinx we have the right tools and knowledge to take care of your boiler installation. We work friendly and fast to make sure that your boiler is installed properly and efficiently.</Typography>
                          <Typography className='para'>So, if you need a new boiler installation, boiler replacement, and a boiler heating system, you already know that we are available there right for you!
                          </Typography>
                          <Typography className='para'><Link href="https://airlinxheating.ca/">At Airlinx </Link> we rely on cutting-edge heating technology, top-of-the-line tools, and advanced techniques to perform unmatched boiler replacement services for our clients. We are so confident that you will be happy with our quality work because we guarantee 100% customer satisfaction service.
                          </Typography>
                        </Box>
                      </Container>
                    </section>
                  </Grid>
                  <Grid item xs={12} lg={4} className={width > 1199 ? 'd-block' : 'd-none'}>
                    <ServiceCommonSidebar />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid>
            </Grid>
          </Grid>
        </Container>
        <FeaturedHeatingServices />
        <PopularService color='red' />
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  )
}

export default BoilerInstallation

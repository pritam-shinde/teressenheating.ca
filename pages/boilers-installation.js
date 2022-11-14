import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import BoilerInstallationBanner from '../public/boilerInstallation/boilerInstallation.webp'
import Installation from '../public/boilerInstallation/image.webp'
import Image from 'next/legacy/image'
import { CheckCircleOutline } from '@mui/icons-material'


const BoilerInstallation = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "How do you maintain a heating and cooling system?", ans: "Here are a few tips on how you can maintain your home heating systems:.", list: ["Looking after your heating pump: Always schedule a tune-up before winter because there are chances that your heat pump might have got some damage during the last cooling season.", "Knowing your heating system's thermostat settings: Make sure that you always know three major thermostat settings-heating, cooling, and emergency heating.", "Cleaning the ducts: It is always recommended to check your heating system ducts every year. Duct cleaning is required in cases like pets, water damage, smoking, or reconstruction of your property."] },
    { id: "faq-2", que: "Can you combine heating and cooling system?", ans: "Yes, you can combine a cooling and heating system. Through this, you can save a lot of money and space with one unit. However, if you have existing systems, then you will be able to replace them with a new setup.", list: null },
    { id: "faq-3", que: "Should I leave my heat pump on all the time?", ans: "Heat pumps are an effective way to use electricity to heat your home during the winter. So, leaving them running day and night is not an economically feasible option. You should always switch off your heat pumps when you do not need them.", list: null },
    { id: "faq-4", que: "Can you use the same ducts for heating and cooling?", ans: "Yes, you can always use an add-on refrigerated cooling system as an add-on component to your ducted gas heating system. This allows you to run refrigerated air conditioning with the help of the same ducting and outlet systems.", list: null },
    { id: "faq-5", que: "How does geothermal heating and cooling work?", ans: "Geothermal heating works by moving temperature-conducting fluid through an underground loop of pipes beneath. This allows the fluid to collect the thermal energy which is deposited in the earth from the sun.", list: null },
    { id: "faq-6", que: "How does ductless heating and cooling work?", ans: "It works by using heat exchanger coils to move warm air from one location to another. During winter, the heat pump draws warm air from outside your home to increase temperatures inside. During the summer, the heat pump reverses the process, passing out warm air from your home.", list: null },
    { id: "faq-7", que: "How Much Does HVAC Installation Cost?", ans: "The cost to replace an HVAC system varies from $5,000 to $10,000, which comes to around $25 to $60 per square foot of coverage, depending on the brand and size. For a new installation, you might have to pay $1,500 to $12,500.", list: null },
    { id: "faq-8", que: "How Long Does HVAC Installation take?", ans: "Usually, it takes three to five days for installation.", list: null },
    { id: "faq-9", que: "	What Kinds of Warranties Come with My New HVAC Installation?", ans: "It has the following warranties:", list: ["HVAC Manufacturer Warranty.", "HVAC Extended Warranty.", "Homeowners Insurance.", "Home Warranty"] },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  return (
    <>
      <Head>
        <title>Boiler Installation Services in Canada | Teressenheating</title>
        <meta name="description" content="Teressen provides boiler installation services for the residential, commercial, industrial, and institutional sectors. We are licensed contractors in Canada." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/boilers-installation/" />
      </Head>
      <CommonBanner bg={BoilerInstallationBanner} title="Teressen boiler installation services" color="#fff" variant="h1" />
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
                                <Typography className='para'> So, if you are looking for a hassle-free solution to all your heating problems, contact Teressen today! We take care of all the boiler heating systems and make sure that we provide a reliable service to all our patrons.</Typography>
                                <Typography className='para'>Teressen boiler installation is perfect for those who are looking for an energy-efficient and reliable boiler. Our experts will help you choose the perfect boiler for your home and as per your requirements. With Teressen boiler, you will enjoy years of reliable services at the best prices. </Typography>
                                <Typography className='para'>We know that as a homemaker, it is vital for you to find a skilled and experienced boiler installation expert who takes care of everything. To ensure that your new boiler setup provides you with the best heating system, we are always there for your quick assistance.</Typography>
                                <Typography className='para'>Also, in Canada, there are many boiler installation companies. But, we are the best! We make sure that we not only provide you with the best boiler installation services but also help you by giving you the best boiler tips so that your work becomes easy. </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Teressen heating ltd provides boiler installation services for:" variant="h2" align={width > 600 ? 'left' : 'center'} />

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
                          <Typography className='para'>While both types of boilers are used, hot water boilers are used more because they are more efficient than steam boilers. So, at Teressen we have the right tools and knowledge to take care of your boiler installation. We work friendly and fast to make sure that your boiler is installed properly and efficiently.</Typography>
                          <Typography className='para'>So, if you need a new boiler installation, boiler replacement, and a boiler heating system, you already know that we are available there right for you!
                          </Typography>
                          <Typography className='para'>At Teressen we rely on cutting-edge heating technology, top-of-the-line tools, and advanced techniques to perform unmatched boiler replacement services for our clients. We are so confident that you will be happy with our quality work because we guarantee 100% customer satisfaction service.
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
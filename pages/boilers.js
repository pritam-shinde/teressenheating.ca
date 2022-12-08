import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/boiler/boiler-2.webp'
import ReapearWaterHeater from '../public/boiler/worker-repairing-water-heater.webp'
import Image from 'next/legacy/image'
import { CheckCircleOutline } from '@mui/icons-material'


const Boiler = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "how often should you service your boiler?", ans: "Your first boiler service must be conducted 12 months after installation to meet the terms of your warranty.", list: null },
    { id: "faq-2", que: "what does a boiler service include?", ans: "A boiler service includes the following services:", list: ["A visual check of the boiler and flame", "Internal and external checks of the flue", "The operating pressure", "The heat input", " All safety devices", "The water content", "The electrical wiring", " Casing seals"] },
    { id: "faq-3", que: "What is a standard boiler service?", ans: "A boiler service is a set of checks and tests which is performed on the boiler. This ensures your boiler is working efficiently and effectively. A good boiler service means that a Gas Safe engineer checks the correct gas flow and pressure.", list: null },
    { id: "faq-4", que: "How long should a boiler service take?", ans: "It takes around an hour to complete.", list: null },
    { id: "faq-5", que: "What maintenance is required for a boiler?", ans: "", list: ["Rigorously inspect the heating system and rectify any problems.", "Clean and inspect the heat exchanger of the boiler.", "Ensure all boiler connections and wiring is intact.", "Make sure water pH levels are within the proper range.", "Inspect the condensate system and clean and flush the system as necessary.", "Examine and clean flame sensors, ignitor, and burner assembly.", "Scrutinize the venting system for deterioration, corrosion, or blockage to ensure all pipe and joint connections are secure.", "Survey the vent terminations and air inlet to make sure they're unobstructed and clear.", "Check control settings as well as test safety controls and operating controls."] },
    { id: "faq-6", que: "Do I need to maintain my boiler?", ans: "Routine maintenance is critical to ensure a boiler system remains safe, reliable, and efficient.", list: ["Odd smells. Get in touch with a registered Gas Safe engineer if you ever detect any unusual odors emitting from your boiler.", "Frequent breakdowns. Granted, a new boiler isn't cheap.", "Higher bills.","Noisy system.", "Yellow flame.", "Water leaks.", "Parts problems.", "Low performance."] },
    { id: "faq-7", que: "How do you know when to replace your boiler?", ans: "The cost to install a boiler in the Vancouver area runs around $13,999, but you could pay anywhere from $9,499 to over $19,999.", list: null },
    { id: "faq-8", que: "How much does it cost to replace a boiler in Canada?", ans: "", list: ["Removal of the old boiler. The removal of the current boiler is a typical place installers will start. Flush/Clean.", "Upgrades/changes to pipework.", "Fitting of the boiler.", "Accessories.", "Commissioning of the system.", " Handover.", "Registration."] },
    { id: "faq-9", que: "What do I need to know when installing a new boiler?", ans: "The engineers do a simple chemical flush over several hours for more intensive cleaning. Then, they will adjust the pipework which helps in reconfiguring it to minimize the heat loss. Then the engineer keeps on installing the boiler at the location you want.", list: null},
    { id: "faq-10", que:"What happens when you get a new boiler installed?", ans: "The engineers do a simple chemical flush over several hours for more intensive cleaning. Then, they will adjust the pipework which helps in reconfiguring it to minimize the heat loss. Then the engineer keeps on installing the boiler at the location you want.", list: null},
    { id:"faq-11", que:"What does boiler installation include?", ans: "Boiler installation means the installation of a boiler. It includes connecting pipes, appurtenances, valves, fittings, firing equipment, flanges, controls, and auxiliaries. The term includes the field assembly of boilers.", list: null}

  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]
  return (
    <>
      <Head>
        <title>Teressen Boiler Repair & Maintenance Services in Canada</title>
        <meta name="description" content="Teressen provides full boiler servicing, maintenance, and repair services in Canada. We service all types of heating systems including natural gas, oil, electric." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/boilers/" />
      </Head>
      <script type="application/ld+json">
      {
        `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "How often should you service your boiler?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your first boiler service must be conducted 12 months after installation to meet the terms of your warranty."
            }
          },{
            "@type": "Question",
            "name": "what does a boiler service include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A boiler service includes the following services:
        
        A visual check of the boiler and flame
        Internal and external checks of the flue
        The operating pressure
        The heat input
        All safety devices
        The water content
        The electrical wiring
        Casing seals"
            }
          },{
            "@type": "Question",
            "name": "what is a standard boiler service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A boiler service is a set of checks and tests which is performed on the boiler. This ensures your boiler is working efficiently and effectively. A good boiler service means that a Gas Safe engineer checks the correct gas flow and pressure."
            }
          },{
            "@type": "Question",
            "name": "How long should a boiler service take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It takes around an hour to complete"
            }
          },{
            "@type": "Question",
            "name": "What maintenance is required for a boiler?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rigorously inspect the heating system and rectify any problems.
        Clean and inspect the heat exchanger of the boiler.
        Ensure all boiler connections and wiring is intact.
        Make sure water pH levels are within the proper range."
            }
          },{
            "@type": "Question",
            "name": "Do I need to maintain my boiler?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Routine maintenance is critical to ensure a boiler system remains safe, reliable, and efficient."
            }
          },{
            "@type": "Question",
            "name": "How do you know when to replace your boiler?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost to install a boiler in the Vancouver area runs around $13,999, but you could pay anywhere from $9,499 to over $19,999."
            }
          },{
            "@type": "Question",
            "name": "How much does it cost to replace a boiler in Canada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Removal of the old boiler. The removal of the current boiler is a typical place installers will start. Flush/Clean."
            }
          },{
            "@type": "Question",
            "name": "What do I need to know when installing a new boiler?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The engineers do a simple chemical flush over several hours for more intensive cleaning. Then, they will adjust the pipework which helps in reconfiguring it to minimize the heat loss. Then the engineer keeps on installing the boiler at the location you want."
            }
          },{
            "@type": "Question",
            "name": "What happens when you get a new boiler installed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The engineers do a simple chemical flush over several hours for more intensive cleaning. Then, they will adjust the pipework which helps in reconfiguring it to minimize the heat loss. Then the engineer keeps on installing the boiler at the location you want."
            }
          },{
            "@type": "Question",
            "name": "What does boiler installation include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Boiler installation means the installation of a boiler. It includes connecting pipes, appurtenances, valves, fittings, firing equipment, flanges, controls, and auxiliaries. The term includes the field assembly of boilers."
            }
          }]
        }`
      }

      </script>
      <CommonBanner bg={Banner} title="Boiler Services" color="#fff" variant="h1" />
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
                                <Image layout='responsive' src={ReapearWaterHeater} alt="Teressen Boiler repairing services" title='Worker Teressen Boiler repairing services' />
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography className='para'>Teressen Boiler repairing services in Canada can help with any problems that arise with your boiler; whether you need boiler replacement or some guidance for boiler installation. We offer the best boiler repairing services that can give you a variety of solutions for your home&apos;s comfort needs.</Typography>
                                <Typography className='para'>We have quality solutions for all your problems and help you solve any issues that come up with your home&apos;s heating system. </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} className="m-0 pt-0">
                              <Box>
                                <Typography className='para'>Also, it is a good idea to repair your home boiler before it breaks down. Hence, boiler repairs should be done by experts like us. So, whether you need a new boiler or want your current one repaired, we are always there for your assistance. Give us a call now!.</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Box>
                                <SectionalHeading variant='h2' simpletext='Boiler repairing and installation services in Canada:' />
                                <Typography className='para'>Teressen heating ltd has been providing expert boiler repair, installation, and boiler maintenance in Canada for years now. As an experienced leader in the home heating industry, Teressen takes care of all your heating problems with top-notched services at affordable prices.</Typography>
                                <Typography className='para'>Quality you can always count on: It is our job to make sure, that your home is always comfortable and warm. We have the best products to ensure you that everything is done right the first time.
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Box>
                                <SectionalHeading variant='h2' simpletext='Quality workmanship is guaranteed:' />
                                <Typography className='para'>We are experts in this industry. So, you can always count on us to give you the best advice about what is best for your home. You can always use the finest products designed with the latest technology.</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Box>
                                <SectionalHeading variant='h2' simpletext='Experts in the heating industry:' />
                                <Typography className='para'>So, if you have any questions related to your boiler repair and installation, then, give us a call instantly. Our experts are ready to assist you in everything.</Typography>
                                <Typography className='para'>Teressen heating ltd specializes in all types of boiler repair and maintenance work. We have a long track record of providing our clients with high-quality workmanship and affordability at relative ease.</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Box>
                                <SectionalHeading variant='h2' simpletext=' Benefits of professional boiler services from Teressen:' />
                                <Typography className='para'>Our professional boiler services ensure that your boiler installation, maintenance, or repair work is done spot-on. Our employees are highly trained and are equipped with all skills. They have the knowledge and understanding of different boiler systems. So, hiring a professional to service your heating system saves you money and time. Also, we are the pioneers in the boiler industry for providing quality, trust, and affordability.</Typography>
                                <Typography className='para'>A properly installed sized boiler system will heat your place and ensure that your utility bills stay low and your system operation is quiet.</Typography>
                                <Typography className='para'>So, do not delay when you notice signs of boiler disrepair. Consult us today!</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Box>
                                <SectionalHeading variant='h2' simpletext='Why choose Teressen boiler maintenance and repair services?' />
                                <Typography className='para'>Teressen delivers top-level products and is a reliable boiler partner to support your home&apos;s safer operation. Just install, a top-of-the-line boiler system in your home to provide you with energy-saving options.</Typography>

                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Our boiler repair and installation services:" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'> Canada can get cold in the winter. So, necessitating a reliable method for home heating is a must. Boilers help in heating your home and heating the water. Hence, Teressen offers the best boiler services in Canada because:
                          </Typography>
                          <List>
                            {
                              [" We have the best boiler installation and replacement: You can get quality performance from your boiler system by ensuring that you have the best products and installation techniques to support it.", " Best boiler repairs: When it comes to boilers, they have a life span between 10 to 15 years. But they need repairs and tune-ups to keep them working. So, choose the best always!"].map(item => <ListItem key={item}>
                                <ListItemIcon>
                                  <CheckCircleOutline className='text--blue' />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                              </ListItem>)
                            }
                          </List>
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
        <PopularService color='red'/>
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  )
}

export default Boiler
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import BoilerInstallationBanner from '../public/boilerInstallation/boilerInstallation.webp'
import Installation from '../public/boilerInstallation/image.webp'
import Image from 'next/legacy/image'
import { CheckCircleOutline } from '@mui/icons-material'
import Link from 'next/link'


const BoilerInstallation = () => {
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
        <title>Boiler Installation Services in Canada | Teressenheating</title>
        <meta name="description" content="Teressen provides boiler installation services for the residential, commercial, industrial, and institutional sectors. We are licensed contractors in Canada." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/boilers-installation/" />
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
                                <Typography className='para'> So, if you are looking for a hassle-free solution to all your <Link href="/heating-services/">heating problems</Link>, contact Teressen today! We take care of all the boiler heating systems and make sure that we provide a reliable service to all our patrons.</Typography>
                                <Typography className='para'>Teressen boiler installation is perfect for those who are looking for an energy-efficient and reliable boiler. Our experts will help you choose the perfect boiler for your home and as per your requirements. With Teressen boiler, you will enjoy years of reliable services at the best prices. </Typography>
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
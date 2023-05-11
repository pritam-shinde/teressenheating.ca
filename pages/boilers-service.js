import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/lennox-hvac/lennox.webp'
import Image from 'next/legacy/image'
import { CheckCircleOutline } from '@mui/icons-material'
import boiler from '../public/boiler/boiler-service.webp'
import Link from 'next/link'

const BoilerService = () => {
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
        <title>Trusted Boiler Installation Service in Canada | Teressen</title>
        <meta name="description" content="Choose Teressen for trusted boiler installation services in Canada. Our experienced technicians provide maintenance and repair. Contact us today" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/boilers-service/" />
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
      <main>
        <CommonBanner bg={Banner} title="Teressen boiler repair and maintenance service: Quality, trust, and affordability assured" color="#fff" variant="h1" />
        <Container maxWidth="xxl" className='px-0'>
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl">
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Image layout='responsive' src={boiler} alt="boiler service" />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>Are you in need of reliable and affordable boiler services for your home? Then, Teressen heating ltd is your expert solution. We are one of the <Link href="/boilers-maintenance/">top-rated boiler maintenance and repair service</Link> providers near you. We are here to help you get quick residential boiler repair services. With over years of experience, we can quickly get the best possible solutions for you and diagnose any issue with your boiler system. So why wait? Call us today for all your boiler-related issues.</Typography>
                            <Typography>Teressen has always been a perfect choice for all your boiler servicing needs in Canada. We are a professional and reliable company which</Typography>
                          </Grid>
                          <Grid item xs={12} className="pt-0 m-0">
                            <Typography className='para'>needs no introduction. We have an extensive experience in the industry, and we make sure that your boiler is up and running quickly. You can also call us today and get a free consultation. Also, make sure that your home is ready with our quick boiler and repair services. Our experts will have your system up and running in no time so that you sit, relax, chill and stay warm all winter long. </Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Boiler system maintenance" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>To keep your boiler unit in good working condition, it is necessary to operate it safely and efficiently. It is also important that basic system maintenance should be performed at regular intervals. As one of the most qualified, reputed, and experienced names in the boiler industry and Canada, you can count on us. You can trust us to provide the best boiler repair services.</Typography>
                          <Typography className='para'>An improper boiler installation can be dangerous and results in serious injury and major damage. Boiler repair and maintenance must be performed by a highly-trained and certified professional. All Teressen technicians are qualified with the knowledge and ability to perform a professional analysis of the home, and building layout, and also ensure water lines are of the appropriate size.</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Teressen best boiler services, maintenance, and repair" variant="h2" align="left" />
                        <Typography className='para'>The process industry like yours depends on heat transfer equipment like steam boilers to get the job done. So, when you need an emergency service, you should call professionals who not only understand the features of your equipment, but also the complex nature of your boiler.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2'>
                      <Container maxWidth="xxl">
                        <Box>
                          <SectionalHeading simpletext="So, why us?" variant="h2" />
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="We have experienced and qualified personnel." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="Installation and erection services for steam boilers and equipment." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="Controls programming" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="Equipment safety and operator training" />
                            </ListItem>
                          </List>
                        </Box>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Signs your boiler needs servicing" variant="h2" />
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>Water leaks:</strong>} secondary="Boiler water is never good. While some homeowners think that they can simply patch leaks up and move on, most boilers have issues like corrosion, broken seals, and poor installation. Leaks should be inspected by a professional technician to restore heat, and prevent future water damage." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>Unusual smelling:</strong>} secondary="If odd smells are coming from your boiler, then you can contact your local boiler technicians. While the pungent smell is not a sign of immediate danger, the smell of natural gas coming from your gas-fuelled boiler is." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>Strange sounds:</strong>} secondary="While some rumbling may cause you to jump in the night, odd furnaces do not present immediate danger. But excessive kettling and whistling can be dangerous and address the limescale build-up." />
                          </ListItem>
                        </List>
                        <Typography className='para'>{`So, next time when you google, about the best "boiler repair services near me", you will always have us by your side.`}</Typography>
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
        <PopularService color="red" />
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quotee" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  )
}

export default BoilerService

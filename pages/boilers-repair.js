 import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/lennox-hvac/lennox.webp'
import Image from 'next/legacy/image'
import { CheckCircleOutline } from '@mui/icons-material'
import boiler from '../public/boiler/worker-repairing-water-heater.webp'
import Link from 'next/link'

const BoilerRepair = () => {
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
        <title>Trusted Boiler Repair Services in Canada | Teressenheating</title>
        <meta name="description" content="Trust Teressen Heating for reliable, efficient, and cost-effective boiler repair services in Canada. Our certified technicians are available 24/7." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/boilers-repair/" />
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
        <CommonBanner bg={Banner} title="Teressen boiler repair service is one of the best boiler repairing services in Canada" color="#fff" variant="h1" />
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
                            <Typography className='para'>Teressen has been providing expert boiler installation, boiler repair, and boiler installation services in Canada for years now. As an experienced leader in the home heating industry, we must provide our customers with a wide variety of <Link href="/boilers-maintenance/">boiler maintenance</Link> and boiler repair services at affordable prices.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="What are boilers?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>{`Boilers heat water is used to produce 'wet heat'. It is then channeled through a network of pipes to provide comfortable and efficient warmth through a business. The average boiler comes in a wide range of sizes to suit any application in efficiency from as low as 81% to high-efficiency which can surpass 90%.`}</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Boiler repairing system" variant="h2" align="left" />
                        <Typography className='para'>To keep your boiler in good working condition; it is mandatory to provide boiler repairing services at relative ease. As one of the most qualified, respected, and experienced names in the industry and Canada, you can always trust Teressen to provide you with the best residential boiler repairing services 24*7.</Typography>
                        <Typography className='para'>An improper boiler repair can be a bit dangerous process resulting in serious injury. It must be performed by a highly-trained and certified professional. All Teressen technicians are qualified with knowledge and their ability to perform a professional analysis of the home will win your heart.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3 bg-grey'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="We keep your boilers running for long" variant="h2" align="left" />
                        <Typography className='para'>Repairing is one of the primary specialties of <Link href="/">Teressen heating ltd</Link>. Our field staff is available 24*7 and has a combined history of literally hundreds of years of service and experience. We can meet the needs of the most complex boiler systems. We also repair or rebuild boilers that exceed OEM standards in less time. Easy access to critical parts allows our boiler repairs to swiftly remedy issues from minor refractory repairs to emergency generator tube bank replacements. And this makes us one of the best boiler repairing industries in the world.</Typography>
                        <Typography className='para'>We have a true understanding of, downtime loss of production and approach repair projects with a sense of urgency. Our on-call boiler repair groups are available 24*7 and can be on-site within hours of your initial call. Our trucks act as rolling boiler parts departments and include the best operational services immediately.</Typography>
                        <Typography className='para'>If your boiler is forced to be down for an extended period, then we also arrange for rental boilers. This helps you to relax and count on us.</Typography>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Why consider us?" variant="h2" align="left" />
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="We have got years of work experience" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="There are no hidden charges" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="We have fully trained experts" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="We guarantee comfort" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="We have exceptional reviews." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="Trained and certified technicians." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary="24*7 services." />
                          </ListItem>
                        </List>
                        <Typography className='para'>We understand that it is not an easy task to find a reliable company in providing thebest boiler repair services. So, when you are looking for a home <Link href="/https://teressenheating.ca/boilers/">boiler company</Link> in Canada, it is important to do your market research and then, find the best option that suits your requirement.</Typography>
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
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  )
}

export default BoilerRepair

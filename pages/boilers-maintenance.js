import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Image from 'next/legacy/image'
import { CheckCircleOutline } from '@mui/icons-material'
import BoilerMaintainanceBanner from '../public/boilerMaintanance/maintainencebg.webp'
import Repair from '../public/boilerMaintanance/image.webp'
import Link from 'next/link'

const BoilerMaintainance = () => {
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
      <title>Boiler Maintenance Services in Canada | Teressenheating</title>
      <meta name="description" content="We offer boiler maintenance service in Canada, including cleaning, inspecting, repairing and replacing oil and gas fired boilers. For more visit our website." />
      <meta name="robots" content="index" />
      <link rel="canonical" href="/boilers-maintenance/" />
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
    <CommonBanner bg={BoilerMaintainanceBanner} title="Quality, trust, and affordable boiler maintenance services" color="#fff" variant="h1" />
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
                              <Image layout='responsive' src={Repair} alt="Repair" title='Repair' />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'> Are you looking for a trusted and affordable boiler maintenance service in Canada? Then you are at the right place. Our technical experts work 24*7 to give you the best boiler maintenance and repair services. We are always here to help you so you do not hesitate to call us at any time. Teressen is the perfect name for all your boiler maintenance problems in Canada. </Typography>
                              <Typography className='para'>Our team of experienced professionals makes sure that we take care of everything, right from inspecting your units to repairing any damage. </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} className="m-0 pt-0">
                            <Box>
                              <Typography className='para'>We understand how crucial is your boiler in maintaining your home&apos;s cooling and heating system. People living in Canada know this all too well, hence they rely on us for the best services around. Our team of experts comes right away and fixes everything for you. So, just call them today and tell them about your boiler maintenance issues.</Typography>
                              <Typography className='para'>Our clients who have experienced boiler maintenance issues know how inconvenient it gets to deal with all the problems alone. Hence, we are your savior and we make sure that everything goes well. Our team of experts takes the plunge and makes sure that you are back up in no time. Our technicians are trained for any problem which you face with your boiler. So, never hesitate to call us if anything comes up with your repair or maintenance issues at home.
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Container>
                  </section>
                  <section>
                  <Container maxWidth='xxl'>
                  <Box mt={3}>
                  <Grid container spacing={3}>
                  <Grid item xs={12}>
                  <box>
                  <SectionalHeading variant='h2' simpletext='No need to worry, because Teressen is your savior:'/>
                  <Typography className=''> When it comes to us, we are one of the most experienced companies in Canada. We have years of expertise in all things related to house heating problems. We offer our clients affordably-priced options for any model they might be looking at. We are always there to guide your decision-making process so that whatever choice suits you, you go with the best. So, next time when you have boiler services near you, you can count on us. We are the most trusted boiler repair partner who takes care of everything. </Typography>
                  </box>
                  </Grid>
                  </Grid>
                  </Box>
                 
                  </Container>
                  </section>
                  <section className='mt-md-3 mt-2 bg--grey'>
                    <Container maxWidth="xxl">
                      <Box p={3}>
                        <SectionalHeading simpletext="Why choose our boiler maintenance services?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Typography className='para'>As a leading <Link href="/commercial-hvac/">HVAC services expert</Link>, we offer one complete and cost-effective solution for boiler maintenance and repair. The reasons, why you must choose us are as follows:
                        </Typography>
                        <List>
                          {
                            ["All boiler maintenance work is done by using the latest technology.", "There are shorter lead times.", "We have certified rebuild technicians", "We give inspection reports.", "There is a warranty included."].map(item => <ListItem key={item}>
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
             
                  <section className='mt-md-3 mt-2'>
                    <Container maxWidth="xxl">
                      <Box>
                        <SectionalHeading simpletext="Long-term benefits of Teressen's boiler maintenance and repair services:" variant="h2" />
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary='Having an authorized boiler maintenance and repair expert evaluates your equipment. You may avoid explosions, hot flue gas leaks, and explosions from the boiler.'/>
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary='Annual maintenance through a good boiler repair and maintenance expert can help keep your boiler functioning effectively for a longer time. Also, a well-trained technician can prevent a boiler from generating excessive waste and reduce your energy bills.'/>
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary='Frequent boiler maintenance keeps your system running well for a longer period. '/>
                          </ListItem>
                          <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutline className='text--blue' />
                          </ListItemIcon>
                          <ListItemText primary='Continued operation of a unit results in hefty repair billing. So, you can avoid that with our regular boiler maintenance services.'/>
                        </ListItem>
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

export default BoilerMaintainance
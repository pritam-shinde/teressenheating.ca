import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { CommonBanner, ServiceCommonSidebar, SectionalHeading } from '../components/components';
import Heating from '../public/heating-service/heating-bg.webp';
import HeaterMachine from '../public/heating-service/heating.webp'
import { Container, Box, Grid, Typography } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { List, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import Image from 'next/legacy/image'
import Link from 'next/link'

const HeatingService = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "How often should a heating system be serviced? ", ans: "You should service your HVAC system once a year. If you have standard central AC, then these units should be maintained, each year.", list: null },
    { id: "faq-2", que: "How do I maintain my heating system?", ans: "", list: ["Try to replace filters regularly.", "Inspectecting the Air Ducts and the Openings.", " Maintaining Fan, Bearings, and Belts.", "Maintaining Other HVAC Accessories.", " By following our Spring/Summer Maintenance Tips or Schedule"] },
    { id: "faq-3", que: "How much does it cost to install heating?", ans: "The overall cost of heating installation of a new heating system depends on many factors. At a minimum, installing a new heating system can cost around $2,000 which is very basic. The more work that’s involved, like additional ductwork or repairs, the more the price can increase.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

 

  return (
    <>
     <Head>
        <title>Affordable Heating Maintenance Services | Teressenheating </title>
        <meta name="description" content="Teressen offers high quality heating maintenance services. Our experienced technicians provide thorough inspections, repairs and preventive maintenance." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/heating-services/" />
      </Head>
      <script type="application/ld+json">
        {
          `{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "How often should a heating system be serviced?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You should service your HVAC system once a year. If you have standard central AC, then these units should be maintained, each year."
              }
            },{
              "@type": "Question",
              "name": "How do I maintain my heating system?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Try to replace filters regularly.
          Inspecting the Air Ducts and the Openings.
          Maintaining Fan, Bearings, and Belts.
          Maintaining Other HVAC Accessories.
          By following our Spring/Summer Maintenance Tips or Schedule"
              }
            },{
              "@type": "Question",
              "name": "How much does it cost to install heating?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The overall cost of heating installation of a new heating system depends on many factors. At a minimum, installing a new heating system can cost around $2,000 which is very basic. The more work that’s involved, like additional ductwork or repairs, the more the price can increase."
              }
            }]
          }`.replace(/&quot;/g, '\\"')

        }
      </script>
    

      <script type="application/ld+json">
        {
          `{"@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Heating Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Teressen Heating & Air Conditioning",
            "image": "https://teressenheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fheating.59f11898.webp&w=1920&q=75",
            "@id": "https://teressenheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fheating.59f11898.webp&w=1920&q=75",
            "url": "https://teressenheating.ca/heating-services/",
            "telephone": "+1-604-363-6622",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2025 Willingdon Ave unit 900",
              "addressLocality": "Burnaby",
              "addressRegion": "British Columbia",
              "postalCode": "V5C 0J3",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 49.265842,
              "longitude": -123.0035841
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/profile.php?id=100088431184715",
              "https://twitter.com/BaymanShawqi",
              "https://www.pinterest.com.au/teressenheating/"    
            ]
            }
          }`
        }
      </script>

      <main>
        <CommonBanner bg={Heating} title="Heating Services" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl" className='px-0'>
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                      <section>
                        <Container maxWidth="xxl">

                          <Box mt={3}>
                            <Grid container spacing={5}>
                              <Grid item xs={12} md={6}>
                                <Box style={{ textAlign: 'center' }}>
                                  <Image src={HeaterMachine} alt="Heating Sysytem" title='Heating Sysytem' style={{ maxWidth: '70%' }} layout="responsive" />
                                </Box>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Box>
                                  <SectionalHeading simpletext="Providing the best heating maintenance services" variant="h2" />
                                  <Typography className='para'>Teressen heating services has been providing expert heating services in Canada for years. Our clients call us every day to meet their needs for emergency heating maintenance services, heating repairs, and cooling and heating system installation services. We have a group of trained technicians who take care of all your heating and maintenance issues and help you with the best of everything. Our factory-trained experts provide reliable heating maintenance and installation services for all brands such as boilers, furnaces, heat pumps, and yet more.</Typography>

                                </Box>
                              </Grid>
                              <Grid item xs={12} className="m-0 pt-0">
                                <Box>
                                  <SectionalHeading variant='h2' simpletext='What kind of heating system is available at your home?' />
                                  <Typography className='para'> So, if you are calling us about the heating system installation, maintenance, or replacement, it is always important for us to know what kind of heating system you have. It is because we can send the right expert with the right parts and types of machinery to complete your repairing requirement efficiently.</Typography>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Container>
                      </section>
                      <section className='mt-md-3 mt-2'>
                        <Container maxWidth="xxl">
                          <Box>
                            <SectionalHeading variant='h3' simpletext='Licensed and insured HVAC services:' />
                            <Typography className='para'>Before the chill of fall sets in it is time to think about servicing your furnace. When winter arrives, it is mandatory to look after your furnace maintenance so that it will keep you warm. At <Link href="/">Teressen heating ltd</Link>, we have designed our furnace maintenance services and total comfort tune-up with people like you in mind. Hence, for furnace maintenance services, you simply, call us and we will be right there for your quick assistance.</Typography>
                            <Typography className='para'>During this call, we will audit your furnace for repair frequency, age, overall comfort, and energy efficiency. Our quality maintenance services include:</Typography>

                            <List className='ps-m-5 ps-4'>
                              {
                                ["A complete check-up of your furnace.", "Adjustment of controls.", "Inspect all your furnace components.", "And professional cleaning."].map(item => <ListItem key={item}>
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
                            <SectionalHeading variant='h3' simpletext='Boiler services:' />

                            <Typography className='para'>If you want to keep your home warm and cozy, then your boiler maintenance should be your top priority. Whether you need a new heating system or need updates and repairs to your current boiler, then we are here to make you go through various options. Usually, there are three choices when it comes to boilers:</Typography>


                            <List className='ps-m-5 ps-4'>
                              {
                                ["Oil boiler", "Gas boiler.", "Electric boiler."].map(item => <ListItem key={item}>
                                  <ListItemIcon>
                                    <CheckCircleOutline className='text--blue' />
                                  </ListItemIcon>
                                  <ListItemText primary={item} />
                                </ListItem>)
                              }
                            </List>
                            <SectionalHeading variant='h4' simpletext='How often do you need our boiler services?' />

                            <Typography className='para'>If you already have a boiler installed at your home, then you need to check that it is performing effectively by scheduling yearly maintenance. Boilers begin to lose their efficiency as they get old. Also, when you call us, we can identify the potential issues you have in the boilers and fix them before winter.</Typography>
                            <SectionalHeading variant='h4' simpletext='Call Teressen heating ltd to discuss your boiler heating problems:' />

                            <Typography className='para'>From furnaces to boilers to heat pumps, you have so many options to choose from when it comes to keeping your space comfortable. You need to select a heating system that works according to your city&apos;s climate, living space, and budget. So, when you call our heating experts we will review your requirements and help you get the perfect boiler for your home. Our experts can also perform reliable boiler repair and maintenance when needed.</Typography>
                          </Box>
                        </Container>
                      </section>

                      <section className='mt-md-3 mt-4'>
                        <Container maxWidth="xxl">
                          <Box>
                            <SectionalHeading variant="h3" simpletext="Heat Pump" />
                            <SectionalHeading variant="h4" simpletext="Teressen heat pump installation services at their best:" />

                            <Typography className='para'>If you are looking to install a heating system or replace your furnace with something efficient, then an HVAC heat-pumping system is always a great option. You can count on our experienced team, to install the best heat pump.</Typography>
                            <SectionalHeading variant="h4" simpletext={'Our heating pumping services:'} />

                            <List className='ps-m-5 ps-4'>
                              <ListItem>
                                <ListItemIcon>
                                  <CheckCircleOutline className='text--blue' />
                                </ListItemIcon>
                                <ListItemText primary={<strong>Air-source heat pumping system: </strong>} secondary={'These units transfer heat from the air outside and move it throughout your home.'} />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <CheckCircleOutline className='text--blue' />
                                </ListItemIcon>
                                <ListItemText primary={<strong>Geothermal heat pumping system: </strong>} secondary={'These systems extract cold and warm energy from the earth and then transfer it into your home.'} />
                              </ListItem>
                            </List>

                            <SectionalHeading variant="h4" simpletext={' Heat pumping installation, and replacement services:'} />
                            <Typography className='para'>Depending on whether you are installing an air-source heat pump or a geothermal heat pump, the installation process may take a single afternoon or several weeks. This is because installing an air-source <Link href="/heat-pump/">heat pump</Link> is simple just like installing an air conditioner. But a geothermal heat pump has a technical approach. It requires installation below the ground. So, the first thing that we do is check for your installation requirement first and then start our installation process.
                            </Typography>
                            <Typography className='para'>Also, if you are looking for a heat-pumping replacement, our technicians will be there to guarantee you how your new installation works. Our team is continuously trained on modern systems so that they can effectively replace filters, valves, and refrigerants.</Typography>
                          </Box>
                        </Container>
                      </section>
                      <section className='mt-md-3 mt-4'>
                        <Container maxWidth="xxl">
                          <Box>
                            <SectionalHeading variant="h3" simpletext="Radiator repairing and replacement services:" />

                            <Typography className='para'>Radiators are an efficient way to heat your space. But when one unit breaks, your plumbing, boiler, and comfort can suffer. So, if you are struggling with improper heating from one or more of your radiators, then you can count on us.
                            </Typography>
                            <SectionalHeading variant="h4" simpletext={'Our home radiator repairing services:'} />
                            <Typography className='para'> If you see that your radiator system is leaking and not heating correctly, or smell, then you need a repair. Yes, or repairing services might differ. But we do repairs in the following cases:</Typography>

                            <List className='ps-m-5 ps-4'>
                              {
                                [" There is a malfunctioning thermostat.", "There are rusty exteriors.", "There is faulty wiring.", "There is a system imbalance.", "There is trapped air."].map(item => <ListItem key={item}>
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
            </Grid>
          </Container>
        </section>
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

export default HeatingService

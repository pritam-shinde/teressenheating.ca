import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Banner from '../public/financing-opt/financing-bg.webp'
import { CheckCircleOutline, Circle } from '@mui/icons-material'
import Link from 'next/link'


const FinancingOption = () => {

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
        <title>Easy Financing Options for HVAC Services | Teressenheating</title>
        <meta name="description" content="Teressen heating has financing options to make it easy for you to get the HVAC services you need. We offer flexible payment plans & competitive interest rates. " />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/financing-option/" />
      </Head>
      <script type="application/ld+json">
      {
        `{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Financing Option ",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Teressen Heating & Air Conditioning",
          "image": "https://teressenheating.ca/_next/static/media/blue-logo.6b27c1ae.svg",
          "@id": "https://teressenheating.ca/_next/static/media/blue-logo.6b27c1ae.svg",
          "url": "https://teressenheating.ca/financing-option/",
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

      <CommonBanner bg={Banner} title="Teressen's easy financing option that will leave you stressed-free" color="#fff" variant="h1" />
      <main>
        <Container maxWidth="xxl" className='px-0'>
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl">
                        <Typography className='para'>We understand how important it is when comfort comes at a cost. It makes us easier to cover the costs which are associated with installing, servicing, and replacing your HVAC systems. Our relationship with <Link href="/">Teressen</Link> makes it possible for our clients to finance these expenses so that they do not have to deal with any delays</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2 bg--grey'>
                      <Container maxWidth="xxl">
                        <Box p={3}>
                          <SectionalHeading simpletext="Our financing options" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>With our financial option you will enjoy the following benefits:</Typography>
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="Up to 100% financing for all your home comfort needs" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="No down payment is needed." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>We have a variety of financing offerings which includes</strong>} />
                            </ListItem>
                            <List className='ps-md-4 ps-3'>
                              <ListItem>
                                <ListItemIcon>
                                  <Circle />
                                </ListItemIcon>
                                <ListItemText primary="Deferral programs, with no payment and no interest during the deferral period." />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <Circle />
                                </ListItemIcon>
                                <ListItemText primary="We have low monthly payment programs which are of everyone's interest." />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <Circle />
                                </ListItemIcon>
                                <ListItemText primary="We have equal payment programs with no interest" />
                              </ListItem>
                            </List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<><strong>Providing open load-</strong><span> You can pay off the entire loan at any time without penalties</span></>} />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="We have an easy set-up direct transfer facility from your bank account for payment." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="We take up to 10 years to pay" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary="We make sure that this is personal and confidential" />
                            </ListItem>
                          </List>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-3'>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="What to expect from Teressen?" variant="h2" align="left" />
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>Scheduling an in-home appointment:</strong>} secondary="You can call us for a free in-home estimate which is easy. An expert will come to your home and discuss all your comfort needs." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>Consulting and choosing an option:</strong>} secondary="You can call us for a free in-home appointment with an expert who will come to your home and discuss your needs." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline className='text--blue' />
                            </ListItemIcon>
                            <ListItemText primary={<strong>Installation Day:</strong>} secondary="We remove your old furnace and prepare and install the new devices. Once finished, we make sure that everything is working properly." />
                          </ListItem>
                        </List>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl">
                        <SectionalHeading simpletext="Investing in your comfort is easy and quick" variant="h2" />
                        <Typography className='para'>Your comfort is something that matters to us. So, we make it easy to invest in our <Link href="/boilers/">installation, repair, and replacement services</Link>. We know how important it is to protect your home from extreme heat damage and cold. Also, we know that HVAC repairs and the need to replace systems are rarely planned expenses. So, we believe that you should not have to wait to gather the funds which are required to restore your HVAC systems to serviceable conditions.</Typography>
                        <Typography className='para'>When unexpected expenses arise that negatively impact your safety and comfort, we would recommend you look for solutions that will restore your comfort easily and conveniently.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-3 mt-2'>
                      <Container maxWidth="xxl">
                        <Box>
                          <SectionalHeading simpletext="Why choose us?" variant="h2" />
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>HVAC services</strong>} secondary="We provide same day service, with on-time and reliable technicians. We have a no-hidden charges policy and help you with free estimates of installation services." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>24*7 Emergency services</strong>} secondary="We deal in providing a wide range of services all over the Canadian region for a long time. For all kinds of HVAC work, please feel free to call us anytime, without keeping any doubt in mind." />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircleOutline className='text--blue' />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Our service for all brands</strong>} secondary="We do services for all brands like Rheem, Goodman, Carrier, Lennox, and Trane." />
                            </ListItem>
                          </List>
                          <Typography className='para'>Teressen professional furnace installation services are fast and affordable. You can call us 24*7 to service all your major brands. We are a one-stop destination for your professional furnace installation services that take care of everything without any hidden charges. All our technicians and installers are well-groomed and provide you with the best competitor price match guarantee.</Typography>
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
        <PopularService color="red" />
        <HighlySkilled />
        <Testimonial testimonialArr={testimonial} />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
        <BrandSlider />
      </main>
    </>
  )
}

export default FinancingOption

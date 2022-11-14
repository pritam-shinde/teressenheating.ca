import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FeaturedHeatingServices, HighlySkilled, PopularService, Testimonial, FaqAndForm, BrandSlider } from '../sections/sections'
import { CommonBanner, SectionalHeading, ServiceCommonSidebar } from '../components/components'
import Image from 'next/legacy/image'
import { CheckCircleOutline } from '@mui/icons-material'
import BoilerMaintainanceBanner from '../public/boilerMaintanance/maintainencebg.webp'
import Repair from '../public/boilerMaintanance/image.webp'

const BoilerMaintainance = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const arrayFaq = [
    { id: "faq-1", que: "How do you maintain a heating and cooling system?", ans: "Here are a few tips on how you can maintain your home heating systems:." ,list:["Looking after your heating pump: Always schedule a tune-up before winter because there are chances that your heat pump might have got some damage during the last cooling season.","Knowing your heating system's thermostat settings: Make sure that you always know three major thermostat settings-heating, cooling, and emergency heating.","Cleaning the ducts: It is always recommended to check your heating system ducts every year. Duct cleaning is required in cases like pets, water damage, smoking, or reconstruction of your property."]},
    { id: "faq-2", que: "Can you combine heating and cooling system?", ans: "Yes, you can combine a cooling and heating system. Through this, you can save a lot of money and space with one unit. However, if you have existing systems, then you will be able to replace them with a new setup.", list: null },
    { id: "faq-3", que: "Should I leave my heat pump on all the time?", ans: "Heat pumps are an effective way to use electricity to heat your home during the winter. So, leaving them running day and night is not an economically feasible option. You should always switch off your heat pumps when you do not need them.", list: null },
    { id: "faq-4", que: "Can you use the same ducts for heating and cooling?", ans: "Yes, you can always use an add-on refrigerated cooling system as an add-on component to your ducted gas heating system. This allows you to run refrigerated air conditioning with the help of the same ducting and outlet systems.", list: null },
    { id: "faq-5", que: "How does geothermal heating and cooling work?", ans: "Geothermal heating works by moving temperature-conducting fluid through an underground loop of pipes beneath. This allows the fluid to collect the thermal energy which is deposited in the earth from the sun.", list: null },
    { id: "faq-6", que: "How does ductless heating and cooling work?", ans: "It works by using heat exchanger coils to move warm air from one location to another. During winter, the heat pump draws warm air from outside your home to increase temperatures inside. During the summer, the heat pump reverses the process, passing out warm air from your home.", list: null },
    { id: "faq-7", que: "How Much Does HVAC Installation Cost?", ans: "The cost to replace an HVAC system varies from $5,000 to $10,000, which comes to around $25 to $60 per square foot of coverage, depending on the brand and size. For a new installation, you might have to pay $1,500 to $12,500.", list: null },
    { id: "faq-8", que: "How Long Does HVAC Installation take?", ans: "Usually, it takes three to five days for installation.", list: null },
    { id: "faq-9", que: "	What Kinds of Warranties Come with My New HVAC Installation?", ans: "It has the following warranties:", list: ["HVAC Manufacturer Warranty.","HVAC Extended Warranty.","Homeowners Insurance.","Home Warranty"] },
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
                        <Typography className='para'>As a leading HVAC services expert, we offer one complete and cost-effective solution for boiler maintenance and repair. The reasons, why you must choose us are as follows:
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
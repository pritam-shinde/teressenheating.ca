import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import Banner from '../public/areas/area2.webp'
import { CertificationSlider, Different, Locations, FaqAndForm } from '../sections/sections'

const ServiceArea = () => {

  const differentList = ["Licensed technicians.", "We give competitor price match guarantee", "We service all major brands and areas.", "We give you 24*7*365 days of assistance", "We have over 2 decades of work experience.", "We assure comfort."]

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
        <title>Trusted Heating Service in All Areas of Canada | Teressenheating</title>
        <meta name="description" content="The Teressen Heating is Canada's trusted heating service company. We provide quality heating installation, repair, and maintenance services in all areas of Canada." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/service-areas/" />
      </Head>
      <main className="page-area">
        <CommonBanner bg={Banner} title="Areas We Served" variant="h1" color="#fff" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <SectionalHeading simpletext="Teressen's certified and premium services for all our clients" variant="h2" />
                  <Typography className='para'> Teressen is an established full-service heating provider that provides high-efficiency heating services to all our clients. We work hard to make sure that we provide a superior level of customer support and heating services to all.</Typography>
                  <Typography className='para'>We are a member of the BC Safety Authority, so you can count on us for anything. We are fully equipped with licensed and professional services with experienced technicians. Our trained experts provide reliable services on-site and are well-educated about all brands of boilers, heat pumps, furnaces, and more. We also deal in safety inspection, repair services, heating maintenance, installation, and cleaning services of hot water tanks, boilers, air ducts, and furnaces.</Typography>
                  <Typography className='para'>Our superior heating services have gained appreciation because everything is done on time. Our clients are also impressed with our friendly, reliable and efficient services. We provide warm support and quality services from start to end.</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <Different title="Why Choose Us?" titleVariant="h2" list={differentList} titleAlign="center" />
        <CertificationSlider />
        <Locations />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
      </main>
    </>
  )
}

export default ServiceArea
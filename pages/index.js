import React from 'react'
import Head from 'next/head'
import { About, Appointment, BrandSlider, Facilities, FaqAndForm, Hero, Service, Testimonial, WhyChoose } from '../sections/sections'

const index = () => {

  const arrayFaq = [
    { id: "faq-1", que: "How do you maintain a heating and cooling system?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability." },
    { id: "faq-2", que: "Can you combine heating and coling system?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability." },
    { id: "faq-3", que: "Should I leave my heat pump on all the time?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability." },
    { id: "faq-4", que: "Can you use the same ducts for heating and cooling?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability." },
    { id: "faq-5", que: "How does geothermal heating and cooling work?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability." },
    { id: "faq-6", que: "How Long Does HVAC Installation take?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability." },
    { id: "faq-7", que: "What Kinds of Warranties Come with My New HVAC Installation?", ans: "Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability." }
  ]

  return (
    <>
      <Head>
        <title>Home - teressenheating.ca</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/" />
      </Head>
      <main>
        <Hero />
        <Facilities />
        <About />
        <Service />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quot" formVariant="h2" formtitleAlign="center" />
        <WhyChoose />
        <BrandSlider />
        <Appointment />
        <Testimonial />
      </main>
    </>
  )
}

export default index
import Head from 'next/head'
import JsonLd from '../components/JsonLd'
import { About, Appointment, BrandSlider, Facilities, FaqAndForm, Hero, Service, Testimonial, WhyChoose } from '../sections/sections'

const index = () => {
  const arrayFaq = [
    { id: "faq-1", que: "What HVAC services do you provide in Burnaby?", ans: "We offer complete HVAC services Burnaby, including heating, cooling, furnace repairs, heat pump installation, air conditioning, and regular maintenance for homes and businesses.", list: null },
    { id: "faq-2", que: "Are you a licensed HVAC contractor in Burnaby?", ans: "Yes, we are a trusted HVAC contractor in Burnaby, providing professional installation, repair, and maintenance services backed by experienced technicians.", list: null },
    { id: "faq-3", que: "Do you offer emergency heating and cooling services?", ans: "Yes, our emergency heating and cooling service is available to help restore your comfort quickly when your heating or cooling system breaks down.", list: null },
    { id: "faq-4", que: "Can you install a new air conditioning system?", ans: "Absolutely. As an experienced air conditioning contractor, we install energy-efficient AC systems that keep your home comfortable throughout the summer.", list: null },
    { id: "faq-5", que: "Why choose your HVAC company in Burnaby?", ans: "As a reliable HVAC company Burnaby residents trust, we focus on quality workmanship, honest pricing, and dependable customer service on every project.", list: null },
    { id: "faq-6", que: "Do you provide HVAC maintenance services?", ans: "Yes, our HVAC service includes routine inspections, cleaning, and tune-ups to improve efficiency, reduce breakdowns, and extend your system's lifespan.", list: null },
    { id: "faq-7", que: "What types of heating systems do you service?", ans: "Our HVAC services cover furnaces, heat pumps, boilers, and other residential heating systems from most major manufacturers.", list: null },
    { id: "faq-8", que: "How quickly can an HVAC technician visit my Burnaby property?", ans: "We strive to provide prompt appointments for all HVAC services Burnaby, with same-day availability offered whenever possible for urgent issues.", list: null },
    { id: "faq-9", que: "Do you serve areas outside Burnaby?", ans: "Yes, while we're a leading HVAC contractor Burnaby, we also provide professional HVAC services to nearby communities across the Metro Vancouver area.", list: null },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  return (
    <>
      <Head>
        <title>Airlinx Heating and Cooling Services - HVAC Contractor Burnaby</title>
        <meta name="description" content="Looking for a top HVAC contractor in Burnaby? Airlinx Heating offers expert heating, AC, and boiler services with 24/7 emergency support. Contact today!" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://airlinxheating.ca/" />
      </Head>

      <JsonLd faqArr={arrayFaq} />

      <main>
        <Hero />
        <Facilities />
        <About />
        <Service />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="left" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="left" />
        <WhyChoose />
        <BrandSlider />
        <Appointment />
        <Testimonial testimonialArr={testimonial} />
      </main>
    </>
  )
}

export default index

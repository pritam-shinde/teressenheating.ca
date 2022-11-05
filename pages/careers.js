import { Box, Container, Grid, Typography, Button } from '@mui/material'
import Head from 'next/head'
import React, {useState} from 'react'
import { CommonBanner, SectionalHeading } from '../components/components'
import Banner from '../public/career/career-bg.webp'

const Careers = () => {
  const [active, setActive] = useState('faq-0')

  const faqArr = [
    { id: "position-1", que: "HVAC Service Technician", ans: "", list: null },
    { id: "position-2", que: "HVAC install Helpers", ans: "", list: null },
    { id: "position-3", que: "Duct Cleaning Specialists", ans: "", list: null },
    { id: "position-4", que: "Air Conditioner Technician", ans: "", list: null },
    { id: "position-5", que: "Heating Technician", ans: "", list: null },
    { id: "position-6", que: "HVAC install Helpers", ans: "", list: null },
  ]

  return (
    <>
      <Head>
        <title>Career - teressenheating.ca</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/career/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title="Career" color="#fff" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Box >
                    <SectionalHeading blacktext="Explore Current" blueText="Job Opportunities" variant="h2" />
                    <Box mb={3}>
                      <SectionalHeading simpletext="Lorem ipsum dolor sit amet" variant="h3" />
                      <Typography className='para'>Lorem ipsum aokrstamet, consecteturosipscinget.Curabear vehieua augue rutnam tempor odio in sceerbqae nbn. Nam ut dolor qudolor sogttis occuumean ut ed ibero As iuet ut ndic non conals usce commodo tempus hendrert Vamus placerat, mi et scelescue tincidunt magna er congue nuka sed fementum bunpis mi at ipsum. Morti mavima ex sit omet interdum impend et Phalus ma diom nule Fusce vestibukum aru nec euismod susciit. hiam manimus tristique velt sk amet ettichur</Typography>
                    </Box>
                    <Box>
                      <SectionalHeading simpletext="Lorem ipsum dolor sit amet" variant="h3" />
                      <Typography className='para'>Lorem ipsum aokrstamet, consecteturosipscinget.Curabear vehieua augue rutnam tempor odio in sceerbqae nbn. Nam ut dolor qudolor sogttis occuumean ut ed ibero As iuet ut ndic non conals usce commodo tempus hendrert Vamus placerat, mi et scelescue tincidunt magna er congue nuka sed fementum bunpis mi at ipsum. Morti mavima ex sit omet interdum impend et Phalus ma diom nule Fusce vestibukum aru nec euismod susciit. hiam manimus tristique velt sk amet ettichur</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <SectionalHeading blacktext="Opening" blueText="Position" variant="h2" />
                        <Box mt={3}>
                          {
                            faqArr ? <Box mt={3}>
                              <div className="accordion" id="accordionExample">
                                {
                                  faqArr.map((item, index) => <div key={`faq-${index}`} className="accordion-item">
                                    <h3 className="accordion-header" id={`heading${index}`}>
                                      <button onClick={() => setActive(`faq-${index}`)} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                        <strong className='ms-3 mb-0'>{item.que}</strong>
                                      </button>
                                    </h3>
                                    <div id={`collapse${index}`} className={`accordion-collapse collapse ${active.split('faq-')[1] == index ? 'show' : null} ps-4`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <Typography className="para">{item.ans}</Typography>
                                      </div>
                                    </div>
                                  </div>)
                                }
                              </div>
                            </Box> : null
                          }

                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <SectionalHeading blacktext="Apply" blueText="Now" variant="h2" />
                        <Box mt={3}>
                          <form method='post' action='https://formsubmit.co/adityaj.nonstop@gmail.com' encType="multipart/form-data">
                            <div className='row'>
                              <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                  <input type="text" name="Firstname" className='form-control rounded-pill' placeholder='Firstname' required />
                                </div>
                              </div>
                              <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                  <input type="text" name="Lastname" className='form-control rounded-pill' placeholder='Lastname' required />
                                </div>
                              </div>
                              <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                  <input type="email" name="Email" className='form-control rounded-pill' placeholder='Email' required />
                                </div>
                              </div>
                              <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                  <input type="tel" name="Phone" className='form-control rounded-pill' placeholder='Phone No.' required />
                                </div>
                              </div>
                              <div className='col-12'>
                                <div className='form-group'>
                                  <input type="text" name="Applying_For" className='form-control rounded-pill' placeholder='Applying for' required />
                                </div>
                              </div>
                              <div className='col-12'>
                                <div className='form-group'>
                                  <label className="uploadFile">Upload Resume
                                    <input type="file" name="Resume" className='form-control rounded-pill d-none' placeholder='Upload Resume' required />
                                  </label>
                                </div>
                              </div>
                              <div className='col-12'>
                                <Button type="submit" className='blueFilledBtn text-white'>Submit</Button>
                              </div>
                            </div>
                          </form>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Careers
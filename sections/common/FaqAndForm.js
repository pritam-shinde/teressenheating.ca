import { CheckCircle, LocalPhoneOutlined, MailOutline } from '@mui/icons-material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { AppointmentForm } from '../../components/components';
import SectionalHeading from '../../components/SectionalHeading/SectionalHeading';

const FaqAndForm = ({
  faq,
  form,
  faqBlackTitle,
  faqBlueTitle,
  faqtitleAlign,
  faqVariant,
  faqArr,
  faqSimpleTitle,
  formBlackTitle,
  formBlueTitle,
  formVariant,
  formtitleAlign,
  formSimpleTitle,
  address,
  addressBlackTitle,
  addressBlueTitle,
  addressVariant,
  addresstitleAlign,
  addressSimpleTitle,
}) => {
  const [active, setActive] = useState('faq-0');

  return (
    <>
      <section className='my-3'>
        <Container maxWidth='xxl'>
          <Grid container>
            <Grid item xs={12} md={10} className='mx-auto'>
              <Box py={5}>
                <Grid container spacing={3}>
                  {address ? (
                    <Grid item xs={12} md={6}>
                      <Box>
                        {addressBlackTitle ? addressBlueTitle ? (
                          <SectionalHeading variant={addressVariant} blacktext={addressBlackTitle} blueText={addressBlueTitle} align={addresstitleAlign} />
                        ) : null : null}

                        {addressSimpleTitle ? (
                          <SectionalHeading variant={addressVariant} align={addresstitleAlign} simpletext={addressSimpleTitle} />
                        ) : null}
                        <Box mt={3}>
                          <Typography variant='h3'>Airlinx Heating & Air Conditioning</Typography>
                          <Box mt={3}>
                            <List>
                              {[
                                { id: 'contact-1', icon: <HomeOutlinedIcon className='text--blue me-3' style={{ fontSize: '2rem' }} />, text: '201-3701 Hastings St, Burnaby, BC V5C 2H6, Canada' },
                                { id: 'contact-2', icon: <LocalPhoneOutlined className='text--blue me-3' style={{ fontSize: '2rem' }} />, text: '604-363-6622' },
                                { id: 'contact-3', icon: <MailOutline className='text--blue me-3' style={{ fontSize: '2rem' }} />, text: 'info@airlinxheating.ca' }
                              ].map(item => (
                                <ListItem key={item.id} className='m-0 p-0 mb-3'>
                                  <ListItemIcon>{item.icon}</ListItemIcon>
                                  <ListItemText primary={<strong>{item.text}</strong>} />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        </Box>
                      </Box>
                      <Box p={1} position="relative">
                        <a href="https://www.google.com/maps/place/3701+Hastings+St+Ste+201,+Burnaby,+BC+V5C+2H6,+Canada" target="_blank" rel="noreferrer">
                          <Box style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, cursor: 'pointer' }}></Box>
                          <iframe
                            title='Google Maps Location of Airlinx Heating & Air Conditioning'
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.6859770496226!2d-123.02220399999999!3d49.281569999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548670c55ab2981b%3A0x1c3dfe02e4635069!2s3701%20Hastings%20St%20Ste%20201%2C%20Burnaby%2C%20BC%20V5C%202H6%2C%20Canada!5e1!3m2!1sen!2sin!4v1787116886968!5m2!1sen!2sin'
                            width='100%'
                            height='300px'
                            style={{ border: 0 }}
                            allowFullScreen=''
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                          ></iframe>
                        </a>
                      </Box>
                    </Grid>
                  ) : null}
                  {faq ? (
                    <>
                      <Grid item xs={12} md={6}>
                        <Box>
                          {faqBlackTitle ? faqBlueTitle ? (
                            <SectionalHeading variant={faqVariant} blacktext={faqBlackTitle} blueText={faqBlueTitle} align={faqtitleAlign} />
                          ) : null : null}

                          {faqSimpleTitle ? (
                            <SectionalHeading variant={faqVariant} align={faqtitleAlign} simpletext={faqSimpleTitle} />
                          ) : null}

                          {faqArr ? (
                            <Box mt={3}>
                              <div className='accordion' id='accordionExample'>
                                {faqArr.map((item, index) => (
                                  <div key={`faq-${index}`} className='accordion-item'>
                                    <h3 className='accordion-header' id={`heading${index}`}>
                                      <button
                                        onClick={() => setActive(`faq-${index}`)}
                                        className='accordion-button'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target={`#collapse${index}`}
                                        aria-expanded='true'
                                        aria-controls={`collapse${index}`}
                                        style={{ zIndex: 0 }}
                                      >
                                        <strong className='ms-3 mb-0'>{item.que}</strong>
                                      </button>
                                    </h3>
                                    <div
                                      id={`collapse${index}`}
                                      className={`accordion-collapse collapse ${active.split('faq-')[1] == index ? 'show' : null} ps-4`}
                                      aria-labelledby={`heading${index}`}
                                      data-bs-parent='#accordionExample'
                                    >
                                      <div className='accordion-body'>
                                        {item.ans !== null ? (
                                          <Typography className='para'>{item.ans}</Typography>
                                        ) : null}
                                        {item.list !== null ? (
                                          <List className='p-0 m-0'>
                                            {item.list.map((listItem, num) => (
                                              <ListItem className='ps-0' key={`faq-${index}-list-${num}`}>
                                                <ListItemIcon>
                                                  <CheckCircle />
                                                </ListItemIcon>
                                                <ListItemText primary={listItem} />
                                              </ListItem>
                                            ))}
                                          </List>
                                        ) : null}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </Box>
                          ) : null}
                        </Box>
                      </Grid>
                    </>
                  ) : null}
                  {form ? (
                    <Grid item xs={12} md={6}>
                      <Box>
                        {formBlackTitle ? formBlueTitle ? (
                          <SectionalHeading variant={formVariant} blacktext={formBlackTitle} blueText={formBlueTitle} align={formtitleAlign} />
                        ) : null : null}

                        {formSimpleTitle ? (
                          <SectionalHeading variant={formVariant} align={formtitleAlign} simpletext={formSimpleTitle} />
                        ) : null}
                        <Box p={2}>
                          <AppointmentForm />
                        </Box>
                        {!address ? (
                          <Box p={2} position="relative">
                            <a href="https://www.google.com/maps/place/3701+Hastings+St+Ste+201,+Burnaby,+BC+V5C+2H6,+Canada" target="_blank" rel="noreferrer">
                              <Box style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, cursor: 'pointer' }}></Box>
                              <iframe
                                title='Google Maps Location of Airlinx Furnace Heating & Air Conditioning HVAC'
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.6859770496226!2d-123.02220399999999!3d49.281569999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548670c55ab2981b%3A0x1c3dfe02e4635069!2s3701%20Hastings%20St%20Ste%20201%2C%20Burnaby%2C%20BC%20V5C%202H6%2C%20Canada!5e1!3m2!1sen!2sin!4v1787116886968!5m2!1sen!2sin'
                                width='100%'
                                height='300px'
                                style={{ border: 0 }}
                                allowFullScreen=''
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                              ></iframe>
                            </a>
                          </Box>
                        ) : null}
                      </Box>
                    </Grid>
                  ) : null}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default FaqAndForm;

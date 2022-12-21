import { Box, Container, Grid, Paper, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import SectionalHeading from '../../components/SectionalHeading/SectionalHeading'
import { LocalPhoneOutlined, MailOutline, CheckCircle} from '@mui/icons-material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { AppointmentForm } from '../../components/components'
import Image from 'next/legacy/image'
import Brands from '../../public/brand-page/brands-logo.jpg'

const FaqAndForm = ({ faq, form, faqBlackTitle, faqBlueTitle, faqtitleAlign, faqVariant, faqArr, faqSimpleTitle, formBlackTitle, formBlueTitle, formVariant, formtitleAlign, formSimpleTitle, address, addressBlackTitle, addressBlueTitle, addressVariant, addresstitleAlign, addressSimpleTitle }) => {

    const [active, setActive] = useState('faq-0')

    return (
        <>
            <section className='my-3'>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={3}>
                                    {
                                        address ? <Grid item xs={12} md={6}>
                                            <Box>
                                                {
                                                    addressBlackTitle ? addressBlueTitle ? <SectionalHeading variant={addressVariant} blacktext={addressBlackTitle} blueText={addressBlueTitle} align={addresstitleAlign} /> : null : null
                                                }

                                                {
                                                    addressSimpleTitle ? <SectionalHeading variant={addressVariant} align={addresstitleAlign} simpletext={addressSimpleTitle} /> : null
                                                }
                                                <Box mt={3}>
                                                    <Box mt={3}>
                                                        <List>
                                                            {
                                                                [
                                                                    { id: "contact-1", icon: <HomeOutlinedIcon  className='text--blue me-3' style={{fontSize:"2rem"}} />, text: "2025 Willingdon Ave unit 900, Burnaby, BC V5C 0J3, Canada" },
                                                                    { id: "contact-2", icon: <LocalPhoneOutlined className='text--blue me-3' style={{fontSize:"2rem"}} />, text: "604-363-6622" },
                                                                    { id: "contact-3", icon: <MailOutline className='text--blue me-3' style={{fontSize:"2rem"}} />, text: "info@teressen heating.ca" }
                                                                ].map(item => <ListItem key={item.id} className="m-0 p-0 mb-3">
                                                                    <ListItemIcon>
                                                                        {item.icon}
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={<strong>{item.text}</strong>} />
                                                                </ListItem>)
                                                            }
                                                        </List>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box p={1}>
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10414.241045331159!2d-123.0013343!3d49.2657802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e00c8b58b8252d9!2sTeressen%20Heating%20%26%20Air%20Conditioning!5e0!3m2!1sen!2sin!4v1671612141122!5m2!1sen!2sin" width="100%" height="500px" style={{Border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                          
                                            </Box>

                                        </Grid> : null
                                    }
                                    {
                                        faq ? <><Grid item xs={12} md={6}>

                                            <Box>
                                                {
                                                    faqBlackTitle ? faqBlueTitle ? <SectionalHeading variant={faqVariant} blacktext={faqBlackTitle} blueText={faqBlueTitle} align={faqtitleAlign} /> : null : null
                                                }

                                                {
                                                    faqSimpleTitle ? <SectionalHeading variant={faqVariant} align={faqtitleAlign} simpletext={faqSimpleTitle} /> : null
                                                }

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
                                                                            {item.ans !== null ? <Typography className="para">{item.ans}</Typography> : null}
                                                                            {
                                                                                item.list !== null ? <List className='p-0 m-0'>
                                                                                    {
                                                                                        item.list.map((listItem,num)=><ListItem className='ps-0' key={`faq-${index}-list-${num}`}>
                                                                                            <ListItemIcon>
                                                                                                <CheckCircle />
                                                                                            </ListItemIcon>
                                                                                            <ListItemText primary={listItem} />
                                                                                        </ListItem>)
                                                                                    }
                                                                                </List> : null
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>)
                                                            }
                                                        </div>
                                                    </Box> : null
                                                }
                                            </Box>

                                        </Grid>
                                        </> : null
                                    }
                                    {
                                        form ? <Grid item xs={12} md={6}>
                                            <Box>
                                                {
                                                    formBlackTitle ? formBlueTitle ? <SectionalHeading variant={formVariant} blacktext={formBlackTitle} blueText={formBlueTitle} align={formtitleAlign} /> : null : null
                                                }

                                                {
                                                    formSimpleTitle ? <SectionalHeading variant={formVariant} align={formtitleAlign} simpletext={formSimpleTitle} /> : null
                                                }
                                                <Box p={2} >
                                                    <AppointmentForm />
                                                </Box>
                                            </Box>
                                        </Grid> : null
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default FaqAndForm
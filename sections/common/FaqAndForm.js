import { Box, Container, Grid, Paper, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import SectionalHeading from '../../components/SectionalHeading/SectionalHeading'

const FaqAndForm = ({ faq, form, faqBlackTitle, faqBlueTitle, faqtitleAlign, faqVariant, faqArr, faqSimpleTitle, formBlackTitle, formBlueTitle, formVariant, formtitleAlign, formSimpleTitle }) => {

    const [active, setActive] = useState('faq-0')

    return (
        <>
            <section>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        {
                                            faq ? <>
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
                                                                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${active.split('faq-')[1] == index ? 'show' : null} ps-5`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
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
                                            </> : null
                                        }
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        {
                                            form ? <Box>
                                                {
                                                    formBlackTitle ? formBlueTitle ? <SectionalHeading variant={formVariant} blacktext={formBlackTitle} blueText={formBlueTitle} align={formtitleAlign} /> : null : null
                                                }

                                                {
                                                    formSimpleTitle ? <SectionalHeading variant={formVariant} align={formtitleAlign} simpletext={formSimpleTitle} /> : null
                                                }
                                                <Box p={5} component={Paper} className="shadow">
                                                    <form method='post' action='https://formsubmit.co/adityaj.nonstop@gmail.com' encType="multipart/form-data">
                                                        <div className='row'>
                                                            <div className='col-md-6 col-12'>
                                                                <div className='form-group'>
                                                                    <input type="text" name="Visitor Name" className='form-control rounded-pill' placeholder='Name' required />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6 col-12'>
                                                                <div className='form-group'>
                                                                    <input type="email" name="Visitor Email" className='form-control rounded-pill' placeholder='Email' required />
                                                                </div>
                                                            </div>
                                                            <div className='col-12'>
                                                                <div className='form-group'>
                                                                    <select name="Selected Service" className='form-control rounded-pill'>
                                                                        <option value="">Choose Service</option>
                                                                        <option value="Cooling Service">Cooling Service</option>
                                                                        <option value="Heating Service">Heating Service</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className='col-12'>
                                                                <div className='form-group'>
                                                                    <textarea className="form-control" id="exampleFormControlTextarea2" rows="4" placeholder="Your message" name="message" required="" spellCheck="false" data-ms-editor="true"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className='col-12'>
                                                                <Button type="submit" className='blueFilledBtn text-white'>Submit</Button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </Box>
                                            </Box> : null
                                        }
                                    </Grid>
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
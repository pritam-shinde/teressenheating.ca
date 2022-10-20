import { Box, Typography, Button } from '@mui/material'
import React from 'react'

const AppointmentForm = () => {
    return (
        <>
            <Box>
                <form method='post' action='https://formsubmit.co/adityaj.nonstop@gmail.com' encType="multipart/form-data">
                    <div className='form-group'>
                        <label><strong>Have we been to your home before?</strong></label><br />
                        <input type="radio" id="visited" name="Have we been to your home before?" value="Visited Before" />
                        <label htmlFor="Yes">Yes</label><br />
                        <input type="radio" id="notVisited" name="Have we been to your home before?" value="Never Visited" />
                        <label htmlFor="No">No</label><br />
                    </div>
                    <div className='form-group'>
                        <label><strong>Interested in</strong></label>
                        <select name='interested_in' className='form-control rounded-pill'>
                            <option value="New Furnace / AC Equipment">New Furnace / AC Equipment</option>
                            <option value="New Heating Equipment">New Heating Equipment</option>
                            <option value="New Cooling Equipment">New Cooling Equipment</option>
                            <option value="Repair Cooling Equipment">Repair Cooling Equipment</option>
                            <option value="Repair Heating Equipment">Repair Heating Equipment</option>
                            <option value="Heating Equipment Tune-up">Heating Equipment Tune-up</option>
                            <option value="Duct Cleaning">Duct Cleaning</option>
                            <option value="Replace Water Heater">Replace Water Heater</option>
                            <option value="Fireplace Services">Fireplace Services</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label><strong>Name</strong></label>
                        <input type="text" name='Name' className='form-control rounded-pill' />
                    </div>
                    <div className='form-group'>
                        <label><strong>Email</strong></label>
                        <input type="email" name='Email' className='form-control rounded-pill' />
                    </div>
                    <div className='form-group'>
                        <label><strong>Phone</strong></label>
                        <input type="tel" name='Phone' className='form-control rounded-pill' />
                    </div>
                    <div className='form-group'>
                        <label><strong>Please provide any additional details to help us serve you better:</strong></label>
                        <textarea name="Message" rows="4" className='form-control'></textarea>
                    </div>
                    <small>How can we help you ?</small>
                    <p>By submitting this form, I agree to the terms and conditions.</p>
                    <div className='form-group'>
                        <Button type='submit' className="blueFilledBtn">Submit</Button>
                    </div>
                </form>
            </Box>
        </>
    )
}

export default AppointmentForm
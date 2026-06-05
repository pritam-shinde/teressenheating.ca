import { Box, Button } from '@mui/material'
import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRouter } from 'next/router'

const AppointmentForm = () => {
    const router = useRouter()

    const [formData, setFormData] = useState({
        visited: "",
        interested_in: "",
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const recaptchaRef = useRef(null)
    const [recaptchaToken, setRecaptchaToken] = useState("")
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState("")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let newErrors = {}

        // Radio
        if (!formData.visited) {
            newErrors.visited = "Please select an option"
        }

        // Interested In
        if (!formData.interested_in) {
            newErrors.interested_in = "Please select a service"
        }

        // Name
        if (!formData.name.trim()) {
            newErrors.name = "Please enter your name"
        }

        // Email
        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email"
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Invalid email address"
        }

        // Phone Validation (Canadian 10-digit format check)
        const phoneTrimmed = formData.phone.trim()
        if (!phoneTrimmed) {
            newErrors.phone = "Please enter phone number"
        } else if (/[a-zA-Z]/.test(phoneTrimmed)) {
            newErrors.phone = "Phone number cannot contain letters"
        } else {
            const digits = phoneTrimmed.replace(/\D/g, "")
            if (digits.length !== 10 && !(digits.length === 11 && digits.startsWith('1'))) {
                newErrors.phone = "Please enter a valid 10-digit phone number"
            }
        }

        // CAPTCHA Validation
        if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && !recaptchaToken) {
            newErrors.recaptcha = "Please complete the CAPTCHA"
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitSuccess(false)
        setSubmitError("")

        if (!validate()) {
            return
        }

        setIsSubmitting(true)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, recaptchaToken }),
            })

            let result = null
            const contentType = response.headers.get("content-type")
            if (contentType && contentType.includes("application/json")) {
                result = await response.json()
            }

            if (response.ok && result && result.success) {
                setSubmitSuccess(true)
                setFormData({
                    visited: "",
                    interested_in: "",
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                })
                setRecaptchaToken("")
                if (recaptchaRef.current) {
                    recaptchaRef.current.reset()
                }
                router.push('/thank-you/')
            } else {
                setSubmitError(
                    (result && result.message) || 
                    `Server returned an error (${response.status}). Please check your production environment variables.`
                )
            }
        } catch (err) {
            console.error('Submission error:', err)
            setSubmitError('Failed to submit form. Please check your network connection and try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Box id="appointmentForm">

                <form
                    onSubmit={handleSubmit}
                >

                    <div className='form-group'>

                        <label>
                            <strong>
                                Have we been to your home before?
                            </strong>
                        </label>

                        <br />

                        <input
                            type="radio"
                            id="visited"
                            name="visited"
                            value="Visited Before"
                            checked={formData.visited === "Visited Before"}
                            onChange={handleChange}
                        />

                        <label
                            htmlFor="visited"
                            style={{ marginLeft: '0.5rem' }}
                        >
                            Yes
                        </label>

                        <br />

                        <input
                            type="radio"
                            id="notVisited"
                            name="visited"
                            value="Never Visited"
                            checked={formData.visited === "Never Visited"}
                            onChange={handleChange}
                        />

                        <label
                            htmlFor="notVisited"
                            style={{ marginLeft: '0.5rem' }}
                        >
                            No
                        </label>

                        {errors.visited && (
                            <small className="text-danger d-block mt-1">
                                {errors.visited}
                            </small>
                        )}

                    </div>

                    <div className='form-group'>
                        <label>
                            <strong>Interested in</strong>
                        </label>

                        <select
                            name='interested_in'
                            className={`form-control rounded-pill ${errors.interested_in ? 'is-invalid' : ''}`}
                            value={formData.interested_in}
                            onChange={handleChange}
                        >
                            <option value="">Select a service...</option>
                            <option value="New Furnace / AC Equipment">New Furnace / AC Equipment</option>
                            <option value="New Heating Equipment">New Heating Equipment</option>
                            <option value="New Cooling Equipment">New Cooling Equipment</option>
                            <option value="Repair Cooling Equipment">Repair Cooling Equipment</option>
                            <option value="Repair Heating Equipment">Repair Heating Equipment</option>
                            <option value="Heating Equipment Tune-up">Heating Equipment Tune-up</option>
                            <option value="Boiler Services (Installation / Repair / Maintenance)">Boiler Services (Installation / Repair / Maintenance)</option>
                            <option value="Tankless Water Heaters">Tankless Water Heaters</option>
                            <option value="Heat Pump Services">Heat Pump Services</option>
                            <option value="Duct Cleaning">Duct Cleaning</option>
                            <option value="Replace Water Heater">Replace Water Heater</option>
                            <option value="Fireplace Services">Fireplace Services</option>
                        </select>

                        {errors.interested_in && (
                            <small className="text-danger">
                                {errors.interested_in}
                            </small>
                        )}
                    </div>

                    <div className='form-group'>

                        <label>
                            <strong>Name</strong>
                        </label>

                        <input
                            type="text"
                            name='name'
                            className={`form-control rounded-pill ${errors.name ? 'is-invalid' : ''
                                }`}
                            value={formData.name}
                            onChange={handleChange}
                        />

                        {errors.name && (
                            <small className="text-danger">
                                {errors.name}
                            </small>
                        )}

                    </div>

                    <div className='form-group'>
                        <label>
                            <strong>Email</strong>
                        </label>

                        <input
                            type="email"
                            name='email'
                            className={`form-control rounded-pill ${errors.email ? 'is-invalid' : ''
                                }`}
                            value={formData.email}
                            onChange={handleChange}
                        />

                        {errors.email && (
                            <small className="text-danger">
                                {errors.email}
                            </small>
                        )}

                    </div>

                    <div className='form-group'>
                        <label>
                            <strong>Phone</strong>
                        </label>

                        <input
                            type="tel"
                            name='phone'
                            className={`form-control rounded-pill ${errors.phone ? 'is-invalid' : ''
                                }`}
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        {errors.phone && (
                            <small className="text-danger">
                                {errors.phone}
                            </small>
                        )}

                    </div>

                    <div className='form-group'>
                        <label>
                            <strong>
                                Please provide any additional details to help us serve you better:
                            </strong>
                        </label>

                        <textarea
                            name="message"
                            rows="4"
                            className='form-control'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                    </div>

                    <small>
                        How can we help you ?
                    </small>

                    <p>
                        By submitting this form, I agree to the terms and conditions.
                    </p>

                    {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                        <div className='form-group mb-3 d-flex flex-column align-items-start'>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                onChange={(token) => {
                                    setRecaptchaToken(token || "")
                                    if (token) {
                                        setErrors((prev) => {
                                            const updated = { ...prev }
                                            delete updated.recaptcha
                                            return updated
                                        })
                                    }
                                }}
                            />
                            {errors.recaptcha && (
                                <small className="text-danger d-block mt-1">
                                    {errors.recaptcha}
                                </small>
                            )}
                        </div>
                    )}

                    <div className='form-group'>

                        <Button
                            type='submit'
                            className="blueFilledBtn text--white"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>

                    </div>

                    {submitSuccess && (
                        <div className="alert alert-success mt-2 mb-3" role="alert" style={{ borderRadius: '50px', padding: '0.75rem 1.5rem' }}>
                            <strong>Success!</strong> Your appointment request has been submitted and saved. We will contact you soon.
                        </div>
                    )}

                    {submitError && (
                        <div className="alert alert-danger mt-2 mb-3" role="alert" style={{ borderRadius: '50px', padding: '0.75rem 1.5rem' }}>
                            <strong>Error:</strong> {submitError}
                        </div>
                    )}
                </form>

            </Box>
        </>
    )
}

export default AppointmentForm
import clientPromise from '../../lib/mongodb'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` })
  }

  try {
    const { visited, interested_in, name, email, phone, message, recaptchaToken } = req.body

    // Server-side validation
    if (!visited || !name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'All required fields (visited, name, email, phone) must be provided.' })
    }

    // Email format validation
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' })
    }

    // Canadian phone format validation (10 digits or 11 with leading 1)
    if (/[a-zA-Z]/.test(phone)) {
      return res.status(400).json({ success: false, message: 'Phone number cannot contain letters.' })
    }
    const phoneDigits = phone.trim().replace(/\D/g, "")
    if (phoneDigits.length !== 10 && !(phoneDigits.length === 11 && phoneDigits.startsWith('1'))) {
      return res.status(400).json({ success: false, message: 'Please provide a valid 10-digit phone number.' })
    }

    // Google reCAPTCHA Verification
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
    if (recaptchaSecret) {
      if (!recaptchaToken) {
        return res.status(400).json({ success: false, message: 'reCAPTCHA token is missing. Please complete the CAPTCHA.' })
      }

      try {
        const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify'
        const verifyResponse = await fetch(verifyUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(recaptchaToken)}`,
        })

        const recaptchaData = await verifyResponse.json()
        if (!recaptchaData.success) {
          console.warn('reCAPTCHA verification failed:', recaptchaData)
          return res.status(400).json({ success: false, message: 'reCAPTCHA verification failed. Please try again.' })
        }
      } catch (error) {
        console.error('reCAPTCHA verification endpoint error:', error)
        return res.status(500).json({ success: false, message: 'Failed to verify reCAPTCHA. Please try again later.' })
      }
    } else {
      console.warn('Warning: RECAPTCHA_SECRET_KEY is not defined in environment variables. Bypassing verification for local development.')
    }

    // 1. Persist to MongoDB
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB || 'airlinx_db')
    const contactDoc = {
      visited,
      interested_in,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message ? message.trim() : '',
      createdAt: new Date()
    }
    const result = await db.collection('appointments').insertOne(contactDoc)

    // 2. Dispatch Email via Nodemailer (Try-catch wrapper to avoid blocking form success if email fails)
    try {
      const smtpHost = process.env.SMTP_HOST
      const smtpPort = process.env.SMTP_PORT
      const smtpUser = process.env.SMTP_USER
      const smtpPass = process.env.SMTP_PASS
      const notificationEmail = process.env.NOTIFICATION_EMAIL || 'info@airlinxheating.ca'

      if (smtpUser && smtpPass) {
        // Configure Mail Transporter with timeouts to fail-fast if SMTP is slow/blocked
        const transporter = nodemailer.createTransport({
          host: smtpHost || 'smtp.gmail.com',
          port: Number(smtpPort) || 587,
          secure: Number(smtpPort) === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          connectionTimeout: 5000, // 5 seconds
          greetingTimeout: 5000,   // 5 seconds
          socketTimeout: 8000,     // 8 seconds
        })

        // Setup HTML email format
        const mailOptions = {
          from: `"Airlinx Heating Leads" <${smtpUser || 'no-reply@airlinxheating.ca'}>`,
          to: notificationEmail,
          subject: `New Lead: ${interested_in} - ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <div style="background-color: #0076c0; color: white; padding: 20px; text-align: center;">
                <h2 style="margin: 0; font-size: 24px;">New Service Lead Received</h2>
              </div>
              <div style="padding: 24px; color: #333; background-color: #fcfcfc;">
                <p style="font-size: 16px; margin-top: 0;">Hello,</p>
                <p style="font-size: 15px;">A new appointment request has been submitted through the Airlinx website form. Here are the details:</p>
                
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <tr style="background-color: #f1f5f9;">
                    <td style="padding: 10px; font-weight: bold; width: 35%; border: 1px solid #cbd5e1;">Interested In:</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">${interested_in}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold; border: 1px solid #cbd5e1;">Customer Name:</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">${name}</td>
                  </tr>
                  <tr style="background-color: #f1f5f9;">
                    <td style="padding: 10px; font-weight: bold; border: 1px solid #cbd5e1;">Email Address:</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;"><a href="mailto:${email}" style="color: #0076c0; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold; border: 1px solid #cbd5e1;">Phone Number:</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;"><a href="tel:${phone}" style="color: #0076c0; text-decoration: none;">${phone}</a></td>
                  </tr>
                  <tr style="background-color: #f1f5f9;">
                    <td style="padding: 10px; font-weight: bold; border: 1px solid #cbd5e1;">Visited Before?</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">${visited}</td>
                  </tr>
                </table>

                <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #0076c0; background-color: #f8fafc;">
                  <h4 style="margin: 0 0 10px 0; color: #0076c0;">Additional Message:</h4>
                  <p style="margin: 0; font-style: italic;">${message || 'No additional details provided.'}</p>
                </div>
                
                <p style="font-size: 13px; color: #64748b; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; text-align: center;">
                  This inquiry has been saved to your MongoDB collection under ID: <strong>${result.insertedId}</strong>
                </p>
              </div>
            </div>
          `,
        }

        // Dispatch email
        await transporter.sendMail(mailOptions)
      } else {
        console.warn('SMTP_USER and SMTP_PASS are not configured. Email dispatch skipped.')
      }
    } catch (emailError) {
      // Log the email failure but do not throw/fail the user response since the lead is saved in DB
      console.error('Failed to dispatch email notification via SMTP:', emailError)
    }

    return res.status(201).json({
      success: true,
      message: 'Form submitted successfully, persisted to database.',
      id: result.insertedId
    })
  } catch (error) {
    console.error('API /api/contact endpoint error:', error)
    return res.status(500).json({ success: false, message: 'Internal Server Error.' })
  }
}

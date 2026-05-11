import { Box, Button } from '@mui/material'
import { useState } from 'react'

const AppointmentForm = () => {

    const [formData, setFormData] = useState({
        visited: "",
        interested_in: "New Furnace / AC Equipment",
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const [errors, setErrors] = useState({})

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

        // Australian Phone Validation
        if (!formData.phone.trim()) {
            newErrors.phone = "Please enter phone number"
        } else if (
            !/^(\+61|0)[2-9]\d{8}$/.test(
                formData.phone.replace(/\s/g, "")
            )
        ) {
            newErrors.phone = "Invalid Australian phone number"
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        if (!validate()) {
            e.preventDefault()
        }
    }

    return (
        <>
            <Box id="appointmentForm">

                <form
                    method='post'
                    action='https://formsubmit.co/9e47c7d4e5074759bb313cd032703e9d'
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                >

                    {/* Hidden Fields */}
                    <input
                        type="hidden"
                        name="_subject"
                        value="New Appointment Request"
                    />

                    <input
                        type="hidden"
                        name="_captcha"
                        value="false"
                    />

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
                            className='form-control rounded-pill'
                            value={formData.interested_in}
                            onChange={handleChange}
                        >
                            <option value="New Furnace / AC Equipment">
                                New Furnace / AC Equipment
                            </option>

                            <option value="New Heating Equipment">
                                New Heating Equipment
                            </option>

                            <option value="New Cooling Equipment">
                                New Cooling Equipment
                            </option>

                            <option value="Repair Cooling Equipment">
                                Repair Cooling Equipment
                            </option>

                            <option value="Repair Heating Equipment">
                                Repair Heating Equipment
                            </option>

                            <option value="Heating Equipment Tune-up">
                                Heating Equipment Tune-up
                            </option>

                            <option value="Duct Cleaning">
                                Duct Cleaning
                            </option>

                            <option value="Replace Water Heater">
                                Replace Water Heater
                            </option>

                            <option value="Fireplace Services">
                                Fireplace Services
                            </option>

                        </select>

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
                        ></textarea>

                    </div>

                    <small>
                        How can we help you ?
                    </small>

                    <p>
                        By submitting this form, I agree to the terms and conditions.
                    </p>

                    <div className='form-group'>

                        <Button
                            type='submit'
                            className="blueFilledBtn text--white"
                        >
                            Submit
                        </Button>

                    </div>

                </form>

            </Box>
        </>
    )
}

export default AppointmentForm

// import { Box, Button } from "@mui/material";
// import { useState } from "react";

// const AppointmentForm = () => {
//   const [formData, setFormData] = useState({
//     visited: "",
//     interested_in: "New Furnace / AC Equipment",
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validate = () => {
//     let newErrors = {};

//     // Name
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     // Email
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
//     ) {
//       newErrors.email = "Invalid email address";
//     }

//     // Australian Phone Validation
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^(\+61|0)[2-9]\d{8}$/.test(formData.phone.replace(/\s/g, ""))) {
//       newErrors.phone = "Invalid Australian phone number";
//     }

//     // Radio Validation
//     if (!formData.visited) {
//       newErrors.visited = "Please select an option";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     if (!validate()) {
//       e.preventDefault();
//     }
//   };

//   return (
//     <Box id="appointmentForm">
//       <form
//         method="post"
//         action="https://formsubmit.co/9e47c7d4e5074759bb313cd032703e9d"
//         encType="multipart/form-data"
//         onSubmit={handleSubmit}
//       >
//         {/* Radio */}
//         <div className="form-group">
//           <label>
//             <strong>Have we been to your home before?</strong>
//           </label>
//           <br />

//           <input
//             type="radio"
//             name="visited"
//             value="Visited Before"
//             onChange={handleChange}
//           />
//           <label style={{ marginLeft: "0.5rem" }}>Yes</label>

//           <br />

//           <input
//             type="radio"
//             name="visited"
//             value="Never Visited"
//             onChange={handleChange}
//           />
//           <label style={{ marginLeft: "0.5rem" }}>No</label>

//           {errors.visited && (
//             <p style={{ color: "red" }}>{errors.visited}</p>
//           )}
//         </div>

//         {/* Interested In */}
//         <div className="form-group">
//           <label>
//             <strong>Interested in</strong>
//           </label>

//           <select
//             name="interested_in"
//             className="form-control rounded-pill"
//             value={formData.interested_in}
//             onChange={handleChange}
//           >
//             <option value="New Furnace / AC Equipment">
//               New Furnace / AC Equipment
//             </option>
//             <option value="New Heating Equipment">
//               New Heating Equipment
//             </option>
//             <option value="New Cooling Equipment">
//               New Cooling Equipment
//             </option>
//           </select>
//         </div>

//         {/* Name */}
//         <div className="form-group">
//           <label>
//             <strong>Name</strong>
//           </label>

//           <input
//             type="text"
//             name="name"
//             className="form-control rounded-pill"
//             value={formData.name}
//             onChange={handleChange}
//           />

//           {errors.name && (
//             <p style={{ color: "red" }}>{errors.name}</p>
//           )}
//         </div>

//         {/* Email */}
//         <div className="form-group">
//           <label>
//             <strong>Email</strong>
//           </label>

//           <input
//             type="email"
//             name="email"
//             className="form-control rounded-pill"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           {errors.email && (
//             <p style={{ color: "red" }}>{errors.email}</p>
//           )}
//         </div>

//         {/* Phone */}
//         <div className="form-group">
//           <label>
//             <strong>Phone</strong>
//           </label>

//           <input
//             type="tel"
//             name="phone"
//             className="form-control rounded-pill"
//             value={formData.phone}
//             onChange={handleChange}
//           />

//           {errors.phone && (
//             <p style={{ color: "red" }}>{errors.phone}</p>
//           )}
//         </div>

//         {/* Message */}
//         <div className="form-group">
//           <label>
//             <strong>
//               Please provide any additional details:
//             </strong>
//           </label>

//           <textarea
//             name="message"
//             rows="4"
//             className="form-control"
//             value={formData.message}
//             onChange={handleChange}
//           />
//         </div>

//         <small>How can we help you?</small>

//         <p>
//           By submitting this form, I agree to the terms and conditions.
//         </p>

//         <div className="form-group">
//           <Button
//             type="submit"
//             className="blueFilledBtn text--white"
//           >
//             Submit
//           </Button>
//         </div>
//       </form>
//     </Box>
//   );
// };

// export default AppointmentForm;

// import { Box, Button } from '@mui/material'

// const AppointmentForm = () => {
//     return (
//         <>
//             <Box id="appointmentForm">
//                 <form method='post' action='https://formsubmit.co/9e47c7d4e5074759bb313cd032703e9d' encType="multipart/form-data">
//                     <div className='form-group'>
//                         <label><strong>Have we been to your home before?</strong></label><br />
//                         <input type="radio" id="visited" name="Have we been to your home before?" value="Visited Before" />
//                         <label htmlFor="Yes" style={{marginLeft: '0.5rem'}}>Yes</label><br />
//                         <input type="radio" id="notVisited" name="Have we been to your home before?" value="Never Visited" />
//                         <label htmlFor="No" style={{marginLeft: '0.5rem'}}>No</label><br />
//                     </div>
//                     <div className='form-group'>
//                         <label><strong>Interested in</strong></label>
//                         <select name='interested_in' className='form-control rounded-pill'>
//                             <option value="New Furnace / AC Equipment">New Furnace / AC Equipment</option>
//                             <option value="New Heating Equipment">New Heating Equipment</option>
//                             <option value="New Cooling Equipment">New Cooling Equipment</option>
//                             <option value="Repair Cooling Equipment">Repair Cooling Equipment</option>
//                             <option value="Repair Heating Equipment">Repair Heating Equipment</option>
//                             <option value="Heating Equipment Tune-up">Heating Equipment Tune-up</option>
//                             <option value="Duct Cleaning">Duct Cleaning</option>
//                             <option value="Replace Water Heater">Replace Water Heater</option>
//                             <option value="Fireplace Services">Fireplace Services</option>
//                         </select>
//                     </div>
//                     <div className='form-group'>
//                         <label><strong>Name</strong></label>
//                         <input type="text" name='Name' className='form-control rounded-pill' />
//                     </div>
//                     <div className='form-group'>
//                         <label><strong>Email</strong></label>
//                         <input type="email" name='Email' className='form-control rounded-pill' />
//                     </div>
//                     <div className='form-group'>
//                         <label><strong>Phone</strong></label>
//                         <input type="tel" name='Phone' className='form-control rounded-pill' />
//                     </div>
//                     <div className='form-group'>
//                         <label><strong>Please provide any additional details to help us serve you better:</strong></label>
//                         <textarea name="Message" rows="4" className='form-control'></textarea>
//                     </div>
//                     <small>How can we help you ?</small>
//                     <p>By submitting this form, I agree to the terms and conditions.</p>
//                     <div className='form-group'>
//                         <Button type='submit' className="blueFilledBtn text--white">Submit</Button>
//                     </div>
//                 </form>
//             </Box>
//         </>
//     )
// }

// export default AppointmentForm
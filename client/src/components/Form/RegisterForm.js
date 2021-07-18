import React from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '../uiElements/Button';
import './_RegisterForm.scss'

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

function RegisterForm() {
    const history = useHistory();

    const addAttendee = async (first, last, contact, handicap) => {
        try {
            const data = {
                first,
                last,
                contact,
                handicap
            }
            await axios.post('/register', data)
                .then(response => {
                    console.log(response.data)
                    if (response.status === 200) {
                        console.log('Attendee posted!')
                        history.push('/attendees');
                    }
                })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="RegisterForm">
            <h1>Register</h1>
            <Formik
                initialValues={{
                    first: "",
                    last: "",
                    email: "",
                    password: ""
                }}
                onSubmit={async values => {
                    addAttendee(values.first, values.last, values.contact, values.handicap)
                }}

                validationSchema={Yup.object().shape({
                    first: Yup.string()
                        .max(15, 'Must be less than 60 characters.')
                        .required("Required"),
                    last: Yup.string()
                        .max(1, 'Must be 1 character.')
                        .required("Required"),
                    contact: Yup.string()
                        .matches(phoneRegExp, 'Phone number is not valid'),
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className="RegisterForm-First">
                                <label htmlFor="first">
                                    First name
                                </label>
                                <input
                                    id="first"
                                    type="text"
                                    value={values.first}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.first && touched.first
                                            ? "text-input register-input error"
                                            : "text-input register-input"
                                    }
                                />
                                {errors.first && touched.first && (
                                    <div className="input-feedback">{errors.first}</div>
                                )}
                            </div>

                            <div className="RegisterForm-Last">
                                <label htmlFor="last">
                                    Last Initial
                                </label>
                                <input
                                    id="last"
                                    type="text"
                                    value={values.last}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.last && touched.last
                                            ? "text-input register-input error"
                                            : "text-input register-input"
                                    }
                                />
                                {errors.last && touched.last && (
                                    <div className="input-feedback">{errors.last}</div>
                                )}
                            </div>

                            <div className="RegisterForm-Contact">
                                <label htmlFor="contact">
                                    Phone (optional)
                                </label>
                                <input
                                    id="contact"
                                    type="text"
                                    value={values.contact}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                className={
                                    errors.contact && touched.contact
                                        ? "text-input register-input error"
                                        : "text-input register-input"
                                }
                                />
                                {errors.contact && touched.contact && (
                                    <div className="input-feedback">{errors.contact}</div>
                                )}
                            </div>

                            <div className="RegisterForm-Handicap">
                                <label htmlFor="handicap">Handicap (optional)</label>
                                <input
                                    type="number"
                                    name="handicap"
                                    min="1"
                                    max="50"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.handicap}
                                // className={
                                //     errors.handicap && touched.handicap
                                //         ? "password-input register-input error"
                                //         : "password-input register-input"
                                // }
                                />
                                {/* {errors.handicap && touched.handicap && (
                                    <span className="error">
                                        {errors.handicap}
                                    </span>
                                )} */}
                            </div>


                            <Button type="submit" disabled={isSubmitting} text="Submit" className="Button Button-form"/>
                        </form>
                    );
                }}
            </Formik>
        </div>
    )
}

export default RegisterForm

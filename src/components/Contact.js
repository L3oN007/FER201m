import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.number().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
});

function ContactPage() {
    const handleSubmit = (values) => {
        // Perform any necessary actions here, such as sending the form data
        console.log(values);
    };

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h1>Contact Information</h1>
                <div className="info">
                    <p>
                        <i className="fa-solid fa-envelope"></i> Email:{' '}
                        <a href="mailto:contact@netflix.com">contact@netphic.com</a>
                    </p>
                    <p>
                        <i className="fa-solid fa-phone"></i> Phone: 123-456-7890
                    </p>
                    <p>
                        <i className="fa-sharp fa-solid fa-location-dot"></i> Address: FER201m - Vu Minh Nhat
                    </p>
                </div>
            </div>
            <div className="contact-form">
                <h2>Contact Us</h2>
                <Formik
                    initialValues={{ name: '', email: '', phone: '', message: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="error-container">
                            <ErrorMessage name="name" component="div" className="error-message" />
                            <Field type="text" name="name" placeholder="Your Name" />
                        </div>

                        <div className="error-container">
                            <ErrorMessage name="email" component="div" className="error-message" />
                            <Field type="email" name="email" placeholder="Your Email" />
                        </div>

                        <div className="error-container">
                            <ErrorMessage name="phone" component="div" className="error-message" />
                            <Field type="text" name="phone" placeholder="Your Phone" />
                        </div>

                        <div className="error-container">
                            <ErrorMessage name="message" component="div" className="error-message" />
                            <Field as="textarea" name="message" placeholder="Your Message" />
                        </div>

                        <button type="submit">Send</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default ContactPage;

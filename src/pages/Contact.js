import React from 'react';
import {Formik, Form, Field, ErrorMessage, FormikContext} from 'formik';
import "../styles/Contact.scss"
import {NavLink} from "react-router-dom";

const Contact = () => (
    <div className="form-container">

        <Formik
            initialValues={{ email: '', message: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'e-mail jest wymagany';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { resetForm }) => {
               resetForm()
            }}
        >
            {({ isSubmitting }) => (
                <>
                <Form>
                    <h2>Skontaktuj się z nami</h2>
                    <h4> wprowadź swój e-mail</h4>
                    <Field type="email" name="email"/>
                    <ErrorMessage name="email" component="div" />
                    <h4> wiadomość</h4>
                    <Field as="textarea" cols={50} rows={7} MaxLength={300} name="message"/>
                    <div>
                    <button className="form-btn" type="submit" disabled={isSubmitting}>
                        Wyślij
                    </button>
                    </div>
                </Form>
                    <div className="contact-box">
                        <h4> Dane kontaktowe:</h4>
                        <p>    SuperStary GMBH </p>
                    <p> ulica Słoneczna 123 </p>
                    <p> 12345 Los Angeles </p>
                    <p> tel: 123456789 </p>
                    <p> e-mail: real@fuckinHero.com </p>
                        <NavLink exact to={"/"}>www.superstary.com</NavLink>
                    </div>
                </>
            )}
        </Formik>
    </div>
);

export default Contact;
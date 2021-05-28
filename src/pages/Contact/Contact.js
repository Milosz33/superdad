import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import "./Contact.scss"
import { db } from "../../components/firebase";


const Contact = () => {
return(
    <div className="form-container">
        <Formik
            initialValues={{ name:'', email: '', message: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'e-mail jest wymagany';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'podany adres jest niepoprawny';
                }
                return errors;
            }}
            onSubmit={(values, { resetForm, setSubmitting }) => {

                db.collection("contacts").add({
                      email : values.email,
                      message : values.message,
                      name : values.name
                })
                setSubmitting(false)
                resetForm()
            }}
        >
            {({ isSubmitting }) => (
                <>
                    <Form>
                    <h2>Skontaktuj się z nami</h2>
                    <h4>Imię</h4>
                    <Field className="name" placeholder="Twoje imię" type="text" name="name"/>
                    <h4> wprowadź swój e-mail</h4>
                    <Field className="email" placeholder="e-mail" type="email" name="email"/>
                    <ErrorMessage className="error-message" name="email" component="div" />
                    <h4> wiadomość</h4>
                    <Field className="message" placeholder="Tutaj wpisz swoją wiadomość" as="textarea" cols={50} rows={7} MaxLength={300} name="message"/>
                    <div>
                    <button className="form-btn" type="submit" disabled={isSubmitting}>
                        Wyślij
                    </button>
                    </div>
                </Form>
                </>
            )}
        </Formik>
    </div>
)}

export default Contact;
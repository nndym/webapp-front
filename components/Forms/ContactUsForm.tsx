import Button from '@components/Button'
import EmailInput from '@components/Input/Email'
import MessageInput from '@components/Input/Message'
import TextInput from '@components/Input/Text'
import { Form, FormikProvider, useFormik } from 'formik'
import { motion } from 'framer-motion'
import api from 'lib/api'
import Link from 'next/link'
import React, { useState } from 'react'
import { PasswordResetSuccess } from 'static_data/icons'
import * as yup from 'yup';

const ContactUsFormValidation = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Please enter a valid email!').required('Email is required'),
    message: yup.string().required('Please enter a message!')
})

function ContactUsForm() {

    const [sent, setSent] = useState(false)

    const formik = useFormik({
        validationSchema: ContactUsFormValidation,
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: (values, actions) => {
            api.post('/contact-us-forms', {
                ...values,
                sent: new Date().toISOString()
            })
            .then(()=>{
                actions.setSubmitting(false)
                setSent(true)
            })
            .catch(()=>{
                formik.setFieldError('name', "Something has gone wrong, please try again later!");
                actions.setSubmitting(false);
            })
        }
    })

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0}}
            transition={ { duration: 0.8, delay:1.6, type: "spring" } }
            className='bg-white shadow-md hover:shadow-lg md:mt-12 rounded-md p-6 md:p-12 lg:p-16'
        >
            {sent ? (
                <>
                    <h1 className="text-lg text-green-600 font-medium dark:text-white"><i className={PasswordResetSuccess}></i> We have received your message!</h1>
                    <p className='text-sm font-light'>
                        We will get back to you as soon as possible.
                    </p>
                </>
            ) : (
                <>  
                    <h5 className='text-center text-purple font-bold text-xl'>{"Let's chat!"}</h5>
                    <p className='text-center mb-8 font-light'>No question is a bad question, let’s hear it!</p>
                    <FormikProvider value={formik}>
                        <Form>
                            <TextInput
                                label='Name'
                                name='name'
                                spacing
                                type='text'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && formik.errors.name && formik.errors.name.toString()}
                                placeholder='Enter your name'
                            />
                            <EmailInput
                                error={formik.touched.email && formik.errors.email && formik.errors.email.toString()}
                                value={formik.values.email}
                                spacing
                                onChange={formik.handleChange}
                                name="email"
                                label="Email"
                                autoComplete="email"
                            />
                            <MessageInput
                                error={formik.touched.message && formik.errors.message && formik.errors.message.toString()}
                                value={formik.values.message}
                                spacing
                                onChange={formik.handleChange}
                                name="message"
                                label="Message"
                                placeholder='Enter your message'
                            />
                            <p className="text-xs my-4">
                                By submitting this form you consent to us emailing you occasionally about our products and services.You can unsubscribe from emails at any time, and we will never pass your email onto third parties. <Link passHref href="/privacy"><a className='text-blue font-bold hover:text-black transition-colors'>Privacy Policy</a></Link>
                            </p>
                            <Button
                                type='submit'
                                disabled={formik.isSubmitting}
                                loading={formik.isSubmitting}
                                className="w-full my-2"
                            >
                                Send Message
                            </Button>
                        </Form>
                    </FormikProvider>
                </>
            )}
        </motion.div>
    )
}

export default ContactUsForm

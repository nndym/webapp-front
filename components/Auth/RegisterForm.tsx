import Button from '@components/Button'
import CheckboxInput from '@components/Input/Checkbox'
import DateInput from '@components/Input/Date'
import EmailInput from '@components/Input/Email'
import PasswordInput from '@components/Input/Password'
import TextInput from '@components/Input/Text'
import { Form, FormikProvider, useFormik } from 'formik'
import api from 'lib/api'
import Link from 'next/link'
import React, { useState } from 'react'
import { DateOfBirthIcon, EmailIcon, NameIcon, PasswordIcon, PasswordResetSuccess } from 'static_data/icons'
import * as yup from 'yup';

const max_date = new Date();
      max_date.setFullYear(max_date.getFullYear() - 16);

const min_date = new Date();
      min_date.setFullYear(min_date.getFullYear() - 250);


const RegisterFormValidation = yup.object().shape({
    email: yup.string().email('Please enter a valid email!').required('Email is required'),
    password: yup.string()
                 .min(6, 'Password must be at least 6 characters long')
                 .matches(/[0-9]/, 'Password must contain at least one number')
                 .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                 .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                 .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, 'Password must contain at least one special character')
                 .required('Password is required.'),
    first_name: yup.string().required('First name is required.'),
    last_name: yup.string().required('Last name is required.'),
    date_of_birth: yup.date().required('Date of birth is required.')
                             .max(max_date, 'You must be at least 16.')
                             .min(min_date, 'Please enter a real age!')
                             .typeError('Please enter a valid date. '),
    agree_terms: yup.boolean().oneOf([true], 'You must agree to the terms and conditions.'),
})

function RegisterForm() {

    const [done, setDone] = useState(null)
    
    const formik = useFormik({
        validationSchema: RegisterFormValidation,
        initialValues: {
            email: '',
            password: '',
            username: '',
            first_name: '',
            last_name: '',
            date_of_birth: '',
            agree_terms: false,
            get_emails: false,
        },
        onSubmit: (values, actions) => {
            api.post('auth/local/register', {
                ...values,
            })
            .then(res => {
                setDone(res.data.user);
                actions.setSubmitting(false)
            })
            .catch(err => {
                switch (err.response.status) {
                    case 400:
                        switch(err.response.data.message[0].messages[0].id) {
                            case 'Auth.form.error.email.taken':
                                actions.setFieldError('email', err.response.data.message[0].messages[0].message);
                                break;
                            default:
                                actions.setFieldError('email', err.response.data.message[0].messages[0].message);
                        }
                        break;
                    default:    
                        actions.setFieldError('email', "Something has gone wrong, please try again later!");
                }
                actions.setSubmitting(false)
            })
        }
    })

    return done === null ? (
        <div className="max-w-md">
            <h1 className="text-3xl font-medium dark:text-white">Register</h1>
            <span className='my-2 block dark:text-white '>
                {"Already have an account?"} <Link href="/login"><a className="text-blue font-medium transition-colors  dark:hover:text-gray-400 hover:text-gray-800">Login In</a></Link> 
            </span>
            <FormikProvider value={formik}>
                <Form className='my-4'>
                    <div className="grid  md:grid-cols-2 md:gap-4">
                    <TextInput
                        error={formik.touched.first_name && formik.errors.first_name && formik.errors.first_name.toString()}
                        value={formik.values.first_name}
                        spacing
                        onChange={formik.handleChange}
                        name="first_name"
                        autoComplete="given-name"
                        label="First Name"
                        icon={NameIcon}
                    />
                    <TextInput
                        error={formik.touched.last_name && formik.errors.last_name && formik.errors.last_name.toString()}
                        value={formik.values.last_name}
                        spacing
                        onChange={formik.handleChange}
                        autoComplete="family-name"
                        name="last_name"
                        label="Last Name"
                        icon={NameIcon}
                    />
                </div>
                    <DateInput
                        error={formik.touched.date_of_birth && formik.errors.date_of_birth && formik.errors.date_of_birth as string}
                        value={formik.values.date_of_birth}
                        spacing
                        onChange={formik.handleChange}
                        name="date_of_birth"
                        label="Date of Birth"
                        type="date_of_birth"
                        icon={DateOfBirthIcon}
                    />
                    <EmailInput
                        error={formik.touched.email && formik.errors.email && formik.errors.email.toString()}
                        value={formik.values.email}
                        spacing
                        onChange={formik.handleChange}
                        name="email"
                        label="Email"
                        autoComplete="email"
                        icon={EmailIcon}
                    />
                    <PasswordInput
                        spacing
                        bar
                        label="Password"
                        name='password'
                        icon={PasswordIcon}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete='new-password'
                        value={formik.values.password}
                        error={formik.touched.password && formik.errors.password && formik.errors.password.toString()}
                    />
                    <div className=' bg-gray-200 px-5 py-3 rounded-sm shadow-sm'>
                        <CheckboxInput
                            label="I agree to the terms and conditions"
                            error={formik.touched.agree_terms && formik.errors.agree_terms && formik.errors.agree_terms.toString()}
                            value={formik.values.agree_terms}
                            spacing
                            onChange={formik.handleChange}
                            name="agree_terms"
                            id="agree_terms"
                            icon={EmailIcon}
                        />
                        <CheckboxInput
                            label="I wish to receive updates and notifications about NNDYM."
                            error={formik.touched.get_emails && formik.errors.get_emails && formik.errors.get_emails.toString()}
                            value={formik.values.get_emails}
                            spacing
                            onChange={formik.handleChange}
                            name="get_emails"
                            id="get_emails"
                            icon={EmailIcon}
                        />
                    </div>
                    <Button 
                        type="submit"
                        disabled={formik.isSubmitting}
                        loading={formik.isSubmitting}
                        className="w-full my-2"
                    >
                        Register
                    </Button>
                </Form>
            </FormikProvider>
        </div>
    ) : (
        <div>
            <h1 className="text-3xl font-medium dark:text-white">Register</h1>
            <span className='my-2 block dark:text-white '>
                {"Verified your account?"} <Link href="/login"><a className="text-blue font-medium transition-colors  dark:hover:text-gray-400 hover:text-gray-800">Login In</a></Link> 
            </span>
            <div className='bg-white p-4 shadow-sm rounded-md'>
                <p className="text-4xl text-green-600">
                    <i className={PasswordResetSuccess}></i>
                </p>
                <p className="text-xl text-green-600 dark:text-white font-bold">
                    {`Thank you for registering with NNDYM ${done.first_name}!  `}
                </p>
                <p className="text-md font-medium dark:text-white my-2">
                    {`We have sent you an email with a verification link. Please click on the link to verify your account.`}
                </p>
            </div>
        </div>
    )
}

export default RegisterForm

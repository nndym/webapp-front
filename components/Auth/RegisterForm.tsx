import Button from '@components/Button'
import DateInput from '@components/Input/Date'
import EmailInput from '@components/Input/Email'
import PasswordInput from '@components/Input/Password'
import TextInput from '@components/Input/Text'
import { Form, FormikProvider, useFormik } from 'formik'
import Link from 'next/link'
import React from 'react'
import { DateOfBirthIcon, EmailIcon, NameIcon, PasswordIcon } from 'static_data/icons'
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
    country: yup.string().required('Country is required.'),
    date_of_birth: yup.date().required('Date of birth is required.')
                             .max(max_date, 'You must be at least 16.')
                             .min(min_date, 'Please enter a real age!')
                             .typeError('Please enter a valid date. '),
})

function RegisterForm() {

    const formik = useFormik({
        validationSchema: RegisterFormValidation,
        initialValues: {
            email: '',
            password: '',
            username: '',
            first_name: '',
            last_name: '',
            date_of_birth: new Date(new Date().getFullYear() - 16, new Date().getMonth(), new Date().getDate()),
            country: '',
        },
        onSubmit: (values, actions) => {
            console.log(values);
            actions.setSubmitting(false);            
        }
    })

    return (
        <div className="max-w-md">
            <h1 className="text-3xl font-medium dark:text-white">Register</h1>
            <span className='my-2 block dark:text-white '>
                {"Already have an account?"} <Link href="/login"><a className="text-blue font-medium transition-colors  dark:hover:text-gray-400 hover:text-gray-800">Login In</a></Link> 
            </span>
            <FormikProvider value={formik}>
                <Form className='my-4'>
                    <div className="grid grid-cols-2 gap-4">
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
                    <div className="grid grid-cols-2 gap-4">
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
                        <p>Country</p>
                    </div>
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
    )
}

export default RegisterForm

import EmailInput from '@components/Input/Email'
import PasswordInput from '@components/Input/Password'
import { Form, FormikProvider, useFormik } from 'formik'
import Link from 'next/link'
import React from 'react'
import { EmailIcon, PasswordIcon } from 'static_data/icons'

function RegisterForm() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: '',
            firstName: '',
            lastName: '',
            date_of_birth: '',
            country: '',
        },
        onSubmit: (values, actions) => {

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
                        <p>First Name</p>
                        <p>Last Name</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p>Date of birth</p>
                        <p>Country</p>
                    </div>
                    <EmailInput
                        error={formik.touched.email && formik.errors.email && formik.errors.email.toString()}
                        value={formik.values.email}
                        spacing
                        onChange={formik.handleChange}
                        name="email"
                        label="Email"
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
                        value={formik.values.password}
                        error={formik.touched.password && formik.errors.password && formik.errors.password.toString()}
                    />
                </Form>
            </FormikProvider>
        </div>
    )
}

export default RegisterForm

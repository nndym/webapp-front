import Button from '@components/Button'
import PasswordInput from '@components/Input/Password'
import { Form, FormikProvider, useFormik } from 'formik'
import api from 'lib/api'
import React, { useState } from 'react'
import { PasswordIcon, PasswordIconAlt, PasswordResetSuccess } from 'static_data/icons'
import * as yup from 'yup';

const ChangePasswordFormValidation = yup.object().shape({
    password: yup.string()
                 .min(6, 'Password must be at least 6 characters long')
                 .matches(/[0-9]/, 'Password must contain at least one number')
                 .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                 .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                 .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, 'Password must contain at least one special character')
                 .required('Password is required.'),
    passwordConfirmation: yup.string()
                             .required('Password Confirmation is required.')
                             .oneOf([yup.ref('password'), null], 'Passwords must match')
})

function ResetPasswordForm() {

    const [reset, setReset] = useState(false)

    const formik = useFormik({
        initialValues: {
            password: '',
            passwordConfirmation: ''
        },
        onSubmit: (values, actions) => {
            const url = new URLSearchParams(window.location.search);
            api.post('auth/reset-password', {
                password: values.password,
                passwordConfirmation: values.passwordConfirmation,
                code: url.get('code')
            })
            .then((res)=>{
                setReset(true)
                actions.setSubmitting(false);
            })
            .catch((err)=>{
                formik.setErrors({
                    password: 'Looks like this link has expired, or something has gone very wrong, please try again later!',
                    passwordConfirmation: " "
                })
                actions.setSubmitting(false);
            })
            
        },
        validationSchema: ChangePasswordFormValidation
    })

    return (
        <div className="max-w-md">
            <h1 className="text-3xl font-medium dark:text-white">Reset Password</h1>
            <h1 className="text-gray-600 dark:text-gray-300">{"Don't worry we will have you back into your account in no time."}</h1>
            {reset ? (
                <div className='p-4 bg-white shadow-md my-4'>
                    <h1 className="text-lg text-green-600 font-medium dark:text-white"> <i className={PasswordResetSuccess}></i>  Password Reset Successful</h1>
                    <div className='flex'>
                        <Button href="/login" className="my-2" size="medium">
                            Login
                        </Button>
                    </div>
                </div>
            ) : (
                <FormikProvider value={formik}>
                    <Form className="my-4">
                        <PasswordInput
                            spacing
                            bar
                            label="New Password"
                            name='password'
                            autoComplete='new-password'
                            icon={PasswordIcon}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            error={formik.touched.password && formik.errors.password && formik.errors.password.toString()}
                        />
                        <PasswordInput
                            spacing
                            label="Confirm New Password"
                            name='passwordConfirmation'
                            autoComplete='new-password'
                            icon={PasswordIconAlt}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.passwordConfirmation}
                            error={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && formik.errors.passwordConfirmation.toString()}
                        />
                        <Button 
                            type="submit"
                            disabled={formik.isSubmitting}
                            loading={formik.isSubmitting}
                            className="w-full my-2"
                        >
                            Reset Password
                        </Button>
                    </Form>
                </FormikProvider>
            )}
            
        </div>
    )
}

export default ResetPasswordForm

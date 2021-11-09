import Button from '@components/Button'
import EmailInput from '@components/Input/Email'
import PasswordInput from '@components/Input/Password'
import axios from 'axios'
import { FormikProvider, useFormik } from 'formik'
import api from 'lib/api'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { EmailIcon, PasswordIcon } from 'static_data/icons'
import * as yup from 'yup';

const LoginFormValidation = yup.object().shape({
    email: yup.string().email('Please enter a valid email!').required('Required'),
    password: yup.string().required('Required')
})

function LoginForm({token}: {token: string}) {

    const router = useRouter()   

    const [resetDone, setResetDone] = useState(false)

    const formik = useFormik({
        validationSchema: LoginFormValidation,
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values, actions) => {
            axios.post('/api/auth/callback/credentials', {
                email: values.email,
                password: values.password,
                csrfToken: token
            })
            .then(res => {
                let url = new URLSearchParams(res.request.responseURL);
                if(url.get('error') !== null) {
                    formik.setFieldError('email', "Email/Password was incorrect");
                    formik.setFieldError('password', " ");
                } else {
                    url = new URLSearchParams(window.location.search);
                    let callback = url.get('callbackUrl');
                    router.push(callback);
                }
                actions.setSubmitting(false);
            })
            .catch(()=>{
                formik.setFieldError('email', "Something has gone wrong, please try again later!"); 
                actions.setSubmitting(false);
            })
        }
    })

    const handleReset = () => {
        formik.setSubmitting(true);
        formik.validateField('email');
        formik.setFieldTouched("email")
        formik.setFieldTouched("password", false)
        if(formik.errors.email) {
            formik.setSubmitting(false);
        } else {
            api.post('auth/forgot-password', {email: formik.values.email})
                .then(res => {
                    setResetDone(true);
                    formik.setSubmitting(false);
                })
                .catch(err => {
                    switch(err.response.data.statusCode) {
                        case 400:
                            formik.setFieldError('email', "Email not found!");
                            break;
                        default:
                            formik.setFieldError('email', "Something has gone wrong, please try again later!");
                            break; 
                    }
                    formik.setSubmitting(false);
                })
        }
    }

    return (
        <div className="max-w-md">
            <h1 className="text-3xl font-medium dark:text-white">Login</h1>
            <h1 className="text-gray-600 dark:text-gray-300">Access the full benfits of your NNDYM account!</h1>

            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit} className="my-4" method="post">
                    <input name="csrfToken" type="hidden" defaultValue={token} />
                    <EmailInput
                        error={formik.touched.email && formik.errors.email && formik.errors.email.toString()}
                        value={formik.values.email}
                        spacing
                        helperText={resetDone && "An email has been sent to you with a link to reset your password!"}
                        success={resetDone}
                        onChange={formik.handleChange}
                        name="email"
                        label="Email"
                        icon={EmailIcon}
                    />
                    <PasswordInput
                        spacing
                        icon={PasswordIcon}
                        onChange={formik.handleChange}
                        error={formik.touched.password && formik.errors.password && formik.errors.password.toString()}
                        value={formik.values.password}
                    />
                    <div className="flex justify-end">
                        <a onClick={handleReset} className="text-blue font-medium transition-colors hover:text-gray-800">
                            Forgot Password?
                        </a>
                    </div>
                    <Button 
                        type="submit"
                        disabled={formik.isSubmitting}
                        loading={formik.isSubmitting}
                        className="w-full my-2"
                    >
                        Login
                    </Button>
                    
                        <span className='my-2 block'>
                            {"Don't have an account?"} <Link href="/register"><a className="text-blue font-medium transition-colors hover:text-gray-800">Sign Up</a></Link> 
                        </span>
                </form>
            </FormikProvider>

        </div>
    )
}

export default LoginForm

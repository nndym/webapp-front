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

    const [resetDone, setResetDone] = useState("")

    const formik = useFormik({
        validationSchema: LoginFormValidation,
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values, actions) => {
            axios.post('/api/auth/callback/credentials/', {
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
                    let findError = res.request.responseURL.split('error=');
                    if(findError[1] === undefined) {
                        if(window.location.search === ""){
                            router.push("/");
                        } else {
                            url = new URLSearchParams(window.location.search);
                            let callback = url.get('callbackUrl');
                            router.push(callback);
                        }
                    }
                    else {
                        switch(findError[1]) {
                            case 'Auth.form.error.confirmed':
                                formik.setFieldError('email', "Your account email is not confirmed.")
                                break;
                            case 'Auth.form.error.blocked':
                                formik.setFieldError('email', "Your account is blocked.")
                                break;
                            case 'Auth.form.error.invalid':
                                formik.setFieldError('email', "Email/Password was incorrect");
                                formik.setFieldError('password', " ");
                                break;  
                            default:
                                formik.setFieldError('email', "Something has gone wrong, please try again later!"); 
                        }
                    }
                    
                }
                actions.setSubmitting(false);
            })
            .catch((err)=>{
                formik.setFieldError('email', "Something has gone wrong, please try again later!"); 
                actions.setSubmitting(false);                
            })
        }
    })

    const handleNewConfirmLink = () =>{
        formik.setSubmitting(true);
        api.post('auth/send-email-confirmation', {email: formik.values.email})
            .then(res => {
                formik.setSubmitting(false);
                formik.setFieldError('email', "");
                setResetDone("An email has been sent to you with a link to confirm your email address!");
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
                    setResetDone("An email has been sent to you with a link to reset your password!");
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
            <span className='my-2 block dark:text-white '>
                {"Don't have an account?"} <Link href="/register"><a className="text-blue font-medium transition-colors  dark:hover:text-gray-400 hover:text-gray-800">Sign Up</a></Link> 
            </span>

            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit} className="my-4" method="post">
                    <EmailInput
                        error={formik.touched.email && formik.errors.email && formik.errors.email.toString()}
                        value={formik.values.email}
                        spacing
                        helperText={resetDone}
                        success={resetDone !== ""}
                        onChange={formik.handleChange}
                        name="email"
                        autoComplete="email"
                        label="Email"
                        icon={EmailIcon}
                    />
                    
                    <PasswordInput
                        spacing
                        icon={PasswordIcon}
                        autoComplete='current-password'
                        onChange={formik.handleChange}
                        error={formik.touched.password && formik.errors.password && formik.errors.password.toString()}
                        value={formik.values.password}
                    />
                    <div className="flex justify-between">
                            {formik.errors.email === "Your account email is not confirmed." ? (
                                <span tabIndex={0} role='button' onClick={handleNewConfirmLink} className="text-blue dark:hover:text-gray-400 cursor-pointer font-bold transition-colors hover:text-gray-800">
                                    Send new confirmation email! 
                                </span>
                            ) : (
                                <span tabIndex={0} role='button' onClick={handleReset} className="text-blue ml-auto dark:hover:text-gray-400 cursor-pointer font-medium transition-colors hover:text-gray-800">
                                    Forgot Password?
                                </span>
                            )}
                    </div>
                    <Button 
                        type="submit"
                        disabled={formik.isSubmitting}
                        loading={formik.isSubmitting}
                        className="w-full my-2"
                    >
                        Login
                    </Button>     
                </form>
            </FormikProvider>

        </div>
    )
}

export default LoginForm

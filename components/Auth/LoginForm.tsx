import Button from '@components/Button'
import EmailInput from '@components/Input/Email'
import PasswordInput from '@components/Input/Password'
import axios from 'axios'
import { FormikProvider, useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { EmailIcon, PasswordIcon } from 'static_data/icons'
import * as yup from 'yup';

const LoginFormValidation = yup.object().shape({
    email: yup.string().email('Please enter a valid email!').required('Required'),
    password: yup.string().required('Required')
})

function LoginForm({token}: {token: string}) {

    const router = useRouter()    

    const doHtmlFormPost = values => {
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
        })
        .catch(()=>{
            formik.setFieldError('email', "Something has gone wrong, please try again later!"); 
        })
    };

    const formik = useFormik({
        validationSchema: LoginFormValidation,
        initialValues: {
            email: '',
            password: ''
        },
        initialErrors: {
            email: 'Test',
            password: ''
        },
        onSubmit: doHtmlFormPost
    })

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
                        <Link
                            href="/forgot-password"
                            passHref
                        >
                            <a className="text-blue font-medium transition-colors hover:text-gray-800">
                            Forgot Password?
                            </a>
                        </Link>
                    </div>
                    <Button 
                        type="submit"
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

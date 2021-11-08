import Button from '@components/Button'
import EmailInput from '@components/Input/Email'
import PasswordInput from '@components/Input/Password'
import Link from 'next/link'
import React from 'react'
import { EmailIcon, PasswordIcon } from 'static_data/icons'

function LoginForm({token}: {token: string}) {
    return (
        <div>
            <h1 className="text-3xl font-medium dark:text-white">Login</h1>
            <h1 className="text-gray-600 dark:text-gray-300">Access the full benfits of your NNDYM account!</h1>
            <form className="my-4" method="post" action="/api/auth/callback/credentials">
                <input name="csrfToken" type="hidden" defaultValue={token} />
                <EmailInput
                   //error="Please enter a valid email"
                   required
                   spacing
                   name="email"
                   label="Email"
                   icon={EmailIcon}
                />
                <PasswordInput
                    spacing
                    required
                    icon={PasswordIcon}
                    //error="Incorrect Email/Password"
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
        </div>
    )
}

export default LoginForm

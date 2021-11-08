import EmailInput from '@components/Input/Email'
import React from 'react'

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
                   icon
                />
                {/* <label>
                    Password
                    <input name="password" type="password" />
                </label>
                <button type="submit">Sign in</button> */}
            </form>
        </div>
    )
}

export default LoginForm

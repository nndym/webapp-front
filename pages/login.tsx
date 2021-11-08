import { getCsrfToken, getSession, useSession } from 'next-auth/client'
import React from 'react'

function Login({ csrfToken }) {
    
    return (
        <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
                Email
                <input name="email" type="text" />
            </label>
            <label>
                Password
                <input name="password" type="password" />
            </label>
            <button type="submit">Sign in</button>
        </form>
    )
}

export async function getServerSideProps(context) {

    let session = await getSession(context)

    if(!!session) {
        const {res} = context
        res.setHeader('location', '/account')
        res.statusCode = 302;
        return {props: {}};
    }

    return {
      props: {
        csrfToken: await getCsrfToken(context),
      },
    }
  }

export default Login

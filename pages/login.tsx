import Split from '@components/Layout/Auth/Split'
import { getCsrfToken, getSession, useSession } from 'next-auth/client'
import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import LoginForm from '@components/Auth/LoginForm'

function Login({ csrfToken }) {
    
    const router = useRouter()

    return (
        <>
            <Head>
                <title>Login - NNDYM</title>
            </Head>
            <Split>
                <div>
                    <span aria-label="Back" className="cursor-pointer text-gray-500 dark:text-white" onClick={()=>router.back()}><i className="las la-arrow-left"></i> Back</span>
                    <div className="my-8">
                        <Image onClick={()=>router.push("/")} width={55} height={55} alt="NNDYM Logo" className="cursor-pointe" src="/logo.svg" />
                        <LoginForm token={csrfToken}/>
                    </div>
                    <h1>Footer</h1>
                </div>
                <div>
                    Right
                </div>
            </Split>
        </>
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

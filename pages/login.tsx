import Split from '@components/Layout/Auth/Split'
import { getCsrfToken, getSession, useSession } from 'next-auth/client'
import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import LoginForm from '@components/Auth/LoginForm'
import { motion } from 'framer-motion'
import Footer from '@components/Auth/Footer'

function Login({ csrfToken }) {
    
    const router = useRouter()

    return (
        <>
            <Head>
                <title>Login - NNDYM</title>
            </Head>
            <Split>
                <motion.div 
                    className='w-[80%] flex flex-col justify-between h-full my-20'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={ { duration: 0.6, ease: "easeInOut" } }
                >
                    <div>
                        <span tabIndex={0} aria-label="Back" className="cursor-pointer text-gray-500 dark:text-white hover:text-black dark:hover:text-gray-400 transition-colors" onClick={()=>router.back()}><i className="las la-arrow-left"></i> Back</span>
                    </div>
                    <div className="my-8">
                        <Image onClick={()=>router.push("/")} width={55} height={55} alt="NNDYM Logo" className="cursor-pointer" src="/logo.svg" />
                        <LoginForm token={csrfToken}/>
                    </div>
                    <Footer/>
                </motion.div>
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

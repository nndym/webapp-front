import Split from '@components/Layout/Auth/Split'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Footer from '@components/Auth/Footer'
import Link from 'next/link'
import ResetPasswordForm from '@components/Auth/ResetPasswordForm'

function ResetPassword() {

    const router = useRouter()

    return (
        <>
            <Head>
                <title>Reset Password - NNDYM</title>
            </Head>   
            <Split>
                <motion.div 
                    className='w-[80%] flex flex-col justify-between h-full my-20'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={ { duration: 0.6, ease: "easeInOut" } }
                >
                    <div>
                        <Link href="/" passHref>
                            <a className="cursor-pointer text-gray-500 dark:text-white hover:text-black dark:hover:text-gray-400 transition-colors"><i className="las la-arrow-left"></i> Home</a>
                        </Link>
                    </div>
                    <div className="my-8">
                        <Image onClick={()=>router.push("/")} width={55} height={55} alt="NNDYM Logo" className="cursor-pointer" src="/logo.svg" />
                        <ResetPasswordForm />
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

export default ResetPassword

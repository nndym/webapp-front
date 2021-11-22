import ContactUsForm from '@components/Forms/ContactUsForm'
import PageHeader from '@components/Header/Page'
import TextInput from '@components/Input/Text'
import MainLayout from '@components/Layout/Main'
import SplitLayout from '@components/Layout/Split'
import Navigation from '@components/Navigation'
import PageContainer from '@components/Page/Container'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'

function ContactUs() {
    return (
        <>
          <Head>
            <title>Contact Us</title>
          </Head>  
          <Navigation/>
          <MainLayout>
             <PageContainer>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <motion.h6 
                            className='mt-12 font-bold '
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={ { duration: 0.7, delay: 0.6, type: "spring" } }
                        >Contact Us</motion.h6>
                        <motion.h1 
                            className='font-bold my-2 text-4xl text-blue'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0}}
                            transition={ { duration: 0.7, delay:1, type: "spring" } }
                        >How can we help?</motion.h1>
                        <motion.p
                            className='text-md text-gray-600 my-2'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0}}
                            transition={ { duration: 0.7, delay:1.3, type: "spring" } }
                        >
                            We’re here to help and answer any question you might have, that means we look forward to hearing from you!
                        </motion.p>
                    </div>
                    <ContactUsForm/>
                </div>
             </PageContainer>
          </MainLayout>
        </>
    )
}

export default ContactUs

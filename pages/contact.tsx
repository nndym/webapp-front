import ContactUsForm from '@components/Forms/ContactUsForm'
import PageHeader from '@components/Header/Page'
import TextInput from '@components/Input/Text'
import MainLayout from '@components/Layout/Main'
import SplitLayout from '@components/Layout/Split'
import Navigation from '@components/Navigation'
import PageContainer from '@components/Page/Container'
import AccountSnippet from '@components/Snippets/Account'
import ISSOSevaSnippet from '@components/Snippets/ISSOSeva'
import QuoteSnippet from '@components/Snippets/Quote'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon } from 'static_data/icons'

const data = [
    {
        title: 'Make a donation',
        link: '/donate',
        text: "We now take donations online so all you need is a credit/debit card and you are ready for action!",
        color: "bg-green-400"
    },
    {
        title: 'Find a way to help',
        link: '/help',
        text: "Still wan’t to support NNDYM but don’t have money to spare, find out different ways to support us!",
        color: "bg-indigo-600"
    },
    {
        title: 'Check us out on Social Media',
        link: '/social',
        text: "Throw us a follow, shoutout or even just say hello, spam us with like we will love you for it!",
        color: "bg-pink-700"
    }
]

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
                            className='mt-12 font-bold dark:text-white'
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
                            className='text-md text-gray-600 my-2 md:w-3/4 dark:text-white'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0}}
                            transition={ { duration: 0.7, delay:1.3, type: "spring" } }
                        >
                            We’re here to help and answer any question you might have, that means we look forward to hearing from you!
                        </motion.p>
                        <motion.div 
                            initial="closed"
                            animate="open"
                            variants={{
                                open:{
                                    opacity: 1,
                                    transition:{ staggerChildren: 0.4, delayChildren: 0.8 }
                                },
                                closed:{
                                    opacity: 0,
                                }
                            }}
                            className='my-6 grid gap-4'
                        >
                            {data.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    transition={{duration: 0.6, type: "spring"}}
                                    variants={{
                                        open:{
                                            opacity: 1,
                                            y: 0,
                                        },
                                        closed:{
                                            opacity: 0,
                                            y: 25,
                                        }
                                    }} 
                                    className='bg-gray-200 dark:bg-gray-800 p-8 md:mr-8 flex hover:shadow-md transition-shadow'>
                                    <div>
                                        <span
                                            className={'block h-8 w-8 mr-6 ' + item.color}
                                        />
                                    </div>
                                    <div>
                                        <Link href={item.link} passHref>
                                            <a 
                                                className="font-semibold text-lg text-purple dark:text-blue dark:hover:text-white hover:text-blue transition-colors"
                                            >{item.title} <i className={ArrowRightIcon}></i></a>
                                        </Link>
                                        <p className='mt-2 font-light dark:text-white '>
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    <ContactUsForm/>
                </div>
                
                </PageContainer>
                <AccountSnippet/>
                <QuoteSnippet/>
                <ISSOSevaSnippet/>
          </MainLayout>
        </>
    )
}

export default ContactUs

import PageHeader from '@components/Header/Page'
import MainLayout from '@components/Layout/Main'
import Navigation from '@components/Navigation'
import Head from 'next/head'
import React from 'react'
import about_us_image from '@images/about_us.jpg'
import AccountSnippet from '@components/Snippets/Account'
import QuoteSnippet from '@components/Snippets/Quote'
import ISSOSevaSnippet from '@components/Snippets/ISSOSeva'
import PageContainer from '@components/Page/Container'
import CenterPointHeader from '@components/Header/CenterPoint'
import { motion } from 'framer-motion'

const data = [
    {
        title: 'Founded in 1994',
        text: "by His Holiness 1008 Acharyashri Koshalendraprasadji Maharaj"
    },
    {
        title: '250,000 + members',
        text: "having more than 200,000 members in India and over 30,000 overseas."
    },
    {
        title: '15+ Annual Events',
        text: "Camps, Conferences, Sabhas, Navratri, Sports days, you name it!"
    },
]

function AboutUs() {
    return (
        <>
            <Head>
                <title>About Us</title>
           </Head>
           <Navigation/> 
           <MainLayout>
               <PageHeader
                    title="About Us"
                    cta="Created to help young people to confront the challenges of human life."
                    subtitle="NNDYM aims to nurture its members to firstly become good human being and then arouses feelings of responsibility, spiritual consciousness and dedication. "
                    image={about_us_image}
                    alt='Happy people infront of a tent holding a sign.'
               />
               <PageContainer>
                   <CenterPointHeader
                        pushTop
                        title="What is NNDYM?"
                        text="NNDYM was founded by His Holiness 1008 Acharyashri Koshalendraprasadji Maharaj in 1994 with its headquarters at Shree Swaminarayan Mandir, Kalupur, Ahmedabad."
                   />
                   <motion.div 
                        className='text-center grid md:grid-cols-3 my-6 mt-16 gap-4 '
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{duration: 0.7, type: "spring"}}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                    >
                       {data.map((item, index) => (
                           <div key={index} className='p-4 rounded-md hover:shadow-sm transition-shadow'>
                                <h6 className='text-2xl font-bold'>
                                    {item.title}
                                </h6>
                                <p>
                                    {item.text}
                                </p>
                            </div>
                       ))}
                   </motion.div>
               </PageContainer>
               <ISSOSevaSnippet/>
               <QuoteSnippet/>
               <AccountSnippet/>
           </MainLayout>
        </>
    )
}

export default AboutUs

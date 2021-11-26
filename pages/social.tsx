import PageHeader from '@components/Header/Page'
import MainLayout from '@components/Layout/Main'
import Navigation from '@components/Navigation'
import PageContainer from '@components/Page/Container'
import AccountSnippet from '@components/Snippets/Account'
import QuoteSnippet from '@components/Snippets/Quote'
import WhatIsNNDYMSnippet from '@components/Snippets/WhatIsNNDYM'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { footer_links } from 'static_data/footer'

function Social() {
    return (
        <>
            <Head>
                <title>Socials</title>
            </Head>   
            <Navigation/>
            <MainLayout>
                <PageHeader 
                    title={'Socials'} 
                    half
                    cta={'Keep up to date with our latest news on all the social networks'}                
                />
                <PageContainer>
                    <div 

                        className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'
                    >
                        {footer_links.sections[0].links.map((link, index) => (
                            <motion.a 
                                role="button" 
                                target='_blank' 
                                rel="noreferrer" 
                                className='p-8 hover:shadow-md bg-white shadow-sm transition-colors hover:bg-blue hover:text-white text-center'
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: (index * 0.2) + 0.9 , type: "spring" }}
                                href={link.link}
                            >
                                <i className={"text-6xl  " + link.icon }></i>
                                <p className='text-xl font-bold'>{link.name}</p>
                        </motion.a>
                        ))}
                    </div>
                </PageContainer>
                <WhatIsNNDYMSnippet/>
                <QuoteSnippet/>
                <AccountSnippet/>
            </MainLayout>
        </>
    )
}

export default Social

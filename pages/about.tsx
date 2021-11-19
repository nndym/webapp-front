import PageHeader from '@components/Header/Page'
import MainLayout from '@components/Layout/Main'
import Navigation from '@components/Navigation'
import Head from 'next/head'
import React from 'react'
import about_us_image from '@images/about_us.jpg'
import AccountSnippet from '@components/Snippets/Account'
import QuoteSnippet from '@components/Snippets/Quote'
import ISSOSevaSnippet from '@components/Snippets/ISSOSeva'

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
               <ISSOSevaSnippet/>
               <QuoteSnippet/>
               <AccountSnippet/>
           </MainLayout>
        </>
    )
}

export default AboutUs

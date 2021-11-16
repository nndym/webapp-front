import PageHeader from '@components/Header/Page'
import MainLayout from '@components/Layout/Main'
import Navigation from '@components/Navigation'
import Head from 'next/head'
import React from 'react'

function Terms() {
    return (
        <>
           <Head>
                <title>Terms and conditions - NNDYM</title>
           </Head> 
           <Navigation/>
           <MainLayout>
                <PageHeader
                    title="Terms & Conditions"
                    cta="The Legal stuff.."
                />
                <div className='container sm:m-auto md:px-24 px-8 py-4'>
                    <p>
                        The following document describes the conditions of use of our Websites and Services and our general conditions of our Services and Products.
                    </p>
                </div>
                
           </MainLayout>
        </>
    )
}

export default Terms

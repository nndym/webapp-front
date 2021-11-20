import PageHeader from '@components/Header/Page'
import MainLayout from '@components/Layout/Main'
import Navigation from '@components/Navigation'
import Head from 'next/head'
import React from 'react'
import about_us_image from '@images/about_us.jpg'
import about_us_garba from '@images/about_us_garba.jpg'
import about_us_bal_mandal from '@images/about_us_bal_mandal.jpg'
import about_us_camps from '@images/about_us_camps.jpg'
import about_us_conferences from '@images/about_us_conferences.jpg'
import AccountSnippet from '@components/Snippets/Account'
import QuoteSnippet from '@components/Snippets/Quote'
import ISSOSevaSnippet from '@components/Snippets/ISSOSeva'
import PageContainer from '@components/Page/Container'
import CenterPointHeader from '@components/Header/CenterPoint'
import { motion } from 'framer-motion'
import SplitLayout from '@components/Layout/Split'
import Button from '@components/Button'
import Image from 'next/image'
import BasicTiles from '@components/Tiles/Basic'


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

const about_data = [
    {
        title: "Bal Mandal Classes",
        text: "NNDYM conducts weekly educational Bal Mandal classes for the enrichment and personal development of youths. These classes cultivate cultural, spiritual, and social development for the pre-teen youths of our future.",
        link: "/about/balmandal",
        image: about_us_bal_mandal,
    },
    {
        title: "Garba Festivals (Navratri)",
        text: "NNDYM organizes a nine day festival called Navratri every year. A traditional Indian dance originating from the state of Gujarat called ' raas garba ' is enjoyed by thousands of people from all walks of life. This grand festival welcomes anyone and everyone, as it gives them a valuable insight into Indian culture.",
        //link: "/about/balmandal",
        image: about_us_garba,
    },
    {
        title: "International Camps",
        text: " NNDYM has organized international camps in various parts of the Europe, Africa, United States , India and Australasia Youths learn to introspect, and identify the person they are and strive to achieve self improvement and...",
        link: "/about/camps",
        image: about_us_camps,
    },
    {
        title: "Regional Conferences",
        text: "Since 2002, NNDYM has prepared quarterly regional conferences for youths. Regionally, youths get together for a few days to reflect on the community activities, personal spiritual progress, and discuss future goals.",
        link: "/about/conferences",
        image: about_us_conferences,
    }
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
                   <BasicTiles
                        data={data}
                        pushTop
                   />
                   {about_data.map((item, index) => (
                       <SplitLayout
                            key={index}
                            pull={index % 2 !== 0}
                            animate
                        >
                            <div className='py-4'>
                                <h4 className='font-bold text-3xl text-blue'>{item.title}</h4>
                                <p className='my-4 font-light'>{item.text}</p>
                                {item.link && <div className='flex'>
                                    <Button href={item.link} >
                                        Learn More
                                    </Button>
                                </div>}
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className={index % 2 === 0 ? 'md:pl-4' : 'md:pr-4'}
                                transition={ { duration: 0.5, type: "spring" } }
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                />
                            </motion.div>
                        </SplitLayout>
                   ))}
               </PageContainer>
               <ISSOSevaSnippet/>
               <QuoteSnippet/>
               <AccountSnippet/>
           </MainLayout>
        </>
    )
}

export default AboutUs

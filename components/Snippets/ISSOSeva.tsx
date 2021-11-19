import PageContainer from '@components/Page/Container'
import { motion } from 'framer-motion'
import React from 'react'
import ISSO_SEVA_LOGO from '@images/seva_logo.png'
import Image from 'next/image'
import Button from '@components/Button'

function ISSOSevaSnippet() {
    return (
        <PageContainer>
            <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{duration: 0.7, delay: 0.5, type: "spring"}}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className='grid md:grid-cols-3 my-4 gap-8 bg-gray-200 shadow-md hover:shadow-lg transition-shadow p-8 rounded-md'
            >
                <div className='flex w-24 h-24 md:w-48 md:h-48 m-auto justify-center relative'>
                    <Image
                        src={ISSO_SEVA_LOGO}
                        alt="ISSO Seva Logo"
                        placeholder="blur"
                        layout='fill'
                        quality={100}
                    />
                </div>
                <div className='flex items-center'>
                <h3 className="text-blue font-bold text-4xl text-center md:text-left md:text-4xl lg:text-5xl">
                    Proudly working with ISSO Seva
                </h3>
                </div>
                <div>
                    <p className='mb-4'>
                        This organization serves communities in which it operates through health camps, soup kitchens, food and supply drives, senior care, lunch initiatives, and park cleanup efforts.
                    </p>
                    <div className='flex items-center'>
                        <Button href="https://issoseva.org/">
                            Visit Website
                        </Button>
                        <a href="https://instagram.com/issoseva/">
                            <i className="lab text-3xl ml-2 text-blue hover:text-black transition-colors la-instagram"></i>
                        </a>
                        <a href="https://twitter.com/issoseva">
                            <i className="lab text-3xl ml-2 text-blue hover:text-black transition-colors la-twitter"></i>
                        </a>
                    </div>
                </div>
            </motion.div>
        </PageContainer>
    )
}

export default ISSOSevaSnippet

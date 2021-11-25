import Button from '@components/Button'
import PageContainer from '@components/Page/Container'
import { motion } from 'framer-motion'
import React from 'react'
import { about_us_data } from 'static_data/about'

function WhatIsNNDYMSnippet() {
    return (
        <PageContainer>
            <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{duration: 0.7, type: "spring"}}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className='grid md:grid-cols-3 my-4 gap-8 bg-gray-200 shadow-md hover:shadow-lg transition-shadow p-8 rounded-md'
            >
                <motion.div 
                    className='flex flex-col items-start justify-center'
                    initial={{ opacity: 0, y: -20 }}
                    transition={{duration: 0.7, type: "spring"}}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h5 className='text-blue text-5xl font-bold' >What is NNDYM?</h5>
                    <p className='py-2'>NNDYM aims to nurture its members to firstly become good human being and then arouses feelings of responsibility, spiritual consciousness and dedication.</p>
                    <Button size="medium" href='/about/'>
                        Learn More
                    </Button>
                </motion.div>
                <motion.div 
                    className="col-span-2 grid lg:grid-cols-2 gap-3"
                    initial={{ opacity: 0, y: -20 }}
                    transition={{duration: 0.7, type: "spring"}}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {about_us_data.map((item, index) => (
                        <div key={index} className='md:p-4 rounded-md hover:shadow-sm transition-shadow'>
                            <h6 className='text-2xl font-bold'>
                                {item.title}
                            </h6>
                            <p>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </PageContainer>
    )
}

export default WhatIsNNDYMSnippet

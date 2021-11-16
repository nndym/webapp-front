import { motion } from 'framer-motion'
import React from 'react'

function PageHeader({
    title,
    cta,
}) {
    return (
        <div className='container sm:m-auto md:px-24 px-8 py-4 flex flex-col items-start'>
            <motion.h6 
                className='mt-12 font-bold '
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={ { duration: 0.7, delay: 0.6, type: "spring" } }
            >{title}</motion.h6>
            <motion.h1 
                className='font-bold text-4xl text-blue'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0}}
                transition={ { duration: 0.7, delay:1, type: "spring" } }
            >{cta}</motion.h1>
        </div>
    )
}

export default PageHeader

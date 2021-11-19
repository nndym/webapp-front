import PageContainer from '@components/Page/Container'
import { motion } from 'framer-motion'
import React from 'react'

function QuoteSnippet() {
    return (
        <PageContainer>
            <motion.p 
                className='text-center mt-8 font-bold text-4xl'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={ { duration: 0.7, delay: 0.6, type: "spring" } }
            >
                <q>
                    First Be Human, Than Religious
                </q></motion.p>
            <motion.p 
                className='text-center text-md mb-8'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={ { duration: 0.7, delay: 0.6, type: "spring" } }
            >
                - Koshalendraprasad Pande 
            </motion.p>
        </PageContainer>
    )
}

export default QuoteSnippet

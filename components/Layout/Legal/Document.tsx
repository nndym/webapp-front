import { motion } from 'framer-motion'
import React from 'react'

function LegalDocumentSection({children}: {children: React.ReactNode}) {
    return (
        <motion.div 
            className='bg-white shadow-sm p-8 rounded-md'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
        >
            {children}
        </motion.div>
    )
}

export default LegalDocumentSection

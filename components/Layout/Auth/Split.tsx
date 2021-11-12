import { motion } from 'framer-motion'
import React from 'react'

function Split({children}: {children: React.ReactNode}) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-7">
            <div className="lg:col-span-3 min-h-screen sm:h-auto dark:bg-gray-700 flex flex-col items-center justify-center">
                {children[0]}
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1  }} 
                transition={ { duration: 0.5, ease: 'easeInOut' } }
                className="bg-blue min-h-screen sm:h-auto dark:bg-gray-800 lg:col-span-4 flex flex-col items-center "
            >
                {children[1]}
            </motion.div>
        </div>
    )
}

export default Split

import { motion } from 'framer-motion'
import React from 'react'

function BasicTiles({data, pushTop = false}: {data: any, pushTop?: boolean}) {
    return (
        <motion.div 
            className={'text-center grid md:grid-cols-3 my-6 gap-4 ' + (pushTop ? 'mt-16' : '')}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{duration: 0.7, type: "spring"}}
            animate={{ opacity: 1, y: 0, scale: 1 }}
        >
            {data.map((item, index) => (
                <div key={index} className='p-4 rounded-md hover:shadow-sm transition-shadow'>
                    <h6 className='text-2xl font-bold'>
                        {item.title}
                    </h6>
                    <p>
                        {item.text}
                    </p>
                </div>
            ))}
        </motion.div>
    )
}

export default BasicTiles

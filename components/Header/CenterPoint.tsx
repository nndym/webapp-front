import { motion } from 'framer-motion'
import React from 'react'

function CenterPointHeader({
    title,
    text,
    pushTop,
}:{
    title: string,
    text?: string,
    pushTop?: boolean,
}) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{duration: 0.7, type: "spring"}}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={ "text-center flex flex-col items-center" + (pushTop ? " mt-8 " : "" )}
        >
            <h3 className='text-blue font-bold text-3xl'>{title}</h3>
            <p className=' max-w-[520px] my-4 font-light'>{text}</p>
        </motion.div>
    )
}

export default CenterPointHeader

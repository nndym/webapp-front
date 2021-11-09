import { motion } from 'framer-motion'
import React, { useRef } from 'react'

function HelperText({error, helperText, success}:{error:string|boolean, helperText:string, success:boolean}) {
    
    return (
        <motion.p 
            initial={{ height: 0, paddingTop: 0, paddingBottom: 0}}
            animate={{ height: error || helperText  ? '100%' : '0%', paddingTop: error || helperText ? 8 : 0, paddingBottom: error || helperText ? 8 : 0 }}
            className={'text-sm overflow-y-hidden transition-colors w-[80%] '+ (success && !error && "text-green-600 ") + (error && ' text-red-500')}
        >
           {error || helperText}
        </motion.p>
    )
}

export default HelperText

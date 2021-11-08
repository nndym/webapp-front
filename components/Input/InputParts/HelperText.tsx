import { motion } from 'framer-motion'
import React, { useRef } from 'react'

function HelperText({error, helperText}:{error:string|boolean, helperText:string}) {
    
    const ref = useRef();
    
    return (
        <motion.p 
            ref={ref}
            initial={{ height: 0, paddingTop: 0, paddingBottom: 0}}
            animate={{ height: error || helperText  ? '100%' : '0%', paddingTop: error || helperText ? 8 : 0, paddingBottom: error || helperText ? 8 : 0 }}
            className={'text-sm overflow-y-hidden transition-colors w-[80%] ' + (error && ' text-red-500')}
        >
           {error || helperText}
        </motion.p>
    )
}

export default HelperText

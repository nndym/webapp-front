import { useEffect, useState } from "react"
import {motion} from 'framer-motion'
import MenuButton from "./MenuButton"

function MobileMenu({open, setOpen}) {

    const [hide, setHide] = useState(true)

    useEffect(() => {
        if(open) {setHide(false)}
    }, [open])

    const variants = {
        open: {
            opacity: 1,
            scale: 1,
            originX: "calc( 100vw - 12.5rem )", 
            originY: "1.0rem"
        },
        closed: {
            opacity: 0,
            scale: 0,
            originX: "calc( 100vw - 3.5rem )", 
            originY: "1.5rem"
        }
    }

    return (
        <motion.div
            variants={variants}
            animate={open ? "open" : "closed"}
            className={'fixed w-full h-full p-6' + (hide ? ' hidden' : ' block')}
            initial={variants.closed}
            onAnimationComplete={definition => {
                if(definition === "closed") setHide(true)
            }}
            onClick={()=>{setOpen(false)}}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
           <div onClick={(e)=>{e.stopPropagation()}} className='bg-white shadow-md rounded-lg h-full'>
                <div className='flex justify-between p-4'>
                    <h1>NNDYM</h1>
                    <MenuButton
                        open={open}
                        setOpen={()=>setOpen(false)}
                    />
                </div>
           </div>
        </motion.div>
    )
}

export default MobileMenu;
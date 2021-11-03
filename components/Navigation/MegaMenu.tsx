import React, { useEffect, useState } from 'react'
import { useMenu } from './Context'
import {motion} from 'framer-motion'


function MegaMenu() {

    const {show, info}:any = useMenu();
    const [hide, setHide] = useState(true)

    useEffect(() => {
        if(show){
            setDisplay(true)
            setHide(false)
            setTimeout(() => {
                setDisplay(false)
            }, 600);

        }
    }, [show])

    const [display, setDisplay] = useState(false)

    const findVariant = () => {
        if(show || display){
            return 'open'
        }else{
            return 'closed'
        }
    }

    const findSize = () =>  {
        switch(info.size){
            case 'small':
                return '120px'
            case 'medium':
                return '180px'
            case 'big':
                return '250px'
            default:
                return '50px'
        }
    }

    const variants_display = {
        closed : {
            opacity: 0,
        },
        open : {
            opacity: 1,
        }
    }

    return (
        <motion.div 
            onHoverStart={()=>{setDisplay(true)}} 
            onHoverEnd={()=>{
                setTimeout(() => {
                    setDisplay(false)
                }, 400);
            }}
            onAnimationComplete={definition => {
                if(definition === "closed") setHide(true)
            }}
            variants={variants_display}
            initial={variants_display.closed}
            custom={findSize()}
            animate={findVariant()}
            className={"w-full mt-14 absolute left-0 " + (hide ? 'hidden' : '')}
        >
            <motion.div
                animate={{
                    height: findSize()
                }}
                transition={{ duration: 0.2 }}
                className="bg-white container m-auto rounded-md p-8 shadow-md">
                <h1> {info.name} </h1>
            </motion.div>
        </motion.div>
    ) 
}

export default MegaMenu

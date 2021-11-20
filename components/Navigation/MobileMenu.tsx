import { useEffect, useState } from "react"
import {motion} from 'framer-motion'
import MenuButton from "./MenuButton"
import { menu_items_top } from "static_data/menu"
import MenuItem from "./MenuItem"
import Button from "@components/Button"
import { useRouter } from "next/router"

function MobileMenu({open, setOpen}) {

    const [hide, setHide] = useState(true)
    const router = useRouter();

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
            className={'fixed w-full h-full p-6 z-50' + (hide ? ' hidden' : ' block')}
            initial={variants.closed}
            onAnimationComplete={definition => {
                if(definition === "closed") setHide(true)
            }}
            onClick={()=>{setOpen(false)}}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
           <div onClick={(e)=>{e.stopPropagation()}} className='bg-white shadow-md rounded-lg h-full overflow-y-auto'>
                <div className='flex justify-between p-4'>
                    <h1 onClick={()=>router.push("/", undefined, {scroll:false})} className="text-3xl p-2 font-bold text-blue cursor-pointer">NNDYM</h1>
                    <MenuButton
                        open={open}
                        setOpen={()=>setOpen(false)}
                    />
                </div>
                <div className="px-6">
                    {menu_items_top.map((item, index) => (
                        <div key={index}>
                            {item.big ? (
                                <>
                                {item.name}
                                </>
                            ) : (
                                <MenuItem mobile name={item.name} link={item.link} />
                            )}
                        </div>
                    ))}
                    <div className="flex flex-col my-2">
                        <Button
                            clear
                            color="black"
                            href="/donate"
                        >
                            Donate
                        </Button>
                        <Button 
                            className="my-2"
                            href="/account"
                        >
                            Account
                        </Button>
                    </div>
                </div>
           </div>
        </motion.div>
    )
}

export default MobileMenu;
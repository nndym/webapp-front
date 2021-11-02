import React from 'react'
import {motion, useViewportScroll} from 'framer-motion'
import MobileMenu from './MobileMenu';
import { menu_items_top } from 'static_data/menu';
import MenuItem from './MenuItem';
import MegaMenuItem from './MegaMenuItem';
import MenuButton from './MenuButton';

function Navigation() {

    const { scrollY } = useViewportScroll();

    const [moved, setMoved] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    function update() {
        //@ts-ignore
        if (scrollY?.current < scrollY?.prev) {
            setMoved(false);
        //@ts-ignore
        } else if (scrollY?.current > 30 && scrollY?.current > scrollY?.prev) {
            setMoved(true);
        }
    }

    /** update the onChange callback to call for `update()` **/
    React.useEffect(() => {
        
        //@ts-ignore
        if(scrollY?.current > 30) {
            setMoved(true);
        }

        return scrollY.onChange(() => update());
    });

    const variants = {
        /** this is the "top" key and it's correlating styles **/
        top: { backgroundColor: "#fff0", boxShadow: "0 0px 0px 0px rgba(0, 0, 0, 0.1), 0 0px 0px -1px rgba(0, 0, 0, 0.06)" },
        /** this is the "moved" key and it's correlating styles **/
        moved: { backgroundColor: '#fff', boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }
    };

    return (
        <>
            <motion.div 
                className="fixed w-full"
                variants={variants}
                animate={moved ? "moved" : "top"}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className=" container m-auto">
                    <motion.header 
                        className="flex justify-between pt-6 pb-6 mx-8 items-center "
                        initial={{
                            opacity: 0,
                            y: -40
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut"
                        }}

                    >
                        <img width={55} src="/logo.svg" />
                        <nav className='hidden md:flex'>
                            {menu_items_top.map((item, index) => item.big ? (
                                <MegaMenuItem
                                    key={index}
                                    name={item.name}
                                />
                            ) : (
                                <MenuItem 
                                    key={index} 
                                    name={item.name}
                                    link={item.link} 
                                />
                            ))}
                        </nav>
                        <div className="hidden md:flex">
                            <button>Donate</button>
                            <button className='ml-4'>Account</button>
                        </div>
                        <div className="block md:hidden">
                            <MenuButton 
                                setOpen={()=>setOpen(true)} 
                                open={open} 
                            />
                        </div>
                    </motion.header>
                </div>
            </motion.div>
            <MobileMenu
                open={open}
                setOpen={setOpen}
            />
        </>
    )
}

export default Navigation

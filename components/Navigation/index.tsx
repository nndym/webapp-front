import React from 'react'
import {motion, useViewportScroll} from 'framer-motion'
import MobileMenu from './MobileMenu';
import { menu_items_top } from 'static_data/menu';
import MenuItem from './MenuItem';
import MegaMenuItem from './MegaMenuItem';
import MenuButton from './MenuButton';
import { MenuProvider } from './Context';
import MegaMenu from './MegaMenu';
import Button from '@components/Button';
import Image from 'next/image'
import { useRouter } from 'next/router';


function Navigation() {

    const { scrollY } = useViewportScroll();
    const router = useRouter()

    const [moved, setMoved] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    /** update the onChange callback to call for `update()` **/
    React.useEffect(() => {     
        //@ts-ignore
        if(scrollY?.current > 1) {
            setMoved(true);
        }

        return scrollY.onChange(() => {
            //@ts-ignore
            if (scrollY?.current < 1) {
                setMoved(false);
            } else {
                setMoved(true);
            }
        });
    }, [scrollY]);

    const variants = {
        /** this is the "top" key and it's correlating styles **/
        top: { backgroundColor: "#fff0", boxShadow: "0 0px 0px 0px rgba(0, 0, 0, 0.1), 0 0px 0px -1px rgba(0, 0, 0, 0.06)" },
        /** this is the "moved" key and it's correlating styles **/
        moved: { backgroundColor: '#fff', boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }
    };

    return (
        <>
            <motion.div 
                className="fixed w-full z-50"
                variants={variants}
                //@ts-ignore
                initial={scrollY?.current > 1 ? 'moved' : 'top'}
                animate={moved ? "moved" : "top"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className=" container m-auto">
                    <div
                        className="flex justify-between pt-6 pb-6 mx-8 items-center "
                    >
                        <Image onClick={()=>router.push("/", undefined, {scroll:false})} className="cursor-pointer" width={55} height={55} alt="NNDYM Logo" src="/logo.svg" />
                        <MenuProvider>
                            <nav className='hidden md:flex'>
                                {menu_items_top.map((item, index) => item.big ? (
                                    <MegaMenuItem
                                        key={index}
                                        name={item.name}
                                        data={item.data}
                                    />
                                ) : (
                                    <MenuItem 
                                        key={index} 
                                        name={item.name}
                                        link={item.link} 
                                    />
                                ))}
                                <MegaMenu/>
                            </nav>
                        </MenuProvider>
                        <div className="hidden md:flex">
                            <Button color="black" href="/donate" clear>Donate</Button>
                            <Button className='ml-4' href="/account">Account</Button>
                        </div>
                        <div className="block md:hidden">
                            <MenuButton 
                                setOpen={()=>setOpen(true)} 
                                open={open} 
                            />
                        </div>
                    </div>
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

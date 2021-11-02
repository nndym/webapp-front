import React, { useEffect, useRef, useState } from 'react'
import {motion, useViewportScroll} from 'framer-motion'
import Link from 'next/link'

const menu_items = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Posts',
        big: true,
    },
    {
        name: 'About us',
        link: '/about-us'
    },
    {
        name: 'Events',
        big: true
    },
    {
        name: 'Contact us',
        link: '/contact-us'
    },

]

const Path = props => (
    <motion.path
      //fill="transparent"
      strokeWidth="3"
      stroke="#189EFE"
      strokeLinecap="round"
      {...props}
    />
  );

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
                            {menu_items.map((item, index) => item.big ? (
                                <BigMenuItem
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
                            <motion.button 
                                animate={open ? "open" : "closed"}
                                onClick={()=>{setOpen(true)}}
                                className='bg-white px-6 py-4 rounded-md shadow-sm z-50'
                            >
                                <svg width="23" height="23" fill="#fff"  viewBox="0 0 23 23">
                                    <Path
                                        variants={{
                                            closed: { d: "M 2 2.5 L 20 2.5" },
                                            open: { d: "M 3 16.5 L 17 2.5" }
                                        }}
                                    />
                                    <Path
                                        d="M 2 9.423 L 20 9.423"
                                        variants={{
                                        closed: { opacity: 1 },
                                        open: { opacity: 0 }
                                        }}
                                        transition={{ duration: 0.1 }}
                                    />
                                    <Path
                                        variants={{
                                        closed: { d: "M 2 16.346 L 20 16.346" },
                                        open: { d: "M 3 2.5 L 17 16.346" }
                                        }}
                                    />
                                </svg>
                            </motion.button>
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
                    <motion.button 
                        animate={open ? "open" : "closed"}
                        onClick={()=>{setOpen(false)}}
                        className='bg-white px-6 py-4 rounded-md shadow-sm z-50'
                    >
                        <svg width="23" height="23" viewBox="0 0 23 23">
                            <Path
                                variants={{
                                    closed: { d: "M 2 2.5 L 20 2.5" },
                                    open: { d: "M 3 16.5 L 17 2.5" }
                                }}
                            />
                            <Path
                                d="M 2 9.423 L 20 9.423"
                                variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                                }}
                                transition={{ duration: 0.1 }}
                            />
                            <Path
                                variants={{
                                closed: { d: "M 2 16.346 L 20 16.346" },
                                open: { d: "M 3 2.5 L 17 16.346" }
                                }}
                            />
                        </svg>
                    </motion.button>
                </div>
           </div>
        </motion.div>
    )
}



function MenuItem({ name, link }) {

    return (
        <Link
            href={link}
            passHref
        >
            <a 
                className=" mx-2 lg:mx-4 font-bold transition-colors hover:text-blue"
            >
            {name}
            </a>
        </Link>

    )
}


function BigMenuItem({name}){
    return (
        <div className='hoverable'>
            <span
                className="mx-2 lg:mx-4 font-bold transition-colors hover:text-blue cursor-pointer"
            >
                {name} <i className="las la-angle-down"></i>
                
            </span>
            <div className="mega-menu w-full pt-8 ">
                <div className="bg-white container m-auto rounded-md p-8 animate-fade-in shadow-md">
                    <h1> Large Menu </h1>
                </div>
            </div>
            
        </div>
    )
}

export default Navigation

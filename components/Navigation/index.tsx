import React from 'react'
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

function Navigation() {

    const { scrollY } = useViewportScroll();

    const [moved, setMoved] = React.useState(false);

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
        /** this is the "visible" key and it's correlating styles **/
        top: { backgroundColor: "#fff0", boxShadow: "0 0px 0px 0px rgba(0, 0, 0, 0.1), 0 0px 0px -1px rgba(0, 0, 0, 0.06)" },
        /** this is the "hidden" key and it's correlating styles **/
        moved: { backgroundColor: '#fff', boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }
    };

    return (
        <motion.div 
            className="fixed w-full"
            variants={variants}
            animate={moved ? "moved" : "top"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className=" container m-auto">
                <motion.header 
                    className="flex justify-between pt-6 pb-6 items-center "
                    initial={{
                        opacity: 0,
                        y: -20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                    }}

                >
                    <img width={55} src="/logo.svg" />
                    <nav className='flex'>
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
                    <div>
                        <button>Donate</button>
                        <button>Account</button>
                    </div>
                </motion.header>
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
                className="mx-4 font-bold transition-colors hover:text-blue"
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
                className="mx-4 font-bold transition-colors hover:text-blue cursor-pointer"
            >
                {name} <i className="las la-angle-down"></i>
                
            </span>
            <div className="mega-menu w-full pt-8">
                <div className="bg-white container m-auto rounded-md p-8 animate-fade-in shadow-md">
                    <h1> Large Menu </h1>
                </div>
            </div>
            
        </div>
    )
}

export default Navigation

import React from 'react'
import {motion, useViewportScroll} from 'framer-motion'

const menu_items = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Posts',
        link: '/blog'
    },
    {
        name: 'About us',
        link: '/about-us'
    },
    {
        name: 'Events',
        link: '/events'
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

    const variants_main = {
        /** this is the "visible" key and it's correlating styles **/
        top: { backgroundColor: "#fff0", boxShadow: "0 0px 0px 0px rgba(0, 0, 0, 0.1), 0 0px 0px -1px rgba(0, 0, 0, 0.06)" },
        /** this is the "hidden" key and it's correlating styles **/
        moved: { backgroundColor: '#fff', boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }
    };

    return (
        <motion.div 
            className="fixed w-full"
            variants={variants_main}
            animate={moved ? "moved" : "top"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className=" container m-auto">
                <motion.header 
                    className="flex justify-between pt-12 pb-6 items-center "
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
                    <nav>
                        <ul className="flex">
                            {menu_items.map((item, index) => (
                                <li
                                    key={index}
                                    className="mx-4"
                                >
                                    <a href={item.link}>
                                    {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
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

export default Navigation

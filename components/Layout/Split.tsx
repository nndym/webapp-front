import { motion } from 'framer-motion'
import React from 'react'

function SplitLayout({
    children,
    pull,
    animate,
}: {
    children: React.ReactNode
    pull?: boolean,
    animate?: boolean,
}) {

    let props:any = {
        className: "flex flex-col-reverse md:flex-row my-4 items-center " + (pull && "md:flex-row-reverse")
    }

    if(animate) {
        props = {
            ...props,
            initial: { opacity: 0, y: -20, scale: 0.9 },
            transition: { duration: 0.7, type: "spring" },
            animate: { opacity: 1, y: 0, scale: 1 }
        }
    }

    return React.createElement(animate ? motion.div : "div", props, (
        <>
            <div className={" w-full md:w-1/2 " + (pull ? " ml-4" : " mr-4")}>
                {children[0]}
            </div>
            <div className=" w-full md:w-1/2">
                {children[1]}
            </div>
        </>
    ))
}

export default SplitLayout

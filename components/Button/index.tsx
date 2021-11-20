import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

interface Props {
    children: React.ReactNode,
    className?: string
    color?: "primary" | "black",
    clear? : boolean,
    size?: "small" | "medium" | "large" | "custom",
    type?: "button" | "submit" | "reset" | "link",
    href?: string,
    name?:string,
    loading?: boolean,
    disabled?: boolean,
}

function Button({
    children, 
    className, 
    color = "primary",
    clear = false,
    size = "small",
    type = "button",
    href,
    name,
    disabled = false,
    loading = false,
}:Props) {

    let styles = className + " font-medium text-center shadow-sm hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"

    switch(size) {
        case "small":
            styles += " px-4 py-2 rounded-md"
            break
        case "medium":
            styles += " px-5 py-3 rounded-md"
            break
        case "large":
            styles += " px-6 py-4 font-bold rounded-md"
            break
        case "custom":
            styles += " rounded-md"
            break;
    }

    switch(color) {
        case "primary":
            clear ? styles += " border-2 border-blue text-blue" : styles += " bg-blue text-white"
            break
        case "black":
            clear ? styles += " border-2 border-black" : styles += " bg-black text-white"
            break
    }

    if(disabled) styles += " opacity-50 cursor-not-allowed"

    const buttonType = type === "link" || href ? motion.a : motion.button as any

    const renderThis = () => {
        return React.createElement(buttonType, {
            className: styles,
            type: type === "link" || href ? null : type,
            name: name,
            disabled: disabled,
            whileHover: {
                scale: disabled || loading ? 1.00 : 1.05,
            },
            whileTap: {
                scale: disabled || loading ? 1.00 : 0.95,
            }
        }, loading ? <i className="las la-spinner animate-spin"/> : children)
    }

    return href !== undefined || type === "link" ? (
        <Link 
            scroll={false}
            href={href || ''}
            passHref  
        >
            {renderThis()}
        </Link>
    ) : renderThis()

}

export default Button

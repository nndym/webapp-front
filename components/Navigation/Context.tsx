import React, { useContext, useEffect, useRef, useState } from 'react'

const MenuContext = React.createContext({})

export function useMenu(){
    return useContext(MenuContext);
}

export function MenuProvider({children}) {

    const [show, setShow] = useState(false)
    const [info, setInfo] = useState("Test")
    const [display, setDisplay] = useState(false)
    const timer = useRef(null)

    useEffect(() => {
        return () => {
            clearTimeout(timer.current)
        }
    }, [])

    const menuItemHoverEnd = () => {        
        timer.current = setTimeout(() => {
            setShow(false) 
        }, 600);
    }

    const menuItemHoverStart = (data) => {
        setShow(true)
        clearTimeout(timer.current)
        setInfo(data)
    }

    const value = {
        show,
        setShow,
        info,
        setInfo,
        display, 
        timer, 
        setDisplay,
        menuItemHoverEnd,
        menuItemHoverStart
    }

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}

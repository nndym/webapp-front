import React, { useContext, useState } from 'react'

const MenuContext = React.createContext({})

export function useMenu(){
    return useContext(MenuContext);
}

export function MenuProvider({children}) {

    const [show, setShow] = useState(false)
    const [info, setInfo] = useState("Test")

    const value = {
        show,
        setShow,
        info,
        setInfo,
    }

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}

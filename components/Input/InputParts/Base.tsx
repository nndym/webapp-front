import React, { useRef } from 'react'

interface Props {
    name?: string,
    id?: string,
    icon?: boolean,
    error?: string | boolean,
    required?: boolean,
}

function Base({
    name,
    id,
    icon,
    error,
    required
}: Props) {

    const inputRef = useRef(null)

    return (
        <div className={'flex items-center bg-white dark:bg-gray-600 dark:text-white rounded-sm shadow-sm focus-within:ring-2 transition-colors text-gray-600 border border-gray-300 hover:bg-gray-200 dark:focus-within:text-gray-400 dark:hover:text-white hover:text-black dark:hover:bg-gray-400 focus-within:text-black' + (error && ' text-red-500 border-red-500 hover:text-red-500')}>
            {icon && <i onClick={()=>inputRef.current.focus()} className="las la-envelope p-2 pl-3 cursor-text"></i>}
            <input 
                ref={inputRef} 
                className={'w-full bg-transparent focus:outline-none text-black dark:text-white' + (icon ? " p-2 pl-0 " : " p-2 px-3 ") + "" + (error && ' text-red-500')} 
                id={id} 
                name={name} 
                required={required}
                type="email"
            />
        </div>
    )
}

export default Base

import React, { useRef, useState } from 'react'
import { HidePasswordIcon, ShowPasswordIcon } from 'static_data/icons'

interface Props {
    name?: string,
    id?: string,
    icon?: string,
    error?: string | boolean,
    required?: boolean,
    toggle?: boolean,
    type?: string,
    autoComplete?: string,
    value?: string | Date | number | boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void,
    onDoubleClick?: (e: React.MouseEvent<HTMLInputElement>) => void,
    onContextMenu?: (e: React.MouseEvent<HTMLInputElement>) => void,
    onMouseDown?: (e: React.MouseEvent<HTMLInputElement>) => void,
    onMouseUp?: (e: React.MouseEvent<HTMLInputElement>) => void,
    onMouseEnter?: (e: React.MouseEvent<HTMLInputElement>) => void,
    onMouseLeave?: (e: React.MouseEvent<HTMLInputElement>) => void,
    onMouseOver?: (e: React.MouseEvent<HTMLInputElement>) => void,
    onMouseOut?: (e: React.MouseEvent<HTMLInputElement>) => void,
    onMouseMove?: (e: React.MouseEvent<HTMLInputElement>) => void,
    onDragStart?: (e: React.DragEvent<HTMLInputElement>) => void,
    onDragEnd?: (e: React.DragEvent<HTMLInputElement>) => void,
    onDragEnter?: (e: React.DragEvent<HTMLInputElement>) => void,
}

function Base({
    name,
    id,
    icon,
    error,
    required,
    toggle = false,
    type,
    value,
    autoComplete,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onClick,
    onDoubleClick,
    onContextMenu,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
}: Props) {

    const inputRef = useRef(null)

    const [show, setShow] = useState(false)

    return (
        <div className={'flex items-center bg-white dark:bg-gray-600 dark:text-white rounded-sm shadow-sm focus-within:ring-2 transition-colors text-gray-600 border border-gray-300 hover:bg-gray-200 dark:focus-within:text-gray-400 dark:hover:text-white hover:text-black dark:hover:bg-gray-400 focus-within:text-black' + (error && ' text-red-500 border-red-500 hover:text-red-500')}>
            {icon && <i onClick={()=>inputRef.current.focus()} className={icon+" p-2 pl-3 cursor-text"}></i>}
            <input 
                ref={inputRef} 
                className={'w-full bg-transparent focus:outline-none text-black dark:text-white' + (icon ? " p-2 pl-0 " : " p-2 px-3 ") + (error && ' text-red-500') + (toggle && ' pr-0')} 
                id={id} 
                name={name} 
                required={required}
                type={show ? 'text' : type}
                value={value.toString()}
                autoComplete={autoComplete}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onKeyPress={onKeyPress}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
                onContextMenu={onContextMenu}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseOver={onMouseOver}
            />
            {toggle && (
                show ? <i tabIndex={0} onClick={()=>setShow(!show)} className={HidePasswordIcon + " cursor-pointer p-3"}></i>
                    :  <i tabIndex={0} onClick={()=>setShow(!show)} className={ShowPasswordIcon + " p-3 cursor-pointer"}></i>

            )}
        </div>
    )
}

export default Base
